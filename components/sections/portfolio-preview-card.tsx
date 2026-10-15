import Image from "next/image"
import { IconWorld } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

type PortfolioPreviewCardProps = {
  title: string
  visit: string
  poweredBy: string
  className?: string
  priority?: boolean
}

export function PortfolioPreviewCard({
  title,
  visit,
  poweredBy,
  className,
  priority = false,
}: PortfolioPreviewCardProps) {
  return (
    <div
      data-slot="portfolio-preview-card"
      className={cn(
        "flex flex-col items-center gap-3 overflow-hidden rounded-2xl bg-black px-6 py-8 text-center text-white sm:px-10 sm:py-10",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-lg font-medium">
        <IconWorld className="size-5" aria-hidden="true" />
        {title}
      </span>
      <p className="text-sm text-white/80">{visit}</p>
      <p className="text-sm text-white/80">{poweredBy}</p>

      <div className="relative mt-3 aspect-[839/488] w-full max-w-[839px] overflow-hidden rounded-xl bg-neutral-900">
        <Image
          src="/images/abstract-bg.webp"
          alt={`${title} preview`}
          fill
          sizes="(min-width: 1024px) 839px, 100vw"
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  )
}
