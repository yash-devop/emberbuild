import { site } from "@/constants/site";

export const devices = {
  eyebrow: "Our work",
  heading: {
    highlight: "Optimized",
    trail: "for every screen size.",
  },
  description:
    "We build responsive by default. Your site, app, or product looks and performs great on any device.",
  stat: {
    value: ">60%",
    description:
      "of your users will visit on mobile first. We design & build for that reality.",
    cta: {
      label: "Get a project estimate",
      href: site.bookCallUrl,
    },
  },
} as const
