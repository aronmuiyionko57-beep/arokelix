import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, service, budget, message } = data;

    await resend.emails.send({
      from: "AROKELIX Website <onboarding@resend.dev>",
      to: "aronmuiyionko57@gmail.com",
      subject: `New project enquiry from ${name} — ${service || "General"}`,
      text: `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\nPhone/WhatsApp: ${phone || "—"}\nService needed: ${service || "—"}\nBudget: ${budget || "—"}\n\nProject description:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}