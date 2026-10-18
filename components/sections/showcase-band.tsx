"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { showcaseTabs, showcaseWorks } from "@/constants/showcase";
import { Marquee } from "@/components/ui/marquee";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const AUTOPLAY_DELAY_MS = 3600;

function ConcaveMerge({
  side,
  className,
}: {
  side: "left" | "right";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      shapeRendering="geometricPrecision"
      className={cn(
        "hidden sm:block absolute top-0 h-10 w-10 text-white",
        side === "left"
          ? "translate-x-[0.5px] right-full rotate-90"
          : "left-full -scale-x-100 rotate-270 -translate-x-[0.5px]",
        className,
      )}
    >
      <path
        d="M40 0 A40 40 0 0 0 0 40 L0 0 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1}
      />
    </svg>
  );
}

export function ShowcaseBand() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [api, setApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  const [autoplay] = useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY_MS,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const plugins = useMemo(
    () => (shouldReduceMotion ? [] : [autoplay]),
    [shouldReduceMotion, autoplay],
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      setSelected(index);
      thumbApi?.scrollTo(index);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, thumbApi]);

  return (
    <section
      id="work"
      aria-label="Selected work showcase"
      className="relative scroll-mt-24 bg-black"
    >
      <Image
        src="/images/abstract-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        fetchPriority="high"
      />

      <div className="relative flex flex-col items-center px-5 pt-0 pb-16 sm:px-8 lg:pb-24">
        <div className="relative -mt-14 w-[min(100%,34rem)] bg-white p-2 sm:shadow-sm sm:mt-0 sm:rounded-t-none sm:rounded-b-3xl sm:p-3">
          <Marquee gap={8} duration={40} fade={28}>
            {showcaseTabs.map((tab) => (
              <span
                key={tab.label}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-3xl text-neutral-700",
                )}
              >
                {tab.label}
              </span>
            ))}
          </Marquee>
          <ConcaveMerge side="left" />
          <ConcaveMerge side="right" />
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "center" }}
          plugins={plugins}
          className="mt-14 max-w-[1400px] aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F7F7F7] sm:aspect-video sm:mt-16 lg:aspect-[16/9] xl:h-[720px] [&>div]:h-full"
        >
          <CarouselContent className="ml-0 h-full">
            {showcaseWorks.map((work, index) => (
              <CarouselItem key={work.src} className="h-full pl-0">
                <div className="relative h-full w-full p-5 sm:p-10 lg:p-14">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, min(1400px, 100vw)"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 size-10 border-0 bg-white text-[#202020] shadow-[inset_0_0_0_1px_#bdbdbd,inset_0_3px_3px_0_#88888856,inset_0_-3px_3px_0_#88888856] hover:bg-white hover:text-[#202020] sm:right-5 sm:size-12" />
          <CarouselNext className="right-3 size-10 border-0 bg-white text-[#202020] shadow-[inset_0_0_0_1px_#bdbdbd,inset_0_3px_3px_0_#88888856,inset_0_-3px_3px_0_#88888856] hover:bg-white hover:text-[#202020] sm:right-5 sm:size-12" />
        </Carousel>

        <Carousel
          setApi={setThumbApi}
          opts={{ align: "center", dragFree: true, containScroll: "keepSnaps" }}
          className="mt-6 w-full max-w-[1400px]"
        >
          <CarouselContent className="items-center justify-center-safe">
            {showcaseWorks.map((work, index) => (
              <CarouselItem key={work.src} className="basis-auto">
                <button
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Show ${work.alt}`}
                  aria-current={index === selected ? "true" : undefined}
                  className={cn(
                    "relative h-[58px] w-[94px] overflow-hidden rounded-lg transition-all duration-300 ease-out motion-reduce:transition-none sm:h-[76px] sm:w-[124px]",
                    index === selected
                      ? "ring-2 ring-white scale-105"
                      : "opacity-60 hover:opacity-100",
                  )}
                >
                  <Image
                    src={work.src}
                    alt=""
                    fill
                    sizes="124px"
                    className="object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
