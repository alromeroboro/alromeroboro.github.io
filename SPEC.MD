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

| Role | Color |
|---|---|
| Background | `#0a0a0f` (near-black) |
| Primary neon | `#00FFFF` (cyan) |
| Accent neon | `#FF003C` (red/pink) |
| Text | `#C0C8D0` (light gray) |
| Panel border | `#1A2A3A` with neon glow |

### Typography

- **Headings:** monospace or display font — e.g., `Orbitron`, `Share Tech Mono`, or `VT323`
- **Body:** clean monospace — e.g., `JetBrains Mono` or `IBM Plex Mono`
- All caps used liberally for labels and status text

### UI Components

- **Neon-bordered panels** with subtle inner glow (`box-shadow`)
- **Glitch effect** on name/headline (CSS keyframe animation, optional)
- **Scanline overlay** for CRT monitor feel (CSS `::after` pseudo-element, optional)
- **Blinking cursor** (`_`) for terminal text elements
- **Hover states:** neon color intensifies, borders brighten

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
