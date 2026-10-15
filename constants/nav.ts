export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
]

export const headerCta = {
  label: "Book a call",
  href: "#contact",
} as const
