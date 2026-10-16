export type ProcessStep = {
  title: string
  description: string | null
  image: string
  imageAlt: string
}

export const process = {
  eyebrow: "How it works",
  heading: "Good work starts with understanding what matters to you.",
  autoRotateMs: 4000,
  steps: [
    {
      title: "Discover",
      description:
        "Every business has a different story, different challenges, and a different idea of success. We take the time to understand yours, turn it into a clear direction, and bring it to life through thoughtful design and purposeful execution.",
      image: "/images/how-it-works/discovery.png",
      imageAlt: "Discovery phase - understanding your goals and strategy",
    },
    {
      title: "Design",
      description:
        "We craft clean, intentional layouts that bring clarity to your message and guide people toward action.",
      image: "/images/how-it-works/design.png",
      imageAlt: "Design phase - wireframes and visual design",
    },
    {
      title: "Build",
      description:
        "We translate design into fast, accessible, production-ready code built to perform on any device.",
      image: "/images/how-it-works/build.png",
      imageAlt: "Build phase - development and implementation",
    },
    {
      title: "Launch & hand-over",
      description:
        "We ship with confidence, handle final checks, and hand everything off with clarity so you're ready to grow.",
      image: "/images/how-it-works/launch.png",
      imageAlt: "Launch and hand-over phase",
    },
  ] satisfies ProcessStep[],
} as const
