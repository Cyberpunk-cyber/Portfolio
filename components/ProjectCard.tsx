"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectVisual } from "./ProjectVisual";
import type { Project } from "@/data/projects";

const linkClass =
  "group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300";

function FeatureList({ features, columns }: { features: string[]; columns: boolean }) {
  return (
    <ul className={`mt-5 grid gap-2.5 ${columns ? "sm:grid-cols-2" : ""}`}>
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
          <FontAwesomeIcon
            icon={faCheck}
            className="mt-1 h-2.5 w-2.5 shrink-0 text-accent-2"
          />
          {feature}
        </li>
      ))}
    </ul>
  );
}

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="clay-inset rounded-full px-3 py-1.5 text-[0.7rem] font-medium text-foreground/80"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="clay-pill inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold"
        >
          Live demo
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClass} ${project.demo ? "clay-pill-quiet rounded-full px-5 py-2.5 font-semibold" : "clay-pill rounded-full px-5 py-2.5 font-bold"}`}
      >
        <FontAwesomeIcon icon={faGithub} className="h-3.5 w-3.5" />
        Source code
      </a>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  /* Flagship project — always rendered first, in a wider two-column layout. */
  if (project.featured) {
    return (
      <article className="clay clay-interactive group overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <div className="p-5 lg:p-7">
            <div className="clay-inset relative h-full min-h-[260px] overflow-hidden rounded-[1.5rem]">
              <ProjectVisual project={project} />
              <span className="clay-icon absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                <FontAwesomeIcon icon={faStar} className="h-2.5 w-2.5" />
                Flagship project
              </span>
            </div>
          </div>

          <div className="p-7 lg:py-9 lg:pr-9">
            <h3 className="font-display text-2xl font-extrabold leading-tight text-foreground md:text-[1.75rem]">
              {project.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-accent">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

            <p className="clay-inset mt-5 rounded-2xl px-5 py-4 text-sm italic leading-relaxed text-muted-2">
              {project.problem}
            </p>

            <FeatureList features={project.features} columns />
            <StackChips stack={project.stack} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  /* Supporting projects — uniform cards in the grid below. */
  return (
    <article className="clay clay-interactive group flex h-full flex-col overflow-hidden rounded-[1.75rem]">
      <div className="p-4">
        <div className="clay-inset relative aspect-[16/9] overflow-hidden rounded-[1.25rem]">
          <ProjectVisual project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-3">
        <h3 className="font-display text-lg font-extrabold leading-snug text-foreground">
          {project.name}
        </h3>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {project.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <FeatureList features={project.features.slice(0, 3)} columns={false} />
        <StackChips stack={project.stack} />

        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
