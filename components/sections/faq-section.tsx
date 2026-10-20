import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { faq } from "@/constants/faq";
import { site } from "@/constants/site";
import { Button } from "../ui/button";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,395px)_618px] lg:justify-between lg:gap-16">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.heading}
          description={faq.description}
          className="max-w-[395px]"
        />

        <Accordion type="single" collapsible className="flex flex-col">
          {faq.items.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-b border-border"
            >
              <AccordionTrigger className="items-center py-5 text-left text-lg font-medium hover:no-underline [&>svg]:size-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-description sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
      <Container className="w-full flex flex-col items-center justify-center mt-28 gap-1.5">
        <span className="font-medium">Still have questions?</span>
        <span className="text-description pb-4">
          Reach out anytime, or book a call and we’ll walk you through
          everything
        </span>
        <Button asChild className="rounded-full cursor-pointer">
          <Link href={site.bookCallUrl}>Book a call with us</Link>
        </Button>
      </Container>
    </section>
  );
}
