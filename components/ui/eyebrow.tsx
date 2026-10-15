import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Eyebrow({ className, children, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="eyebrow"
      className={cn(
        "inline-flex items-center rounded-full bg-eyebrow px-3 py-1.5 text-[11px] leading-none font-semibold tracking-[0.08em] text-black uppercase",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
