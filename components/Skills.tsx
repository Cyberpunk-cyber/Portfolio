"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SKILLS } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title={<>The tools I build with.</>}
      description="Grouped by where I actually use them — every item here is something I can walk through, explain, and debug in a conversation."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.08} className="h-full">
            <div className="clay clay-interactive flex h-full flex-col rounded-[1.75rem] p-7">
              <span className="clay-icon flex h-12 w-12 items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={category.icon} className="h-5 w-5 text-accent" />
              </span>

              <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">
                {category.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {category.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="clay-inset rounded-full px-3 py-1.5 text-[0.7rem] font-medium text-foreground/85"
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
