import Image from 'next/image';
import { Clock, ShirtIcon, Sparkles } from 'lucide-react';

import FeatureGrid from '@/components/common/FeatureGrid';
import ServiceCta from '@/components/common/ServiceCta';
import ServiceHero from '@/components/common/ServiceHero';
import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Sesión Fotográfica',
  description:
    'Sesiones fotográficas profesionales en nuestro estudio de Ate, Lima: retratos, familia, bebés, pareja y productos, con retoque incluido en cada foto.',
  path: '/servicios/sesion-fotografico',
  image:
    'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912070/estudio_fotografico_perez/photo-studio_pimf2c.jpg',
});

const features = [
  {
    icon: Clock,
    title: 'Duración flexible',
    description: 'La duración de la sesión depende del paquete que elijas, ajustado a tu ocasión.',
  },
  {
    icon: ShirtIcon,
    title: 'Cambios de vestuario',
    description: 'Puedes llevar hasta dos mudas de ropa para variar el estilo de tus fotos.',
  },
  {
    icon: Sparkles,
    title: 'Retoque incluido',
    description: 'Todas las fotos incluyen retoque fotográfico profesional antes de la entrega.',
  },
];

export default function SesionFotografico() {
  return (
    <div>
      <ServiceHero
        src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912070/estudio_fotografico_perez/photo-studio_pimf2c.jpg"
        alt="Estudio Fotográfico Pérez"
        quote="No hay reglas para las buenas fotografías, son solo buenas fotografías."
        author="Ansel Adams"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <BlurFade inView className="relative aspect-4/5 w-full overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912179/estudio_fotografico_perez/photographer_tudiff.jpg"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              alt="Fotógrafo tomando fotos en el estudio"
            />
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Servicio</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Foto estudio</h1>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Contamos con un estudio propio para recrear las fotografías que desees. Puedes elegir
              entre sesiones para bebés, niños, pareja, maternidad, familia, casting y productos.
            </p>
          </BlurFade>
        </div>

        <div className="mt-20">
          <FeatureGrid features={features} />
        </div>

        <ServiceCta text="¿Listo para tu próxima sesión fotográfica?" />
      </div>
    </div>
  );
}
