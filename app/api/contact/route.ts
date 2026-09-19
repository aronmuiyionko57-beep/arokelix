import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, message } = data;

    await resend.emails.send({
      from: "AROKELIX Website <onboarding@resend.dev>",
      to: "aronmuiyionko57@gmail.com",
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}