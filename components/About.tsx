"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

const STATS = [
  { value: SITE.stats.yearsLearning, label: "Year of focused building" },
  { value: SITE.stats.projects, label: "Projects shipped" },
  { value: SITE.stats.technologies, label: "Technologies I've touched" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={<>Who I am, what I do.</>}
    >
      <div className="grid gap-12 md:grid-cols-5 md:gap-8">
        <Reveal className="md:col-span-3" delay={0.05}>
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {SITE.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                <div className="glass group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors hover:border-accent/40 sm:flex-col sm:items-start sm:px-5 sm:py-5 lg:flex-row lg:items-center">
                  <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs leading-snug text-muted sm:mt-1.5">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
