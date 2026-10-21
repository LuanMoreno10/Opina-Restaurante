import type { Transition, Variants } from "framer-motion";

/** House easing: quick start, long soft landing. */
export const ease = [0.2, 0.7, 0.2, 1] as const;
/** Heavier in-out, for curtains and big surfaces. */
export const easeInOut = [0.76, 0, 0.24, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

export function stagger(staggerChildren = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } },
  };
}

export const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease } },
};

/** Shared viewport settings so every section reveals at the same point. */
export const inView = { once: true, amount: 0.2 } as const;

export const springSoft: Transition = { type: "spring", stiffness: 260, damping: 30 };
