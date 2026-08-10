"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">{index}</span>
            <span className="h-px w-8 bg-accent/50" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-wide text-foreground md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
