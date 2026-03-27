import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Log contact request
    console.log("Contact Form Submission:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in contact API:", err);
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
