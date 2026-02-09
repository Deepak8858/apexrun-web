# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Start Next.js dev server on localhost:3000
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint (eslint-config-next with core-web-vitals + typescript)
```

TypeScript strict mode is enabled. There is no test framework configured.

## Project Overview

A single-page product showcase website for **ApexRun**, a running platform. This is a technical portfolio piece — not a live product — designed to demonstrate frontend engineering to recruiters. It showcases a hypothetical Flutter + Go + PostGIS architecture with agentic AI (Gemini 1.5 Flash).

Deployed to Vercel. Repository: `github.com/Deepak8858/apexrun-web`

## Design System (Mandatory)

All UI must adhere to the "Performance Dark Mode" theme. Do not introduce light mode or additional color schemes.

- **Background:** `#0A0A0A` — always dark, no light mode
- **Accent:** `#D97706` (Claude Orange) — CTAs, highlights, metric values, active states
- **Accent Dim:** `#B45309` — hover states, gradient endpoints
- **Surface:** `#1C1917` / hover `#292524` — cards, panels
- **Border:** `#44403C`, **Muted text:** `#A8A29E`

These are defined as CSS custom properties in `app/globals.css` and exposed to Tailwind via `@theme inline` as `--color-*` tokens (e.g. `bg-accent`, `text-muted`, `border-border`).

### Typography

Three font families loaded in `app/layout.tsx` via `next/font/google`:

- **Inter** (`--font-inter`) — body text, headings. Tailwind `font-sans`.
- **Roboto Condensed** (`--font-roboto-condensed`) — data metrics, badges, stat values. Applied via `font-[family-name:var(--font-roboto-condensed)]`.
- **Geist Mono** (`--font-geist-mono`) — code snippets, file labels. Applied via `font-[family-name:var(--font-geist-mono)]`.

### Icons

Use `lucide-react` exclusively. Standard sizing: `h-4 w-4` (inline), `h-5 w-5` (cards), `h-6 w-6` (feature icons).

## Architecture

**Framework:** Next.js 16 with App Router. Single route (`app/page.tsx`) composes all sections.

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. No `tailwind.config` file — theme tokens are defined inline in `globals.css` using the `@theme inline` directive.

**Animations:** Framer Motion. Every section component is a `"use client"` component using `whileInView` for scroll-triggered entrance animations with `viewport={{ once: true }}`. The Hero uses staggered `variants` with `container`/`item` pattern.

**Charts:** Recharts `AreaChart` in `RunnerChart.tsx` with custom dark-themed tooltip and SVG gradient fills.

### Page Section Order

`page.tsx` composes sections in this order — section IDs are used for smooth-scroll navigation:

1. `Navbar` — sticky, no section ID (fixed position)
2. `HeroSection` — no anchor ID (top of page)
3. `FeatureGrid` — `id="features"`
4. `TechBreakdown` — `id="architecture"`
5. `RunnerChart` — `id="metrics"`
6. `Footer` — `id="contact"`

The Navbar links (`#features`, `#architecture`, `#metrics`, `#contact`) must stay in sync with these section IDs.

### Component Patterns

- All components in `app/components/` are client components (`"use client"`) due to Framer Motion
- Section components are self-contained: each owns its own data, layout, and animations
- Consistent section header pattern: accent label (`font-roboto-condensed`, uppercase, tracking-widest) → h2 heading → muted paragraph
- Card hover pattern: `border-border` → `hover:border-accent/30` + `hover:bg-surface-hover` with a pointer-events-none glow div

## Key Conventions

- **Path alias:** `@/*` maps to project root (configured in `tsconfig.json`)
- **Max content width:** `max-w-6xl` (1152px) with `px-6` horizontal padding on all sections
- **Responsive breakpoints:** mobile-first; `md:` for tablet grid changes, `lg:` for desktop side-by-side layouts
- **Quantifiable metrics** in feature cards are intentional for recruiter impact — preserve specific numbers (e.g. "33 Pose Landmarks @ 30fps", "<500ms AI Latency", "98% GPS Accuracy")
- **Color theme** is inspired by Claude's warm orange/copper tones (`#D97706`) — do not revert to neon green or introduce conflicting accent colors
- The `public/resume.pdf` file is referenced by the Footer download button but does not yet exist — it's a placeholder for the user's actual resume
