"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

const STATS = [
  { value: SITE.stats.yearsLearning, label: "Year of focused building" },
  { value: SITE.stats.projects, label: "Projects built and shipped" },
  { value: SITE.stats.technologies, label: "Technologies used in real projects" },
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title={<>Who I am and what I build.</>}>
      <div className="grid gap-10 md:grid-cols-5 md:gap-8">
        <Reveal className="md:col-span-3" delay={0.05}>
          <div className="clay rounded-[1.75rem] p-7 md:p-9">
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted md:text-base">
              {SITE.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 + index * 0.08}>
                <div className="clay clay-interactive flex items-center gap-5 rounded-[1.5rem] px-6 py-5 sm:flex-col sm:items-start sm:gap-3 lg:flex-row lg:items-center lg:gap-5">
                  <span className="clay-inset flex h-14 min-w-14 items-center justify-center rounded-2xl px-3 font-display text-xl font-extrabold text-accent">
                    {stat.value}
                  </span>
                  <span className="text-xs leading-snug text-muted sm:text-[0.8rem]">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
