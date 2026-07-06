import Image from 'next/image';
import Link from 'next/link';

import { Marquee } from '@/components/ui/marquee';
import { whatsappLink } from '@/lib/whatsapp';

const strip = [
  { src: '/cuadro1.jpg', alt: 'Cuadro fotográfico' },
  { src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223000/estudio_fotografico_perez/foto-sesion_qupttf.jpg', alt: 'Sesión fotográfica' },
  { src: '/diseno_grafico.jpeg', alt: 'Diseño gráfico' },
  { src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223008/estudio_fotografico_perez/impresiones_u2xn6m.jpg', alt: 'Impresiones' },
  { src: '/cuadro3.jpg', alt: 'Cuadro fotográfico de niña' },
  { src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912179/estudio_fotografico_perez/photographer_tudiff.jpg', alt: 'Fotógrafo en sesión' },
];

export default function SocialStrip() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center lg:px-10">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Síguenos</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Nuestro día a día</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Más fotos en{' '}
          <Link href="https://www.facebook.com/foto.estudioperez" target="_blank" rel="noreferrer" className="text-bronze hover:underline">
            Facebook
          </Link>{' '}
          o escríbenos por{' '}
          <Link
            href={whatsappLink('Hola, quisiera más información sobre sus servicios.')}
            target="_blank"
            rel="noreferrer"
            className="text-bronze hover:underline"
          >
            WhatsApp
          </Link>
          .
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:35s]">
        {strip.map((photo) => (
          <div key={photo.src} className="relative h-56 w-72 shrink-0 overflow-hidden rounded-sm">
            <Image src={photo.src} alt={photo.alt} fill sizes="288px" className="object-cover" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
