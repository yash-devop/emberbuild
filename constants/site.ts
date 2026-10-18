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

export const whatsapp = {
  phone: "917715097298",
  message: whatsappMessage,
  href: `https://wa.me/917715097298?text=${encodeURIComponent(whatsappMessage)}`,
} as const
