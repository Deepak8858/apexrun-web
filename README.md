<div align="center">

# ⚡ ApexRun

### The AI-Native Performance Partner

A high-performance **product showcase website** for ApexRun — a running platform that bridges Strava's social engine with Runna's AI coaching. Built as a deep-dive engineering portfolio piece.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-CCFF00?style=for-the-badge&logoColor=000)](https://apexrun-web.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-E916A0?style=for-the-badge&logo=framer&logoColor=fff)](https://www.framer.com/motion)

</div>

---

## 🎯 What Is This?

This is **not** a generic marketing site. It's a **technical showcase** designed to demonstrate production-grade frontend engineering — the kind of work that belongs on a senior developer's resume.

The site highlights the architecture behind **ApexRun**, a hybrid **Flutter + Go + Supabase** running platform with:

- 🧠 **Agentic AI coaching** powered by Gemini 1.5 Flash
- 👁️ **On-device computer vision** tracking 33 pose landmarks at 30fps
- 🗺️ **Real-time spatial queries** via PostGIS with sub-10ms segment matching

---

## 🖥️ Sections

| Section | Highlights |
|:--------|:-----------|
| **Hero** | Bold headline with gradient text, 3D phone mockup, staggered Framer Motion entrance, quantified metrics bar |
| **Feature Grid** | 3-column cards — AI Form Lab, Dynamic Recalibration, Live Segments — each with metric badges & tech tags |
| **Engineering Story** | Architecture pipeline (Flutter → Go → PostGIS → Gemini) + real PostGIS spatial query in Go with annotated callouts |
| **Visual Metrics** | Recharts AreaChart — 12-week pace/distance/VO₂ max with custom dark tooltip & summary stats |
| **Footer** | Resume download CTA, LinkedIn, GitHub links |

> **Design System:** `#0A0A0A` background · `#CCFF00` Electric Lime accent · Inter + Roboto Condensed typography

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────┐
│                    Next.js 16 (App Router)            │
├──────────────┬──────────────┬────────────────────────┤
│  Framer      │  Recharts    │  Lucide React          │
│  Motion      │  AreaChart   │  Icons                 │
├──────────────┴──────────────┴────────────────────────┤
│              Tailwind CSS v4                          │
├──────────────────────────────────────────────────────┤
│              TypeScript (Strict)                      │
└──────────────────────────────────────────────────────┘
```

### Component Map

```
app/
├── layout.tsx                 # Root layout (Inter + Roboto Condensed fonts)
├── page.tsx                   # Main page — composes all sections
├── globals.css                # Dark theme + custom utilities
└── components/
    ├── Navbar.tsx              # Sticky glass-blur nav + mobile menu
    ├── HeroSection.tsx         # Hero with staggered animations + phone mockup
    ├── FeatureGrid.tsx         # 3-col AI/Coaching/Spatial feature cards
    ├── TechBreakdown.tsx       # Architecture pipeline + PostGIS code showcase
    ├── RunnerChart.tsx         # Recharts area chart with training data
    └── Footer.tsx              # Resume links + CTA
```

---

## ✨ Key Features

### 🎨 Performance Dark Mode
High-contrast UI with `#0A0A0A` background and `#CCFF00` Electric Lime accents. Custom scrollbar, selection colors, and glassmorphism effects throughout.

### 🎬 Framer Motion Animations
- Staggered hero entrance with delayed children
- Scroll-triggered `whileInView` animations on every section
- Custom card hover effects with glow overlays
- Navbar fade-in with scroll-aware background transition

### 📊 Interactive Data Visualization
Recharts `AreaChart` rendering a mock 12-week training periodization block with pace trend, weekly distance, and VO₂ max progression — complete with a custom dark-themed tooltip and summary metric cards.

### 🔬 Technical Deep-Dive Section
A real PostGIS spatial query in Go — not pseudocode — with annotated callouts explaining `ST_DWithin`, goroutine concurrency, WGS84 geography casts, and temporal windowing.

### 📱 Fully Responsive
Perfect layout from 320px mobile to 1440px+ desktop with mobile hamburger menu, responsive grids, and adaptive typography.

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Deepak8858/apexrun-web.git
cd apexrun-web

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Build for production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| **Framework** | Next.js 16 (App Router) | SSR, routing, optimized builds |
| **UI** | React 19 + TypeScript | Component architecture |
| **Styling** | Tailwind CSS v4 | Utility-first dark theme |
| **Animation** | Framer Motion | Scroll-triggered entrance effects |
| **Charts** | Recharts | Runner progress visualization |
| **Icons** | Lucide React | Consistent technical iconography |
| **Fonts** | Inter + Roboto Condensed | Body + data metric typography |
| **Deploy** | Vercel | Edge-optimized hosting |

---

## 📂 What ApexRun (the App) Showcases

This website is a portfolio piece demonstrating expertise in building a platform with:

| Capability | Stack | Key Metric |
|:-----------|:------|:-----------|
| AI Form Analysis | MediaPipe BlazePose + Flutter | 33 landmarks @ 30fps |
| Agentic Coaching | Gemini 1.5 Flash + Function Calling | <500ms AI latency |
| Live Segments | Go + PostGIS + Redis Pub/Sub | 98% GPS accuracy |
| GPS Ingestion | Go goroutines + Chi Router | 10K+ concurrent streams |
| Spatial Queries | PostGIS GiST Index | <10ms segment matching |

---

## 📄 License

MIT © [Deepak Singh](https://github.com/Deepak8858)

---

<div align="center">

**Built with** Next.js · Tailwind · Framer Motion · Recharts

⭐ Star this repo if you found it useful

</div>
