import { Eraser, ImageDown, Wand2 } from 'lucide-react';

import BeforeAfter from '@/components/common/BeforeAfter';
import ServiceCta from '@/components/common/ServiceCta';
import ServiceHero from '@/components/common/ServiceHero';
import FeatureGrid from '@/components/common/FeatureGrid';
import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Diseño Gráfico y Restauración',
  description:
    'Restauración de fotografías antiguas, retoque, fotomontaje y digitalización de imágenes. Dale una segunda vida a tus recuerdos más valiosos.',
  path: '/servicios/diseno-grafico',
});

const features = [
  {
    icon: Wand2,
    title: 'Restauración',
    description: 'Corrección de color, rasgaduras y manchas en fotografías antiguas o dañadas.',
  },
  {
    icon: Eraser,
    title: 'Retoque y fotomontaje',
    description: 'Eliminación de elementos, colorización y composición de nuevas imágenes.',
  },
  {
    icon: ImageDown,
    title: 'Digitalización',
    description: 'Digitalización de fotos físicas a formato digital y ampliación de imágenes.',
  },
];

export default function DisenoGrafico() {
  return (
    <div>
      <ServiceHero
        src="/diseno.jpg"
        alt="Diseño gráfico"
        quote="La fotografía sólo puede representar el presente. Una vez fotografiados, el sujeto se convierte en parte del pasado."
        author="Berenice Abbott"
      />

      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <BlurFade inView>
          <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Servicio</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Diseño gráfico</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-foreground/80">
            Permítenos restaurar tu fotografía y traer al presente momentos inolvidables. Las
            imágenes antiguas se desvanecen y se degradan con el tiempo: se agrietan, se rasgan y
            se ensucian. Somos especialistas en restauración.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.1} className="mt-14 text-left">
          <BeforeAfter before="/foto_restauracion.jpg" after="/foto_restauracion.jpg" alt="Restauración fotográfica" />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Arrastra para comparar el antes y el después de una restauración.
          </p>
        </BlurFade>

        <div className="mt-20 text-left">
          <FeatureGrid features={features} />
        </div>

        <ServiceCta text="¿Tienes una fotografía que merece una segunda vida?" />
      </div>
    </div>
  );
}
