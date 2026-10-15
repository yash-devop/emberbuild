export const site = {
  name: "Emberbuild",
  wordmark: "emberbuild.",
  url: "https://emberbuild.in",
  portfolioUrl: "https://portfolio.emberbuild.in",
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
