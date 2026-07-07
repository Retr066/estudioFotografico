import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { whatsappLink } from '@/lib/whatsapp';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.5V3.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.7H8v3.2h2.5V21h3Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17l-1.1 4.5 4.6-1.2A9.5 9.5 0 1 0 12 2.5Zm0 1.8a7.7 7.7 0 0 1 6.5 11.8l-.2.4.6 2.4-2.4-.6-.4.2A7.7 7.7 0 1 1 12 4.3Zm-3.1 3.9c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.4-.3-.1-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4Z" />
    </svg>
  );
}

const usefulLinks = [
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/promociones', label: 'Promociones' },
  { href: '/contacto', label: 'Contáctanos' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-bone">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl">Estudio Fotográfico Pérez</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/70">
              Microempresa dedicada al rubro fotográfico. Transmitimos, a través de la fotografía, la
              historia que deseas contar y guardamos ese momento valioso para ti.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/foto.estudioperez"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-bronze hover:text-bronze"
              >
                <FacebookIcon />
              </a>
              <a
                href={whatsappLink('Hola, quisiera más información sobre sus servicios.')}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-bronze hover:text-bronze"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] text-bone/50 uppercase">Enlaces útiles</h3>
            <ul className="mt-5 space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-bone/80 transition-colors hover:text-bronze">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] text-bone/50 uppercase">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm text-bone/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" />
                AV. Los Quechuas Nº 1142, Salamanca, Ate
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-bronze" />
                foto.estudioperez2025@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-bronze" />+ 51 924 606 740
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-bone/10 py-5 text-center text-xs text-bone/50">
        © {new Date().getFullYear()} Estudio Fotográfico Pérez — Todos los derechos reservados · Diseñado por{' '}
        <a
          href="https://www.linkedin.com/in/jherson-lopez-a70584225/"
          target="_blank"
          rel="noreferrer"
          className="text-bone/70 hover:text-bronze"
        >
          Retr0
        </a>
      </div>
    </footer>
  );
}
