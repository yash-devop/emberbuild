import { Container } from "@/components/layout/container";
import { HighlightHeading } from "@/components/sections/highlight-heading";
import { PortfolioPreviewCard } from "@/components/sections/portfolio-preview-card";
import { work } from "@/constants/work";

export function WorkSection() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <HighlightHeading
            eyebrow={work.eyebrow}
            lead={work.heading.lead}
            highlight={work.heading.highlight}
          />
          {/* <Link
            href={work.cta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {work.cta.label} →
          </Link> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.projects.map((project, index) => (
            <PortfolioPreviewCard
              key={index}
              title={project.title}
              visit={project.visit}
              poweredBy={project.poweredBy}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
