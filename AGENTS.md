<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md - Emberbuild Agency Website Guidelines

This is the official **Emberbuild** agency website — a marketing site for a digital agency (Next.js 16 App Router, React 19, Tailwind v4, TypeScript). All agents working on this codebase must follow these guidelines.

## Project Goals

- Production-ready agency website that presents Emberbuild's services, work, and brand
- SEO-friendly, accessible, and performant
- Fully responsive across mobile, tablet, and desktop
- Bold, modern, professional design appropriate for a creative/tech agency

## Tech Stack

- Framework: Next.js 16 (App Router) with Cache Components enabled
- Language: TypeScript (strict)
- Styling: Tailwind CSS v4 (`app/globals.css` design tokens)
- Components: shadcn/ui primitives (new-york style, CSS variables) + custom composition
- Classnames: `clsx` + `tailwind-merge` via the `cn()` helper (`@/lib/utils`)
- Variants: `class-variance-authority` (`cva`) for typed component variants
- Icons: `@tabler/icons-react`
- Package Manager: pnpm

## Project Structure

No `src/` directory — `app/` lives at the project root (Next.js default). Import alias `@/*` maps to the project root (`./*`).

```
app/                 App Router: routes, layouts, metadata (route files only)
components/
  ui/                shadcn/ui primitives (button, card, ...). Low-level, dumb, reusable
  layout/            Site chrome reused across routes (site-header, site-footer, container)
  sections/          Composed page sections built from ui/ + layout/ pieces
lib/                 Framework-agnostic helpers (cn, formatters, site config)
hooks/               Reusable client hooks (use-*)
types/               Shared TypeScript types
public/              Static assets (images, icons, fonts)
```

- Add new shadcn primitives with `pnpm dlx shadcn@latest add <component>` (or copy from the registry) — always into `components/ui/`.
- Keep route-level components colocated in `components/sections/`; colocate route-only files under a private `_components/` folder inside the route segment when they are not shared.
- Keep site-wide content/config (nav links, socials, contact, service list) in `lib/` as typed data, not hard-coded inside components.

## Code Standards

- Use TypeScript strictly; avoid `any` unless absolutely necessary with justification
- Follow existing code conventions and patterns in the codebase
- Use semantic HTML elements wherever possible
- Maintain accessibility (a11y): proper aria labels, focus states, color contrast
- Keep components small, reusable, and typed
- File naming: use kebab-case for all files/folders (e.g. `site-header.tsx`, `service-card.tsx`), while exported React components stay PascalCase (e.g. `SiteHeader`)
- Prefer `export function Component()` named exports for our own components (shadcn primitives keep their upstream patterns)
- Import via the `@/` alias, never deep relative paths (`../../`)
- Do NOT add comments unless explicitly requested by the user
- Never commit secrets, API keys, or credentials

## Component Reusability (Mandatory)

- **Create reusable components wherever possible.** Before writing any new markup, search the codebase for an existing component that already covers the need and reuse or lightly extend it.
- Never copy-paste a JSX block into a second location to "get it working". Extract it into a proper component as part of the same change.
- Keep one responsibility per component; favour small composable pieces over large monolithic ones.
- Prefer `components/ui/` primitives for generic building blocks and `components/sections/` for page-specific composition.
- Make components reusable by default:
  - Accept a `className` prop and merge it with `cn(...)` onto the outermost element so callers control layout/spacing
  - Accept `children` where callers may need to pass their own markup
  - Drive repeated content from a typed data array mapped over in JSX, never from duplicated markup
  - Prefer composition (a wrapper plus `children`) over deeply nested boolean props
- For any component with visual variants, define them with `cva` and merge the resolved classes through `cn()` (see `components/ui/button.tsx` for the reference pattern).
- Use `@tabler/icons-react` for all icons; size them with Tailwind (`size-4`, etc.) and give decorative icons `aria-hidden`.
- Follow the conventions of neighbouring files before inventing new ones.
- Do not over-abstract: extract when a pattern genuinely repeats (2+ usages) or is clearly scalable, not for hypothetical future needs.

## SEO Requirements (must follow for client-ready sites)

