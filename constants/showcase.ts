export type ShowcaseTab = {
  label: string;
};

export const showcaseTabs: ShowcaseTab[] = [
  { label: "Cafes" },
  { label: "SaaS" },
  { label: "Designs" },
  { label: "Portfolio" },
];

export const showcasePreview = {
  label: "Portfolio",
  visit: "Visit: https://portfolio.emberbuild.in",
  poweredBy: "Powered By: emberbuild.in",
} as const;

export type ShowcaseWork = {
  src: string;
  alt: string;
};

export const showcaseWorks: ShowcaseWork[] = [
  {
    src: "/images/work/ai-template-showcase.webp",
    alt: "AI Template website design showcase",
  },
  {
    src: "/images/work/cobalt-showcase.webp",
    alt: "Cobalt website design showcase",
  },
  {
    src: "/images/work/culture-esp-showcase.webp",
    alt: "Culture ESP website design showcase",
  },
  {
    src: "/images/work/ivoomi-showcase.webp",
    alt: "iVoomi website design showcase",
  },
  {
    src: "/images/work/realtime-showcase.webp",
    alt: "Realtime website design showcase",
  },
  {
    src: "/images/work/script-it-showcase.webp",
    alt: "Script It website design showcase",
  },
  {
    src: "/images/work/script-it-showcase-2.webp",
    alt: "Script It dashboard showcase",
  },
  {
    src: "/images/work/tinylogs-showcase.webp",
    alt: "TinyLogs website design showcase",
  },
];
