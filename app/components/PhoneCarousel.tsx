"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  MapPin,
  Brain,
  Eye,
  Heart,
  Zap,
  TrendingDown,
  Clock,
  Route,
  ChevronRight,
  BarChart3,
  Flame,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Screen data                                                        */
/* ------------------------------------------------------------------ */

function DashboardScreen() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] text-muted">Good Morning</div>
          <div className="text-sm font-bold text-foreground">Dashboard</div>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10">
          <Activity className="h-3.5 w-3.5 text-accent" />
        </div>
      </div>

      {/* Today's summary card */}
      <div className="rounded-xl bg-accent/10 p-3">
        <div className="text-[10px] text-muted">Today&apos;s Run</div>
        <div className="font-[family-name:var(--font-roboto-condensed)] text-2xl font-bold text-accent">
          5.2 km
        </div>
        <div className="text-[10px] text-muted">4:52 /km avg pace</div>
        <div className="mt-2 flex gap-2">
          <div className="h-1.5 flex-[3] rounded-full bg-accent/40" />
          <div className="h-1.5 flex-[2] rounded-full bg-accent/20" />
          <div className="h-1.5 flex-[1] rounded-full bg-accent/10" />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg bg-surface-hover p-2.5">
          <Heart className="mb-1 h-3 w-3 text-red-400" />
          <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold text-foreground">
            142 bpm
          </div>
          <div className="text-[9px] text-muted">Avg HR</div>
        </div>
        <div className="flex-1 rounded-lg bg-surface-hover p-2.5">
          <Flame className="mb-1 h-3 w-3 text-orange-400" />
          <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold text-foreground">
            387
          </div>
          <div className="text-[9px] text-muted">Calories</div>
        </div>
        <div className="flex-1 rounded-lg bg-surface-hover p-2.5">
          <Zap className="mb-1 h-3 w-3 text-accent" />
          <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold text-foreground">
            178
          </div>
          <div className="text-[9px] text-muted">Cadence</div>
        </div>
      </div>

      {/* Weekly chart placeholder */}
      <div className="rounded-xl bg-surface-hover p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[10px] font-medium text-foreground">This Week</div>
          <BarChart3 className="h-3 w-3 text-muted" />
        </div>
        <div className="flex items-end gap-1.5 h-10">
          {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-accent/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="flex-1 text-center text-[8px] text-muted">
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LiveRunScreen() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <div className="text-[10px] font-bold uppercase tracking-wider text-red-400">
            Live
          </div>
        </div>
        <Clock className="h-3.5 w-3.5 text-muted" />
      </div>

      {/* Map placeholder */}
      <div className="relative h-28 rounded-xl bg-surface-hover overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Fake map grid */}
          <svg width="100%" height="100%" className="text-border">
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        {/* Route line */}
        <svg className="absolute inset-0" viewBox="0 0 200 100">
          <path
            d="M 20,80 Q 50,20 80,50 T 140,30 T 180,60"
            fill="none"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="180" cy="60" r="4" fill="#D97706" />
        </svg>
        <div className="absolute bottom-2 left-2 rounded-md bg-[#0A0A0A]/80 px-2 py-1">
          <div className="flex items-center gap-1">
            <MapPin className="h-2.5 w-2.5 text-accent" />
            <span className="text-[8px] text-accent">Live GPS</span>
          </div>
        </div>
      </div>

      {/* Big pace display */}
      <div className="text-center rounded-xl bg-accent/10 p-3">
        <div className="text-[9px] uppercase tracking-widest text-muted">Current Pace</div>
        <div className="font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold text-accent">
          4:48
        </div>
        <div className="text-[10px] text-muted">min/km</div>
      </div>

      {/* Live stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <Route className="h-3 w-3" />, val: "3.2", unit: "km" },
          { icon: <Clock className="h-3 w-3" />, val: "15:22", unit: "time" },
          { icon: <Heart className="h-3 w-3" />, val: "156", unit: "bpm" },
        ].map((s) => (
          <div key={s.unit} className="rounded-lg bg-surface-hover p-2 text-center">
            <div className="flex justify-center text-muted mb-0.5">{s.icon}</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold text-foreground">
              {s.val}
            </div>
            <div className="text-[8px] text-muted">{s.unit}</div>
          </div>
        ))}
      </div>

      {/* Segment alert */}
      <div className="flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 p-2">
        <Zap className="h-3.5 w-3.5 text-accent shrink-0" />
        <div className="flex-1">
          <div className="text-[9px] font-bold text-accent">Segment: Park Loop</div>
          <div className="text-[8px] text-muted">2nd place · 0:04 behind leader</div>
        </div>
        <ChevronRight className="h-3 w-3 text-accent" />
      </div>
    </div>
  );
}

