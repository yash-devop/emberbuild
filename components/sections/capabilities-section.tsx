import { Container } from "@/components/layout/container"
import { CapabilityTile } from "@/components/sections/capability-tile"
import { capabilities } from "@/constants/capabilities"

export function CapabilitiesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <Container className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-between gap-10 rounded-2xl bg-neutral-100 p-8 lg:p-10">
          <span className="text-sm font-semibold tracking-[0.08em] text-primary uppercase">
            {capabilities.eyebrow}
          </span>
          <h2 className="max-w-[499px] text-balance text-3xl leading-[1.05] font-semibold tracking-title sm:text-4xl lg:text-[48px]">
            {capabilities.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {capabilities.services.map((service) => (
            <CapabilityTile
              key={service.label}
              label={service.label}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
