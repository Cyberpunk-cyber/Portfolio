"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faEnvelope,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { SITE } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const HIGHLIGHTS = [
  "AI & LLM products",
  "Full-stack web apps",
  "APIs, data & deployment",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32">
      {/* Ambient clay blobs — soft, low-contrast, and still when motion is reduced */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="clay-blob absolute -left-24 top-[8%] h-72 w-72 bg-accent/12" />
        <div className="clay-blob absolute right-[-10%] top-[24%] h-64 w-64 bg-accent-2/10" />
        <div className="clay-blob absolute bottom-[6%] left-[30%] h-72 w-72 bg-accent-3/10" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
      >
        {/* Availability */}
        <motion.div variants={item}>
          <span className="clay-sm inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              {!reduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-70" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            {SITE.availability}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent"
        >
          {SITE.title}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-[2.6rem] font-black leading-[1.08] text-foreground sm:text-6xl md:text-[4.2rem]"
        >
          Hi, I&apos;m <span className="text-gradient">Ghous Muhammad</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl font-display text-lg font-semibold leading-snug text-foreground/90 sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faMagicWandSparkles} className="mr-1 h-4 w-4 text-accent-2" />
          {SITE.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted"
        >
          {SITE.description}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="clay-pill inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold"
          >
            View my projects
            <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contact"
            className="clay-pill-quiet inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-accent" />
            Get in touch
          </a>
        </motion.div>

        {/* Focus areas */}
        <motion.ul
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-2"
        >
          {HIGHLIGHTS.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              {highlight}
            </li>
          ))}
        </motion.ul>

        {/* Scroll cue */}
        <motion.a
          variants={item}
          href="#about"
          aria-label="Scroll to the about section"
          className="mt-14 inline-flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-2 transition-colors hover:text-accent"
        >
          Scroll
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faChevronDown} className="h-3.5 w-3.5" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
