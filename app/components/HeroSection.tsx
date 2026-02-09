"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import PhoneCarousel from "./PhoneCarousel";

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

        {/* Right: Animated Phone Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-1 items-center justify-center"
        >
          <PhoneCarousel />
        </motion.div>
      </div>
    </section>
  );
}
