"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sparkline from "@/components/ui/Sparkline";
import MiniBar from "@/components/ui/MiniBar";

const projects = [
  {
    slug: "iol-pulse",
    index: "01",
    category: "Product Analytics",
    title: "IOL Pulse",
    subtitle: "From POC to Commercial Product",
    outcome: "A 3-day analytics concept I built for ITB Berlin became a commercial product now used by 300+ hotel chains and 90,000+ hotels.",
    color: "#2563eb",
    bg: "#eff6ff",
    metrics: [
      { value: "300+", label: "Chains" },
      { value: "90K+", label: "Hotels" },
      { value: "400+", label: "Clients" },
    ],
    viz: { type: "sparkline", data: [5000, 12000, 24000, 40000, 58000, 75000, 90000], color: "#2563eb" },
    tags: ["Product Analytics", "KPI Design", "Hospitality Tech"],
  },
  {
    slug: "athena",
    index: "02",
    category: "AI & Automation",
    title: "Athena",
    subtitle: "The AI Analytics Layer That Replaced 90% of Manual Work",
    outcome: "A conversational analytics engine I built inside IOL Pulse now answers hundreds of questions daily — eliminating 90% of the manual data extraction workload.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    metrics: [
      { value: "90%", label: "Automated" },
      { value: "100s", label: "Daily Queries" },
      { value: "0", label: "Hallucinations" },
    ],
    viz: { type: "bar", value: 90, from: 10, color: "#7c3aed" },
    tags: ["Conversational AI", "RAG Architecture", "NL2SQL"],
  },
  {
    slug: "personas-dashboard",
    index: "03",
    category: "Commercial Intelligence",
    title: "Organization Personas Dashboard",
    subtitle: "Turning 2M Bookings Into One-Click Commercial Decisions",
    outcome: "Built the commercial intelligence brain of IOL World — a 19-module platform that turned weeks of guesswork into one-click decisions for 15-20 daily users.",
    color: "#059669",
    bg: "#ecfdf5",
    metrics: [
      { value: "2M+", label: "Bookings" },
      { value: "19", label: "Modules" },
      { value: "Weeks→1 Click", label: "Optimization" },
    ],
    viz: { type: "sparkline", data: [200000, 450000, 700000, 1000000, 1400000, 1800000, 2000000], color: "#059669" },
    tags: ["Commercial Intelligence", "RFM Scoring", "B2B Analytics"],
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 border-t" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>Featured Work</p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#0f172a" }}>
              Case Studies in Analytics Leadership
            </h2>
            <p className="text-sm" style={{ color: "#94a3b8" }}>
              Every project started with a business problem — not a technical one.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className="dashboard-card dashboard-card-hover p-6 md:p-8"
                  style={{ cursor: "pointer" }}
                >
                  <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="metric-num text-xs" style={{ color: "#94a3b8" }}>{project.index}</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: project.bg, color: project.color }}>
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-1 transition-colors" style={{ color: "#0f172a" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: "#64748b" }}>{project.subtitle}</p>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "#475569" }}>{project.outcome}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "#f8fafc", color: "#64748b", border: "1px solid #e2e8f0" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5" style={{ color: project.color }}>
                        Read case study
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Right — metrics + viz panel */}
                    <div className="rounded-xl p-5" style={{ background: project.bg, border: `1px solid ${project.color}22` }}>
                      {/* Visualization */}
                      <div className="mb-4">
                        {project.viz.type === "sparkline" && (
                          <Sparkline data={project.viz.data!} color={project.viz.color} width={160} height={48} />
                        )}
                        {project.viz.type === "bar" && (
                          <div className="py-3">
                            <div className="flex justify-between text-xs mb-2 font-mono" style={{ color: project.color }}>
                              <span>Before</span><span>After</span>
                            </div>
                            <MiniBar value={project.viz.value!} color={project.viz.color} showFrom={project.viz.from} />
                            <div className="flex justify-between text-xs mt-1 font-mono" style={{ color: "#94a3b8" }}>
                              <span>{project.viz.from}%</span><span>{project.viz.value}%</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-col gap-3">
                        {project.metrics.map((m, j) => (
                          <div key={j} className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: project.color, opacity: 0.7 }}>{m.label}</span>
                            <span className="metric-num text-sm font-semibold" style={{ color: project.color }}>{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
