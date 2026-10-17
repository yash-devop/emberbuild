import { Suspense } from "react";
import Link from "next/link";
import { io } from "next/cache";
import { IconBrandLinkedin, IconBrandX, type Icon } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/layout/wordmark";
import { footer, type SocialIcon } from "@/constants/footer";

const socialIcons: Record<SocialIcon, Icon> = {
  linkedin: IconBrandLinkedin,
  x: IconBrandX,
};

async function CopyrightLine() {
  await io();

  return <>{`© ${new Date().getFullYear()} ${footer.copyright}`}</>;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between lg:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-16">
            <Wordmark className="text-3xl" />
            <div className="flex items-center justify-center pt-1">
              {footer.socials.map((social) => {
                const SocialIconComponent = socialIcons[social.icon];

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-8 place-items-center text-charcoal transition-colors hover:text-neutral-500"
                  >
                    <SocialIconComponent
                      className="size-5"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="text-base text-neutral-600 tracking-title">
            <Suspense fallback={`© ${footer.copyright}`}>
              <CopyrightLine />
            </Suspense>
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-end md:text-right">
          <span className="text-base text-[#515151]">
            {footer.contactLabel}
          </span>
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
  );
}
