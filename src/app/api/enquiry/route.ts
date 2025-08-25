import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, lastName, phone, courseName } = await req.json();

  // Example: send email via an email service (SendGrid, Mailgun, etc.)
  // Here we'll just log for now
  console.log({ firstName, lastName, phone, courseName });

  return NextResponse.json({ success: true });
}