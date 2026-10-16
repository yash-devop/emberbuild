import { Container } from "@/components/layout/container";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { PricingPlanCard } from "@/components/sections/pricing-plan-card";
import { HighlightHeading } from "@/components/sections/highlight-heading";
import { pricing } from "@/constants/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12">
        <HighlightHeading
          eyebrow={pricing.eyebrow}
          lead={pricing.heading.lead}
          highlight={pricing.heading.highlight}
          trail={pricing.heading.trail}
          titleClassName="max-w-[764px]"
        />

        <div className="grid gap-6 overflow-hidden lg:grid-cols-2 lg:gap-0 mt-12">
          {pricing.plans.map((plan) => (
            <PricingPlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <PricingComparison />
      </Container>
    </section>
  );
}
