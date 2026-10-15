import { Container } from "@/components/layout/container"
import { PricingComparison } from "@/components/sections/pricing-comparison"
import { PricingPlanCard } from "@/components/sections/pricing-plan-card"
import { SectionHeading } from "@/components/sections/section-heading"
import { pricing } from "@/constants/pricing"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.heading}
          titleClassName="max-w-[764px]"
        />

        <div className="grid gap-6 overflow-hidden rounded-2xl lg:grid-cols-2 lg:gap-0">
          {pricing.plans.map((plan) => (
            <PricingPlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <PricingComparison />
      </Container>
    </section>
  )
}
