import Image from 'next/image';

import { BlurFade } from '@/components/ui/blur-fade';

export default function Manifesto() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
      <BlurFade inView className="lg:col-span-7 lg:col-start-1">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Nuestra esencia</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
          No hacemos fotos. Guardamos historias.
        </h2>
        <p className="mt-8 max-w-lg leading-relaxed text-foreground/80">
          Somos una microempresa dedicada al rubro fotográfico: brindamos soluciones e ideas
          creativas para tu proyecto. Nos orientamos a un solo objetivo, transmitir a través de la
          fotografía la historia que deseas contar, y guardar ese momento valioso para ti — en un
          estudio propio, con impresión, cuadros y restauración bajo un mismo techo.
        </p>
      </BlurFade>

      <BlurFade
        inView
        delay={0.15}
        className="relative aspect-3/4 overflow-hidden rounded-sm lg:col-span-4 lg:col-start-9"
      >
        <Image
          src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912179/estudio_fotografico_perez/photographer_tudiff.jpg"
          alt="Fotógrafo del Estudio Fotográfico Pérez trabajando"
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover"
        />
      </BlurFade>
    </section>
  );
}
