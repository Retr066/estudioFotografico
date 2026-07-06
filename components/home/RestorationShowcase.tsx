import Link from 'next/link';

import BeforeAfter from '@/components/common/BeforeAfter';
import { BlurFade } from '@/components/ui/blur-fade';

export default function RestorationShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <BlurFade inView className="lg:col-span-5">
          <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Diseño gráfico</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Segunda vida a tus recuerdos</h2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Restauramos fotografías antiguas, dañadas o desvanecidas: corrección de color,
            eliminación de rasgaduras y manchas, y recuperación de detalles que el tiempo se llevó.
            Arrastra el control para ver el antes y el después.
          </p>
          <Link
            href="/servicios/diseno-grafico"
            className="mt-8 inline-block rounded-full border border-foreground/20 px-8 py-3 text-sm tracking-wide transition-colors hover:border-bronze hover:text-bronze"
          >
            Conoce el servicio
          </Link>
        </BlurFade>

        <BlurFade inView delay={0.1} className="lg:col-span-7">
          <BeforeAfter before="/foto_restauracion.jpg" after="/foto_restauracion.jpg" alt="Restauración fotográfica" />
        </BlurFade>
      </div>
    </section>
  );
}
