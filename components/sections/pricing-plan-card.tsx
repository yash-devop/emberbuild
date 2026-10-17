import Link from "next/link";

import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckBadge } from "@/components/ui/check-badge";
import type { PricingPlan } from "@/constants/pricing";

export function PricingPlanCard({ plan }: { plan: PricingPlan }) {
  const highlighted = Boolean(plan.badge);

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden border-[#c8c8c8] border lg:border-t lg:first:border-l lg:last:border-x ",
        highlighted ? "bg-primary/15" : "bg-white",
      )}
    >
      <div className="flex flex-1 flex-col gap-7 p-6 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-[0.06em] text-primary uppercase font-mono">
            {plan.name}
          </span>
          {plan.badge ? <Eyebrow>{plan.badge}</Eyebrow> : null}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-semibold tracking-title sm:text-[44px] tabular-nums font-mono">
              {plan.price}
            </span>
            <span className="text-base text-muted-foreground">
              {plan.cadence}
            </span>
          </div>
          <p className="text-base text-[#757575] pt-2">{plan.tagline}</p>
        </div>

        <div className="flex flex-col gap-5 mt-8">
          <span className="text-xs font-medium tracking-[0.06em] text-muted-foreground uppercase font-mono">
            What&apos;s included
          </span>
          <ul className="flex flex-col justify-center gap-5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckBadge size={"sm"} />
                <span className="text-sm text-neutral-700 font-medium mt-px">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={plan.cta.href}
        className={cn(
          "mt-8 flex h-14 items-center justify-center px-6 text-center text-sm font-normal tracking-[0.06em] uppercase transition-colors border lg:border-t lg:first:border-l lg:last:border-r border-[#c8c8c8] font-mono",
          highlighted
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-black text-white hover:bg-neutral-800",
        )}
      >
        {plan.cta.label}
      </Link>
    </article>
  );
}
