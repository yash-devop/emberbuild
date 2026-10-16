import type { Transition, Variants } from "motion/react";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

type BlurScaleVariantsOptions = {
  blur?: number;
  scale?: number;
  y?: number;
};

export function blurScaleVariants({
  blur = 3,
  scale = 0.94,
  y = -10,
}: BlurScaleVariantsOptions = {}): Variants {
  return {
    hidden: {
      opacity: 0,
      scale,
      y,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };
}

export const blurScaleReducedVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

type BlurScaleTransitionOptions = {
  delay?: number;
  duration?: number;
};

export function blurScaleTransition({
  delay = 0,
  duration = 0.4,
}: BlurScaleTransitionOptions = {}): Transition {
  return {
    delay,
    duration,
    ease: EASE_OUT,
  };
}

type BlurScaleItemOptions = BlurScaleVariantsOptions &
  BlurScaleTransitionOptions;

export function blurScaleItemVariants(options: BlurScaleItemOptions = {}): Variants {
  const { hidden, visible } = blurScaleVariants(options);

  return {
    hidden,
    visible: { ...visible, transition: blurScaleTransition(options) },
  };
}

type BlurScaleContainerOptions = {
  stagger?: number;
  delay?: number;
};

export function blurScaleContainerVariants({
  stagger = 0.12,
  delay = 0.1,
}: BlurScaleContainerOptions = {}): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}

export const blurScaleReducedContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};
