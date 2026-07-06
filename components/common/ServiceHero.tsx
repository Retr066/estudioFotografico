import Image from 'next/image';

interface ServiceHeroProps {
  src: string;
  alt: string;
  quote: string;
  author: string;
}

export default function ServiceHero({ src, alt, quote, author }: ServiceHeroProps) {
  return (
    <div className="relative flex h-[70vh] min-h-[440px] items-end justify-center">
      <Image src={src} alt={alt} fill priority sizes="100vw" quality={90} className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
      <figure className="relative mx-auto max-w-2xl px-6 pb-16 text-center text-bone">
        <blockquote className="font-display text-2xl italic sm:text-3xl">&ldquo;{quote}&rdquo;</blockquote>
        <figcaption className="mt-4 text-xs tracking-[0.2em] text-bone/70 uppercase">{author}</figcaption>
      </figure>
    </div>
  );
}
