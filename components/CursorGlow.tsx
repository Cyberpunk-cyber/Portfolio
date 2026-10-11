"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

/** True when the device has a fine pointer (mouse). */
function subscribe(callback: () => void) {
  const query = window.matchMedia("(pointer: fine)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * A soft halo that trails the cursor with heavy easing, so it reads as ambient
 * light rather than a cursor replacement. Desktop pointers only, and disabled
 * entirely for visitors who prefer reduced motion.
 */
export function CursorGlow() {
  const haloRef = useRef<HTMLDivElement>(null);
  const hasFinePointer = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const reduceMotion = useReducedMotion();
  const enabled = hasFinePointer && !reduceMotion;

  useEffect(() => {
    if (!enabled) return;

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const tick = () => {
      // Slow easing keeps the halo calm instead of twitchy.
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;
      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${currentX - 128}px, ${currentY - 128}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={haloRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <div className="h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(169,164,242,0.13),rgba(169,164,242,0)_68%)]" />
    </div>
  );
}
