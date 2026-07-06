import { BlurFade } from '@/components/ui/blur-fade';

const highlights = [
  { value: '4', label: 'Servicios especializados bajo un mismo techo' },
  { value: '1', label: 'Estudio propio en Salamanca, Ate' },
  { value: '100%', label: 'Retoque fotográfico incluido en cada sesión' },
  { value: '360°', label: 'Del recuerdo digital a la impresión y el cuadro' },
];

export default function Highlights() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4 lg:px-10">
        {highlights.map((item, index) => (
          <BlurFade key={item.label} inView delay={index * 0.08} className="text-center sm:text-left">
            <p className="font-display text-4xl text-bronze sm:text-5xl">{item.value}</p>
            <p className="mt-2 text-sm text-foreground/70">{item.label}</p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
