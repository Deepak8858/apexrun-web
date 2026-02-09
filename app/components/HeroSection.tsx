"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Smartphone } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:items-center lg:gap-12 lg:py-32">
        {/* Left: Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-widest text-muted">
              Flutter + Go + Gemini 1.5
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            ApexRun:{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              The AI-Native
            </span>
            <br />
            Performance Partner.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            A hybrid Flutter + Go platform that bridges Strava&apos;s social engine
            with Runna&apos;s AI coaching. On-device computer vision, agentic plan
            recalibration, and sub-500ms spatial queries—engineered for
            performance.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-[#0A0A0A] transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
            >
              <Github className="h-4 w-4" />
              View on GitHub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-surface"
            >
              Technical Deep Dive
            </a>
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            variants={item}
            className="mt-10 flex gap-8 border-t border-border pt-6"
          >
            {[
              { value: "33", label: "Pose Landmarks", unit: "pts" },
              { value: "<500", label: "AI Latency", unit: "ms" },
              { value: "98%", label: "GPS Accuracy", unit: "" },
            ].map((metric) => (
              <div key={metric.label} className="text-center lg:text-left">
                <div className="font-[family-name:var(--font-roboto-condensed)] text-2xl font-bold text-accent">
                  {metric.value}
                  <span className="text-sm text-muted">{metric.unit}</span>
                </div>
                <div className="text-xs text-muted">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Phone Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-3xl" />

            {/* Phone frame */}
            <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[2.5rem] border-2 border-border bg-surface shadow-2xl">
              {/* Notch */}
              <div className="mx-auto mt-3 h-6 w-24 rounded-full bg-[#0A0A0A]" />

              {/* Screen content */}
              <div className="flex flex-col items-center px-6 pt-8">
                <Smartphone className="mb-4 h-8 w-8 text-accent/60" />
                <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-widest text-accent">
                  ApexRun
                </div>
                <div className="mt-6 w-full space-y-3">
                  {/* Fake UI elements */}
                  <div className="h-24 rounded-xl bg-accent/10 p-3">
                    <div className="text-[10px] text-muted">Today&apos;s Run</div>
                    <div className="font-[family-name:var(--font-roboto-condensed)] text-2xl font-bold text-accent">
                      5.2 km
                    </div>
                    <div className="text-[10px] text-muted">4:52 /km avg pace</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 rounded-lg bg-surface-hover p-3">
                      <div className="text-[10px] text-muted">HR Zone</div>
                      <div className="font-[family-name:var(--font-roboto-condensed)] text-sm font-bold text-foreground">
                        Z3
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg bg-surface-hover p-3">
                      <div className="text-[10px] text-muted">Cadence</div>
                      <div className="font-[family-name:var(--font-roboto-condensed)] text-sm font-bold text-foreground">
                        178
                      </div>
                    </div>
                  </div>
                  <div className="h-20 rounded-xl bg-accent/5 p-3">
                    <div className="text-[10px] text-muted">AI Coach</div>
                    <div className="mt-1 text-[11px] leading-snug text-foreground/80">
                      &quot;Great pace! Recovery run tomorrow—your HRV suggests
                      light effort.&quot;
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 flex-[3] rounded-full bg-accent/30" />
                    <div className="h-2 flex-[2] rounded-full bg-accent/10" />
                    <div className="h-2 flex-[1] rounded-full bg-accent/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
