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
    <section
      id={id}
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <Reveal>
        <div className="mb-12 max-w-3xl md:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="clay-icon flex h-9 w-9 items-center justify-center rounded-2xl font-mono text-[11px] font-bold text-accent">
              {index}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-[1.75rem] font-extrabold leading-[1.15] text-foreground sm:text-4xl md:text-[2.6rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
