import Link from "next/link";
import { IconArrowRight, IconPhone } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ElementSelector } from "@/components/element-selector";
import { hero } from "@/constants/hero";

export function HeroSection() {
  return (
    <section id="top" className="mt-20 pb-24 sm:pt-14">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <h1 className="max-w-[742px] text-4xl leading-[1.05] font-semibold tracking-title text-balance sm:text-5xl lg:text-[52px]">
          {hero.heading.lead}{" "}
          <ElementSelector
            animate
            className="mx-0.5 max-w-full pl-1.5 pr-2 py-0.5 sm:pr-2.5 sm:pl-1.5"
          >
            <span className="text-foreground">{hero.heading.highlight}</span>
          </ElementSelector>{" "}
          {hero.heading.trail}
        </h1>

        <p className="max-w-[830px] text-base text-description sm:text-lg">
          {hero.description}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <Link href={hero.primaryCta.href}>
              <IconPhone className="size-4" aria-hidden="true" />
              {hero.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant={"secondary"}
            className="w-full rounded-full sm:w-auto group"
          >
            <Link href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <IconArrowRight
                className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
