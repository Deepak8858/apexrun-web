"use client";

import { motion } from "framer-motion";
import { Eye, Brain, MapPin } from "lucide-react";
import { type ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
}

const features: Feature[] = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "AI Form Lab",
    subtitle: "Computer Vision",
    metric: "33",
    metricLabel: "Pose Landmarks @ 30fps",
    description:
      "On-device pose estimation tracking 33 skeletal landmarks in real-time. Detects overstriding, heel-strike patterns, and cadence asymmetry using MediaPipe's BlazePose model—no cloud round-trip required.",
    tags: ["MediaPipe", "BlazePose", "Flutter", "On-Device ML"],
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Dynamic Plan Recalibration",
    subtitle: "Gemini 1.5 Flash",
    metric: "<500",
    metricLabel: "ms AI Latency",
    description:
      "Agentic training plan adjustments powered by Gemini 1.5 Flash. Ingests HRV, sleep quality, and session RPE to autonomously reschedule intensity, volume, and recovery blocks—mimicking an elite-level coach.",
    tags: ["Gemini 1.5", "Agentic AI", "HRV", "Biometrics"],
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Live Segments",
    subtitle: "Redis / PostGIS",
    metric: "98%",
    metricLabel: "GPS Accuracy",
    description:
      "High-concurrency Go backend processing thousands of GPS pings per second with PostGIS spatial indexing. Redis pub/sub enables real-time leaderboard updates and segment matching within 10m tolerance.",
    tags: ["Go", "PostGIS", "Redis", "Spatial Index"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Core Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            The &ldquo;Agentic&rdquo; Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Three pillars of intelligent running infrastructure—each engineered
            for real-time performance at scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-hover"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

              {/* Icon + subtitle */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {feature.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {feature.title}
                  </div>
                  <div className="text-xs text-muted">{feature.subtitle}</div>
                </div>
              </div>

              {/* Metric */}
              <div className="mb-4 rounded-xl bg-[#0A0A0A] p-4">
                <div className="font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold text-accent">
                  {feature.metric}
                </div>
                <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-medium uppercase tracking-wider text-muted">
                  {feature.metricLabel}
                </div>
              </div>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
