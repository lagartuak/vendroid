'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="empresa">Empresa (opcional)</label>
          <input id="empresa" name="empresa" type="text" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="maquina">Fabricante de tu máquina</label>
        <select id="maquina" name="maquina" defaultValue="">
          <option value="" disabled>
            Selecciona...
          </option>
          <option value="GMV">GMV</option>
          <option value="Azkoyen">Azkoyen</option>
          <option value="Jofemar">Jofemar</option>
          <option value="Otro">Otro / No lo sé</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={4} />
      </div>
      <button type="submit" className="submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'ENVIANDO...' : 'SOLICITAR INFORMACIÓN'}
      </button>
      {status === 'ok' && (
        <p style={{ color: 'var(--green-lime)', fontSize: 13, textAlign: 'center' }}>
          ¡Gracias! Te contactaremos pronto.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ff6644', fontSize: 13, textAlign: 'center' }}>
          Hubo un error enviando el formulario. Escríbenos directamente a{' '}
          <a href="mailto:info@vendroid.es" style={{ color: '#ff6644' }}>
            info@vendroid.es
          </a>
          .
        </p>
      )}
    </form>
  );
}
