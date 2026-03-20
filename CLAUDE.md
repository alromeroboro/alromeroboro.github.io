# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project State

The Astro project is **scaffolded and running**. The full design and feature spec lives in [`SPEC.MD`](SPEC.MD). Always consult `SPEC.MD` before generating or modifying any files.

## Tech Stack

- **Framework:** Astro (`@astrojs/react` integration)
- **UI components:** React (`.tsx`) for interactive/stateful elements; Astro (`.astro`) for pages, layouts, and static UI
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`) — utility classes only; scoped `<style>` blocks reserved for CSS tricks that can't be expressed in Tailwind (e.g. custom keyframes)
- **Language:** TypeScript throughout
- **i18n:** Astro built-in i18n routing — English at `/` (default), Spanish at `/es/`

## Commands

```bash
npx astro dev             # dev server at localhost:4321
npx astro build           # production build → dist/
npx astro preview         # preview the production build
npx astro check           # TypeScript + Astro diagnostics
```

## Architecture

### Component split
- `.astro` files own pages (`src/pages/`), layouts (`src/layouts/`), and purely presentational UI
- `.tsx` React components go in `src/components/react/` and are used for anything with local state or browser events (language toggle, animated panels, contact form)

`src/components/` is organised into three subfolders:

| Folder | Purpose | Examples |
|---|---|---|
| `react/` | Interactive/stateful React components | `LangToggle`, `RainEffect`, `ExperienceAccordion` |
| `sections/` | Page-level Astro sections | `HeroSection`, `AboutSection`, `SkillsSection`, … |
| `ui/` | Reusable presentational Astro primitives | `CornerBrackets`, `SectionHeading`, `SkillBox`, `HomeSection` |

`HomePage.astro` stays at the `components/` root — it is the page orchestrator imported directly by `src/pages/`.

### Internationalisation
Translation strings live in `src/i18n/en.ts` and `src/i18n/es.ts`, consumed via a `useTranslations(locale)` helper in `src/i18n/index.ts`. The active locale is read from `Astro.currentLocale` in `.astro` files and passed as props to React components. Never hard-code UI copy outside these files.

### Design tokens
All custom colors, fonts, and shadow values are defined in `src/styles/global.css` under the `@theme` block (Tailwind v4 CSS-first config) — do not use raw hex values inline in components.

### Data modules
Structured, non-translatable data lives in `src/data/` as TypeScript modules:
- `src/data/jobs.ts` — experience entries (bilingual `jobs` map keyed by locale) and `skillIcons` lookup used by `ExperienceAccordion`
- `src/data/skills.ts` — `skillCategories` array consumed by `SkillsSection`

### Content collections
Project cards and other content-heavy data are managed as Markdown/MDX files under `src/content/`, with bilingual variants (e.g. `src/content/projects/en/` and `src/content/projects/es/`).

## MCP Servers

An `astro-docs` MCP server is pre-configured in `.mcp.json` (points to `https://mcp.docs.astro.build/mcp`). Use it to fetch up-to-date Astro API documentation during development instead of relying on training data.

## Design System (summary)

Full details in `SPEC.MD § Design System`. Key values:

| Token | Tailwind class | Value |
|---|---|---|
| Background | `bg-bg` | `#050810` |
| Primary neon | `text-neon`, `border-neon` | `#00FFFF` (cyan) |
| Accent red | `text-accent`, `border-accent` | `#FF003C` |
| Fuchsia neon | `text-fuchsia`, `border-fuchsia` | `#FF00C8` |
| Amber neon | `text-amber`, `border-amber` | `#FF8C00` |
| Muted text | `text-muted` | `#C0C8D0` |

Heading fonts: `Orbitron` (`font-display`), `Turret Road` (`font-name`). Body: `JetBrains Mono` (`font-body`).

### Implemented visual effects

| Effect | Where | Notes |
|---|---|---|
| Animated rain | `react/RainEffect.tsx` | Canvas, 260 drops — cyan (80%), fuchsia (12%), amber (8%) |
| City skyline | `sections/HeroSection.astro` `.city-skyline` | Clip-path polygon, 220 px tall |
| Window lights | `sections/HeroSection.astro` `.city-skyline::after` | 57 radial-gradient dots, screen blend mode |
| Fog layers | `sections/HeroSection.astro` `.fog-cyan/fuchsia/amber` | Blurred radial hazes above the skyline |
| City glow | `sections/HeroSection.astro` `.city-glow` | Ground-level neon reflection (cyan + fuchsia + amber) |
| Holo panels | Tailwind `panel-holo` utility | Border cycles cyan → fuchsia → amber via `holo-pulse` |
| Atmospheric orbs | `BaseLayout.astro` `.glow-orbs` | 4 fixed radial orbs (cyan, fuchsia, blue, amber) |
| Vignette | `BaseLayout.astro` `.vignette` | Radial gradient darkens screen edges |
| CRT scanlines | `BaseLayout.astro` `.scanlines` | Repeating-linear-gradient, fixed, z-index 40 |
| Name glitch | `BaseLayout.astro` `.name-glitch` | Fuchsia layer, `glitch` keyframe, 9 s interval |
| Scrolling grid | `BaseLayout.astro` `.grid-bg` | 60 px cyan grid, `grid-scroll` keyframe |