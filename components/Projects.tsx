"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title={<>Ideas, engineered into reality.</>}
      description="A selection of AI products, full-stack applications, and experiments that pushed me to learn faster and build smarter."
    >
      <div className="space-y-8">
        {featured && (
          <Reveal>
            <ProjectCard project={featured} />
          </Reveal>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
