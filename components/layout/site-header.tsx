"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconMenu2, IconPhone, IconX } from "@tabler/icons-react";

import { Wordmark } from "@/components/layout/wordmark";
import { Button } from "@/components/ui/button";
import { headerCta, navLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { elevatedSurface } from "@/lib/styles";
import { useElementSize } from "@/hooks/use-element-size";
import { useMediaQuery } from "react-responsive";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const { ref: menuRef, size: menuSize } = useElementSize<HTMLDivElement>();

  const expanded = open && isTabletOrMobile;

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-4 z-50 px-5 sm:px-8 lg:top-6">
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-[opacity,visibility] duration-400 ease-out motion-reduce:transition-none md:hidden",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      />
      <nav
        aria-label="Primary"
        style={expanded ? { marginBottom: -menuSize.height } : undefined}
        className={cn(
          "pointer-events-auto relative mx-auto flex w-full max-w-150 flex-col bg-[#0A0A0A] text-white before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-to-b before:from-transparent before:via-transparent before:to-[#ffffff21] before:pointer-events-none",
          elevatedSurface,
          expanded ? "rounded-3xl" : "rounded-full",
        )}
      >
        <div className="flex items-center justify-between gap-4 py-1.5 sm:py-2.5 pr-3 pl-5">
          <Link href="#top" aria-label="Emberbuild - home">
            <Wordmark />
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#ACACAC] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary/95 text-white hover:bg-primary/90 px-4 h-9 font-normal"
            >
              <Link href={headerCta.href}>{headerCta.label}</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-9 place-items-center rounded-full text-white md:hidden"
          >
            {open ? (
              <IconX className="size-5" aria-hidden="true" />
            ) : (
              <IconMenu2 className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-nav"
          ref={menuRef}
          className={cn("md:hidden", expanded ? "block" : "hidden")}
        >
          <ul className="flex flex-col gap-1 px-3 pb-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm font-medium text-[#ACACAC] transition-colors hover:bg-neutral-900/30 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="mt-1 w-full rounded-2xl bg-primary text-white hover:bg-primary/90"
              >
                <Link href={headerCta.href} onClick={() => setOpen(false)}>
                  <IconPhone className="size-4" aria-hidden="true" />
                  {headerCta.label}
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
