import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullName, email, phone, courseName, message } = await req.json();

  // Log enrollment request (email integration can be added here)
  console.log("Enrollment Request:", { fullName, email, phone, courseName, message });

  return NextResponse.json({ success: true });
}