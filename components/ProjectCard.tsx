"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { ProjectVisual } from "./ProjectVisual";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="glow-border group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
    >
      {/* Visual / screenshot area */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectVisual project={project} />
        </div>
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-wide text-foreground">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-accent">{project.tagline}</p>
          </div>
          <a
            href={project.demo ?? project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo`}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        {project.featured && project.problem && (
          <p className="mt-3 border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-muted-2">
            {project.problem}
          </p>
        )}

        {/* Feature bullets (featured only, keeps the card clean) */}
        {project.featured && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground/90"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
