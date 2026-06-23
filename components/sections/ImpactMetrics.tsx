"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const impactData = [
  { value: 90000, display: "90,000+", label: "Hotels Served", sub: "Via IOL Pulse globally", color: "#2563eb", bg: "#eff6ff", icon: "🏨" },
  { value: 300, display: "300+", label: "Hotel Chains", sub: "Active on platform daily", color: "#7c3aed", bg: "#f5f3ff", icon: "🔗" },
  { value: 87, display: "87%", label: "Resolution Rate", sub: "Up from 36% — +51pp", color: "#059669", bg: "#ecfdf5", icon: "📈" },
  { value: 90, display: "90%", label: "Work Automated", sub: "By Athena AI layer", color: "#d97706", bg: "#fffbeb", icon: "🤖" },
  { value: 400, display: "400+", label: "B2B Clients", sub: "Onboarded via platform", color: "#0891b2", bg: "#ecfeff", icon: "🤝" },
  { value: 5, display: "5 yrs", label: "Of Enterprise Delivery", sub: "Across 2 countries", color: "#dc2626", bg: "#fef2f2", icon: "⚡" },
];

function AnimatedNumber({ value, started }: { value: number; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const d = value > 1000 ? 2000 : 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / d, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(ease * value));
      if (t < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [started, value]);
  return <>{count.toLocaleString()}</>;
}

export default function ImpactMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 border-t" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #2563eb, transparent)" }} />
            <span className="text-xs font-mono font-medium uppercase tracking-widest px-3" style={{ color: "#2563eb" }}>Impact at a Glance</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, #2563eb, transparent)" }} />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-center tracking-tight" style={{ color: "#0f172a" }}>
            Numbers That Define the Work
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {impactData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="dashboard-card p-6 group dashboard-card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg" style={{ background: item.bg }}>
                  {item.icon}
                </div>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
              </div>
              <p className="metric-num text-3xl mb-1" style={{ color: item.color }}>
                {item.display.includes("yr") ? item.display : (
                  <>
                    <AnimatedNumber value={item.value} started={inView} />
                    {item.display.includes("+") ? "+" : item.display.includes("%") ? "%" : ""}
                  </>
                )}
              </p>
              <p className="text-sm font-semibold mb-1" style={{ color: "#0f172a" }}>{item.label}</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
