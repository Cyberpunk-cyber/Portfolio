"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { SITE } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32">
      {/* Subtle grid + radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-warm/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center"
      >
        {/* Availability badge */}
        <motion.div variants={item}>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {SITE.availability}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display text-5xl font-black leading-[1.05] tracking-wide text-foreground sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">Ghous.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl font-display text-xl font-semibold leading-snug tracking-wide text-foreground/90 sm:text-2xl md:text-3xl"
        >
          I build full-stack products and{" "}
          <span className="inline-flex items-center gap-1 text-gradient">
            <Sparkles className="h-5 w-5" />
            mess around with AI.
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {SITE.description}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-[0_0_40px_-8px_rgba(124,58,237,0.7)]"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-white/30 hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="mt-16 flex items-center gap-2 text-xs text-muted-2"
        >
          <span className="font-mono tracking-widest">SCROLL</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
