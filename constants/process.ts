export type ProcessStep = {
  title: string;
  description: string | null;
  image: string;
  imageAlt: string;
};

export const process = {
  eyebrow: "How it works",
  heading: {
    lead: "Good work starts with understanding",
    highlight: "what matters to you.",
  },
  autoRotateMs: 4000,
  steps: [
    {
      title: "Discover",
      description:
        "Every business has a unique story and vision. We understand yours, shape the right direction, and bring it to life with thoughtful design.",
      image: "/images/how-it-works/discovery.webp",
      imageAlt: "Discovery phase - understanding your goals and strategy",
    },
    {
      title: "Design",
      description:
        "We craft clean, intentional layouts that bring clarity to your message and guide people toward action.",
      image: "/images/how-it-works/design.webp",
      imageAlt: "Design phase - wireframes and visual design",
    },
    {
      title: "Build",
      description:
        "We translate design into fast, accessible, production-ready code built to perform on any device.",
      image: "/images/how-it-works/build.webp",
      imageAlt: "Build phase - development and implementation",
    },
    {
      title: "Launch & hand-over",
      description:
        "We ship with confidence, handle final checks, and hand everything off with clarity so you're ready to grow.",
      image: "/images/how-it-works/launch.webp",
      imageAlt: "Launch and hand-over phase",
    },
  ] satisfies ProcessStep[],
} as const;
