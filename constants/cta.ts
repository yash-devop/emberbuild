export type CtaActionTone = "solid" | "outline";

export type CtaActionIcon = "calendar";

export type CtaAction = {
  label: string;
  href: string;
  tone: CtaActionTone;
  icon?: CtaActionIcon;
  external?: boolean;
};

export const cta = {
  heading: "Your next big idea deserves a better digital presence.",
  actions: [
    {
      label: "Book a call",
      href: "#contact",
      tone: "solid",
      icon: "calendar",
    },
    {
      label: "View work",
      href: "https://portfolio.emberbuild.in",
      tone: "outline",
      external: true,
    },
  ] satisfies CtaAction[],
} as const;
