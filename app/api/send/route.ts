import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/global/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: 'Matesz Nadolny <nadolny.dev@mnadolny.com>',
      to: ['nadolny.dev@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ name, email, message }) as React.ReactElement
    });

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
