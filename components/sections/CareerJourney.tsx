"use client";

import { motion } from "framer-motion";

const roles = [
  {
    period: "May 2024 – Present",
    role: "Data Scientist / Senior Data Analyst",
    company: "IOL World",
    location: "Dubai, UAE",
    color: "#2563eb",
    current: true,
    highlights: [
      "Originated IOL Pulse — POC that became a product serving 90K+ hotels",
      "Built Athena AI layer, eliminating 90% of manual data extraction",
      "Delivered $350M → $1B revenue forecasting strategy to C-suite",
      "Designed 19-module commercial intelligence platform on 2M+ records",
    ],
  },
  {
    period: "Oct 2021 – Oct 2023",
    role: "AI/ML Engineer → Team Lead",
    company: "Codistan Ventures",
    location: "Islamabad, Pakistan",
    color: "#7c3aed",
    current: false,
    highlights: [
      "Promoted to Team Lead within 6 months",
      "Led delivery of 25+ enterprise ML/AI projects",
      "Built predictive pipelines for MLB, NFL, NBA, NHL leagues",
      "Managed international client relationships and delivery",
    ],
  },
  {
    period: "Aug 2021 – Oct 2021",
    role: "Python / Data Engineering Intern",
    company: "VisionX Technologies",
    location: "Islamabad, Pakistan",
    color: "#94a3b8",
    current: false,
    highlights: [
      "Built data scraping & processing pipelines for logistics",
      "Developed REST APIs for real-time data synchronisation",
    ],
  },
];

const education = [
  {
    degree: "MSc Data Science — Distinction",
    institution: "Middlesex University Dubai",
    period: "2023–2024",
    detail: "Thesis: Predictive Analytics for Hotel Bookings using LSTM",
  },
  {
    degree: "BSc Computer Engineering — Gold Medalist",
    institution: "Bahria University, Islamabad",
    period: "2018–2022",
    detail: "FYP: Deep Learning-based Person Re-Identification",
  },
];

const certs = [
  "DP-100: Azure Data Scientist Associate — Microsoft",
  "PL-300: Power BI Data Analyst Associate — Microsoft",
  "AWS Machine Learning Foundations — Amazon",
  "HackerRank: SQL (Advanced) · Python · Problem Solving",
];

export default function CareerJourney() {
  return (
    <section className="py-20 border-t" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>Career Journey</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#0f172a" }}>Experience & Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          {/* Experience */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-7" style={{ color: "#94a3b8" }}>/ Experience</p>
            <div className="flex flex-col gap-1">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="dashboard-card p-6 mb-3"
                  style={{ borderLeft: `3px solid ${role.color}` }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-bold" style={{ color: "#0f172a" }}>{role.role}</h3>
                        {role.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#ecfdf5", color: "#059669" }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium" style={{ color: role.color }}>{role.company}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{role.location}</p>
                    </div>
                    <span className="metric-num text-xs" style={{ color: "#94a3b8" }}>{role.period}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {role.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: role.color, opacity: 0.6 }} />
                        <span className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education + Certs */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "#94a3b8" }}>/ Education</p>
              <div className="flex flex-col gap-3">
                {education.map((ed, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="dashboard-card p-5">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="text-sm font-bold" style={{ color: "#0f172a" }}>{ed.degree}</h4>
                      <span className="metric-num text-xs flex-shrink-0" style={{ color: "#94a3b8" }}>{ed.period}</span>
                    </div>
                    <p className="text-xs font-medium mb-1" style={{ color: "#2563eb" }}>{ed.institution}</p>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>{ed.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "#94a3b8" }}>/ Certifications</p>
              <div className="dashboard-card p-5">
                <div className="flex flex-col gap-3">
                  {certs.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#2563eb", opacity: 0.5 }} />
                      <span className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
