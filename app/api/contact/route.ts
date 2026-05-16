import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body || {};

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Replace with real email/send logic (SendGrid, Mailgun, server action, etc.)
    // For now just return success so the frontend can be wired up.
    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
