export type CapabilityIcon = "code" | "paint" | "userScan" | "bot"

export type Capability = {
  label: string
  icon: CapabilityIcon
}

export const capabilities = {
  eyebrow: "What we do",
  heading: "A closer look at what we create.",
  services: [
    { label: "Website Design & Development", icon: "code" },
    { label: "UI/UX Design", icon: "paint" },
    { label: "Brand Identity & Digital Design", icon: "userScan" },
    { label: "WhatsApp Business Automation", icon: "bot" },
  ] satisfies Capability[],
} as const
