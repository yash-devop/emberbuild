import { site } from "@/constants/site";

export const hero = {
  eyebrow: "Strategy meets craft",
  heading: {
    lead: "We",
    highlight: "design and build",
    trail: "websites that help your business stand out.",
  },
  description:
    "Thoughtfully designed, professionally built websites for growing businesses. Work directly with the person building your site, with clear deliverables and website packages starting at ₹12,000.",
  primaryCta: {
    label: "Book a call",
    href: site.bookCallUrl,
  },
  secondaryCta: {
    label: "Explore our work",
    href: "#work",
  },
} as const
