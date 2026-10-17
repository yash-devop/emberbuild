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
      label: "Book a meeting with us ",
      href: "#contact",
      tone: "solid",
      icon: "calendar",
      external: true,
    },
  ] satisfies CtaAction[],
} as const;
