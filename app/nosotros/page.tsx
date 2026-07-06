import Image from 'next/image';
import { Aperture, Camera } from 'lucide-react';

import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Nosotros',
  description:
    'Conoce al Estudio Fotográfico Pérez: una microempresa en Ate, Lima dedicada a la fotografía, con un equipo enfocado en calidad, creatividad y atención personalizada.',
  path: '/nosotros',
  image:
    'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640225721/estudio_fotografico_perez/nosotros_ziozwj.jpg',
});

const behindTheScenes = [
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912179/estudio_fotografico_perez/photographer_tudiff.jpg',
    alt: 'Fotógrafo del estudio en plena sesión',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912070/estudio_fotografico_perez/photo-studio_pimf2c.jpg',
    alt: 'Foto estudio Pérez',
  },
];

export default function Nosotros() {
  return (
    <div>
      <div className="relative flex h-[60vh] min-h-[420px] items-end">
        <Image
          src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640225721/estudio_fotografico_perez/nosotros_ziozwj.jpg"
          alt="Fotógrafo del Estudio Fotográfico Pérez trabajando"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
        <div className="relative px-6 pb-16 lg:px-10">
          <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Nosotros</p>
          <h1 className="mt-3 font-display text-4xl text-bone sm:text-6xl">Detrás de cada fotografía</h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <BlurFade inView>
          <p className="leading-relaxed text-foreground/80">
            Somos una microempresa dedicada al rubro fotográfico. Acompañamos a cada cliente con
            soluciones e ideas creativas para su proyecto, cuidando cada detalle del proceso: desde
            la sesión hasta el recuerdo final que se lleva a casa.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-10 text-left sm:grid-cols-2">
          <BlurFade inView delay={0.1}>
            <Aperture className="size-8 text-bronze" strokeWidth={1.25} />
            <h2 className="mt-4 font-display text-2xl">Misión</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Brindar un servicio completo de calidad, profesionalismo y creatividad para
              nuestros clientes.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.18}>
            <Camera className="size-8 text-bronze" strokeWidth={1.25} />
            <h2 className="mt-4 font-display text-2xl">Visión</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Convertirnos en una empresa consolidada dentro del ámbito de la fotografía.
            </p>
          </BlurFade>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <BlurFade inView className="mb-10 text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Detrás de cámaras</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">El equipo en acción</h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {behindTheScenes.map((photo, index) => (
            <BlurFade
              key={photo.src}
              inView
              delay={index * 0.1}
              className="relative aspect-4/3 overflow-hidden rounded-sm"
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}
