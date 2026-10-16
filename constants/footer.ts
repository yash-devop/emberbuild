export type SocialIcon = "linkedin" | "x";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export const footer = {
  wordmark: "emberbuild.",
  copyright: "Emberbuild. All rights reserved.",
  contactLabel: "Reach out to",
  emails: ["yashkamble.dev@gmail.com", "baile.aditi@gmail.com"],
  socials: [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  ] satisfies SocialLink[],
} as const;
