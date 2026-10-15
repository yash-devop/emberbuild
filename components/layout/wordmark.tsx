import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Wordmark({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
      data-slot="wordmark"
      className={cn("font-semibold tracking-title text-lg", className)}
      {...props}
    >
      <span>ember</span>
      <span className="text-primary">build.</span>
    </h1>
  );
}
