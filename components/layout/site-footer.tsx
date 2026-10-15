import Link from "next/link"
import { IconBrandLinkedin } from "@tabler/icons-react"

import { Container } from "@/components/layout/container"
import { Wordmark } from "@/components/layout/wordmark"
import { footer } from "@/constants/footer"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between lg:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Wordmark className="text-3xl" />
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-8 place-items-center rounded-lg bg-black text-white transition-colors hover:bg-primary"
            >
              <IconBrandLinkedin className="size-4" />
            </Link>
          </div>
          <p className="text-base text-black">{footer.copyright}</p>
        </div>

        <div className="flex flex-col gap-1 md:items-end md:text-right">
          <span className="text-base text-[#515151]">{footer.contactLabel}</span>
          <ul className="flex flex-col gap-1 md:flex-row md:gap-6">
            {footer.emails.map((email) => (
              <li key={email}>
                <Link
                  href={`mailto:${email}`}
                  className="text-base text-[#515151] transition-colors hover:text-primary"
                >
                  {email}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
