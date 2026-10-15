export type FaqItem = {
  question: string
  answer: string
}

export const faq = {
  eyebrow: "FAQs",
  heading: "Questions",
  description:
    "If you have any other questions or need more information, feel free to reach out directly.",
  items: [
    {
      question: "What tech stack do we use ?",
      answer:
        "We build with modern, fast tooling — Next.js and React for the interface, Tailwind CSS for styling, and TypeScript for reliability. Every site is deployed on a global CDN so it loads quickly, wherever your visitors are.",
    },
    {
      question: "How long does a project takes ?",
      answer:
        "Most Starter websites take around one to two weeks and Business websites two to three weeks, assuming content is ready and feedback comes back promptly.",
    },
    {
      question: "How do you communicate progress during a project?",
      answer:
        "You get a shared project board and regular updates. We work in short cycles and share live preview links you can click through at any time.",
    },
    {
      question: "What happens if I need changes after delivery?",
      answer:
        "Every plan includes post-launch support — seven days for Starter and fourteen for Business. After that, larger changes can be handled through a simple, clearly scoped follow-up.",
    },
    {
      question: "How does pricing work ?",
      answer:
        "Pricing is a straightforward one-time payment: ₹12,000 for Starter and ₹24,000 for Business. No retainers and no hidden fees — you know the full cost before we begin.",
    },
  ] satisfies FaqItem[],
} as const
