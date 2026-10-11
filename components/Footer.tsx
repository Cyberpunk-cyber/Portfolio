"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SITE } from "@/data/site";

const SOCIALS = [
  { label: "GitHub", href: SITE.socials.github, icon: faGithub, external: true },
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: faLinkedin, external: true },
  { label: "Email", href: `mailto:${SITE.email}`, icon: faEnvelope, external: false },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/[0.06]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-7 px-6 py-12 md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-display text-base font-extrabold tracking-[0.22em] text-foreground">
            {SITE.shortName}
          </span>
          <span className="text-center text-xs leading-relaxed text-muted-2 md:text-left">
            {SITE.title} · © {new Date().getFullYear()} {SITE.name}
          </span>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-2">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="clay-icon clay-interactive flex h-10 w-10 items-center justify-center rounded-full text-muted"
            >
              <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </nav>

        <a
          href="#"
          aria-label="Back to top"
          className="group inline-flex items-center gap-2.5 text-xs font-medium text-muted transition-colors duration-300 hover:text-accent"
        >
          Back to top
          <span className="clay-icon flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-0.5">
            <FontAwesomeIcon icon={faArrowUp} className="h-3 w-3" />
          </span>
        </a>
      </div>
    </footer>
  );
}
