"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import { SectionHeading } from "@/components/sections/section-heading";
import { ElementSelector } from "@/components/element-selector";
import { UserPresence } from "@/components/user-presence";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { process } from "@/constants/process";
import { useElementSize } from "@/hooks/use-element-size";
import { blurScaleVariants } from "@/lib/motion/blur-scale";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CONFETTI_COLORS = ["#8570ff", "#9fef54", "#68fe9d", "#ffffff", "#111111"];

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

const accordionVariants = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: EASE_OUT },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: EASE_OUT },
      opacity: { duration: 0.2 },
    },
  },
};

const reducedAccordionVariants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1, transition: { duration: 0.15 } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.15 } },
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
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.9 });

  const steps = process.steps;
  const active = steps[activeIndex];
  const isLaunch = activeIndex === steps.length - 1;
  const { ref: imageRef, size: imageSize } = useElementSize<HTMLDivElement>();
  const longestDescription = steps.reduce(
    (longest, step) =>
      (step.description?.length ?? 0) > (longest.description?.length ?? 0)
        ? step
        : longest,
    steps[0],
  ).description;

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
  }, [progressKey, shouldReduceMotion, steps.length]);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  const progressDuration = shouldReduceMotion ? 0 : process.autoRotateMs / 1000;

  return (
    <section id="process" className="relative py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <div ref={headingRef} className="relative">
          <SectionHeading
            eyebrow={process.eyebrow}
            title={
              <>
                {process.heading.lead}{" "}
                <ElementSelector
                  animate={headingInView}
                  className="mx-0.5 px-1 py-0.5 sm:px-1.5"
                >
                  <span className="text-foreground">
                    {process.heading.highlight}
                  </span>
                </ElementSelector>
              </>
            }
            titleClassName="max-w-[830px]"
          />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 mt-4">
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
              className="flex flex-col gap-0 px-2"
            >
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={step.title}
                    variants={
                      shouldReduceMotion ? reducedTabVariants : tabItemVariants
                    }
                    type="button"
                    onClick={() => goToStep(index)}
                    className={cn(
                      "group relative flex flex-col overflow-hidden py-4 text-left h-fit transition-all duration-200 will-change-transform",
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
                              ? reducedAccordionVariants
                              : accordionVariants
                          }
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <div className="grid pt-2 pb-4">
                            <p
                              aria-hidden="true"
                              className="invisible col-start-1 row-start-1 text-sm text-description"
                            >
                              {longestDescription}
                            </p>
                            <p className="col-start-1 row-start-1 text-sm text-description">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                    {isActive ? (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left will-change-transform"
                      >
                        <motion.div
                          key={`progress-${progressKey}`}
                          variants={progressVariants}
                          custom={progressDuration}
                          initial="initial"
                          animate="animate"
                          className="h-full w-full origin-left bg-foreground will-change-transform"
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
            <div ref={imageRef} className="relative overflow-hidden ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={
                    shouldReduceMotion
                      ? reducedContentVariants
                      : contentVariants
                  }
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="bg-red-400 rounded-md"
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    width={657}
                    height={414}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="h-auto w-full border border-[#D4D4D4] rounded-md"
                  />
                </motion.div>
              </AnimatePresence>

              {isLaunch && !shouldReduceMotion && imageSize.width > 0 ? (
                <Confetti
                  width={imageSize.width}
                  height={imageSize.height}
                  numberOfPieces={160}
                  recycle={false}
                  gravity={0.18}
                  colors={CONFETTI_COLORS}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : null}

              {isLaunch && !shouldReduceMotion && imageSize.width > 0 ? (
                <motion.div
                  variants={blurScaleVariants()}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.9,
                  }}
                >
                  <UserPresence
                    name="Client"
                    aria-hidden="true"
                    className="pointer-events-none absolute right-20 bottom-52 z-10"
                  />
                </motion.div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
