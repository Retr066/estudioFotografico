import { Footer, Header } from '@/components';
import './globals.css';
import 'bootswatch/dist/lux/bootstrap.css';
import type { Metadata } from "next";
import 'sweetalert2/src/sweetalert2.scss';
import ClientBoostrapProvider from './providers/ClientBoostrapProvider';




export const metadata: Metadata = {
  title: "Estudio Perez",
  description: "Estudio Fotográfico Perez",
  authors: [
    {
      name: "Estudio Fotográfico Perez",
      url: "https://estudiofotograficoperez.com",
    },
    {
      name: "Jherson Lopez Perez",
      url: "https://www.linkedin.com/in/jherson-lopez-perez/"
    }
  ],
  category: "Estudio Fotográfico",
  keywords: [
    "Estudio Fotográfico",
    "Fotografía",
    "Fotografía Profesional",
    "Fotografía de Estudio",
    "Fotografía de Retrato",
    "Fotografía de Producto",
    "Fotografía de Eventos",
    "Fotografía de Bodas",
    "Fotografía de Quinceañeras",
    "Fotografía de Comuniones",
    "Fotografía de Bautizos",
    "Fotografía de Mascotas",
    "Fotografía de Familia",
  ],
  referrer: "origin-when-cross-origin",
  classification: "Fotografía",
  creator: "Estudio Fotográfico Perez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>Estudio Fotográfico Perez</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ClientBoostrapProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientBoostrapProvider>

      </body>
    </html>
  );
}
