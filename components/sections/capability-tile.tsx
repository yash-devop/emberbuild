import Image from "next/image";
import {
  IconBotId,
  IconCode,
  IconPaint,
  IconUserScan,
  type Icon,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import type { CapabilityIcon } from "@/constants/capabilities";

const icons: Record<CapabilityIcon, Icon> = {
  code: IconCode,
  paint: IconPaint,
  userScan: IconUserScan,
  bot: IconBotId,
};

type CapabilityTileProps = {
  label: string;
  icon: CapabilityIcon;
  className?: string;
};

export function CapabilityTile({
  label,
  icon,
  className,
}: CapabilityTileProps) {
  const Icon = icons[icon];

  return (
    <div
      className={cn(
        "relative flex min-h-[190px] flex-col justify-between overflow-hidden p-5 text-black border border-[#c8c8c8]",
        className,
      )}
    >
      <Icon className="relative size-6" aria-hidden="true" />
      <span className="relative max-w-[178px] text-lg leading-tight font-medium">
        {label}
      </span>
    </div>
  );
}
