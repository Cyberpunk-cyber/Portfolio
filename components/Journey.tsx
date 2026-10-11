"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

export function Journey() {
  return (
    <Section
      id="journey"
      index="04"
      eyebrow="Journey"
      title={<>Built one project at a time.</>}
      description="From a first line of HTML to retrieval pipelines and deployed products — the path so far, and what each stage taught me."
    >
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-10">
        {/* Timeline */}
        <div className="relative lg:col-span-3">
          <div className="clay-inset absolute bottom-2 left-[15px] top-2 w-[3px] rounded-full" />

          <ul className="space-y-6">
            {SITE.journey.map((step, index) => (
              <Reveal key={`${step.year}-${step.title}`} delay={index * 0.05}>
                <li className="relative pl-12">
                  <span className="clay-icon absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                    {step.year}
                  </div>
                  <h3 className="mt-1.5 font-display text-base font-extrabold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Education */}
        <Reveal className="lg:col-span-2" delay={0.15}>
          <div className="clay sticky top-24 rounded-[1.75rem] p-7">
            <div className="flex items-start gap-4">
              <span className="clay-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5 text-accent-2" />
              </span>
              <div>
                <h3 className="font-display text-base font-extrabold leading-snug text-foreground">
                  {SITE.education.university}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {SITE.education.degree} · {SITE.education.period}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-2">
                Coursework areas
              </div>
              <ul className="space-y-2">
                {SITE.education.areas.map((area) => (
                  <li
                    key={area}
                    className="clay-inset flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm text-foreground/85"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
