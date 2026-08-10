@AGENTS.md

# Ghous Muhammad — Portfolio

Dark, futuristic portfolio built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Structure

- `app/` — `page.tsx` (assembles all sections), `layout.tsx` (fonts + SEO metadata), `globals.css` (design system), `api/contact/route.ts` (contact form endpoint), `sitemap.ts`, `robots.ts`
- `components/` — one component per section: `Navbar`, `Hero` (+ `CommandBar`), `About`, `Skills`, `Projects` (+ `ProjectCard`), `Journey`, `GitHub`, `Contact`, `Footer`, plus helpers: `Section`, `Reveal`, `CursorGlow`, `ProjectVisual`, `BrandIcons`
- `data/` — all content lives here, NOT in components: `site.ts`, `skills.ts`, `projects.ts`

## Design system

Tailwind v4 config is in `app/globals.css` via `@theme`:
- Colors: `background` (#12161A), `foreground` (#E6E1DC), `muted`, `accent` (#D4AF37 gold), `accent-2`, `accent-warm`
- Fonts: `font-display` (Playfair Display serif) for headings, `font-sans` (Inter) for body
- Headings use bold/black weights with subtle letter-spacing (set globally in `@layer base`)
- Utilities: `glass`, `bg-grid`, `text-gradient` (gold sheen), `glow-border`

**Aesthetic:** dark editorial / luxury feel — warm charcoal surfaces, gold highlight,
serif display type. Keep it warm; avoid introducing cold blues/purples.

## Customizing content

Everything user-editable is centralized in `data/`:
- `data/site.ts` — name, socials, email, stats, about, journey, education, GitHub username
- `data/skills.ts` — grouped skill categories
- `data/projects.ts` — project case studies (name, tagline, description, problem, features, stack, links, `visual` type)

**Real content already wired in:** GitHub (`Cyberpunk-Cyber`), LinkedIn
(`ghous-muhammad00`), email (`muhammadghous044@gmail.com`). Projects have no
live demos — cards show only GitHub links (`Live Demo` renders only if a
`demo` URL is added to `data/projects.ts`).

**Site URL:** `data/site.ts` exports `SITE_URL` = `NEXT_PUBLIC_SITE_URL` env var
(or `https://ghous-muhammad.dev` fallback). Used by `metadataBase`, `sitemap.ts`,
`robots.ts`. Set `NEXT_PUBLIC_SITE_URL` to the real domain on deploy
(see `.env.example`).

**Still worth personalizing:** stats & journey timeline in `data/site.ts`
(don't fake numbers), and swapping `ProjectVisual` placeholders for real screenshots.

**Voice — keep it human.** The site intentionally avoids generic AI-portfolio copy
and patterns (no command bar, no "Let's build something", no "Building in public",
no `∞` stats, no polished marketing-speak). All copy lives in `data/site.ts` /
`data/projects.ts` — when editing, keep the casual, first-person tone of a real
developer ("I mess around with AI", "the ones that survived, at least").

The GitHub section fetches live repo + star counts client-side from the GitHub API
with a "—" fallback if rate-limited or offline.

## Contact form

The form POSTs to `/api/contact`. To deliver real email, set env vars
`RESEND_API_KEY` and `CONTACT_EMAIL` (see `app/api/contact/route.ts`). Without
them it returns success in dev mode so the form never breaks.

## Project visuals

Real screenshots don't exist yet — `components/ProjectVisual.tsx` renders an
abstract on-brand placeholder per project (`visual` field in `data/projects.ts`).
To swap in real screenshots, replace `<ProjectVisual/>` inside `ProjectCard.tsx`
with an `Image`/`next-image` of the screenshot.

## Notes

- lucide-react v1.31 removed brand icons (`Github`, `Linkedin`) — use the inline SVGs in `components/BrandIcons.tsx`
- `CursorGlow` is desktop-only via `useSyncExternalStore` on `(pointer: fine)`
- Command bar in the hero scrolls to sections by id — ids must match section `id` props
