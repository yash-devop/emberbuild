import Image from "next/image";
import Link from "next/link";
import { IconBolt } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { HighlightHeading } from "@/components/sections/highlight-heading";
import { CurvedArrow } from "@/components/icons/curved-arrow";
import { Button } from "@/components/ui/button";
import { devices } from "@/constants/devices";

export function DevicesSection() {
  return (
    <section id="devices" className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12 sm:gap-6 md:gap-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <HighlightHeading
            eyebrow={devices.eyebrow}
            highlight={devices.heading.highlight}
            trail={devices.heading.trail}
            description={devices.description}
            titleClassName="max-w-[658px]"
            className="max-w-[830px]"
          />

          <div className="flex w-full max-w-[213px] flex-col gap-5">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[52px] leading-none font-semibold tracking-title">
                {devices.stat.value}
              </span>
              <CurvedArrow className="mt-2 size-14 text-black" />
            </div>
            <p className="text-sm text-description">
              {devices.stat.description}
            </p>
            <Button asChild size="lg" className="w-full rounded-full">
              <Link href={devices.stat.cta.href}>
                <IconBolt className="size-5" aria-hidden="true" />
                {devices.stat.cta.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 items-end gap-4 sm:grid-cols-4">
          <div className="relative col-span-2 aspect-[436/254] overflow-hidden rounded-2xl border border-border bg-neutral-100">
            <Image
              src="/images/optimized-screen-desktop.webp"
              alt="Desktop preview"
              fill
              sizes="(min-width: 640px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[330/441] overflow-hidden rounded-2xl border border-border bg-neutral-100">
            <Image
              src="/images/optimized-screen-tablet.webp"
              alt="Tablet preview"
              fill
              sizes="(min-width: 640px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[142/307] overflow-hidden rounded-2xl border border-border bg-neutral-100">
            <Image
              src="/images/optimized-screen-mobile.webp"
              alt="Mobile preview"
              fill
              sizes="(min-width: 640px) 12vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
