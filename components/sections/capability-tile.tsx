import Image from "next/image"
import {
  IconBotId,
  IconCode,
  IconPaint,
  IconUserScan,
  type Icon,
} from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import type { CapabilityIcon } from "@/constants/capabilities"

const icons: Record<CapabilityIcon, Icon> = {
  code: IconCode,
  paint: IconPaint,
  userScan: IconUserScan,
  bot: IconBotId,
}

type CapabilityTileProps = {
  label: string
  icon: CapabilityIcon
  className?: string
}

export function CapabilityTile({ label, icon, className }: CapabilityTileProps) {
  const Icon = icons[icon]

  return (
    <div
      className={cn(
        "relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl bg-black p-5 text-white",
        className
      )}
    >
      <Image
        src="/images/abstract-bg.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 45vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <Icon className="relative size-6" aria-hidden="true" />
      <span className="relative max-w-[178px] text-lg leading-tight font-medium">
        {label}
      </span>
    </div>
  )
}
