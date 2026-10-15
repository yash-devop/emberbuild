import Image from "next/image"
import Link from "next/link"
import { IconPhone } from "@tabler/icons-react"

import { Container } from "@/components/layout/container"
import { Wordmark } from "@/components/layout/wordmark"
import { Button } from "@/components/ui/button"
import { cta } from "@/constants/cta"

export function CtaSection() {
  return (
    <section id="contact" className="pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <Image
            src="/images/abstract-bg.webp"
            alt=""
            fill
            sizes="(min-width: 1204px) 1204px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          <div className="relative flex min-h-[420px] flex-col justify-between gap-16 p-8 sm:p-12 lg:min-h-[494px]">
            <Wordmark className="text-xl text-white" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-[555px] text-3xl leading-[1.1] font-semibold tracking-title text-balance text-white sm:text-4xl lg:text-[42px]">
                {cta.heading}
              </h2>

              <div className="flex flex-col gap-4 sm:flex-row">
                {cta.actions.map((action, index) => (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    className="w-full rounded-lg bg-white text-primary hover:bg-white/90 sm:w-auto"
                  >
                    <Link href={action.href}>
                      <IconPhone className="size-4" aria-hidden="true" />
                      {action.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
