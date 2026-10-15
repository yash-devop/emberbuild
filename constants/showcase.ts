export type ShowcaseTab = {
  label: string
}

export const showcaseTabs: ShowcaseTab[] = [
  { label: "Cafes" },
  { label: "SaaS" },
  { label: "Designs" },
  { label: "Portfolio" },
]

export const showcasePreview = {
  label: "Portfolio",
  visit: "Visit: https://portfolio.emberbuild.in",
  poweredBy: "Powered By: emberbuild.in",
} as const
