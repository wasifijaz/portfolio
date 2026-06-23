"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 border-t" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>About</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-7" style={{ color: "#0f172a" }}>Who I Am</h2>
            <div className="flex flex-col gap-4">
              {[
                "I'm an analytics leader based in Dubai, working at the intersection of data, product, and commercial strategy in hospitality technology. Over the past 5 years I've moved from building ML pipelines to owning the analytics layer of products that run at enterprise scale.",
                "I've learned that the most important skill in this field isn't technical — it's the ability to understand what a business actually needs from its data, and then build the thing that delivers it.",
                "Currently open to Analytics Lead, BI Lead, Analytics Manager, and Head of Analytics opportunities where I can build and scale a data function that drives real commercial outcomes.",
              ].map((p, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "#475569" }}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <p className="text-xs font-mono font-medium uppercase tracking-widest mb-3" style={{ color: "#2563eb" }}>Leadership Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-7" style={{ color: "#0f172a" }}>How I Think About Data</h2>

            <div className="rounded-xl p-6 mb-6" style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}>
              <p className="text-sm leading-relaxed font-medium italic" style={{ color: "#1e40af" }}>
                &ldquo;Analytics only creates value when it changes a decision. Every system I build starts with the same question: what decision does this need to support, and what would make the person making that decision more confident and faster?&rdquo;
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "I don't believe in dashboards for the sake of dashboards, or models for the sake of models. I believe in understanding the commercial problem first — the stakeholder pressure, the missing visibility, the process that's breaking.",
                "The best analytics work is invisible. When it's done right, the business team doesn't think \"I used a tool.\" They think \"I made a better decision.\"",
              ].map((p, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "#475569" }}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
