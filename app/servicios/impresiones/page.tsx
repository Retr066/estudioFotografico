import Image from 'next/image';

import ServiceCta from '@/components/common/ServiceCta';
import ServiceHero from '@/components/common/ServiceHero';
import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Impresiones Fotográficas',
  description:
    'Impresión fotográfica de alta calidad en distintos tamaños, desde 10x15 hasta 60x90 cm. Consulta precios y tiempos de entrega en el Estudio Fotográfico Pérez.',
  path: '/servicios/impresiones',
  image:
    'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640294572/estudio_fotografico_perez/impresiones_baner_nv2z0n.jpg',
});

const sizes = [
  { size: '10x15', price: 'S./0.50' },
  { size: '13x18', price: 'S./0.70' },
  { size: '15x20', price: 'S./1.00' },
  { size: '20x25', price: 'S./4.00' },
  { size: '20x30', price: 'S./4.00' },
  { size: '30x40', price: 'S./8.00' },
  { size: '30x60', price: 'S./15.00' },
  { size: '40x50', price: 'S./20.00' },
  { size: '40x60', price: 'S./30.00' },
  { size: '60x90', price: 'S./50.00' },
];

export default function Impresiones() {
  return (
    <div>
      <ServiceHero
        src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640294572/estudio_fotografico_perez/impresiones_baner_nv2z0n.jpg"
        alt="Conjunto de fotos impresas"
        quote="La fotografía es, en un mismo instante, el reconocimiento simultáneo de la significación de un hecho y de la organización rigurosa de las formas percibidas visualmente que expresan y significan ese hecho."
        author="Henri Cartier-Bresson"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <BlurFade inView className="relative aspect-4/5 w-full overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640230118/estudio_fotografico_perez/pagina_impresiones_ywyuml.jpg"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              alt="Tinta de las impresiones de fotografías"
            />
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Servicio</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Impresiones</h1>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Somos una microempresa dedicada al rubro fotográfico, nos orientamos a brindar
              soluciones e ideas creativas para tus proyectos. Nuestro objetivo es transmitir, a
              través de la fotografía, la historia que deseas contar o plasmar en un recuerdo.
            </p>
          </BlurFade>
        </div>

        <BlurFade inView className="mt-24 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Tamaños y precios</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Precios por unidad, incluyen IGV y no incluyen el marco. Son aproximaciones del mercado
            actual: consulta los precios vigentes por WhatsApp.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-3 lg:grid-cols-5">
            {sizes.map((item) => (
              <div key={item.size} className="rounded-sm border border-border bg-card px-5 py-6 text-center">
                <p className="text-sm text-muted-foreground">{item.size}</p>
                <p className="mt-2 font-display text-2xl text-bronze">{item.price}</p>
              </div>
            ))}
          </div>
        </BlurFade>

        <ServiceCta text="¿Necesitas imprimir tus fotos favoritas?" />
      </div>
    </div>
  );
}
