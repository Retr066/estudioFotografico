'use client';

import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  before,
  after,
  alt,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(event.clientX);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 3));
    if (event.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 3));
  };

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Comparar antes y después de la restauración"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      className="relative aspect-4/3 w-full touch-none overflow-hidden rounded-sm select-none focus-visible:outline-2 focus-visible:outline-bronze"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      <Image src={after} alt={`${alt} — después de la restauración`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={before}
          alt={`${alt} — antes de la restauración`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ filter: 'grayscale(0.55) sepia(0.35) contrast(0.85) brightness(0.85)' }}
        />
      </div>

      <div className="absolute inset-y-0 z-10 w-0.5 bg-bone" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-lg">
          <MoveHorizontal className="size-4" />
        </div>
      </div>

      <span className="absolute top-4 left-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs tracking-widest text-bone uppercase">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs tracking-widest text-bone uppercase">
        {afterLabel}
      </span>
    </div>
  );
}
