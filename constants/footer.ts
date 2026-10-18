import { phoneNumbers, whatsapp } from "@/constants/site";

export type SocialIcon = "linkedin" | "x";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterLinkGroup = {
  links: FooterLink[];
  separator: string;
};

export type FooterLinkItem = FooterLink | FooterLinkGroup;

export type FooterColumn = {
  title: string;
  links: FooterLinkItem[];
};

export const footer = {
  wordmark: "emberbuild.",
  tagline: "Web Design & Development Agency in India",
  copyright: "Emberbuild. All rights reserved.",
  socials: [
    { label: "X", href: "https://twitter.com/yash_devop/", icon: "x" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yash-dev/",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ] satisfies FooterColumn[],
  contact: {
    title: "Let’s Talk",
    links: [
      {
        separator: " / ",
        links: phoneNumbers.map((number) => ({
          label: number,
          href: `tel:${number}`,
        })),
      },
      {
        label: "Chat on Whatsapp",
        href: whatsapp.href,
        external: true,
      },
      {
        label: "yashkamble.dev@gmail.com",
        href: "mailto:yashkamble.dev@gmail.com",
      },
      {
        label: "baile.aditi@gmail.com",
        href: "mailto:baile.aditi@gmail.com",
      },
    ],
  } satisfies FooterColumn,
} as const;
