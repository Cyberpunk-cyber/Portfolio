import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * To actually deliver email, set these environment variables:
 *   RESEND_API_KEY  – a Resend API key (https://resend.com)
 *   CONTACT_EMAIL   – the address to receive messages at
 *
 * Without them the endpoint accepts the message and returns 200 (dev mode),
 * so the form never breaks during local development or preview deploys.
 */
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;

    if (apiKey && to) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [to],
          subject: `Portfolio message from ${name}`,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          `,
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Delivery failed" },
          { status: 502 }
        );
      }
    } else {
      // Dev mode: no provider configured — log so it's visible in dev.
      console.info("[contact] (dev) message received:", { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
