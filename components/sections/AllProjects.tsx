"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "BRG Violation Management System",
    category: "Process Automation",
    description: "Replaced a manual spreadsheet process across 4 teams with a full enterprise workflow — real-time booking data enrichment, multi-team resolution tracking, and compliance analytics.",
    outcome: "Resolution rate: 36% → 87% · Hundreds of thousands recovered · 30+ users",
    color: "#dc2626",
    bg: "#fef2f2",
    metrics: ["87% Resolution", "$100K+ Recovered", "30+ Users"],
  },
  {
    title: "Revenue Forecasting & Growth Strategy",
    category: "Strategic Analytics",
    description: "Delivered a $350M → $1B revenue growth roadmap to IOL World's C-suite using ensemble forecasting (Prophet, LSTM, PRISMA) with custom business logic and event trends.",
    outcome: "3-year growth roadmap · Drill-down: chain → city · Weekly actual vs. forecast tracking",
    color: "#7c3aed",
    bg: "#f5f3ff",
    metrics: ["$350M→$1B", "3-Year Horizon", "Weekly Tracking"],
  },
  {
    title: "Pricing Intelligence & Margin Automation",
    category: "Revenue Analytics",
    description: "Transformed markup optimization from weeks of intuition-based guesswork into a weekly data-driven decision cycle with trend-based pricing recommendations per demand partner.",
    outcome: "First feedback loop for markup decisions — weeks → weekly clarity",
    color: "#d97706",
    bg: "#fffbeb",
    metrics: ["WoW Tracking", "Auto Recommend", "Weeks→Weekly"],
  },
  {
    title: "Travel Intelligence POC — Crisis Response",
    category: "Crisis Analytics",
    description: "Built a crisis-aware hospitality intelligence platform during the Iran-Israel-US geopolitical conflict to help hotel executives identify at-risk KPIs and protect revenue in real time.",
    outcome: "Later became the Crisis Intelligence module of IOL Pulse — used by 300+ chains",
    color: "#0891b2",
    bg: "#ecfeff",
    metrics: ["Real-time Signals", "Multi-source Data", "→ IOL Pulse"],
  },
  {
    title: "iOL X Pipeline Intelligence",
    category: "Monday.com App",
    description: "Monday.com's built-in views show only current state — they can't answer what the funnel looked like 3 months ago, which deals moved, or which owners are pushing progress backward. Built a fully embedded Board View app that answers all of it: real-time webhooks writing to PostgreSQL, point-in-time funnel reconstruction, and an owner movement scoring engine across 1,500+ live deals.",
    outcome: "Full-stack delivered in 48 hours — React on Vercel, Node.js/Express + PostgreSQL on Azure, real-time webhook pipeline",
    color: "#059669",
    bg: "#ecfdf5",
    metrics: ["48hrs Build", "1,500+ Deals", "10-Stage Funnel"],
  },
];

export default function AllProjects() {
  return (
    <section className="py-20 border-t" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>More Work</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#0f172a" }}>Additional Initiatives</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="dashboard-card dashboard-card-hover p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: project.bg, color: project.color }}>
                  {project.category}
                </span>
                <div className="flex gap-1.5">
                  {project.metrics.map((m, j) => (
                    <span key={j} className="text-xs metric-num px-2 py-0.5 rounded" style={{ background: project.bg, color: project.color }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-base font-bold mb-2" style={{ color: "#0f172a" }}>{project.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>{project.description}</p>
              <div className="pt-4 border-t" style={{ borderColor: "#f1f5f9" }}>
                <p className="text-xs font-medium" style={{ color: project.color }}>→ {project.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
