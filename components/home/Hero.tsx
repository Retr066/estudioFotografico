'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

import { whatsappLink } from '@/lib/whatsapp';

const title = 'Estudio Fotográfico Pérez';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={ref} className="relative h-[100dvh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[125%]">
        <Image
          src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg"
          alt="Interior del Estudio Fotográfico Pérez"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-ink-950" />

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative flex h-full flex-col items-center justify-center px-6 text-center text-bone"
      >
        <p className="font-sans text-xs tracking-[0.4em] text-bronze uppercase">Desde Ate, Lima</p>

        <h1 className="mt-6 flex flex-wrap items-baseline justify-center gap-x-4 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          {title.split(' ').map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block italic"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-8 max-w-md text-sm text-bone/75 sm:text-base"
        >
          Sesiones, impresiones, cuadros y restauración fotográfica. Un mismo estudio para contar
          y conservar tu historia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href={whatsappLink('Hola, quiero reservar una sesión fotográfica. ¿Me ayudan con la disponibilidad y los paquetes?')}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-bronze px-8 py-3 text-sm tracking-wide text-ink transition-transform hover:scale-105"
          >
            Reserva tu sesión
          </Link>
          <Link
            href="#servicios"
            className="rounded-full border border-bone/40 px-8 py-3 text-sm tracking-wide text-bone transition-colors hover:border-bronze hover:text-bronze"
          >
            Ver servicios
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute inset-x-0 bottom-8 flex justify-center text-bone/70"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.div>
    </div>
  );
}
