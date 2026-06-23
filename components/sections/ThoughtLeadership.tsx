"use client";

import { motion } from "framer-motion";

const articles = [
  {
    tag: "Product Analytics",
    color: "#2563eb",
    bg: "#eff6ff",
    title: "How I Turned a 3-Day POC Into a Product Used by 90,000 Hotels",
    description: "The story behind IOL Pulse and what it taught me about the gap between analytics demos and analytics products.",
  },
  {
    tag: "Analytics Strategy",
    color: "#059669",
    bg: "#ecfdf5",
    title: "Why Your BI Dashboard Isn't Changing Decisions",
    description: "The difference between a dashboard that informs and one that drives action — and the design choices that determine which one you've built.",
  },
  {
    tag: "AI & Analytics",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Conversational Analytics: What It Actually Takes to Build It",
    description: "What I learned building Athena: entity resolution, hallucination prevention, and why most LLM analytics tools fail in production.",
  },
];

export default function ThoughtLeadership() {
  return (
    <section id="blog" className="py-20 border-t" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>Thought Leadership</p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#0f172a" }}>
              Perspectives on Analytics Leadership
            </h2>
            <span className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }}>
              Articles coming soon
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="dashboard-card p-6 flex flex-col"
            >
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full mb-5 self-start" style={{ background: article.bg, color: article.color }}>
                {article.tag}
              </span>
              <h3 className="text-sm font-bold leading-snug mb-3 flex-1" style={{ color: "#0f172a" }}>
                {article.title}
              </h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "#64748b" }}>
                {article.description}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: "#f1f5f9" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#94a3b8" }} />
                <span className="text-xs" style={{ color: "#94a3b8" }}>Coming soon</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
