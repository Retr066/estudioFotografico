import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BlurFade } from '@/components/ui/blur-fade';

const faqs = [
  {
    question: '¿Cómo reservo una sesión fotográfica?',
    answer:
      'Escríbenos por WhatsApp o completa el formulario de contacto contándonos qué tipo de sesión buscas. Coordinamos fecha, hora y el paquete que mejor se ajuste a ti.',
  },
  {
    question: '¿Cuánto tiempo toma la entrega de las fotos?',
    answer:
      'Depende del servicio: las impresiones suelen estar listas el mismo día, mientras que sesiones fotográficas y cuadros personalizados requieren un tiempo de edición y producción que te confirmamos al reservar.',
  },
  {
    question: '¿Puedo llevar mi propia fotografía para restaurar o enmarcar?',
    answer:
      'Sí. Puedes traer tu fotografía física o enviárnosla digitalizada para restauración, retoque o para elaborar un cuadro personalizado.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos pago en efectivo y transferencia. Puedes confirmar el método más conveniente al momento de coordinar tu servicio por WhatsApp.',
  },
];

export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <BlurFade inView className="mb-12 text-center">
        <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Preguntas frecuentes</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">¿Tienes dudas?</h2>
      </BlurFade>

      <BlurFade inView delay={0.1}>
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="py-5 font-display text-lg font-normal not-italic hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurFade>
    </section>
  );
}
