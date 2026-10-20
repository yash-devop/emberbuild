export const phoneNumbers = ["+917715097298", "+917021386010"] as const

export const site = {
  name: "Emberbuild",
  wordmark: "emberbuild.",
  url: "https://emberbuild.in",
  portfolioUrl: "https://portfolio.emberbuild.in",
  bookCallUrl: "https://calendar.app.google/M8EsugWAk2xb3CSU9",
  phone: phoneNumbers[0],
  phoneNumbers,
  description:
    "Emberbuild is a Mumbai-based design and development studio building thoughtful, high-performing websites for growing businesses.",
  emails: ["yashkamble.dev@gmail.com", "baile.aditi@gmail.com"],
} as const

export const socialPreview = {
  title: "EmberBuild — Premium Websites Built for Growth",
  description:
    "We design and build premium, high-converting websites for businesses ready to grow online.",
  image: {
    url: "/images/open-graph/variant-1.png",
    width: 1200,
    height: 630,
    type: "image/png",
    alt: "EmberBuild — premium websites built for growth",
  },
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

export function whatsappLink(message: string) {
  const phone = site.phone.replace(/[^0-9]/g, "")
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const whatsapp = {
  phone: site.phone,
  message: whatsappMessage,
  href: whatsappLink(whatsappMessage),
} as const
