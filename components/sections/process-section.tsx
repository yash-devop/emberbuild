import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BrowserMockup } from "@/components/sections/browser-mockup"
import { SectionHeading } from "@/components/sections/section-heading"
import { Container } from "@/components/layout/container"
import { process } from "@/constants/process"

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.heading}
          titleClassName="max-w-[830px]"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Accordion
            type="single"
            collapsible
            defaultValue={process.steps[0].title}
            className="w-full max-w-[485px]"
          >
            {process.steps.map((step) => (
              <AccordionItem
                key={step.title}
                value={step.title}
                className="border-0 data-[state=open]:border-b-4 data-[state=open]:border-[#626262] data-[state=open]:pb-6"
              >
                <AccordionTrigger className="py-4 text-2xl font-medium hover:no-underline [&>svg]:hidden lg:text-[28px]">
                  {step.title}
                </AccordionTrigger>
                {step.description ? (
                  <AccordionContent className="text-base text-description">
                    {step.description}
                  </AccordionContent>
                ) : null}
              </AccordionItem>
            ))}
          </Accordion>

          <BrowserMockup className="lg:sticky lg:top-28" />
        </div>
      </Container>
    </section>
  )
}
