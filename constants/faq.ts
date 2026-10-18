export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  eyebrow: "FAQs",
  heading: "Questions",
  description:
    "If you have any other questions or need more information, feel free to reach out directly.",
  items: [
    {
      question: "What tech stack do we use?",
      answer:
        "Next.js and React for the interface, Tailwind CSS for styling, and TypeScript for reliability. Every site is deployed on a global CDN, so it loads fast wherever your visitors are.",
    },
    {
      question: "How long does a project takes?",
      answer:
        "Starter websites take 1-2 weeks and Business websites 2-3 weeks, assuming your content is ready and feedback is prompt. Custom projects are scoped individually, so book a call for a clear timeline.",
    },
    {
      question: "How do you communicate progress during a project?",
      answer:
        "You'll get a shared project board, weekly updates, and live preview links you can click through anytime. Questions? Message us directly and we'll reply within one business day.",
    },
    {
      question: "What happens if I need changes after delivery?",
      answer:
        "Every plan includes free post-launch support: 7 days for Starter and 14 for Business, covering bug fixes and small tweaks. After that, any changes are quoted upfront, so there are no surprises.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is a one-time payment: ₹12,000 for Starter and ₹24,000 for Business, with no retainers or hidden fees. Custom projects are quoted upfront, so you always know the full cost before we begin.",
    },
  ] satisfies FaqItem[],
} as const;
