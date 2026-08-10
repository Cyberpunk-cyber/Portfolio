"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { SITE } from "@/data/site";

const SOCIALS = [
  { label: "GitHub", href: SITE.socials.github, icon: GitHubIcon },
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col items-center gap-1.5 md:items-start">
          <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
            {SITE.shortName}
          </span>
          <span className="text-xs text-muted-2">
            Designed &amp; built by {SITE.name} · © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === "Email" ? undefined : "_blank"}
              rel={s.label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a
          href="#"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
        >
          Back to top
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <ArrowUp className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </footer>
  );
}
