"use client";

import { Fragment, useState, type ReactNode } from "react";
import Link from "next/link";
import { IconArrowRight, IconPhone } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ElementSelector } from "@/components/element-selector";
import { hero } from "@/constants/hero";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const WORD_STAGGER = 0.05;
const WORD_DURATION = 0.55;
const WORD_BLUR = 8;
const WORD_Y = -14;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: WORD_STAGGER, delayChildren: 0.1 },
  },
};

const reducedContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: WORD_Y, filter: `blur(${WORD_BLUR}px)` },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: WORD_DURATION, ease: EASE_OUT },
  },
};

const reducedWordVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

function HeadingWord({
  children,
  reduced,
  className,
  onComplete,
}: {
  children: ReactNode;
  reduced: boolean;
  className?: string;
  onComplete?: () => void;
}) {
  return (
    <motion.span
      variants={reduced ? reducedWordVariants : wordVariants}
      onAnimationComplete={onComplete}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;
  const [selectorReady, setSelectorReady] = useState(false);

  const selectorVisible = selectorReady || shouldReduceMotion;

  const leadWords = hero.heading.lead.split(" ");
  const highlightWords = hero.heading.highlight.split(" ");
  const trailWords = hero.heading.trail.split(" ");

  return (
    <section id="top" className="mt-20 pb-24 sm:pt-14">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <motion.h1
          variants={shouldReduceMotion ? reducedContainerVariants : containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[742px] text-4xl leading-[1.05] font-semibold tracking-title text-balance sm:text-5xl lg:text-[52px]"
        >
          {leadWords.map((word) => (
            <HeadingWord key={`lead-${word}`} reduced={shouldReduceMotion}>
              {word}
            </HeadingWord>
          ))}
          {" "}
          <ElementSelector
            animate={selectorVisible}
            pending={!selectorVisible}
            className="mx-0.5 max-w-full pl-1.5 pr-2 py-0.5 sm:pr-2.5 sm:pl-1.5"
          >
            {highlightWords.map((word, index) => (
              <Fragment key={`highlight-${word}`}>
                <HeadingWord
                  reduced={shouldReduceMotion}
                  className="text-foreground"
                >
                  {word}
                </HeadingWord>
                {index < highlightWords.length - 1 ? " " : null}
              </Fragment>
            ))}
          </ElementSelector>
          {" "}
          {trailWords.map((word, index) => (
            <Fragment key={`trail-${index}-${word}`}>
              <HeadingWord
                reduced={shouldReduceMotion}
                onComplete={
                  index === trailWords.length - 1
                    ? () => setSelectorReady(true)
                    : undefined
                }
              >
                {word}
              </HeadingWord>
              {index < trailWords.length - 1 ? " " : null}
            </Fragment>
          ))}
        </motion.h1>

        <p className="max-w-[830px] text-base text-description sm:text-lg">
          {hero.description}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <Link href={hero.primaryCta.href}>
              <IconPhone className="size-4" aria-hidden="true" />
              {hero.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant={"secondary"}
            className="w-full rounded-full sm:w-auto group"
          >
            <Link href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <IconArrowRight
                className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
