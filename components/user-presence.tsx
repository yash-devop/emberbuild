import type { ComponentProps } from "react";

import { Cursor } from "@/components/icons/cursor";
import { cn } from "@/lib/utils";

type UserPresenceProps = ComponentProps<"div"> & {
  name: string;
  labelClassName?: string;
};

export function UserPresence({
  name,
  className,
  labelClassName,
  ...props
}: UserPresenceProps) {
  return (
    <div
      data-slot="user-presence"
      className={cn("inline-flex flex-col items-start", className)}
      {...props}
    >
      <Cursor className="ml-1" />
      <span
        className={cn(
          "inline-flex w-fit items-center rounded-full bg-[#8570FF] px-2.5 py-1 text-xs font-medium text-white shadow-sm ml-4",
          labelClassName,
        )}
      >
        {name}
      </span>
    </div>
  );
}
