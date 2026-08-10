"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SITE } from "@/data/site";

const SOCIALS = [
  { label: "GitHub", href: SITE.socials.github, icon: GitHubIcon },
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-foreground placeholder-muted-2 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.06]";

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title={
        <>
          Want to work{" "}
          <span className="text-gradient">together?</span>
        </>
      }
      description="Internship, freelance, or just a project you want to talk about — my inbox is open."
    >
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Left — socials */}
        <Reveal className="lg:col-span-2" delay={0.05}>
          <p className="text-lg leading-relaxed text-muted">
            Whether it&apos;s an internship, a freelance project, or just a wild
            idea — my inbox is open.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === "Email" ? undefined : "_blank"}
                rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <s.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  {s.label}
                </span>
                <span className="ml-auto text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal className="lg:col-span-3" delay={0.12}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className={input}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted">
                Tell me about your project
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="I'm building…"
                className={`${input} resize-none`}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-[0_0_40px_-8px_rgba(124,58,237,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
              {status === "sent" && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 text-sm text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" /> Message sent — I&apos;ll get back to you soon.
                </motion.span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-2 text-sm text-red-400">
                  Something went wrong. Email me directly at{" "}
                  <a href={`mailto:${SITE.email}`} className="underline">
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
