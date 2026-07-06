import Image from 'next/image';
import Link from 'next/link';

import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = pageMetadata({
  title: 'Promociones',
  description:
    'Descuentos y promociones vigentes del Estudio Fotográfico Pérez en sesiones, impresiones y cuadros fotográficos. Consulta condiciones por WhatsApp.',
  path: '/promociones',
});

const steps = [
  { number: '01', title: 'Descarga la imagen', description: 'Guarda la imagen promocional en tu celular o imprímela.' },
  { number: '02', title: 'Visita el local', description: 'Acércate a nuestro estudio en Salamanca, Ate, cuando lo necesites.' },
  { number: '03', title: 'Obtén tu descuento', description: 'Muestra la imagen y recibe un descuento en tu compra o servicio.' },
];

export default function Promociones() {
  return (
    <div>
      <div className="relative flex h-[60vh] min-h-[420px] items-end">
        <Image
          src="/promociones.jpeg"
          alt="Promoción del Estudio Fotográfico Pérez"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
        <div className="relative px-6 pb-16 lg:px-10">
          <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Beneficios</p>
          <h1 className="mt-3 font-display text-4xl text-bone sm:text-6xl">Promociones</h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <BlurFade inView className="text-center">
          <p className="mx-auto max-w-xl leading-relaxed text-foreground/80">
            Presenta esta imagen para obtener un descuento en tu próxima compra o servicio.
            Válido para compras y servicios seleccionados: consulta las condiciones vigentes por
            WhatsApp o en nuestras redes sociales.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((step, index) => (
            <BlurFade key={step.number} inView delay={index * 0.1}>
              <span className="font-display text-5xl text-bronze/30 italic">{step.number}</span>
              <h2 className="mt-4 font-display text-xl">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.description}</p>
            </BlurFade>
          ))}
        </div>

        <BlurFade inView delay={0.2} className="mt-16 text-center">
          <Link
            href={whatsappLink('Hola, vi la promoción del Estudio Fotográfico Pérez y quisiera más información.')}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-bronze px-8 py-3 text-sm tracking-wide text-ink transition-transform hover:scale-105"
          >
            Escríbenos por WhatsApp
          </Link>
        </BlurFade>
      </div>
    </div>
  );
}
