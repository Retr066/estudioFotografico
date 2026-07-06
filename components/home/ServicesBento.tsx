import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { BlurFade } from '@/components/ui/blur-fade';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 1,
    title: 'Sesión Fotográfica',
    img: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223000/estudio_fotografico_perez/foto-sesion_qupttf.jpg',
    href: '/servicios/sesion-fotografico',
    alt: 'Estudio fotográfico',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    id: 2,
    title: 'Impresiones',
    img: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223008/estudio_fotografico_perez/impresiones_u2xn6m.jpg',
    href: '/servicios/impresiones',
    alt: 'Impresiones fotográficas',
    span: 'lg:col-span-5',
  },
  {
    id: 3,
    title: 'Cuadros',
    img: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223004/estudio_fotografico_perez/cuadros_s8rdbv.jpg',
    href: '/servicios/cuadros',
    alt: 'Venta de cuadros fotográficos',
    span: 'lg:col-span-2',
  },
  {
    id: 4,
    title: 'Diseño Gráfico',
    img: '/diseno_grafico.jpeg',
    href: '/servicios/diseno-grafico',
    alt: 'Diseño gráfico',
    span: 'lg:col-span-3',
  },
];

export default function ServicesBento() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-10">
      <BlurFade inView className="mb-14 max-w-xl">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Lo que ofrecemos</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Cuatro servicios, un mismo estudio</h2>
      </BlurFade>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:auto-rows-[13rem]">
        {services.map((service, index) => (
          <BlurFade key={service.id} inView delay={index * 0.08} className={cn('h-full', service.span)}>
            <Link
              href={service.href}
              className="group relative block h-full min-h-56 w-full overflow-hidden rounded-sm bg-secondary lg:min-h-0"
            >
              <Image
                src={service.img}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/10 to-transparent transition-opacity duration-500 group-hover:from-ink-950/95" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                <h3 className="font-display text-2xl text-bone italic">{service.title}</h3>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-bone/40 text-bone transition-all duration-500 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
