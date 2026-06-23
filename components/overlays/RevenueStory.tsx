"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CountUp({ target, duration = 2200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(ease * target));
      if (t < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return <>{count.toLocaleString()}</>;
}

const outcomes = [
  {
    label: "IOL Pulse — From 3-Day POC to Enterprise Platform",
    situation:
      "ITB Berlin, early 2024. A geopolitical crisis hit the Middle East. 300 hotel partners had zero demand visibility. I had 48 hours to build something useful.",
    what: "Built a crisis intelligence module in 3 days. The CEO saw the output and turned it into a product. I spent the next year building 18 more modules around it.",
    metrics: [
      { value: "90,000+", label: "Hotels on Platform" },
      { value: "400+", label: "B2B Clients" },
      { value: "19", label: "Intelligence Modules" },
      { value: "300+", label: "Hotel Chains" },
    ],
    proof: "Rate parity monitoring that used to take a revenue analyst 3 hours now surfaces as a real-time alert. Compset analysis that required manual data pulls is now a one-click drill-down.",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    label: "Revenue Forecasting — The Evidence Behind $1B",
    situation:
      "$350M in annual revenue tracked via spreadsheets and gut feel. The CFO had no forward visibility beyond 30 days. Board-level strategy was being set without analytical foundation.",
    what: "Built a Prophet + LSTM + PRISMA ensemble model with Chain → City → Property drill-down. Delivered a weekly monitoring dashboard to the C-suite. 90 minutes of presentation. One strategic commitment.",
    metrics: [
      { value: "$350M", label: "Revenue Baseline" },
      { value: "$1B", label: "Target Committed To" },
      { value: "Weekly", label: "Board Monitoring" },
      { value: "3-tier", label: "Drill-Down Depth" },
    ],
    proof: "The CEO committed to a $1B revenue target in the same meeting. Not because the number was aspirational — because for the first time they had a model that showed exactly which levers to pull and what the compounding effect would be.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    label: "BRG System + Athena — The Operational Transformation",
    situation:
      "BRG violations (hotels selling below contracted rates) were being managed manually. Resolution rate was 36% per month. Hundreds of violations went unresolved. Athena didn't exist — every data question required a data analyst.",
    what: "Built the BRG Violation Management System that automated detection and escalation. Built Athena — an NL2SQL + RAG layer on AWS Athena — that lets any team member query 2M+ hotel records in plain English.",
    metrics: [
      { value: "36%→87%", label: "BRG Resolution Rate" },
      { value: "+51pp", label: "Resolution Improvement" },
      { value: "90%", label: "Data Extraction Automated" },
      { value: "100s/day", label: "Athena Queries Answered" },
    ],
    proof: "The analytics function now runs at 10x the output with the same headcount. Revenue managers who used to wait 2 days for a data extract now get answers in 30 seconds by asking a question in plain English.",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
];

export default function RevenueStory({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: "#f8fafc" }}
    >
      {/* Back button */}
      <button
        onClick={onClose}
        className="fixed top-5 left-5 z-10 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        style={{ background: "#ffffff", border: "1px solid #e2e8f0", color: "#64748b" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Portfolio
      </button>

      <div className="max-w-2xl mx-auto px-6 py-24">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs font-mono font-medium uppercase tracking-widest mb-12"
          style={{ color: "#94a3b8" }}
        >
          Revenue Story
        </motion.p>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6"
        >
          <div
            className="font-bold mb-4"
            style={{
              color: "#0f172a",
              fontSize: "clamp(3rem, 10vw, 6rem)",
              fontFamily: "var(--font-plex-mono), 'IBM Plex Mono', monospace",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            $<CountUp target={1000000000} duration={2200} />
          </div>
          <p className="text-lg leading-relaxed mb-2" style={{ color: "#0f172a" }}>
            This is the revenue target an IOL World executive committed to — after a 90-minute presentation
            built on data I designed, modeled, and delivered.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
            Below is the analytical evidence that made it possible. Three systems. Five years. One hospitality group.
          </p>
        </motion.div>

        <div className="my-12" style={{ height: "1px", background: "#e2e8f0" }} />

        {/* Outcomes */}
        <div className="flex flex-col gap-10 mb-16">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.45 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <p className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: item.color }}>
                  {item.label}
                </p>
              </div>

              {/* Situation + What */}
              <div
                className="rounded-xl p-5 mb-4"
                style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
              >
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#94a3b8" }}>
                  Situation
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                  {item.situation}
                </p>
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#94a3b8" }}>
                  What was built
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#0f172a" }}>
                  {item.what}
                </p>
              </div>

              {/* Metrics */}
              <div
                className="grid grid-cols-4 gap-px mb-4 rounded-xl overflow-hidden"
                style={{ background: "#e2e8f0" }}
              >
                {item.metrics.map((m, j) => (
                  <div key={j} className="p-4" style={{ background: "#ffffff" }}>
                    <p className="metric-num text-base font-bold mb-1" style={{ color: item.color }}>
                      {m.value}
                    </p>
                    <p className="text-xs leading-tight" style={{ color: "#94a3b8" }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Proof */}
              <div
                className="rounded-xl p-4"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}
              >
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: item.color }}>
                  The proof
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  {item.proof}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.45 }}
          className="rounded-xl p-8 text-center"
          style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: "#0f172a" }}>
            This is what a mature analytics function looks like when it&apos;s working.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
            The question is whether yours is generating the same leverage — or leaving it on the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:wasif.ijaz16@yahoo.com?subject=Let's discuss analytics strategy"
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "#0f172a", color: "#fff" }}
            >
              Let&apos;s talk analytics strategy →
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "#f8fafc", color: "#64748b", border: "1px solid #e2e8f0" }}
            >
              View full portfolio
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
