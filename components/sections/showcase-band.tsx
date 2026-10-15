"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { PortfolioPreviewCard } from "@/components/sections/portfolio-preview-card";
import { showcasePreview, showcaseTabs } from "@/constants/showcase";

function ConcaveMerge({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn(
        "hidden sm:block absolute top-0 h-10 w-10 text-white",
        side === "left" ? "right-full" : "left-full -scale-x-100",
      )}
    >
      <path d="M40 0 A40 40 0 0 0 0 40 L0 0 Z" fill="currentColor" />
    </svg>
  );
}

export function ShowcaseBand() {
  const [active, setActive] = useState(showcaseTabs[0].label);

  return (
    <section aria-label="Selected work showcase" className="relative bg-black">
      <Image
        src="/images/abstract-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-90"
        loading="eager"
      />

      <div className="relative flex flex-col items-center px-5 pt-0 pb-16 sm:px-8 lg:pb-24">
        <div className="relative -mt-14 flex items-center gap-1 rounded-full sm:rounded-b-3xl bg-white px-2 py-2 shadow-sm sm:mt-0 sm:gap-2 sm:px-3 sm:py-3">
          {showcaseTabs.map((tab) => {
            const selected = tab.label === active;
            return (
              <button
                key={tab.label}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(tab.label)}
                className={cn(
                  "rounded-xl px-4 py-1.5 text-xs font-medium text-black transition-colors sm:px-5 sm:py-2 sm:text-sm",
                  selected ? "bg-neutral-200" : "hover:bg-[#F7F7F7]",
                )}
              >
                {tab.label}
              </button>
            );
          })}
          <ConcaveMerge side="left" />
          <ConcaveMerge side="right" />
        </div>

        <PortfolioPreviewCard
          title={showcasePreview.label}
          visit={showcasePreview.visit}
          poweredBy={showcasePreview.poweredBy}
          className="mt-14 w-full max-w-[1148px] sm:mt-16"
        />
      </div>
    </section>
  );
}
