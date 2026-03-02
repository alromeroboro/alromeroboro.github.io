# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project State

The Astro project is **scaffolded and running**. The full design and feature spec lives in [`SPEC.MD`](SPEC.MD). The reference visual mockup is at [`images/portfolio.png`](images/portfolio.png). Always consult `SPEC.MD` before generating or modifying any files.

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
- `.tsx` React components go in `src/components/` and are used for anything with local state or browser events (language toggle, animated panels, contact form)

### Internationalisation
Translation strings live in `src/i18n/en.ts` and `src/i18n/es.ts`, consumed via a `useTranslations(locale)` helper in `src/i18n/index.ts`. The active locale is read from `Astro.currentLocale` in `.astro` files and passed as props to React components. Never hard-code UI copy outside these files.

### Design tokens
All custom colors, fonts, and shadow values are defined in `src/styles/global.css` under the `@theme` block (Tailwind v4 CSS-first config) — do not use raw hex values inline in components.

### Content collections
Project cards and other content-heavy data are managed as Markdown/MDX files under `src/content/`, with bilingual variants (e.g. `src/content/projects/en/` and `src/content/projects/es/`).

## MCP Servers

An `astro-docs` MCP server is pre-configured in `.mcp.json` (points to `https://mcp.docs.astro.build/mcp`). Use it to fetch up-to-date Astro API documentation during development instead of relying on training data.

## Design System (summary)

Full details in `SPEC.MD § Design System`. Key values:

| Token | Value |
|---|---|
| Background | `#0a0a0f` |
| Primary neon | `#00FFFF` (cyan) |
| Accent neon | `#FF003C` |
| Text | `#C0C8D0` |

Heading fonts: `Orbitron`, `Share Tech Mono`, or `VT323`. Body: `JetBrains Mono` or `IBM Plex Mono`.
