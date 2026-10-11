"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircleCheck,
  faCircleInfo,
  faClock,
  faEnvelope,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

const SOCIALS = [
  { label: "GitHub", handle: "@" + SITE.github.username, href: SITE.socials.github, icon: faGithub, external: true },
  { label: "LinkedIn", handle: "Ghous Muhammad", href: SITE.socials.linkedin, icon: faLinkedin, external: true },
  { label: "Email", handle: SITE.email, href: `mailto:${SITE.email}`, icon: faEnvelope, external: false },
];

const inputClass =
  "clay-inset w-full rounded-2xl px-4 py-3.5 text-sm text-foreground outline-none transition-shadow duration-300 placeholder:text-muted-2 focus:shadow-[inset_4px_4px_9px_-3px_rgba(0,0,0,0.55),inset_-3px_-3px_8px_-3px_rgba(255,255,255,0.06),0_0_0_1px_rgba(169,164,242,0.35)]";

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "rate-limited" | "error"
  >("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.status === 429) {
        setStatus("rate-limited");
        return;
      }
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something <span className="text-gradient">worth using.</span>
        </>
      }
      description="I'm open to internships, freelance projects, and collaborations. Tell me what you're building and I'll tell you how I'd approach it."
    >
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        {/* Direct channels */}
        <Reveal className="lg:col-span-2" delay={0.05}>
          <div className="clay flex h-full flex-col rounded-[1.75rem] p-7">
            <h3 className="font-display text-base font-extrabold text-foreground">
              Reach me directly
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Prefer email or a quick look at my code? Either works — I usually respond
              within a day.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="clay-sm clay-interactive group/social flex items-center gap-3.5 rounded-2xl px-4 py-3.5"
                >
                  <span className="clay-inset flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                    <FontAwesomeIcon icon={social.icon} className="h-4 w-4 text-accent" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      {social.label}
                    </span>
                    <span className="block truncate text-xs text-muted">{social.handle}</span>
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="ml-auto h-3 w-3 shrink-0 text-muted-2 transition-all duration-300 group-hover/social:translate-x-0.5 group-hover/social:text-accent"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="lg:col-span-3" delay={0.12}>
          <form onSubmit={handleSubmit} className="clay rounded-[1.75rem] p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
              >
                What are you working on?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="I'm building…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="clay-pill inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="h-3.5 w-3.5" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <FontAwesomeIcon icon={faPaperPlane} className="h-3.5 w-3.5" />
                  </>
                )}
              </button>

              {status === "sent" && (
                <motion.span
                  initial={reduceMotion ? undefined : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 text-sm text-accent-2"
                  role="status"
                >
                  <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" />
                  Message sent — I&apos;ll reply soon.
                </motion.span>
              )}

              {status === "rate-limited" && (
                <span
                  className="inline-flex items-center gap-2 text-sm text-accent"
                  role="alert"
                >
                  <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                  Too many messages just now — please try again shortly.
                </span>
              )}

              {status === "error" && (
                <span
                  className="inline-flex items-center gap-2 text-sm text-accent-3"
                  role="alert"
                >
                  <FontAwesomeIcon icon={faCircleInfo} className="h-4 w-4" />
                  Something went wrong. Email me at{" "}
                  <a href={`mailto:${SITE.email}`} className="font-semibold underline">
                    {SITE.email}
                  </a>
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
