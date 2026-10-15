import Link from "next/link"
import { IconCheck } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/ui/eyebrow"
import type { PricingPlan } from "@/constants/pricing"

export function PricingPlanCard({ plan }: { plan: PricingPlan }) {
  const highlighted = Boolean(plan.badge)

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl lg:rounded-none",
        highlighted ? "bg-[#F3F1FF]" : "bg-white"
      )}
    >
      <div className="flex flex-1 flex-col gap-7 p-6 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-[0.06em] text-primary uppercase">
            {plan.name}
          </span>
          {plan.badge ? <Eyebrow>{plan.badge}</Eyebrow> : null}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-semibold tracking-title sm:text-[44px]">
              {plan.price}
            </span>
            <span className="text-base text-muted-foreground">
              {plan.cadence}
            </span>
          </div>
          <p className="text-base text-[#757575]">{plan.tagline}</p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs font-medium tracking-[0.06em] text-muted-foreground uppercase">
            What&apos;s included
          </span>
          <ul className="flex flex-col gap-5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-px grid size-[22px] shrink-0 place-items-center rounded-md bg-primary text-white">
                  <IconCheck className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm text-[#3F3F3F]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={plan.cta.href}
        className={cn(
          "flex h-[62px] items-center justify-center px-6 text-center text-sm font-semibold tracking-[0.06em] uppercase transition-colors",
          highlighted
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-black text-white hover:bg-neutral-800"
        )}
      >
        {plan.cta.label}
      </Link>
    </article>
  )
}
