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
    src: "/images/work/ai-template-showcase.jpg",
    alt: "AI Template website design showcase",
  },
  {
    src: "/images/work/cobalt-showcase.jpg",
    alt: "Cobalt website design showcase",
  },
  {
    src: "/images/work/culture-esp-showcase.jpg",
    alt: "Culture ESP website design showcase",
  },
  {
    src: "/images/work/ivoomi-showcase.jpg",
    alt: "iVoomi website design showcase",
  },
  {
    src: "/images/work/realtime-showcase.jpg",
    alt: "Realtime website design showcase",
  },
  {
    src: "/images/work/script-it-showcase.png",
    alt: "Script It website design showcase",
  },
  {
    src: "/images/work/script-it-showcase-2.png",
    alt: "Script It dashboard showcase",
  },
  {
    src: "/images/work/tinylogs-showcase.png",
    alt: "TinyLogs website design showcase",
  },
];
