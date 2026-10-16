"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { BrowserMockup } from "@/components/sections/browser-mockup";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { process } from "@/constants/process";
import { UserPresence } from "../user-presence";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const tabContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const tabItemVariants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const reducedTabVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const contentVariants = {
  initial: { opacity: 0, y: 10, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
    transition: { duration: 0.32, ease: EASE_OUT },
  },
};

const reducedContentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

const progressVariants = {
  initial: { scaleX: 0 },
  animate: (duration: number) => ({
    scaleX: 1,
    transition: { duration, ease: "linear" as const },
  }),
};

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  const steps = process.steps;
  const active = steps[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const startTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        if (pausedRef.current) {
          startTimer();
          return;
        }
        setActiveIndex((prev) => (prev + 1) % steps.length);
        setProgressKey((prev) => prev + 1);
      }, process.autoRotateMs);
    };

    startTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, shouldReduceMotion, steps.length]);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const progressDuration = shouldReduceMotion ? 0 : process.autoRotateMs / 1000;

  return (
    <section id="process" className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.heading}
          titleClassName="max-w-[830px]"
        />
        <UserPresence name="Yash" />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="w-full max-w-[485px]"
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            onFocusCapture={() => {
              pausedRef.current = true;
            }}
            onBlurCapture={() => {
              pausedRef.current = false;
            }}
          >
            <motion.div
              variants={
                shouldReduceMotion ? reducedTabVariants : tabContainerVariants
              }
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
            >
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={step.title}
                    layout
                    variants={
                      shouldReduceMotion ? reducedTabVariants : tabItemVariants
                    }
                    type="button"
                    onClick={() => goToStep(index)}
                    className={cn(
                      "group relative flex flex-col gap-2 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors duration-200",
                      isActive
                        ? "border-[#626262] bg-red-400"
                        : "border-border hover:bg-neutral-50",
                    )}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={cn(
                          "text-xl font-medium lg:text-[26px]",
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {step.title}
                      </span>
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      {isActive ? (
                        <motion.div
                          key={`content-${index}`}
                          variants={
                            shouldReduceMotion
                              ? reducedContentVariants
                              : contentVariants
                          }
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="text-sm text-description"
                          layout
                        >
                          {step.description}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                    {isActive ? (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#626262]"
                      >
                        <motion.div
                          key={`progress-${progressKey}`}
                          variants={progressVariants}
                          custom={progressDuration}
                          initial="initial"
                          animate="animate"
                          className="h-full w-full origin-left bg-foreground"
                          style={{ transform: "scaleX(0)" }}
                        />
                      </div>
                    ) : null}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.25 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={
                  shouldReduceMotion ? reducedContentVariants : contentVariants
                }
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <BrowserMockup
                  className="w-full"
                  imageSrc={active.image}
                  imageAlt={active.imageAlt}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
