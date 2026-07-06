'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

import { BlurFade } from '@/components/ui/blur-fade';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const photos = [
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg',
    alt: 'Interior del estudio',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223000/estudio_fotografico_perez/foto-sesion_qupttf.jpg',
    alt: 'Sesión fotográfica',
    span: '',
  },
  {
    src: '/cuadro1.jpg',
    alt: 'Cuadro fotográfico exhibido',
    span: '',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223008/estudio_fotografico_perez/impresiones_u2xn6m.jpg',
    alt: 'Impresiones fotográficas',
    span: 'sm:row-span-2',
  },
  {
    src: '/cuadro2.jpg',
    alt: 'Detalle de marco fotográfico',
    span: '',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640230118/estudio_fotografico_perez/pagina_impresiones_ywyuml.jpg',
    alt: 'Tinta de impresión fotográfica',
    span: '',
  },
  {
    src: '/cuadro3.jpg',
    alt: 'Cuadro fotográfico de niña',
    span: 'sm:col-span-2',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912179/estudio_fotografico_perez/photographer_tudiff.jpg',
    alt: 'Fotógrafo en sesión',
    span: '',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223004/estudio_fotografico_perez/cuadros_s8rdbv.jpg',
    alt: 'Venta de cuadros fotográficos',
    span: '',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640303365/estudio_fotografico_perez/ampliaciones_mi5myb.jpg',
    alt: 'Ampliación fotográfica',
    span: 'sm:row-span-2',
  },
  {
    src: '/diseno.jpg',
    alt: 'Diseño gráfico y restauración',
    span: '',
  },
  {
    src: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912070/estudio_fotografico_perez/photo-studio_pimf2c.jpg',
    alt: 'Foto estudio Pérez',
    span: 'sm:col-span-2',
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  const showRelative = (delta: number) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + delta + photos.length) % photos.length;
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <BlurFade inView className="mb-14 max-w-xl">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Portafolio</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Galería del estudio</h2>
      </BlurFade>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[11rem]">
        {photos.map((photo, index) => (
          <BlurFade key={photo.src + index} inView delay={(index % 6) * 0.06} className={cn('h-full', photo.span)}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block h-full min-h-40 w-full overflow-hidden rounded-sm sm:min-h-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/30">
                <Expand className="size-5 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </button>
          </BlurFade>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none ring-0" showCloseButton={false}>
          <DialogTitle className="sr-only">{openIndex !== null ? photos[openIndex].alt : 'Fotografía'}</DialogTitle>
          {openIndex !== null && (
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-ink-950">
              <Image
                src={photos[openIndex].src}
                alt={photos[openIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => showRelative(-1)}
                aria-label="Foto anterior"
                className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-bone/90 text-ink"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => showRelative(1)}
                aria-label="Foto siguiente"
                className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-bone/90 text-ink"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
