"use client";
import { motion, type HTMLMotionProps, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  blurScaleReducedVariants,
  blurScaleTransition,
  blurScaleVariants,
} from "@/lib/motion/blur-scale";

export function Eyebrow({
  className,
  children,
  animate = true,
  ...props
}: HTMLMotionProps<"span"> & {
  animate?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;
  const shouldAnimate = animate && !shouldReduceMotion;

  return (
    <motion.span
      data-slot="eyebrow"
      variants={shouldAnimate ? blurScaleVariants() : blurScaleReducedVariants}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate="visible"
      transition={shouldAnimate ? blurScaleTransition({ delay: 1.5 }) : { duration: 0 }}
      className={cn(
        "inline-flex items-center rounded-full bg-eyebrow px-3 pt-px h-6 text-[11px] leading-none tracking-[-0.5px] text-black uppercase font-medium font-mono border border-[#7C7C7C] select-none cursor-default w-fit will-change-transform",
        className,
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
}
