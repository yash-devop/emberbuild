export type ProcessStep = {
  title: string
  description: string | null
}

export const process = {
  eyebrow: "How it works",
  heading: "Good work starts with understanding what matters to you.",
  steps: [
    {
      title: "Discover",
      description:
        "Every business has a different story, different challenges, and a different idea of success. We take the time to understand yours, turn it into a clear direction, and bring it to life through thoughtful design and purposeful execution.",
    },
    {
      title: "Design",
      description: null,
    },
    {
      title: "Build",
      description: null,
    },
    {
      title: "Launch & hand-over",
      description: null,
    },
  ] satisfies ProcessStep[],
} as const
