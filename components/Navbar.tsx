"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NAV_LINKS, SITE } from "@/data/site";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

/**
 * Tracks which section currently sits in the middle band of the viewport, so
 * the navigation can highlight where the visitor is without any scroll maths.
 */
function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    // Clear the highlight once the visitor is above the first section (hero).
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return [active, setActive] as const;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useActiveSection();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Highlight the tapped link immediately instead of waiting for the observer.
  const handleNavigate = useCallback(
    (href: string) => {
      setActive(href.replace("#", ""));
      setOpen(false);
    },
    [setActive]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-[1.4rem] px-4 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "clay border border-white/[0.06]"
            : "border border-transparent"
        }`}
      >
        <a
          href="#"
          onClick={() => setActive("")}
          className="font-display text-sm font-extrabold tracking-[0.22em] text-foreground transition-opacity hover:opacity-80"
          aria-label={`${SITE.name} — back to top`}
        >
          {SITE.shortName}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavigate(link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="clay-sm absolute inset-0 -z-10 rounded-full"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 320, damping: 32 }
                    }
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => handleNavigate("#contact")}
            className="clay-pill hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold sm:inline-flex"
          >
            Get in touch
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="clay-icon inline-flex h-9 w-9 items-center justify-center rounded-xl text-foreground md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="clay mx-auto mt-3 w-full max-w-6xl overflow-hidden rounded-[1.4rem] border border-white/[0.06] p-3 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavigate(link.href)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors duration-300 hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => handleNavigate("#contact")}
                className="clay-pill mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
              >
                Get in touch
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
