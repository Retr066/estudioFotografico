import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

import FormContacto from '@/components/common/FormContacto';
import { BlurFade } from '@/components/ui/blur-fade';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contáctanos',
  description:
    'Ubícanos en AV. Los Quechuas Nº 1142, Salamanca, Ate. Escríbenos por WhatsApp o completa el formulario para coordinar tu sesión, impresión o cuadro fotográfico.',
  path: '/contacto',
  image:
    'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640388794/estudio_fotografico_perez/contactos_fx6tcq.jpg',
});

const contactInfo = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'AV. Los Quechuas Nº 1142, Salamanca, Ate',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'foto_estudioperez@hotmail.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+ 51 924 606 740',
  },
];

export default function Contacto() {
  return (
    <div>
      <div className="relative flex h-[50vh] min-h-[360px] items-end">
        <Image
          src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640388794/estudio_fotografico_perez/contactos_fx6tcq.jpg"
          alt="Estudio Fotográfico Pérez"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
        <div className="relative px-6 pb-16 lg:px-10">
          <p className="font-sans text-xs tracking-[0.3em] text-bronze uppercase">Escríbenos</p>
          <h1 className="mt-3 font-display text-4xl text-bone sm:text-6xl">Contáctanos</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <BlurFade inView>
            <ul className="space-y-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-bronze" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
                    <p className="mt-1 text-foreground">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 aspect-4/3 w-full overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.8508037428814!2d-76.98025489645579!3d-12.075043490503468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c728e753d155%3A0xad3a4d4361b25adb!2sEstudio%20Fotografico%20Perez!5e0!3m2!1ses-419!2spe!4v1640383784190!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación del Estudio Fotográfico Pérez"
              />
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} className="rounded-sm border border-border bg-card p-8 lg:p-10">
            <FormContacto />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
