import { whatsappLink } from "@/constants/site"

export type PricingPlan = {
  name: string
  badge: string | null
  price: string
  cadence: string
  tagline: string
  cta: {
    label: string
    href: string
  }
  features: string[]
}

export type ComparisonCell = string | true

export type ComparisonRow = {
  label: string
  starter: ComparisonCell
  business: ComparisonCell
}

export const pricing = {
  eyebrow: "Pricing",
  heading: {
    lead: "Straightforward,",
    highlight: "one-time pricing",
    trail: "that works for you and your business.",
  },
  plans: [
    {
      name: "Starter Plan",
      badge: null,
      price: "₹12,000",
      cadence: "One-time payment",
      tagline: "For small businesses starting online",
      cta: {
        label: "Choose Starter",
        href: whatsappLink(
          "Hi Emberbuild ! I'm interested in build a website for my business and wanted the Starter plan (₹12,000). I'd like to discuss my requirements and pricing.",
        ),
      },
      features: [
        "Up to 3 pages",
        "Standard custom design & Mobile-responsive design",
        "Domain connection & HTTPS",
        "Hosting & deployment setup",
        "Basic SEO & Google indexing",
        "Contact form & WhatsApp integration",
        "Google Maps & social links",
        "2 revision rounds",
        "7 days of post-launch support",
      ],
    },
    {
      name: "Business Plan",
      badge: "Recommended",
      price: "₹24,000",
      cadence: "One-time payment",
      tagline: "Businesses wanting a more complete website",
      cta: {
        label: "Choose Business",
        href: whatsappLink(
          "Hi Emberbuild ! I'm interested in build a website for my business and wanted the Business plan (₹24,000). I'd like to discuss my requirements and pricing.",
        ),
      },
      features: [
        "Up to 5 custom-designed pages",
        "Premium custom UI/UX design & responsive design",
        "Google Reviews embed/widget",
        "Google Analytics 4 (GA4) setup",
        "Google Tag Manager, if required",
        "Basic conversion tracking for agreed form/CTA events",
        "Sitemap & indexing setup",
        "2 revision rounds",
        "14 days of post-launch support",
      ],
    },
  ] satisfies PricingPlan[],
  comparison: {
    columns: ["Starter Plan", "Business Plan"],
    rows: [
      { label: "Web pages", starter: "Up to 3 pages", business: "Up to 5 pages" },
      {
        label: "Custom UI/UX design",
        starter: "Standard custom design",
        business: "Premium custom design",
      },
      { label: "Mobile-responsive design", starter: true, business: true },
      { label: "SSL / HTTPS", starter: true, business: true },
      { label: "Domain connection", starter: true, business: true },
      { label: "Domain registration", starter: true, business: true },
      { label: "Hosting / deployment", starter: true, business: true },
      {
        label: "Hosting period",
        starter: "First year, subject to plan terms",
        business: "First year, subject to plan terms",
      },
      {
        label: "Basic performance optimization",
        starter: true,
        business: true,
      },
      { label: "Basic on-page SEO", starter: true, business: true },
      {
        label: "Sitemap & indexing setup",
        starter: "Basic",
        business: true,
      },
      { label: "Contact form / CTA", starter: true, business: true },
      { label: "WhatsApp click-to-chat", starter: true, business: true },
      { label: "Social media links", starter: true, business: true },
      { label: "Google Maps integration", starter: true, business: true },
      {
        label: "Google Reviews",
        starter: "Link to Google reviews",
        business: "Review embed/widget ( third party fees)",
      },
      { label: "Google Analytics 4 (GA4)", starter: "-", business: true },
      { label: "Google Tag Manager (GTM)", starter: "-", business: true },
      {
        label: "Basic conversion tracking",
        starter: "-",
        business: "Agreed form/CTA events",
      },
      { label: "Revisions", starter: "2 rounds", business: "2 rounds" },
      { label: "Post-launch support", starter: "7 days", business: "14 days" },
      {
        label: "Source code & handover",
        starter: "Included after final payment",
        business: "Included after final payment",
      },
      {
        label: "Accounts Handover",
        starter: "Included after final payment",
        business: "Included after final payment",
      },
      {
        label: "Delivery Time",
        starter: "1-2 week business days",
        business: "2-3 week business days",
      },
    ] satisfies ComparisonRow[],
  },
} as const
