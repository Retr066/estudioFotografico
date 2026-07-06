import Link from 'next/link';

import { BlurFade } from '@/components/ui/blur-fade';

export default function ServiceCta({ text = '¿Listo para empezar? Cuéntanos qué necesitas.' }: { text?: string }) {
  return (
    <BlurFade inView className="mt-20 flex flex-col items-center gap-5 border-t border-border pt-16 text-center">
      <p className="max-w-md font-display text-2xl">{text}</p>
      <Link
        href="/contacto"
        className="rounded-full bg-ink px-8 py-3 text-sm tracking-wide text-bone transition-transform hover:scale-105"
      >
        Contáctanos
      </Link>
    </BlurFade>
  );
}
