# Portfolio — Project Specification

## Overview

A personal developer portfolio built with [Astro](https://docs.astro.build/), featuring a **Blade Runner / cyberpunk** aesthetic — dark backgrounds, neon glows, futuristic UI panels, and terminal-style typography.

> Reference design: [`images/portfolio.png`](images/portfolio.png)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build/) with [React](https://react.dev/) integration (`@astrojs/react`) |
| UI Components | React (`.tsx`) for interactive/stateful components; Astro (`.astro`) for static layout/pages |
| Styling | [Tailwind CSS](https://tailwindcss.com/) via `@astrojs/tailwind` |
| Language | TypeScript |
| Deployment | TBD (Netlify / Vercel / GitHub Pages) |

> Use the **context7** and **astro-docs** MCPs to pull the most up-to-date Astro documentation during development.

---

## Pages

### 1. Landing Page (`/`)

The main entry point. Should feel like a cyberpunk OS terminal or HUD interface.

#### Layout

```
┌─────────────────────────────────────────────────────────┐
│ VISUAL: ONLINE   [NAME / TITLE]   SYS> YYYY/MM/DD       │
│ STATUS: ACTIVE                    LOCATION              │
│                                                         │
│         ██████  NAME  ██████                            │
│        ROLE // SUBTITLE                                 │
│                                                         │
│  // WELCOME TO MY PORTFOLIO  ──────  [ GET IN TOUCH ]   │
│                                                         │
│  ┌── PROJECTS ──┐  ┌── ABOUT ME ──┐  ┌── CONTACT ────┐ │
│  │ Last deploy  │  │ Skills       │  │ Links         │ │
│  │ Stack        │  │ Experience   │  │ Status        │ │
│  │ [VIEW CASES] │  │              │  │ [CONNECT]     │ │
│  └──────────────┘  └──────────────┘  └───────────────┘ │
│                                                         │
│ // 1337-READY  PROTOCOL 47.3  SECURITY: STABLE  100%   │
└─────────────────────────────────────────────────────────┘
```

#### Header / Hero

- **Name** displayed large, centered, in a glowing neon font (e.g., cyan `#00FFFF` or similar)
- **Role / tagline** below the name (e.g., `FRONTEND DEVELOPER // WEB ARCHITECT`)
- **Top-left status panel:** `VISUAL: ONLINE` / `STATUS: ACTIVE` — styled as terminal readouts
- **Top-right:** dynamic date (`SYS> YYYY/MM/DD`) and location string
- **Background:** dark cityscape image or CSS-generated cyberpunk cityscape with a parallax or subtle animation

#### Navigation CTAs

- `// WELCOME TO MY PORTFOLIO` — decorative text line
- `>> GET IN TOUCH` button — styled as a neon-bordered terminal button, scrolls to or links to the contact section

#### Info Panels (bottom third)

Three side-by-side panels with neon-bordered frames:

| Panel | Content |
|---|---|
| **PROJECTS** | Last deploy label, stack info (e.g., `ASTRO / REACT / TAILWIND`), thumbnail, `VIEW CASE STUDIES >>` button → links to `/projects` |
| **ABOUT ME** | Skills summary, years of experience → links to `/about` |
| **CONTACT** | GitHub and LinkedIn icon links, availability status, `CONNECT` and `SEND MESSAGE` buttons |

#### Footer Bar

- Decorative status bar: `// 1337-READY`, `PROTOCOL X.X`, `SECURITY: STABLE`, `COMP: 100%`
- Copyright: `© YEAR — ALL RIGHTS RESERVED`

---

### 2. About Me Page (`/about`)

A more detailed personal page.

#### Sections

- **Introduction** — short personal bio
- **Skills** — tech stack list, displayed as neon tags or a terminal-style list
- **Experience** — timeline of work history or key projects
- **Education** (optional)
- Navigation back to Landing / Projects

---

### 3. Projects Page (`/projects`)

A showcase of personal or professional work.

#### Layout

- Grid or list of project cards
- Each card includes:
  - Project name
  - Short description
  - Tech stack tags
  - Links: **Live demo** and/or **GitHub repo**
  - Optional: screenshot or preview image

---

## Design System

### Color Palette

| Role | Tailwind token | Hex | Notes |
|---|---|---|---|
| Background | `bg-bg` | `#050810` | Near-black with faint blue tint |
| Primary neon | `text-neon` / `border-neon` | `#00FFFF` | Cyan — dominant UI chrome |
| Accent red | `text-accent` / `border-accent` | `#FF003C` | CTA buttons, danger indicators |
| Fuchsia neon | `text-fuchsia` / `border-fuchsia` | `#FF00C8` | Role tagline, ES lang toggle, About panel |
| **Amber neon** | `text-amber` / `border-amber` | `#FF8C00` | Blade Runner 2049 warm tone — building windows, atmospheric haze |
| Muted text | `text-muted` | `#C0C8D0` | Body copy and secondary labels |
| Panel bg | `bg-panel` | `#060B12` | Dark panel backgrounds |
| Panel border | `border-border` | `#0E1E2E` | Default non-glowing borders |

Shadow utilities: `shadow-neon`, `shadow-accent`, `shadow-fuchsia`, `shadow-amber`
Text glow utilities: `text-glow-neon`, `text-glow-fuchsia`, `text-glow-accent`, `text-glow-amber`

### Typography

| Role | Font family | Tailwind class |
|---|---|---|
| Hero name | `Turret Road`, Orbitron fallback | `font-name` |
| Display / headings | `Orbitron`, Share Tech Mono fallback | `font-display` |
| Body / code | `JetBrains Mono`, IBM Plex Mono fallback | `font-body` |

All caps used liberally for labels, HUD readouts, and status text.

### UI Components — Implemented

| Component | Implementation | File |
|---|---|---|
| **Holo panels** | `panel-holo` Tailwind utility — border cycles cyan → fuchsia → amber via `holo-pulse` keyframe (5 s) | `global.css` |
| **Name glitch** | `.name-main` (cyan base) + `.name-glitch` (fuchsia overlay, `glitch` keyframe, 9 s interval) | `BaseLayout.astro` |
| **CRT scanlines** | Fixed `repeating-linear-gradient` overlay, z-index 40 | `BaseLayout.astro` |
| **Scrolling grid** | 60 px cyan grid, `grid-scroll` keyframe (14 s) | `BaseLayout.astro` |
| **Atmospheric orbs** | 4 fixed blurred radial orbs: cyan (top-right), fuchsia (bottom-left), blue (center), amber (mid-right) | `BaseLayout.astro` |
| **Vignette** | Fixed radial-gradient darkening screen edges (cinematic depth) | `BaseLayout.astro` |
| **Neon rain** | Canvas React component — 260 drops, cyan 80% / fuchsia 12% / amber 8%, screen blend mode | `RainEffect.tsx` |
| **City skyline** | Clip-path polygon on a 220 px `div`, repeating-linear-gradient building columns | `index.astro` |
| **Window lights** | 57 radial-gradient dots in `::after` pseudo-element — amber, warm-white, cyan, fuchsia; screen blend | `index.astro` |
| **Fog layers** | `.fog-cyan`, `.fog-fuchsia`, `.fog-amber` — blurred radial hazes above the skyline, `haze-shimmer` anim | `index.astro` |
| **City glow** | Ground-level gradient reflection: cyan + fuchsia + amber, 130 px, `blur(12px)` | `index.astro` |
| **Language toggle** | React component, cyan for EN / fuchsia for ES, client:load | `LangToggle.tsx` |

### Keyframes (defined in `global.css`)

| Name | Purpose |
|---|---|
| `glitch` | Fuchsia clip-path flash on hero name |
| `holo-pulse` | Border color cycle — cyan → fuchsia → amber |
| `grid-scroll` | Background grid slow vertical scroll |
| `glow-breathe` | Atmospheric orbs pulsing opacity + scale |
| `haze-shimmer` | Fog layer opacity shimmer |
| `flicker` | Neon flicker drop-out |
| `blink` | Cursor blink |
| `scanline` | CRT scanline sweep |

---

## Contact Section (Landing Page only)

The contact zone lives exclusively on the landing page (no separate `/contact` route).

### Links

- **LinkedIn** — icon + label, opens in new tab
- **GitHub** — icon + label, opens in new tab

### Optional

- A `mailto:` link or simple contact form (if a backend/serverless function is available)

---

## Astro-Specific Notes

- Use **Astro components** (`.astro`) for pages, layouts, and purely static UI
- Use **React components** (`.tsx`) for any interactive or stateful UI (e.g., animated panels, contact form, hover effects driven by state)
- Style everything with **Tailwind utility classes**; avoid scoped `<style>` blocks unless a one-off CSS trick (e.g., custom keyframes) can't be expressed in Tailwind
- Define custom design tokens (colors, fonts, shadows) in `tailwind.config.ts` under `theme.extend`
- Use **content collections** (`src/content/`) if projects are managed as Markdown/MDX files
- Enable **View Transitions** (`<ViewTransitions />`) for smooth page navigation
- Optimize images with Astro's built-in `<Image />` component
- Target **static output** (`output: 'static'`) unless a contact form requires SSR

---

## Assets

| File | Purpose |
|---|---|
| `images/portfolio.png` | Reference design mockup |

---

## Out of Scope

- Backend / database
- Authentication
- Blog (can be added later as a content collection)
- Dark/light theme toggle (dark-only by design)
