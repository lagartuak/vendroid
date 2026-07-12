import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { nombre, empresa, email, telefono, maquina, mensaje } = data;

  if (!nombre || !email) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Envío no configurado' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'VENDROID <noreply@send.vendroid.es>',
      to: 'info@vendroid.es',
      reply_to: email,
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
    return NextResponse.json({ error: 'Error enviando el email' }, { status: 500 });
  }
}
