"use client";

import { motion } from "framer-motion";
import { Layers, Server, Database, Cpu, ArrowRight } from "lucide-react";

const stackLayers = [
  {
    icon: <Layers className="h-5 w-5" />,
    label: "Flutter Client",
    detail: "Dart · MediaPipe · BLoC Pattern",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: <Server className="h-5 w-5" />,
    label: "Go API Layer",
    detail: "Chi Router · goroutines · gRPC",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <Database className="h-5 w-5" />,
    label: "Supabase + PostGIS",
    detail: "Spatial Indexing · Row-Level Security",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    label: "Gemini 1.5 Flash",
    detail: "Agentic Coaching · Function Calling",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
];

const goCodeSnippet = `// PostGIS spatial query: find runners within a live segment corridor
func (s *SegmentService) FindRunnersInSegment(
    ctx context.Context,
    segmentID uuid.UUID,
    tolerance float64, // meters
) ([]RunnerPosition, error) {
    query := \`
        SELECT r.user_id, r.latitude, r.longitude, r.pace,
               ST_Distance(
                   r.position::geography,
                   s.corridor::geography
               ) AS distance_m
        FROM   runner_positions r
        JOIN   segments s ON s.id = $1
        WHERE  ST_DWithin(
                   r.position::geography,
                   s.corridor::geography,
                   $2  -- tolerance in meters
               )
        AND    r.updated_at > NOW() - INTERVAL '30 seconds'
        ORDER  BY r.pace ASC
    \`

    rows, err := s.db.QueryContext(ctx, query, segmentID, tolerance)
    if err != nil {
        return nil, fmt.Errorf("segment query failed: %w", err)
    }
    defer rows.Close()

    var positions []RunnerPosition
    for rows.Next() {
        var p RunnerPosition
        if err := rows.Scan(
            &p.UserID, &p.Lat, &p.Lng, &p.Pace, &p.DistanceM,
        ); err != nil {
            return nil, err
        }
        positions = append(positions, p)
    }
    return positions, rows.Err()
}`;

export default function TechBreakdown() {
  return (
    <section id="architecture" className="bg-background py-24">
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
            Case Study
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            The Engineering Story
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A technical breakdown of how ApexRun&apos;s hybrid architecture delivers
            real-time performance coaching at scale.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Architecture Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Hybrid Tech Stack
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-muted">
              ApexRun uses a vertically integrated architecture: a Flutter
              client handles on-device ML and UI, a Go API layer manages
              high-concurrency GPS ingestion via goroutines, and Supabase
              with PostGIS extensions powers spatial queries and real-time
              subscriptions.
            </p>

            {/* Stack pipeline */}
            <div className="space-y-3">
              {stackLayers.map((layer, i) => (
                <div key={layer.label}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/20 hover:bg-surface-hover">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${layer.bgColor} ${layer.color}`}
                    >
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-semibold ${layer.color}`}>
                        {layer.label}
                      </div>
                      <div className="text-xs text-muted">{layer.detail}</div>
                    </div>
                  </div>
                  {i < stackLayers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="h-4 w-4 rotate-90 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Architecture callout */}
            <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
              <div className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-widest text-accent">
                Why This Stack?
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Go&apos;s goroutine model handles 10K+ concurrent GPS streams with
                minimal memory overhead. PostGIS spatial indexing (GiST) enables
                sub-10ms segment matching. Flutter&apos;s Skia rendering engine
                ensures 60fps map overlays even during intensive pose tracking.
              </p>
            </div>
          </motion.div>

          {/* Right: Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">
                Code Showcase
              </h3>
              <span className="rounded-full border border-border px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium text-muted">
                segment_service.go
              </span>
            </div>

            {/* Code block */}
            <div className="overflow-hidden rounded-xl border border-border bg-[#0A0A0A]">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-[family-name:var(--font-geist-mono)] text-xs text-muted">
                  PostGIS Spatial Query — Go
                </span>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-4">
                <pre className="font-[family-name:var(--font-geist-mono)] text-[11px] leading-5 text-foreground/80">
                  <code>{goCodeSnippet}</code>
                </pre>
              </div>
            </div>

            {/* Annotations */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                {
                  label: "ST_DWithin",
                  desc: "PostGIS spatial filter—uses GiST index for O(log n) lookups.",
                },
                {
                  label: "goroutines",
                  desc: "Each GPS stream handled in a lightweight goroutine (~2KB stack).",
                },
                {
                  label: "Geography cast",
                  desc: "::geography ensures meter-accurate distance on the WGS84 spheroid.",
                },
                {
                  label: "30s window",
                  desc: "Only active runners—stale positions are garbage collected.",
                },
              ].map((note) => (
                <div
                  key={note.label}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <div className="font-[family-name:var(--font-geist-mono)] text-[10px] font-bold text-accent">
                    {note.label}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-muted">
                    {note.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
