"use client";
import { motion, type HTMLMotionProps, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

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

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      y: -10,
      filter: "blur(3px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  const reducedVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  return (
    <motion.span
      data-slot="eyebrow"
      variants={shouldAnimate ? variants : reducedVariants}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate ? "visible" : "visible"}
      transition={
        shouldAnimate
          ? {
              delay: 1.5,
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
            }
          : { duration: 0 }
      }
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
