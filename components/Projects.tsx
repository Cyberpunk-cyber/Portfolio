"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  /* The flagship platform always leads the section. */
  const flagship = PROJECTS.find((project) => project.featured);
  const supporting = PROJECTS.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title={<>Products I designed, built, and shipped.</>}
      description="AI platforms, full-stack applications, and data pipelines — each one built end to end and each one described precisely, including what it does and what it does not yet do."
    >
      <div className="space-y-8">
        {flagship && (
          <Reveal>
            <ProjectCard project={flagship} />
          </Reveal>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {supporting.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