function AICoachScreen() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10">
          <Brain className="h-3.5 w-3.5 text-accent" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">AI Coach</div>
          <div className="text-[9px] text-accent">Gemini 1.5 Flash</div>
        </div>
      </div>

      {/* Recovery insight */}
      <div className="rounded-xl bg-surface-hover p-3">
        <div className="text-[9px] uppercase tracking-wider text-muted mb-2">Recovery Status</div>
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#222" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15" fill="none"
                stroke="#D97706" strokeWidth="3"
                strokeDasharray="75 25" strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-[family-name:var(--font-roboto-condensed)] text-[10px] font-bold text-accent">
                75%
              </span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-medium text-foreground">Well Recovered</div>
            <div className="text-[9px] text-muted">HRV: 58ms · Sleep: 7.2h</div>
          </div>
        </div>
      </div>

      {/* AI Message */}
      <div className="rounded-xl bg-accent/5 p-3">
        <div className="text-[9px] font-bold text-accent mb-1">Plan Recalibration</div>
        <div className="text-[10px] leading-snug text-foreground/80">
          Based on your HRV and sleep data, I&apos;ve adjusted today&apos;s session
          from tempo to easy recovery. Your body needs more rest after
          yesterday&apos;s interval session.
        </div>
      </div>

      {/* Today's plan */}
      <div className="rounded-xl border border-border bg-surface p-3">
        <div className="text-[9px] uppercase tracking-wider text-muted mb-2">Updated Plan</div>
        <div className="space-y-2">
          {[
            { label: "Easy Run", detail: "5km · Z2 · Recovery", active: true },
            { label: "Strength", detail: "Core · 15min", active: false },
            { label: "Stretch", detail: "Hip flexors · 10min", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-lg p-2 ${
                item.active ? "bg-accent/10 border border-accent/20" : "bg-surface-hover"
              }`}
            >
              <div>
                <div className={`text-[10px] font-medium ${item.active ? "text-accent" : "text-foreground"}`}>
                  {item.label}
                </div>
                <div className="text-[8px] text-muted">{item.detail}</div>
              </div>
              <ChevronRight className={`h-3 w-3 ${item.active ? "text-accent" : "text-muted"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FormAnalysisScreen() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10">
          <Eye className="h-3.5 w-3.5 text-accent" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">Form Analysis</div>
          <div className="text-[9px] text-muted">Computer Vision · 30fps</div>
        </div>
      </div>

      {/* Pose visualization placeholder */}
      <div className="relative h-32 rounded-xl bg-surface-hover overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 100">
          {/* Stick figure runner */}
          <circle cx="60" cy="18" r="6" fill="none" stroke="#D97706" strokeWidth="1.5" />
          {/* Torso */}
          <line x1="60" y1="24" x2="60" y2="50" stroke="#D97706" strokeWidth="1.5" />
          {/* Arms */}
          <line x1="60" y1="32" x2="45" y2="42" stroke="#D97706" strokeWidth="1.5" />
          <line x1="60" y1="32" x2="75" y2="26" stroke="#D97706" strokeWidth="1.5" />
          {/* Legs */}
          <line x1="60" y1="50" x2="45" y2="72" stroke="#D97706" strokeWidth="1.5" />
          <line x1="60" y1="50" x2="78" y2="68" stroke="#D97706" strokeWidth="1.5" />
          {/* Lower legs */}
          <line x1="45" y1="72" x2="40" y2="90" stroke="#D97706" strokeWidth="1.5" />
          <line x1="78" y1="68" x2="88" y2="84" stroke="#D97706" strokeWidth="1.5" />
          {/* Landmark dots */}
          {[
            [60, 18], [60, 32], [45, 42], [75, 26], [60, 50],
            [45, 72], [78, 68], [40, 90], [88, 84],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill="#D97706" opacity="0.8" />
          ))}
          {/* Angle arc */}
          <path d="M 52,62 A 12,12 0 0,1 60,50" fill="none" stroke="#FF6B6B" strokeWidth="1" strokeDasharray="2 1" />
          <text x="42" y="60" fill="#FF6B6B" fontSize="6">168°</text>
        </svg>
        <div className="absolute top-2 right-2 rounded-md bg-[#0A0A0A]/80 px-1.5 py-0.5">
          <div className="font-[family-name:var(--font-roboto-condensed)] text-[8px] font-bold text-accent">
            33 pts tracked
          </div>
        </div>
      </div>

      {/* Form metrics */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Knee Angle", value: "168°", status: "Good", color: "text-green-400" },
          { label: "Cadence", value: "178", status: "Optimal", color: "text-accent" },
          { label: "Ground Contact", value: "235ms", status: "Average", color: "text-yellow-400" },
          { label: "Vertical Osc.", value: "8.2cm", status: "Good", color: "text-green-400" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg bg-surface-hover p-2">
            <div className="text-[8px] text-muted">{m.label}</div>
            <div className="font-[family-name:var(--font-roboto-condensed)] text-sm font-bold text-foreground">
              {m.value}
            </div>
            <div className={`text-[8px] font-medium ${m.color}`}>{m.status}</div>
          </div>
        ))}
      </div>

      {/* AI tip */}
      <div className="flex items-start gap-2 rounded-lg border border-accent/20 bg-accent/5 p-2">
        <TrendingDown className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
        <div className="text-[9px] leading-snug text-foreground/80">
          <span className="font-bold text-accent">Tip: </span>
          Slight overstriding detected. Try increasing cadence by 3-5 spm
          to reduce ground contact time.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Carousel component                                                 */
/* ------------------------------------------------------------------ */

const screens = [
  { id: "dashboard", label: "Dashboard", component: DashboardScreen },
  { id: "live-run", label: "Live Run", component: LiveRunScreen },
  { id: "ai-coach", label: "AI Coach", component: AICoachScreen },
  { id: "form", label: "Form Lab", component: FormAnalysisScreen },
];

const AUTOPLAY_MS = 4000;

export default function PhoneCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > activeIndex ? 1 : -1);
      setActiveIndex(idx);
    },
    [activeIndex],
  );

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % screens.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const ActiveScreen = screens[activeIndex].component;

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-3xl" />

      {/* Phone frame */}
      <div className="relative h-[540px] w-[270px] overflow-hidden rounded-[2.5rem] border-2 border-border bg-surface shadow-2xl">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
          <div className="text-[8px] text-muted">9:41</div>
          <div className="mx-auto h-5 w-20 rounded-full bg-[#0A0A0A]" />
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-muted/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-muted/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-muted/50" />
          </div>
        </div>

        {/* Screen title bar */}
        <div className="flex items-center justify-center gap-1.5 pb-2">
          <Activity className="h-3 w-3 text-accent" />
          <span className="font-[family-name:var(--font-roboto-condensed)] text-[9px] font-bold uppercase tracking-widest text-accent">
            ApexRun
          </span>
        </div>

        {/* Animated screen content */}
        <div className="relative h-[420px] overflow-hidden px-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-x-4 top-0"
            >
              <ActiveScreen />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom nav dots */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => goTo(i)}
              className="group flex flex-col items-center gap-1"
              aria-label={screen.label}
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-muted/40 group-hover:bg-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Screen label below phone */}
      <div className="mt-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-widest text-accent"
          >
            {screens[activeIndex].label}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
