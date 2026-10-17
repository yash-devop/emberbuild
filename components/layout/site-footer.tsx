import { Suspense } from "react";
import Link from "next/link";
import { io } from "next/cache";
import { IconBrandLinkedin, IconBrandX, type Icon } from "@tabler/icons-react";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/layout/wordmark";
import { footer, type FooterLink, type SocialIcon } from "@/constants/footer";

const socialIcons: Record<SocialIcon, Icon> = {
  linkedin: IconBrandLinkedin,
  x: IconBrandX,
};

async function CopyrightLine() {
  await io();

  return <>{`© ${new Date().getFullYear()} ${footer.copyright}`}</>;
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-medium text-black">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm text-[#6A6A6A] transition-colors hover:text-neutral-800"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:gap-16 lg:py-16">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <Wordmark className="text-xl" />
            <p className="max-w-xs text-sm text-[#515151]">{footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="flex items-center gap-1">
              {footer.socials.map((social) => {
                const SocialIconComponent = socialIcons[social.icon];

                return (
                  <li key={social.label}>
                    <Link
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
                  </li>
                );
              })}
            </ul>
            <p className="text-sm text-[#515151]">
              <Suspense fallback={`© ${footer.copyright}`}>
                <CopyrightLine />
              </Suspense>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          {footer.columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
          <FooterColumn
            title={footer.contact.title}
            links={footer.contact.links}
          />
        </div>
      </Container>
    </footer>
  );
}
