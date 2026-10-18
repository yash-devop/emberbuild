import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DevicesSection } from "@/components/sections/devices-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ShowcaseBand } from "@/components/sections/showcase-band";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ShowcaseBand />
        <ProcessSection />
        {/* <WorkSection /> */}
        <CapabilitiesSection />
        <DevicesSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
