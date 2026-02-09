"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
import {
  type NameType,
  type ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const weeklyData = [
  { week: "W1", pace: 5.42, distance: 18, vo2max: 42.1 },
  { week: "W2", pace: 5.35, distance: 22, vo2max: 42.8 },
  { week: "W3", pace: 5.28, distance: 25, vo2max: 43.2 },
  { week: "W4", pace: 5.38, distance: 15, vo2max: 43.0 },
  { week: "W5", pace: 5.18, distance: 28, vo2max: 44.1 },
  { week: "W6", pace: 5.12, distance: 32, vo2max: 44.8 },
  { week: "W7", pace: 5.05, distance: 30, vo2max: 45.3 },
  { week: "W8", pace: 4.98, distance: 35, vo2max: 46.0 },
  { week: "W9", pace: 5.08, distance: 20, vo2max: 45.5 },
  { week: "W10", pace: 4.88, distance: 38, vo2max: 46.8 },
  { week: "W11", pace: 4.82, distance: 40, vo2max: 47.2 },
  { week: "W12", pace: 4.75, distance: 42, vo2max: 48.0 },
];

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-surface p-3 shadow-xl">
      <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold text-accent">
        {label}
      </div>
      <div className="mt-1 space-y-1">
        <div className="text-xs text-muted">
          Pace:{" "}
          <span className="font-semibold text-foreground">
            {payload[0]?.value} min/km
          </span>
        </div>
        <div className="text-xs text-muted">
          Distance:{" "}
          <span className="font-semibold text-foreground">
            {payload[1]?.value} km
          </span>
        </div>
        <div className="text-xs text-muted">
          VO₂ Max:{" "}
          <span className="font-semibold text-foreground">
            {payload[2]?.value}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RunnerChart() {
  return (
    <section id="metrics" className="bg-background py-24">
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
            Data Visualization
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Visual Metrics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Mock &ldquo;Runner Progress&rdquo; chart demonstrating how ApexRun
            visualizes 12-week training periodization with pace, volume, and VO₂
            max trends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-border bg-surface p-6"
        >
          {/* Chart header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                12-Week Training Block
              </h3>
              <p className="text-xs text-muted">
                Pace trend with weekly distance and VO₂ max overlay
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { color: "#D97706", label: "Pace (min/km)" },
                { color: "#8B5CF6", label: "Distance (km)" },
                { color: "#F97316", label: "VO₂ Max" },
              ].map((legend) => (
                <div key={legend.label} className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: legend.color }}
                  />
                  <span className="text-[10px] text-muted">{legend.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={weeklyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="paceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D97706" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#D97706" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="distGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="vo2Gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#F97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#222"
                  vertical={false}
                />
                <XAxis
                  dataKey="week"
                  tick={{ fill: "#888", fontSize: 11 }}
                  tickLine={false}
                  axisLine={{ stroke: "#222" }}
                />
                <YAxis
                  tick={{ fill: "#888", fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="pace"
                  stroke="#D97706"
                  strokeWidth={2}
                  fill="url(#paceGradient)"
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: "#D97706",
                    stroke: "#0A0A0A",
                    strokeWidth: 2,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="distance"
                  stroke="#8B5CF6"
                  strokeWidth={1.5}
                  fill="url(#distGradient)"
                  dot={false}
                  activeDot={{
                    r: 3,
                    fill: "#8B5CF6",
                    stroke: "#0A0A0A",
                    strokeWidth: 2,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="vo2max"
                  stroke="#F97316"
                  strokeWidth={1.5}
                  fill="url(#vo2Gradient)"
                  dot={false}
                  activeDot={{
                    r: 3,
                    fill: "#F97316",
                    stroke: "#0A0A0A",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Summary metrics */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Avg Pace Improvement", value: "-12.4%", sub: "5.42 → 4.75 min/km" },
              { label: "Total Volume", value: "345 km", sub: "12-week block" },
              { label: "Peak VO₂ Max", value: "48.0", sub: "ml/kg/min" },
              { label: "Recovery Weeks", value: "2", sub: "W4, W9 deload" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-[#0A0A0A] p-3">
                <div className="font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium text-foreground">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
