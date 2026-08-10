"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SKILLS } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title={<>What I work with.</>}
      description="Grouped by where I use them — everything here is something I can talk through in an interview."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {SKILLS.map((category, ci) => (
          <Reveal key={category.title} delay={ci * 0.1}>
            <div className="glass group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <h3 className="font-display text-lg font-bold text-foreground">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-accent/50 hover:bg-accent/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
