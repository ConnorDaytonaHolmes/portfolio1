"use server";

import EmailTemplate from '../../components/email/EmailTemplate';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';


// export async function POST(req: NextRequest) {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   try {
//     const { name, email, phone, message } = await req.json();
//     return NextResponse.json({ name, email, phone, message }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }


export async function POST(req: NextRequest) {
  try {
    if(!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Resend API key not set" }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: 'Connor Holmes Software <outreach@mail.connorholmes.software>',
      to: ['connorholmes.419@gmail.com'],
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, email, phone, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}