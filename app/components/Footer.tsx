"use client";

import { motion } from "framer-motion";
import { Activity, Github, Linkedin, FileText, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-[#0A0A0A]">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Let&apos;s Connect
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Built by an Engineer Who Runs.
          </h2>
          <p className="mt-4 text-muted">
            ApexRun is a portfolio project showcasing full-stack architecture,
            agentic AI integration, and real-time spatial computing. Interested
            in the engineering behind it? Let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-[#0A0A0A] transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(217,119,6,0.4)]"
            >
              <FileText className="h-4 w-4" />
              Download Full PDF Resume
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-surface"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-accent" />
            <span className="text-sm font-bold text-foreground">
              Apex<span className="text-accent">Run</span>
            </span>
            <span className="text-xs text-muted" suppressHydrationWarning>
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:bg-surface hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:bg-surface hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Tech attribution */}
          <div className="text-[10px] text-muted">
            Built with Next.js · Tailwind · Framer Motion · Recharts
          </div>
        </div>
      </div>
    </footer>
  );
}
