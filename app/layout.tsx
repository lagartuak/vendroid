import './globals.css';

export const metadata = {
  title: 'VENDROID – Nueva Vida para tu Máquina de Tabaco | NVM',
  description:
    'VENDROID sustituye la electrónica obsoleta de tu máquina expendedora de tabaco por una plataforma Android moderna. Mismo mueble, misma mecánica, tecnología de hoy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
