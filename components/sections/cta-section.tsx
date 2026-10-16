"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconCalendar, type Icon } from "@tabler/icons-react";
import { motion, useInView, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/layout/wordmark";
import { Button } from "@/components/ui/button";
import { cta, type CtaActionIcon, type CtaActionTone } from "@/constants/cta";
import { cn } from "@/lib/utils";
import { darkSurface } from "@/lib/styles";
import {
  blurScaleContainerVariants,
  blurScaleItemVariants,
  blurScaleReducedContainerVariants,
  blurScaleReducedVariants,
} from "@/lib/motion/blur-scale";

const actionToneClasses: Record<CtaActionTone, string> = {
  solid: cn(darkSurface, "text-white hover:brightness-110"),
  outline: "bg-white text-primary hover:bg-white/90",
};

const actionIcons: Record<CtaActionIcon, Icon> = {
  calendar: IconCalendar,
};

export function CtaSection() {
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion ?? false;
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, amount: 0.4 });

  const containerVariants = shouldReduceMotion
    ? blurScaleReducedContainerVariants
    : blurScaleContainerVariants({ stagger: 0.12, delay: 0.15 });
  const actionsContainerVariants = shouldReduceMotion
    ? blurScaleReducedContainerVariants
    : blurScaleContainerVariants({ stagger: 0.1, delay: 0.1 });
  const itemVariants = shouldReduceMotion
    ? blurScaleReducedVariants
    : blurScaleItemVariants({ duration: 0.55 });

  return (
    <section id="contact" className="pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden ">
          <Image
            src="/images/abstract-bg.webp"
            alt=""
            fill
            sizes="(min-width: 1204px) 1204px, 100vw"
            className="object-cover brightness-75"
          />

          <motion.div
            ref={contentRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex min-h-[420px] flex-col justify-between gap-16 p-8 sm:p-12 lg:min-h-[494px]"
          >
            <motion.div variants={itemVariants} className="w-fit">
              <Wordmark className="text-xl text-white" />
            </motion.div>

            <motion.div
              variants={actionsContainerVariants}
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
            >
              <motion.h2
                variants={itemVariants}
                className="max-w-[480px] text-3xl leading-[1.1] font-semibold tracking-title text-balance text-white sm:text-4xl lg:text-[42px] text-pretty"
              >
                {cta.heading}
              </motion.h2>

              <motion.div
                variants={actionsContainerVariants}
                className="flex gap-4 flex-row"
              >
                {cta.actions.map((action, index) => {
                  const ActionIcon = action.icon
                    ? actionIcons[action.icon]
                    : null;

                  return (
                    <motion.div key={index} variants={itemVariants}>
                      <Button
                        asChild
                        size="lg"
                        className={cn(
                          "w-fit rounded-full sm:w-auto",
                          actionToneClasses[action.tone],
                        )}
                      >
                        <Link
                          href={action.href}
                          target={action.external ? "_blank" : undefined}
                          rel={action.external ? "noreferrer" : undefined}
                        >
                          {ActionIcon ? (
                            <ActionIcon className="size-4" aria-hidden="true" />
                          ) : null}
                          {action.label}
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
