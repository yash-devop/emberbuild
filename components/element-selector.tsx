import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

const CORNERS = [
  "-mt-1 -ml-1 top-0 left-0",
  "-mt-1 -mr-1 top-0 right-0",
  "-mb-1 -mr-1 bottom-0 right-0",
  "-mb-1 -ml-1 bottom-0 left-0",
] as const

const BORDER_LINES = [
  { position: "left-0 top-0 h-[1.5px] w-full origin-left", axis: "x", delay: 0 },
  { position: "right-0 top-0 h-full w-[1.5px] origin-top", axis: "y", delay: 150 },
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
] as const

const DRAW_X = "animate-[selector-draw-x_150ms_var(--ease-out)_both]"
const DRAW_Y = "animate-[selector-draw-y_150ms_var(--ease-out)_both]"

type ElementSelectorProps = ComponentProps<"div"> & {
  animate?: boolean
  handleClassName?: string
}

export function ElementSelector({
  children,
  animate = false,
  className,
  handleClassName,
  ...props
}: ElementSelectorProps) {
  return (
    <div
      data-slot="element-selector"
      className={cn("relative inline-block text-[#0D99FF]", className)}
      {...props}
    >
      {children}
      {BORDER_LINES.map((line) => (
        <span
          key={line.position}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute z-10 bg-current",
            line.position,
            animate &&
              cn(
                line.axis === "x" ? DRAW_X : DRAW_Y,
                "motion-reduce:animate-none"
              )
          )}
          style={animate ? { animationDelay: `${line.delay}ms` } : undefined}
        />
      ))}
      {CORNERS.map((corner, index) => (
        <span
          key={corner}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute z-20 size-2 rounded-[2px] border-[1.5px] border-current bg-background",
            corner,
            animate &&
              "animate-[selector-pop_0.4s_var(--ease-out)_both] motion-reduce:animate-none",
            handleClassName
          )}
          style={
            animate ? { animationDelay: `${450 + index * 60}ms` } : undefined
          }
        />
      ))}
    </div>
  )
}
