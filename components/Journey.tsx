"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GraduationCap } from "lucide-react";
import { SITE } from "@/data/site";

export function Journey() {
  return (
    <Section
      id="journey"
      index="04"
      eyebrow="Journey"
      title={<>Built one project at a time.</>}
      description="The path from curious student to full-stack builder working at the edge of web development and AI."
    >
      <div className="grid gap-14 lg:grid-cols-5">
        {/* Timeline */}
        <div className="relative lg:col-span-3">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />
          <div className="space-y-10">
            {SITE.journey.map((step, i) => (
              <Reveal key={`${step.year}-${step.title}`} delay={i * 0.05}>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center">
                    <span className="absolute h-full w-full rounded-full bg-accent/30" />
                    <span className="relative h-[7px] w-[7px] rounded-full bg-accent" />
                  </span>
                  <div className="font-mono text-xs uppercase tracking-widest text-accent">
                    {step.year}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <Reveal className="lg:col-span-2" delay={0.15}>
          <div className="glass sticky top-24 rounded-2xl p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/30">
                <GraduationCap className="h-5 w-5 text-accent" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {SITE.education.university}
                </h3>
                <p className="text-sm text-muted">
                  {SITE.education.degree} · {SITE.education.period}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-2">
                Relevant Areas
              </div>
              <ul className="space-y-2.5">
                {SITE.education.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 text-sm text-foreground/85"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
