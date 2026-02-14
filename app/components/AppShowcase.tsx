"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Play,
  Pause,
  Eye,
  Brain,
  MapPin,
  LayoutDashboard,
  Heart,
  Zap,
  Flame,
  BarChart3,
  Clock,
  Route,
  ChevronRight,
  TrendingDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Full-size screen renderers (larger format for showcase)            */
/* ------------------------------------------------------------------ */

function DashboardFull() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted">Good Morning, Deepak</div>
          <div className="text-lg font-bold text-foreground">Dashboard</div>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
          <Activity className="h-4 w-4 text-accent" />
        </div>
      </div>

      <div className="rounded-2xl bg-accent/10 p-4">
        <div className="text-xs text-muted">Today&apos;s Run</div>
        <div className="font-[family-name:var(--font-roboto-condensed)] text-4xl font-bold text-accent">
          5.2 km
        </div>
        <div className="text-xs text-muted">4:52 /km avg pace · 26:18 total</div>
        <div className="mt-3 flex gap-2">
          <div className="h-2 flex-[3] rounded-full bg-accent/40" />
          <div className="h-2 flex-[2] rounded-full bg-accent/20" />
          <div className="h-2 flex-[1] rounded-full bg-accent/10" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-surface-hover p-3">
          <Heart className="mb-1.5 h-4 w-4 text-red-400" />
          <div className="font-[family-name:var(--font-roboto-condensed)] text-base font-bold text-foreground">142 bpm</div>
          <div className="text-[10px] text-muted">Avg Heart Rate</div>
        </div>
        <div className="rounded-xl bg-surface-hover p-3">
          <Flame className="mb-1.5 h-4 w-4 text-orange-400" />
          <div className="font-[family-name:var(--font-roboto-condensed)] text-base font-bold text-foreground">387</div>
          <div className="text-[10px] text-muted">Calories</div>
        </div>
        <div className="rounded-xl bg-surface-hover p-3">
          <Zap className="mb-1.5 h-4 w-4 text-accent" />
          <div className="font-[family-name:var(--font-roboto-condensed)] text-base font-bold text-foreground">178</div>
          <div className="text-[10px] text-muted">Cadence</div>
        </div>
      </div>

      <div className="rounded-2xl bg-surface-hover p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xs font-medium text-foreground">Weekly Volume</div>
          <BarChart3 className="h-4 w-4 text-muted" />
        </div>
        <div className="flex items-end gap-2 h-16">
          {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-accent/30 transition-all hover:bg-accent/50" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
            <div key={i} className="flex-1 text-center text-[9px] text-muted">{d}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LiveRunFull() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
          <div className="text-sm font-bold uppercase tracking-wider text-red-400">Live Run</div>
        </div>
        <Clock className="h-4 w-4 text-muted" />
      </div>

      <div className="relative h-36 rounded-2xl bg-surface-hover overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <svg width="100%" height="100%" className="text-border">
            {[20, 40, 60, 80].map((p) => (
              <g key={p}>
                <line x1="0" y1={`${p}%`} x2="100%" y2={`${p}%`} stroke="currentColor" strokeWidth="0.5" />
                <line x1={`${p}%`} y1="0" x2={`${p}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" />
              </g>
            ))}
          </svg>
        </div>
        <svg className="absolute inset-0" viewBox="0 0 300 140">
          <path d="M 30,110 Q 70,30 120,70 T 200,40 T 270,80" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          <circle cx="270" cy="80" r="5" fill="#D97706" />
          <circle cx="270" cy="80" r="10" fill="#D97706" opacity="0.2" />
        </svg>
        <div className="absolute bottom-2 left-3 rounded-lg bg-[#0A0A0A]/80 px-2.5 py-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-accent" />
            <span className="text-[10px] font-medium text-accent">98% GPS Accuracy</span>
          </div>
        </div>
      </div>

      <div className="text-center rounded-2xl bg-accent/10 p-4">
        <div className="text-[10px] uppercase tracking-widest text-muted">Current Pace</div>
        <div className="font-[family-name:var(--font-roboto-condensed)] text-5xl font-bold text-accent">4:48</div>
        <div className="text-xs text-muted">min/km</div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: <Route className="h-4 w-4" />, val: "3.2 km", label: "Distance" },
          { icon: <Clock className="h-4 w-4" />, val: "15:22", label: "Duration" },
          { icon: <Heart className="h-4 w-4" />, val: "156 bpm", label: "Heart Rate" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-surface-hover p-3 text-center">
            <div className="flex justify-center text-muted mb-1">{s.icon}</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm font-bold text-foreground">{s.val}</div>
            <div className="text-[9px] text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 p-3">
        <Zap className="h-4 w-4 text-accent shrink-0" />
        <div className="flex-1">
          <div className="text-xs font-bold text-accent">Segment: Park Loop</div>
          <div className="text-[10px] text-muted">2nd place · 0:04 behind leader</div>
        </div>
        <ChevronRight className="h-4 w-4 text-accent" />
      </div>
    </div>
  );
}

function AICoachFull() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
          <Brain className="h-4 w-4 text-accent" />
        </div>
        <div>
          <div className="text-sm font-bold text-foreground">AI Coach</div>
          <div className="text-[10px] text-accent">Powered by Gemini 1.5 Flash</div>
        </div>
      </div>

      <div className="rounded-2xl bg-surface-hover p-4">
        <div className="text-[10px] uppercase tracking-wider text-muted mb-3">Recovery Status</div>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#222" strokeWidth="3" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#D97706" strokeWidth="3" strokeDasharray="75 25" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-[family-name:var(--font-roboto-condensed)] text-sm font-bold text-accent">75%</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Well Recovered</div>
            <div className="text-[10px] text-muted">HRV: 58ms · Sleep: 7.2h · RHR: 52bpm</div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-accent/5 p-4">
        <div className="text-xs font-bold text-accent mb-2">Plan Recalibration</div>
        <div className="text-sm leading-relaxed text-foreground/80">
          Based on your HRV and sleep data, I&apos;ve adjusted today&apos;s session
          from tempo to easy recovery. Your body needs more rest after
          yesterday&apos;s interval session. Target HR Zone 2, keep effort
          conversational.
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4">
        <div className="text-[10px] uppercase tracking-wider text-muted mb-3">Updated Plan</div>
        <div className="space-y-2">
          {[
            { label: "Easy Run", detail: "5km · Zone 2 · Recovery pace", active: true },
            { label: "Core Strength", detail: "Plank circuit · 15min", active: false },
            { label: "Hip Mobility", detail: "Dynamic stretches · 10min", active: false },
          ].map((item) => (
            <div key={item.label} className={`flex items-center justify-between rounded-xl p-3 ${item.active ? "bg-accent/10 border border-accent/20" : "bg-surface-hover"}`}>
              <div>
                <div className={`text-xs font-medium ${item.active ? "text-accent" : "text-foreground"}`}>{item.label}</div>
                <div className="text-[10px] text-muted">{item.detail}</div>
              </div>
              <ChevronRight className={`h-4 w-4 ${item.active ? "text-accent" : "text-muted"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FormAnalysisFull() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
          <Eye className="h-4 w-4 text-accent" />
        </div>
        <div>
          <div className="text-sm font-bold text-foreground">Form Analysis</div>
          <div className="text-[10px] text-muted">Computer Vision · MediaPipe · 30fps</div>
        </div>
      </div>

      <div className="relative h-44 rounded-2xl bg-surface-hover overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160">
          <circle cx="100" cy="28" r="10" fill="none" stroke="#D97706" strokeWidth="2" />
          <line x1="100" y1="38" x2="100" y2="80" stroke="#D97706" strokeWidth="2" />
          <line x1="100" y1="52" x2="75" y2="68" stroke="#D97706" strokeWidth="2" />
          <line x1="100" y1="52" x2="125" y2="42" stroke="#D97706" strokeWidth="2" />
          <line x1="100" y1="80" x2="78" y2="115" stroke="#D97706" strokeWidth="2" />
          <line x1="100" y1="80" x2="128" y2="110" stroke="#D97706" strokeWidth="2" />
          <line x1="78" y1="115" x2="70" y2="145" stroke="#D97706" strokeWidth="2" />
          <line x1="128" y1="110" x2="142" y2="138" stroke="#D97706" strokeWidth="2" />
          {[
            [100, 28], [100, 52], [75, 68], [125, 42], [100, 80],
            [78, 115], [128, 110], [70, 145], [142, 138],
            [100, 38], [85, 60], [115, 47],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5" fill="#D97706" opacity="0.8" />
          ))}
          <path d="M 86,100 A 18,18 0 0,1 100,80" fill="none" stroke="#FF6B6B" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="72" y="96" fill="#FF6B6B" fontSize="9" fontWeight="bold">168°</text>
        </svg>
        <div className="absolute top-3 right-3 rounded-lg bg-[#0A0A0A]/80 px-2.5 py-1">
          <div className="font-[family-name:var(--font-roboto-condensed)] text-[10px] font-bold text-accent">33 landmarks · 30fps</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Knee Angle", value: "168°", status: "Good", color: "text-green-400" },
          { label: "Cadence", value: "178 spm", status: "Optimal", color: "text-accent" },
          { label: "Ground Contact", value: "235ms", status: "Average", color: "text-yellow-400" },
          { label: "Vertical Osc.", value: "8.2cm", status: "Good", color: "text-green-400" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl bg-surface-hover p-3">
            <div className="text-[10px] text-muted">{m.label}</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-lg font-bold text-foreground">{m.value}</div>
            <div className={`text-[10px] font-medium ${m.color}`}>{m.status}</div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-3">
        <TrendingDown className="h-4 w-4 text-accent shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-foreground/80">
          <span className="font-bold text-accent">AI Tip: </span>
          Slight overstriding detected in the last 500m. Try increasing cadence
          by 3-5 spm to reduce ground contact time and lower impact forces.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Showcase Component                                            */
/* ------------------------------------------------------------------ */

const showcaseScreens = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, component: DashboardFull },
  { id: "live-run", label: "Live Run", icon: <MapPin className="h-4 w-4" />, component: LiveRunFull },
  { id: "ai-coach", label: "AI Coach", icon: <Brain className="h-4 w-4" />, component: AICoachFull },
  { id: "form-lab", label: "Form Lab", icon: <Eye className="h-4 w-4" />, component: FormAnalysisFull },
];

const AUTOPLAY_INTERVAL = 5000;

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseScreens.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const ActiveComponent = showcaseScreens[activeIndex].component;

  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-[0.2em] text-accent">
            App Experience
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A walkthrough of ApexRun&apos;s core screens — from the dashboard to
            real-time form analysis. Each view is designed for data-rich, glanceable
            performance insights.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {showcaseScreens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => {
                setActiveIndex(i);
                setIsPlaying(false);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                i === activeIndex
                  ? "bg-accent text-[#0A0A0A] shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                  : "border border-border text-muted hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {screen.icon}
              <span className="hidden sm:inline">{screen.label}</span>
            </button>
          ))}

          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent/30 hover:text-foreground"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
        </motion.div>

        {/* Phone showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-16 rounded-[4rem] bg-accent/8 blur-[80px]" />

            {/* Large phone frame */}
            <div className="relative w-[320px] sm:w-[360px] overflow-hidden rounded-[2.5rem] border-2 border-border bg-surface shadow-2xl">
              {/* Status bar */}
              <div className="flex items-center justify-between px-7 pt-3 pb-1">
                <div className="text-[9px] text-muted">9:41</div>
                <div className="mx-auto h-5 w-24 rounded-full bg-[#0A0A0A]" />
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted/40" />
                  <div className="h-2 w-2 rounded-full bg-muted/40" />
                  <div className="h-2 w-2 rounded-full bg-muted/40" />
                </div>
              </div>

              {/* App title bar */}
              <div className="flex items-center justify-center gap-1.5 pb-2">
                <Activity className="h-3 w-3 text-accent" />
                <span className="font-[family-name:var(--font-roboto-condensed)] text-[10px] font-bold uppercase tracking-widest text-accent">
                  ApexRun
                </span>
              </div>

              {/* Screen content */}
              <div className="min-h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ActiveComponent />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-center gap-6 border-t border-border px-6 py-3">
                {showcaseScreens.map((screen, i) => (
                  <div
                    key={screen.id}
                    className={`flex flex-col items-center gap-0.5 transition-colors ${
                      i === activeIndex ? "text-accent" : "text-muted/50"
                    }`}
                  >
                    {screen.icon}
                    <div className="text-[7px]">{screen.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 flex gap-1.5">
              {showcaseScreens.map((_, i) => (
                <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                  {i === activeIndex && isPlaying ? (
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                      key={`progress-${activeIndex}`}
                    />
                  ) : (
                    <div
                      className={`h-full rounded-full transition-all ${
                        i === activeIndex ? "w-full bg-accent" : i < activeIndex ? "w-full bg-accent/30" : "w-0"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
