import { Cormorant_Garamond, Inter } from 'next/font/google';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Toaster } from '@/components/ui/sonner';
import SmoothScrollProvider from './providers/SmoothScrollProvider';
import './globals.css';
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = "https://fotografiaperez.com";
const siteName = "Estudio Fotográfico Pérez";
const defaultDescription =
  "Sesiones fotográficas, impresiones, cuadros y restauración de fotos en Ate, Lima. Un estudio propio para contar y conservar tu historia.";
const ogImage = "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Fotografía profesional en Ate, Lima`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  authors: [
    {
      name: "Estudio Fotográfico Perez",
      url: siteUrl,
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
    "Estudio Fotográfico Ate",
    "Fotografía Lima",
    "Restauración de fotos",
    "Impresiones fotográficas",
    "Cuadros fotográficos",
  ],
  referrer: "origin-when-cross-origin",
  classification: "Fotografía",
  creator: "Estudio Fotográfico Perez",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName,
    title: `${siteName} | Fotografía profesional en Ate, Lima`,
    description: defaultDescription,
    images: [{ url: ogImage, width: 1200, height: 900, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Fotografía profesional en Ate, Lima`,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "BKqZAPTXlDi1WxFvebroZSUH9P6ml_1Zla3EQf_M24w",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  image: ogImage,
  url: siteUrl,
  telephone: "+51924606740",
  email: "foto_estudioperez@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "AV. Los Quechuas Nº 1142, Salamanca",
    addressLocality: "Ate",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  sameAs: ["https://www.facebook.com/foto.estudioperez"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <Toaster position="top-right" />
      </body>
      <GoogleTagManager gtmId="GTM-NFJHMS53" />
    </html>
  );
}
