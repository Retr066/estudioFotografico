import { Quote } from 'lucide-react';

import { BlurFade } from '@/components/ui/blur-fade';

const testimonials = [
  {
    role: 'Sesión familiar',
    quote:
      'Nos hicieron sentir muy cómodos durante toda la sesión y el resultado fue exactamente el recuerdo que queríamos conservar.',
  },
  {
    role: 'Restauración fotográfica',
    quote:
      'Recuperaron una fotografía familiar que creíamos perdida. El cuidado en cada detalle se nota en el resultado final.',
  },
  {
    role: 'Cuadro personalizado',
    quote:
      'La calidad del cuadro y el marco superó lo que esperábamos. Ahora es una de las piezas favoritas de la casa.',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <BlurFade inView className="mb-14 max-w-xl">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Experiencias</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Lo que buscan quienes nos visitan</h2>
      </BlurFade>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <BlurFade
            key={testimonial.role}
            inView
            delay={index * 0.1}
            className="rounded-sm border border-border bg-card p-8"
          >
            <Quote className="size-6 text-bronze" strokeWidth={1.5} />
            <p className="mt-5 leading-relaxed text-foreground/80 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">{testimonial.role}</p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
