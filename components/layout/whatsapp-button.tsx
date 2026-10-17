import Link from "next/link";

import { WhatsApp } from "@/components/icons/whatsapp";
import { whatsapp } from "@/constants/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <Link
      href={whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Emberbuild on WhatsApp"
      className={cn(
        "group fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-xl bg-[color-mix(in_srgb,#b4b4b4_21%,transparent)]  w-fit duration-200 ease-out borders border-neutral-200 h-[50px] p-1",
        className,
      )}
    >
      <div className="border border-neutral-300 w-full h-full rounded-lg flex items-center gap-1.5 bg-white px-3">
        <WhatsApp className="size-4 shrink-0 text-[#25D366]" />
        <span className="hidden text-sm font-medium whitespace-nowrap text-neutral-700 sm:inline">
          Have a project in mind? Let’s talk
        </span>
      </div>
    </Link>
  );
}
