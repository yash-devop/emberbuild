"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";

import { SectionHeading } from "@/components/sections/section-heading";
import { ElementSelector } from "@/components/element-selector";

type HighlightHeadingProps = {
  lead?: string;
  highlight: string;
  trail?: string;
  eyebrow?: string;
  eyebrowTone?: "pill" | "plain";
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  selectorClassName?: string;
};

export function HighlightHeading({
  lead,
  highlight,
  trail,
  eyebrow,
  eyebrowTone,
  description,
  align,
  className,
  titleClassName,
  selectorClassName = "mx-0.5 px-1 py-0.5 sm:px-1.5",
}: HighlightHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.9 });

  return (
    <div ref={ref}>
      <SectionHeading
        eyebrow={eyebrow}
        eyebrowTone={eyebrowTone}
        description={description}
        align={align}
        className={className}
        titleClassName={titleClassName}
        title={
          <>
            {lead ? `${lead} ` : null}
            <ElementSelector animate={inView} className={selectorClassName}>
              <span className="text-foreground">{highlight}</span>
            </ElementSelector>
            {trail ? ` ${trail}` : null}
          </>
        }
      />
    </div>
  );
}
