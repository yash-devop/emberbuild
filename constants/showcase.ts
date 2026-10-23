export type ShowcaseTab = {
  label: string;
};

export const showcaseTabs: ShowcaseTab[] = [
  { label: "Custom Design" },
  { label: "Conversion Focused" },
  { label: "Fast & Modern" },
  { label: "Built to Grow" },
  { label: "Websites From ₹12,000" },
  { label: "Launch in 1–3 Weeks" },
  { label: "Work Directly With the Builder" },
  { label: "100% Custom, No Templates" },
  { label: "Book a Strategy Call" },
  { label: "Post-Launch Support Included" },
];

export const showcasePreview = {
  label: "Portfolio",
  visit: "Visit: https://portfolio.emberbuild.in",
  poweredBy: "Powered By: emberbuild.in",
} as const;

export type ShowcaseWork = {
  src: string;
  alt: string;
  title: string;
  href?: string;
};

export const showcaseWorks: ShowcaseWork[] = [
  {
    src: "/images/work/boucherie-showcase.webp",
    alt: "Boucherie website design showcase",
    title: "Boucherie",
    href: "https://cafesample2.emberbuild.in",
  },
  {
    src: "/images/work/culture-esp-showcase.webp",
    alt: "Culture ESP website design showcase",
    title: "Culture ESP",
    href: "https://cafesample1.emberbuild.in",
  },
  {
    src: "/images/work/ai-template-showcase.webp",
    alt: "AI Template website design showcase",
    title: "AI Template",
  },
  {
    src: "/images/work/cobalt-showcase.webp",
    alt: "Cobalt website design showcase",
    title: "Cobalt",
  },
  {
    src: "/images/work/ivoomi-showcase.webp",
    alt: "iVoomi website design showcase",
    title: "iVoomi",
    href: "https://ivoomienergy.com/",
  },
  {
    src: "/images/work/realtime-showcase.webp",
    alt: "Realtime website design showcase",
    title: "Realtime",
  },
  {
    src: "/images/work/script-it-showcase.webp",
    alt: "Script It website design showcase",
    title: "Script It",
  },
  {
    src: "/images/work/script-it-showcase-2.webp",
    alt: "Script It dashboard showcase",
    title: "Script It",
  },
  {
    src: "/images/work/tinylogs-showcase.webp",
    alt: "TinyLogs website design showcase",
    title: "TinyLogs",
  },
];
