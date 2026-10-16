import type { Variants } from "motion/react";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

type StaggeredWordsContainerOptions = {
  stagger?: number;
  delay?: number;
};

export function staggeredWordsContainerVariants({
  stagger = 0.05,
  delay = 0.1,
}: StaggeredWordsContainerOptions = {}): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}

export const staggeredWordsReducedContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

type StaggeredWordOptions = {
  blur?: number;
  y?: number;
  duration?: number;
};

export function staggeredWordVariants({
  blur = 8,
  y = -14,
  duration = 0.55,
}: StaggeredWordOptions = {}): Variants {
  return {
    hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, ease: EASE_OUT },
    },
  };
}

export const staggeredWordReducedVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};
