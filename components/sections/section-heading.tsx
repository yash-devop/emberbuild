import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/ui/eyebrow"

type SectionHeadingProps = {
  eyebrow?: string
  eyebrowTone?: "pill" | "plain"
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  eyebrowTone = "pill",
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      data-slot="section-heading"
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        eyebrowTone === "pill" ? (
          <Eyebrow>{eyebrow}</Eyebrow>
        ) : (
          <span className="text-sm font-semibold tracking-[0.08em] text-primary uppercase">
            {eyebrow}
          </span>
        )
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl leading-[1.05] font-semibold tracking-title sm:text-4xl lg:text-[52px]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base text-description sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
