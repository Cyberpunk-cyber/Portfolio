/**
 * Pure helpers for the contact form endpoint.
 *
 * Kept separate from the route handler so the validation, escaping and rate
 * limiting can be reasoned about (and verified) without a running server.
 */

export const CONTACT_LIMITS = {
  name: 80,
  email: 254,
  message: 5000,
} as const;

/** Five submissions per window, per client address. */
export const RATE_LIMIT = {
  max: 5,
  windowMs: 10 * 60 * 1000,
} as const;

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

export type ParseResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; error: string };

/** Escapes the five characters that matter for HTML email bodies. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Collapses a value to a single safe line: strips control characters (which
 * could otherwise inject extra email headers), collapses whitespace and trims.
 */
export function sanitizeSingleLine(value: string): string {
  return value
    .replace(/[\r\n\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Practical email shape check — the provider does the authoritative validation. */
export function isValidEmail(value: string): boolean {
  if (value.length > CONTACT_LIMITS.email) return false;
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(value);
}

/** Validates and normalises an untrusted request body. */
export function parseSubmission(payload: unknown): ParseResult {
  if (typeof payload !== "object" || payload === null) {
    return { ok: false, error: "Invalid request body" };
  }

  const raw = payload as Record<string, unknown>;
  const asString = (value: unknown) => (typeof value === "string" ? value : "");

  const name = sanitizeSingleLine(asString(raw.name));
  const email = sanitizeSingleLine(asString(raw.email)).toLowerCase();
  const message = asString(raw.message).replace(/\r\n/g, "\n").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email and message are all required" };
  }
  if (name.length > CONTACT_LIMITS.name) {
    return { ok: false, error: `Name must be ${CONTACT_LIMITS.name} characters or fewer` };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "That email address does not look valid" };
  }
  if (message.length > CONTACT_LIMITS.message) {
    return { ok: false, error: `Message must be ${CONTACT_LIMITS.message} characters or fewer` };
  }

  return { ok: true, data: { name, email, message } };
}

/** Builds the notification email that lands in the owner's inbox. */
export function buildContactEmail(submission: ContactSubmission) {
  const { name, email, message } = submission;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const html = `<!doctype html>
<html>
  <body style="margin:0;background:#14151c;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#1d1f28;border-radius:20px;padding:28px;color:#eceef4;">
      <p style="margin:0 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#a9a4f2;">
        Portfolio contact form
      </p>
      <h1 style="margin:0 0 20px;font-size:20px;">New message from ${safeName}</h1>
      <p style="margin:0 0 6px;font-size:12px;color:#9aa1b3;">Reply to</p>
      <p style="margin:0 0 20px;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#8fd8c2;">${safeEmail}</a></p>
      <p style="margin:0 0 6px;font-size:12px;color:#9aa1b3;">Message</p>
      <p style="margin:0;font-size:14px;line-height:1.65;">${safeMessage}</p>
    </div>
  </body>
</html>`;

  const text = [
    "Portfolio contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  return {
    subject: `Portfolio message from ${name}`,
    html,
    text,
  };
}

/**
 * Best-effort in-memory rate limiter.
 *
 * Serverless instances are recycled and not shared, so this throttles a single
 * warm instance rather than guaranteeing a global cap — enough to stop a script
 * hammering the form from one address, which is the realistic abuse case here.
 */
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now: number = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 500) {
    for (const [existingKey, timestamps] of hits) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT.windowMs)) {
        hits.delete(existingKey);
      }
    }
  }

  return recent.length > RATE_LIMIT.max;
}
