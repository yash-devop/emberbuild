import type * as React from "react";

import { IconCheck } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkBadgeVariants = cva(
  "mt-px grid shrink-0 place-items-center rounded-full text-primary",
  {
    variants: {
      variant: {
        default: "border-2 border-primary bg-primary/30",
        table: "mx-auto border border-primary bg-primary/20",
      },
      size: {
        sm: "size-5.5 [&>svg]:size-3.5",
        md: "size-6 [&>svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

export function CheckBadge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof checkBadgeVariants>) {
  return (
    <span
      data-slot="check-badge"
      data-variant={variant}
      className={cn(checkBadgeVariants({ variant, size }), className)}
      {...props}
    >
      <IconCheck aria-hidden="true" />
    </span>
  );
}

export { checkBadgeVariants };
