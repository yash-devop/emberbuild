"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

import { cn } from "@/lib/utils";
import { showcaseTabs, showcaseWorks } from "@/constants/showcase";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
const SLIDE_INTERVAL_MS = 3300;

const slideVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px)",
    transition: { duration: 0.5, ease: EASE_OUT },
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px)",
    transition: { duration: 0.32, ease: EASE_OUT },
  },
};

const slideVariantsReduced: Variants = {
  initial: { opacity: 0, transition: { duration: 0.15 } },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

function ConcaveMerge({
  side,
  className,
}: {
  side: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
      className={cn(
        "hidden sm:block absolute top-0 h-10 w-10 text-white",
        side === "left"
          ? "translate-x-[0.5px] right-full rotate-90"
          : "left-full -scale-x-100 rotate-270 -translate-x-[0.5px]",
        className,
      )}
    >
      <path
        d="M40 0 A40 40 0 0 0 0 40 L0 0 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
      />
    </svg>
  );
}

export function ShowcaseBand() {
  const [active, setActive] = useState(showcaseTabs[0].label);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const work = showcaseWorks[index];
  const variants = shouldReduceMotion ? slideVariantsReduced : slideVariants;

  useEffect(() => {
    if (paused || shouldReduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % showcaseWorks.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, shouldReduceMotion, index]);

  useEffect(() => {
    const next = showcaseWorks[(index + 1) % showcaseWorks.length];
    const image = new window.Image();
    image.src = next.src;
  }, [index]);

  return (
    <section aria-label="Selected work showcase" className="relative bg-black">
      <Image
        src="/images/abstract-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-70"
        loading="eager"
      />

      <div className="relative flex flex-col items-center px-5 pt-0 pb-16 sm:px-8 lg:pb-24">
        <div className="relative -mt-14 flex items-center gap-1 rounded-full sm:rounded-t-none sm:rounded-b-3xl bg-white px-2 py-2 shadow-sm sm:mt-0 sm:gap-2 sm:px-3 sm:py-3">
          {showcaseTabs.map((tab) => {
            const selected = tab.label === active;
            return (
              <button
                key={tab.label}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(tab.label)}
                className={cn(
                  "rounded-3xl px-4 py-1.5 text-xs font-medium text-black transition-colors sm:px-5 sm:py-2 sm:text-sm",
                  selected ? "bg-neutral-200" : "hover:bg-[#F7F7F7]",
                )}
              >
                {tab.label}
              </button>
            );
          })}
          <ConcaveMerge side="left" />
          <ConcaveMerge side="right" />
        </div>

        <div
          className="relative mt-14 max-w-[1400px] aspect-video w-full overflow-hidden rounded-2xl sm:mt-16 lg:aspect-[16/9] xl:h-[720px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <AnimatePresence>
            <motion.div
              key={work.src}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(min-width: 1400px) 1400px, 100vw"
                className="object-contain p-4 sm:p-8"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center gap-2">
          {showcaseWorks.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(itemIndex)}
              aria-label={`Show ${item.alt}`}
              aria-current={itemIndex === index ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-[width,background-color] duration-200 ease-out motion-reduce:transition-none",
                itemIndex === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
