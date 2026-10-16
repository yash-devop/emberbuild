import Image from "next/image";

import { cn } from "@/lib/utils";

type BrowserMockupProps = {
  className?: string;
  imageClassName?: string;
};

export function BrowserMockup({
  className,
  imageClassName,
}: BrowserMockupProps) {
  return (
    <div
      data-slot="browser-mockup"
      className={cn(
        "rounded-2xl border border-border bg-white p-3 shadow-sm",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-1.5 px-1">
        <span className="size-2.5 rounded-full bg-neutral-300" />
        <span className="size-2.5 rounded-full bg-neutral-300" />
        <span className="size-2.5 rounded-full bg-neutral-300" />
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <Image
          src="/images/abstract-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className={cn("object-cover", imageClassName)}
        />
        <span className="absolute top-4 right-4 rounded-md bg-[#68FE9D] px-2 py-1 text-[11px] leading-none font-semibold text-black">
          Go live →
        </span>
      </div>
    </div>
  );
}
