import Image from 'next/image';
import Link from 'next/link';

import { BlurFade } from '@/components/ui/blur-fade';
import { whatsappLink } from '@/lib/whatsapp';

export default function CtaBanner() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
      <Image
        src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221018/estudio_fotografico_perez/cuadros_v2_wgqzxe.jpg"
        alt="Cuadros y fotografías del Estudio Fotográfico Pérez"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/75" />

      <BlurFade inView className="relative max-w-2xl text-bone">
        <h2 className="font-display text-4xl italic sm:text-5xl">
          Guardemos juntos tu próxima historia
        </h2>
        <p className="mx-auto mt-6 max-w-md text-bone/80">
          Escríbenos y coordinemos tu sesión, impresión, cuadro o restauración fotográfica.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className="rounded-full bg-bronze px-8 py-3 text-sm tracking-wide text-ink transition-transform hover:scale-105"
          >
            Contáctanos
          </Link>
          <Link
            href={whatsappLink('Hola, me gustaría coordinar un servicio con el Estudio Fotográfico Pérez (sesión, impresión, cuadro o restauración).')}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-bone/40 px-8 py-3 text-sm tracking-wide text-bone transition-colors hover:border-bronze hover:text-bronze"
          >
            Escríbenos por WhatsApp
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