- Use semantic HTML (header, nav, main, section, footer, article)
- Include proper meta tags per page (title, description, canonical where appropriate)
- Use OpenGraph/Twitter metadata for social sharing when relevant
- Implement structured data (JSON-LD) where beneficial (Organization, ProfessionalService, Service, FAQ, BreadcrumbList, etc.)
- Use descriptive page titles and headings (H1–H6 hierarchy)
- Ensure crawlable content (no important content hidden behind JS-only interactions)
- Optimize images: use Next/Image with alt text, proper sizes
- Add robots.txt and sitemap.xml when needed; keep URLs clean and descriptive
- Ensure fast LCP, good Core Web Vitals
- Use `aria-label`/descriptive alt text for all meaningful images/icons

## Responsive Design Requirements

- Mobile-first approach (min-width breakpoints)
- Must be fully responsive on mobile (320px+), tablet (768px+), and desktop (1280px+)
- Test layouts across breakpoints; avoid fixed widths that break on small screens
- Use flexible containers, grid/flex, clamp() where appropriate
- Ensure tap targets are accessible (min 44x44px) on mobile
- Handle long text gracefully, prevent horizontal overflow
- Navbar/header, hero, sections, footer must work seamlessly across all screen sizes

## UI/UX & Performance

- Prioritize clarity, bold brand presence, and strong visual hierarchy (agency context)
- Reuse the shadcn design tokens in `app/globals.css` (`bg-primary`, `text-muted-foreground`, etc.) instead of hard-coded colors so theming stays consistent
- Use subtle, professional animations (respect prefers-reduced-motion)
- Keep bundle size reasonable; avoid unnecessary deps
- Lazy-load non-critical assets where sensible
- Ensure no layout shift (CLS)

## Testing & Quality

- Verification is lightweight: run `pnpm lint`, `pnpm typecheck` (`tsc --noEmit`), and `pnpm build`, then stop.
- Do NOT build or run time-consuming visual verification workflows — no headless-browser screenshot harnesses, pixel/ASCII image analysis, image diffing, or multi-viewport screenshot comparisons. Trust the code, type checker, linter, and build.
- If tests exist, run them; if not, sanity-check key functionality
- Never assume test framework — check README/package.json first

## Git & Commit Rules

- **NEVER commit changes unless explicitly asked by the user.**
- If user says "commit all changes", you MUST commit ALL modified/untracked files in the working tree, but **commit them SEPARATELY** (one logical commit per concern/group).
- Group commits logically: dependencies, features, UI/components, config, docs, styles, fixes, etc.
- Before committing, inspect `git status`, `git diff --staged` (if any), and `git diff`
- Stage only intended files per commit. Never commit secrets.
- Write concise, descriptive commit messages following conventional style when sensible (e.g., `feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `docs:`, `perf:`, `test:`)
- Do not amend failed commits; fix and create new commit if hooks reject
- Do not force-push, skip hooks, or create empty commits unless explicitly requested
- Review all commits in a PR before creating one (not just latest)

## Workflow

1. Understand requirements and explore codebase (grep/glob/read as needed)
2. Plan changes respecting SEO + responsive requirements
3. Implement following existing patterns and conventions
4. Verify: lint + typecheck + build (see Testing & Quality — keep verification lightweight)
5. Only commit when explicitly requested, splitting into separate logical commits if "commit all" requested

## Notes

- This project is client-facing — prioritize polish, SEO, and responsiveness in every deliverable
- When adding components, consider reusability across the site; prefer adding to `components/ui/` when generic

## SEO Implementation Workflow (Mandatory Approval)

- **Do NOT implement SEO changes (meta tags, OpenGraph, Twitter, JSON-LD/structured data, robots.txt, sitemap.xml, canonical URLs, hreflang, etc.) without explicit user approval.**
- Before making any SEO-related changes, you MUST:
  1. Clearly state: "I am about to work on SEO implementation for [specific page/component/file]."
  2. List exactly what SEO elements you plan to add/change (e.g., title, meta description, OpenGraph, canonical, JSON-LD type, image alt strategy).
  3. Ask the user clarifying questions if anything is ambiguous (target keywords, business name, location, schema type, preferred URLs, etc.).
  4. Wait for the user's approval before proceeding. Only proceed after receiving explicit approval (e.g., "yes", "approve", "go ahead").
- Do not assume default SEO values. Confirm all business-specific details with the user first.
