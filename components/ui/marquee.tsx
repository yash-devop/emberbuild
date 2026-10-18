"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

const trackVariants: Variants = {
  initial: { x: "0%" },
  animate: (duration: number) => ({
    x: ["0%", "-50%"],
    transition: { duration, ease: "linear", repeat: Infinity },
  }),
};

const reducedTrackVariants: Variants = {
  initial: { x: "0%" },
  animate: { x: "0%" },
};

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  gap?: number;
  fade?: number;
  className?: string;
  trackClassName?: string;
};

export function Marquee({
  children,
  duration = 20,
  gap = 8,
  fade = 0,
  className,
  trackClassName,
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const maskImage =
    fade > 0
      ? `linear-gradient(to right, transparent, black ${fade}px, black calc(100% - ${fade}px), transparent)`
      : undefined;

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ maskImage, WebkitMaskImage: maskImage }}
    >
      <motion.div
        className={cn("flex w-max", trackClassName)}
        variants={shouldReduceMotion ? reducedTrackVariants : trackVariants}
        custom={duration}
        initial="initial"
        animate="animate"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center cursor-default select-none"
            style={{ gap, paddingRight: gap }}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
