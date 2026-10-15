import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function CurvedArrow({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      data-slot="curved-arrow"
      width={100}
      height={110}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("size-6", className)}
      {...props}
    >
      <path
        d="M88.8406 0.820312C105.306 26.057 111.194 82.2856 3.021 105.306M22.979 107.82L3.021 105.306L12.5011 94.6898"
        stroke="currentColor"
        strokeWidth={3}
      />
    </svg>
  )
}
