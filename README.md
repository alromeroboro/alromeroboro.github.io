# Alberto Romero — Portfolio

Cyberpunk-themed personal portfolio built with Astro, React, and Tailwind CSS v4.

**Live:** https://alromeroboro.github.io

---

## Features

- **Bilingual (EN / ES)** via Astro built-in i18n routing
- **Sections:** Hero, About, Experience, Skills, Projects, Contact
- **Animated canvas rain** — 260 drops in cyan, fuchsia, and amber
- **Cyberpunk visual system:** city skyline, fog layers, CRT scanlines, glitch animations, scrolling grid, holo panels, atmospheric orbs
- **Interactive Experience accordion** (React)
- **View transitions** (Astro ClientRouter)
- **Fully static output** — deploys to GitHub Pages

---

## Tech Stack

| | |
|---|---|
| Framework | Astro 5 |
| UI (interactive) | React 19 |
| Styling | Tailwind CSS v4 (CSS-first, `@theme` block) |
| Language | TypeScript |
| i18n | Astro built-in — EN `/`, ES `/es/` |
| Fonts | Orbitron, JetBrains Mono (Google Fonts) |
| Deployment | GitHub Pages (static) |

---

## Project Structure

```
src/
├── components/
│   ├── HomePage.astro          ← page orchestrator
│   ├── react/                  ← interactive React components
│   ├── sections/               ← page-level Astro sections
│   └── ui/                     ← reusable presentational primitives
├── data/                       ← jobs.ts, skills.ts
├── i18n/                       ← en.ts, es.ts, index.ts
├── layouts/BaseLayout.astro
├── pages/index.astro + es/
├── styles/global.css + home.css
└── content/projects/en/ + es/
```

---

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npx astro dev` | Dev server at localhost:4321 |
| `npx astro build` | Production build → `dist/` |
| `npx astro preview` | Preview production build |
| `npx astro check` | TypeScript + Astro diagnostics |

---

## i18n

English is served at `/` (no prefix). Spanish is served at `/es/`. All UI strings live in `src/i18n/en.ts` and `src/i18n/es.ts`, consumed via the `useTranslations(locale)` helper in `src/i18n/index.ts`.

---

## Design Tokens

Colors and fonts are defined in `src/styles/global.css` under the `@theme {}` block (Tailwind v4 CSS-first config). Key tokens:

| Token | Tailwind class | Value |
|---|---|---|
| Background | `bg-bg` | `#050810` |
| Neon cyan | `text-neon` / `border-neon` | `#00ffff` |
| Fuchsia neon | `text-fuchsia` / `border-fuchsia` | `#ff00c8` |
| Accent red | `text-accent` | `#ff003c` |
| Amber neon | `text-amber` / `border-amber` | `#ff8c00` |
| Muted text | `text-muted` | `#c0c8d0` |
