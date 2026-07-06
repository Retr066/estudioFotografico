import type { LucideIcon } from 'lucide-react';

import { BlurFade } from '@/components/ui/blur-fade';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {features.map((feature, index) => (
        <BlurFade
          key={feature.title}
          inView
          delay={index * 0.1}
          className="rounded-sm border border-border bg-card p-7"
        >
          <feature.icon className="size-7 text-bronze" strokeWidth={1.25} />
          <h3 className="mt-4 font-display text-xl">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">{feature.description}</p>
        </BlurFade>
      ))}
    </div>
  );
}
