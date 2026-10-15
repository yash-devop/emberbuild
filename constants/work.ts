export type WorkProject = {
  title: string
  visit: string
  poweredBy: string
}

export const work = {
  eyebrow: "Our work",
  heading: "A closer look at what we create.",
  cta: {
    label: "View more",
    href: "https://portfolio.emberbuild.in",
  },
  projects: [
    {
      title: "Portfolio",
      visit: "Visit: https://portfolio.emberbuild.in",
      poweredBy: "Powered By: emberbuild.in",
    },
    {
      title: "Portfolio",
      visit: "Visit: https://portfolio.emberbuild.in",
      poweredBy: "Powered By: emberbuild.in",
    },
    {
      title: "Portfolio",
      visit: "Visit: https://portfolio.emberbuild.in",
      poweredBy: "Powered By: emberbuild.in",
    },
  ] satisfies WorkProject[],
} as const
