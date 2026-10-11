"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A hair-thin reading indicator pinned to the very top of the page.
 * Spring-damped so it glides rather than snapping between scroll positions.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.0005,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left rounded-r-full bg-gradient-to-r from-accent via-accent-2 to-accent-3"
    />
  );
}
