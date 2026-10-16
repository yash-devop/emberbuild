import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      data-slot="eyebrow"
      className={cn(
        "inline-flex items-center rounded-full bg-eyebrow px-3 pt-px h-6 text-[11px] leading-none tracking-[-0.5px] text-black uppercase font-medium font-mono border border-[#7C7C7C] select-none cursor-default w-fit",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
