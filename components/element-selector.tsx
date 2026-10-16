"use client";

import type { ComponentProps } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";

import { cn } from "@/lib/utils";

const CORNERS = [
  "-mt-1 -ml-1 top-0 left-0",
  "-mt-1 -mr-1 top-0 right-0",
  "-mb-1 -mr-1 bottom-0 right-0",
  "-mb-1 -ml-1 bottom-0 left-0",
] as const;

const BORDER_LINES = [
  {
    position: "left-0 top-0 h-[1.5px] w-full origin-left",
    axis: "x",
    delay: 0,
  },
  {
    position: "right-0 top-0 h-full w-[1.5px] origin-top",
    axis: "y",
    delay: 150,
  },
  {
    position: "bottom-0 right-0 h-[1.5px] w-full origin-right",
    axis: "x",
    delay: 300,
  },
  {
    position: "bottom-0 left-0 h-full w-[1.5px] origin-bottom",
    axis: "y",
    delay: 450,
  },
] as const;

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
const DRAW_DURATION = 0.7;
const POP_DURATION = 0.4;

type ElementSelectorProps = ComponentProps<"span"> & {
  animate?: boolean;
  pending?: boolean;
  handleClassName?: string;
};

export function ElementSelector({
  children,
  animate = false,
  pending = false,
  className,
  handleClassName,
  ...props
}: ElementSelectorProps) {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;

  const drawTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: DRAW_DURATION, ease: EASE_OUT };

  const popTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: POP_DURATION, ease: EASE_OUT };

  return (
    <span
      data-slot="element-selector"
      className={cn("relative inline-block text-[#0D99FF]", className)}
      {...props}
    >
      {children}
      {BORDER_LINES.map((line) => (
        <motion.span
          key={line.position}
          aria-hidden="true"
          initial={
            shouldReduceMotion
              ? { scaleX: 1, scaleY: 1, opacity: 1 }
              : line.axis === "x"
                ? { scaleX: 0, opacity: 1 }
                : { scaleY: 0, opacity: 1 }
          }
          animate={
            animate && !shouldReduceMotion
              ? { scaleX: 1, scaleY: 1, opacity: 1 }
              : shouldReduceMotion
                ? { scaleX: 1, scaleY: 1, opacity: 1 }
                : { scaleX: 0, scaleY: 0, opacity: 0 }
          }
          transition={drawTransition}
          className={cn(
            "pointer-events-none absolute z-10 bg-current",
            line.position,
            pending && !shouldReduceMotion && "opacity-0",
          )}
          style={{ transitionDelay: animate ? `${line.delay}ms` : undefined }}
        />
      ))}
      {CORNERS.map((corner, index) => (
        <motion.span
          key={corner}
          aria-hidden="true"
          initial={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.4 }
          }
          animate={
            animate && !shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.4 }
          }
          transition={popTransition}
          className={cn(
            "pointer-events-none absolute z-20 size-2 rounded-[2px] border-[1.5px] border-current bg-background",
            corner,
            pending && !shouldReduceMotion && "opacity-0",
            handleClassName,
          )}
          style={{
            transitionDelay: animate
              ? `${450 + index * 60}ms`
              : undefined,
          }}
        />
      ))}
    </span>
  );
}
