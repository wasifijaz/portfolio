"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Analytics Strategy",
    description: "I translate business ambiguity into measurable KPI frameworks. When an organisation doesn't know what to track or why, I define what success looks like — and build the systems that prove it.",
    color: "#2563eb",
    bg: "#eff6ff",
    examples: ["KPI Design", "Analytics Roadmaps", "Stakeholder Alignment"],
  },
  {
    number: "02",
    title: "Data Products",
    description: "I build analytics products that teams actually use: intelligence platforms, automated pipelines, and AI-powered decision tools. I own them from concept to production to iteration.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    examples: ["IOL Pulse", "Athena AI", "Commercial Intelligence"],
  },
  {
    number: "03",
    title: "Revenue Intelligence",
    description: "I apply data to the decisions that grow businesses — pricing, client optimization, partner performance, and forecasting. My work connects directly to the top and bottom line.",
    color: "#059669",
    bg: "#ecfdf5",
    examples: ["$350M→$1B Strategy", "Pricing Analytics", "Margin Optimization"],
  },
];

export default function WhatIDo() {
  return (
    <section className="py-20 border-t" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>What I Do</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#0f172a" }}>
            Three Ways I Create Value
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dashboard-card p-7 dashboard-card-hover"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="metric-num text-xs font-semibold" style={{ color: "#94a3b8" }}>{p.number}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: p.bg }}>
                  <div className="w-3 h-3 rounded-sm" style={{ background: p.color, opacity: 0.8 }} />
                </div>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: "#0f172a" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>{p.description}</p>
              <div className="flex flex-col gap-2">
                {p.examples.map((ex) => (
                  <div key={ex} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full" style={{ background: p.color }} />
                    <span className="text-xs font-medium" style={{ color: p.color }}>{ex}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
