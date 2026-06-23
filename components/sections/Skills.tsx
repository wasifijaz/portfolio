"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Analytics Leadership",
    color: "#2563eb",
    bg: "#eff6ff",
    items: ["KPI Strategy & Design", "Analytics Roadmaps", "Stakeholder Management", "Business Requirements Translation", "Analytics Product Management", "Data-Driven Decision Frameworks"],
  },
  {
    category: "Business Intelligence",
    color: "#0891b2",
    bg: "#ecfeff",
    items: ["Power BI (DAX, Semantic Models)", "Streamlit", "Tableau", "Executive Dashboard Design", "Data Storytelling", "Visual Analytics"],
  },
  {
    category: "Data Engineering",
    color: "#7c3aed",
    bg: "#f5f3ff",
    items: ["PostgreSQL · SQL Server · MySQL", "Elasticsearch", "Azure Cosmos DB · MongoDB", "Data Modelling & ETL", "Pipeline Architecture", "Data Quality & Governance"],
  },
  {
    category: "Analytics Engineering",
    color: "#059669",
    bg: "#ecfdf5",
    items: ["Python (pandas, NumPy, FastAPI)", "Reporting Automation", "REST API Design", "Docker", "Azure App Services", "AWS (EC2, S3, Lambda)"],
  },
  {
    category: "AI & Emerging Tech",
    color: "#d97706",
    bg: "#fffbeb",
    items: ["LLM Integration (GPT-4o, Llama)", "RAG Architecture", "Vector Databases (Qdrant, FAISS)", "NL2SQL Systems", "Machine Learning (Prophet, LSTM)", "Agentic AI Pipelines"],
  },
  {
    category: "Domain Expertise",
    color: "#dc2626",
    bg: "#fef2f2",
    items: ["Hospitality & Travel Technology", "Revenue Management Analytics", "B2B Commercial Intelligence", "Rate Parity & Compliance", "Booking Behaviour Analysis", "Supply-Demand Forecasting"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>Capabilities</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#0f172a" }}>Skills & Competencies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="dashboard-card p-6 dashboard-card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: group.bg }}>
                  <div className="w-3 h-3 rounded-sm" style={{ background: group.color }} />
                </div>
                <h3 className="text-sm font-bold" style={{ color: "#0f172a" }}>{group.category}</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: group.color, opacity: 0.6 }} />
                    <span className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item}</span>
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
