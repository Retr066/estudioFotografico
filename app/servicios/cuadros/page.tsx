import Image from 'next/image';
import { Frame, Palette, Ruler } from 'lucide-react';

import FeatureGrid from '@/components/common/FeatureGrid';
import ServiceCta from '@/components/common/ServiceCta';
import ServiceHero from '@/components/common/ServiceHero';
import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Cuadros Fotográficos',
  description:
    'Cuadros fotográficos personalizados con papel fotográfico de alta durabilidad y marcos de distintos diseños y tamaños. Decora tu hogar u oficina.',
  path: '/servicios/cuadros',
  image: 'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221018/estudio_fotografico_perez/cuadros_v2_wgqzxe.jpg',
});

const features = [
  {
    icon: Ruler,
    title: 'Alta calidad',
    description: 'Cuadros fotográficos elaborados con papel fotográfico en su interior para mayor durabilidad.',
  },
  {
    icon: Palette,
    title: 'Marcos creativos',
    description: 'Diferentes diseños de marcos para escoger, adaptados a tu espacio y estilo.',
  },
  {
    icon: Frame,
    title: 'Múltiples tamaños',
    description: 'Marcos de distintos tamaños disponibles para cada tipo de recuerdo.',
  },
];

export default function Cuadros() {
  return (
    <div>
      <ServiceHero
        src="/cuadro1.jpg"
        alt="Cuadros fotográficos exhibidos"
        quote="Si tus fotografías no son lo suficientemente buenas, es porque no estás lo suficientemente cerca."
        author="Robert Capa"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <BlurFade inView className="relative aspect-4/5 w-full overflow-hidden rounded-sm">
            <Image
              src="/cuadro3.jpg"
              alt="Cuadro fotográfico de niña"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Servicio</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Cuadros fotográficos</h1>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Los cuadros fotográficos son una excelente opción para decorar tu hogar, oficina o
              negocio. Son una forma de recordar momentos especiales y de inmortalizarlos para
              siempre. Puedes consultar los precios directamente por WhatsApp.
            </p>
          </BlurFade>
        </div>

        <div className="mt-20">
          <FeatureGrid features={features} />
        </div>

        <ServiceCta text="¿Quieres convertir tu foto favorita en un cuadro?" />
      </div>
    </div>
  );
}
