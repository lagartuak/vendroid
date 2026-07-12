import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { nombre, empresa, email, telefono, maquina, mensaje } = data;

  if (!nombre || !email) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ error: 'Envío no configurado' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `VENDROID <${process.env.SMTP_USER}>`,
      to: 'info@vendroid.es',
      replyTo: email,
      subject: `Nueva consulta VENDROID de ${nombre}`,
      text: `Nombre: ${nombre}
Empresa: ${empresa || '-'}
Email: ${email}
Teléfono: ${telefono || '-'}
Fabricante: ${maquina || '-'}

Mensaje:
${mensaje || '-'}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('SMTP send error:', e);
    return NextResponse.json({ error: 'Error enviando el email' }, { status: 500 });
  }
}
