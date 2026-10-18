export const site = {
  name: "Emberbuild",
  wordmark: "emberbuild.",
  url: "https://emberbuild.in",
  portfolioUrl: "https://portfolio.emberbuild.in",
  bookCallUrl: "https://calendar.app.google/M8EsugWAk2xb3CSU9",
  description:
    "Emberbuild is a design and development studio building thoughtful, high-performing websites for growing businesses.",
  emails: ["yashkamble.dev@gmail.com", "baile.aditi@gmail.com"],
} as const

export type SocialKey = "linkedin"

export type Social = {
  label: string
  href: string
  key: SocialKey
}

export const socials: Social[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", key: "linkedin" },
]

const whatsappMessage =
  "Hi EmberBuild! I'm interested in a website for my business. I'd like to discuss my requirements and pricing."

const whatsappPhone = "917715097298"

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
}

export const whatsapp = {
  phone: whatsappPhone,
  message: whatsappMessage,
  href: whatsappLink(whatsappMessage),
} as const
