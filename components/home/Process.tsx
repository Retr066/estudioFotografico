import { BlurFade } from '@/components/ui/blur-fade';

const steps = [
  {
    number: '01',
    title: 'Consulta y reserva',
    description: 'Cuéntanos qué necesitas —sesión, impresión, cuadro o restauración— y agenda tu cita por WhatsApp.',
  },
  {
    number: '02',
    title: 'Sesión en estudio',
    description: 'Te recibimos en nuestro estudio propio, con la duración y el paquete que elijas para tu sesión.',
  },
  {
    number: '03',
    title: 'Selección y retoque',
    description: 'Eliges tus tomas favoritas y aplicamos retoque fotográfico profesional a cada una.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Recibes tus fotos en impresión, cuadro o formato digital, listas para conservar.',
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <BlurFade inView className="mb-16 max-w-xl">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Cómo trabajamos</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Nuestro proceso</h2>
      </BlurFade>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <BlurFade key={step.number} inView delay={index * 0.1} className="relative">
            <span className="font-display text-6xl text-bronze/30 italic">{step.number}</span>
            <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{step.description}</p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
