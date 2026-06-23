"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 border-t" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5" style={{ color: "#0f172a", letterSpacing: "-0.025em" }}>
              Let&apos;s talk about what data can do for your organisation.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#64748b" }}>
              Open to Analytics Lead, BI Lead, Analytics Manager, and Head of Analytics opportunities — and always interested in conversations with people building serious data functions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:wasif.ijaz16@yahoo.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                style={{ background: "#0f172a", color: "#fff" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.5 3.5L7 8L12.5 3.5M1.5 3.5H12.5V11H1.5V3.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                wasif.ijaz16@yahoo.com
              </a>
              <a
                href="https://linkedin.com/in/wasifijaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all"
                style={{ borderColor: "#e2e8f0", color: "#0f172a", background: "#fff" }}
              >
                LinkedIn →
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <div className="dashboard-card p-8">
              <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "#94a3b8" }}>/ Quick Stats</p>
              <div className="flex flex-col gap-5">
                {[
                  { label: "Location", value: "Dubai, UAE", color: "#2563eb" },
                  { label: "Experience", value: "5+ Years Enterprise Analytics", color: "#059669" },
                  { label: "Domain", value: "Hospitality & Travel Technology", color: "#7c3aed" },
                  { label: "Target Roles", value: "Analytics Lead / Manager / Head of Analytics", color: "#d97706" },
                  { label: "GitHub", value: "github.com/wasifijaz", color: "#0891b2", link: "https://github.com/wasifijaz" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b last:border-0 last:pb-0" style={{ borderColor: "#f1f5f9" }}>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>{item.label}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-right" style={{ color: item.color }}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-right" style={{ color: item.color }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
