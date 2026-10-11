import { NextResponse } from "next/server";
import {
  buildContactEmail,
  isRateLimited,
  parseSubmission,
} from "@/lib/contact";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/**
 * Resend's shared test sender. It only delivers to the address that owns the
 * API key, so set CONTACT_FROM to a verified domain sender before going live
 * to arbitrary recipients.
 */
const DEFAULT_CONTACT_FROM = "Portfolio Contact <onboarding@resend.dev>";

/**
 * Contact form endpoint — delivers submissions to the owner's inbox via Resend.
 *
 * Environment variables:
 *   RESEND_API_KEY  – API key from https://resend.com/api-keys
 *   CONTACT_EMAIL   – the inbox that should receive submissions
 *   CONTACT_FROM    – optional sender. Defaults to Resend's shared test sender,
 *                     which may only send to the address that owns the API key.
 *                     Set this to e.g. "Portfolio <hello@yourdomain.com>" once
 *                     your own domain is verified in Resend.
 *
 * With no API key configured the endpoint accepts the message and logs it, so
 * local development and preview deploys never break.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = parseSubmission(payload);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { error: "Too many messages from this address. Please try again later." },
      { status: 429 }
    );
  }

  // `.trim()` plus `||` rather than `??`: hosting dashboards and copied .env
  // files routinely define a variable as an empty string, which is truthy for
  // `??` and would otherwise send a blank sender or key to the provider.
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();
  const from = process.env.CONTACT_FROM?.trim() || DEFAULT_CONTACT_FROM;

  const { subject, html, text } = buildContactEmail(parsed.data);

  if (!apiKey || !to) {
    console.info("[contact] (no provider configured) message received:", parsed.data);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: parsed.data.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      // Surface the provider's reason in the logs — a bad key, an unverified
      // domain and a rejected recipient all look identical from the client.
      const detail = await response.text().catch(() => "");
      console.error(
        `[contact] Resend rejected the message (${response.status}) from=${from} to=${to}:`,
        detail.slice(0, 500)
      );
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] delivery request failed:", error);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
}
