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
import { footer } from "@/constants/footer";
import { site } from "@/constants/site";

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "EmberBuild",
      alternateName: "Emberbuild",
      url: site.url,
      description: site.description,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/favicons/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      sameAs: footer.socials.map((social) => social.href).filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: "EmberBuild",
      alternateName: "Emberbuild",
      url: site.url,
      description: site.description,
      inLanguage: "en-IN",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: site.name,
      description: site.description,
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": organizationId,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
