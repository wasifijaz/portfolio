"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Sparkline from "@/components/ui/Sparkline";
import MiniBar from "@/components/ui/MiniBar";

const kpiCards = [
  {
    id: "hotels",
    label: "Hotels on Platform",
    value: "90,000+",
    delta: "+12% YoY",
    deltaPositive: true,
    sub: "Via IOL Pulse",
    color: "#2563eb",
    sparkData: [18000, 24000, 31000, 40000, 52000, 68000, 90000],
    type: "sparkline",
  },
  {
    id: "resolution",
    label: "BRG Resolution Rate",
    value: "87%",
    delta: "▲ from 36%",
    deltaPositive: true,
    sub: "+51pp improvement",
    color: "#059669",
    barValue: 87,
    barFrom: 36,
    type: "bar",
  },
  {
    id: "revenue",
    label: "Revenue Growth Strategy",
    value: "$350M→$1B",
    delta: "3-Year Roadmap",
    deltaPositive: true,
    sub: "Delivered to C-suite",
    color: "#7c3aed",
    sparkData: [350, 420, 510, 620, 740, 870, 1000],
    type: "sparkline",
  },
  {
    id: "automation",
    label: "Workload Automated",
    value: "90%",
    delta: "Via Athena AI",
    deltaPositive: true,
    sub: "100s queries/day",
    color: "#d97706",
    barValue: 90,
    barFrom: 10,
    type: "bar",
  },
];

function Counter({ target, started }: { target: number; started: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(ease * target));
      if (t < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [started, target]);
  return <>{count.toLocaleString()}</>;
}

export default function Hero() {
  const [time, setTime] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden" ref={ref}>
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.7) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-medium"
              style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", color: "#059669" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
              Available for Analytics Leadership Roles · Dubai, UAE
            </div>

            <p className="text-sm font-semibold mb-2" style={{ color: "#2563eb" }}>
              Muhammad Wasif Ijaz
            </p>
            <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
              Analytics & Product Intelligence Leader
            </p>

            <h1
              className="text-4xl lg:text-5xl font-bold leading-[1.1] mb-6 tracking-tight"
              style={{ color: "#0f172a", letterSpacing: "-0.025em" }}
            >
              Designing Analytics Products{" "}
              <span style={{ color: "#2563eb" }}>That Move Businesses</span>{" "}
              From Instinct to Intelligence
            </h1>

            <p className="text-base leading-relaxed mb-10" style={{ color: "#64748b", maxWidth: "480px" }}>
              I build the data systems, AI layers, and intelligence products that give commercial teams the clarity to act fast and the confidence to act right.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: "#0f172a", color: "#fff" }}
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/wasifijaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: "#fff", color: "#0f172a", border: "1px solid #e2e8f0" }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — Dashboard Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.9) inset",
              }}
            >
              {/* Dashboard toolbar */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: "#f1f5f9", background: "#fafafa" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fca5a5" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#fcd34d" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#6ee7b7" }} />
                  </div>
                  <span className="text-xs ml-2 font-mono" style={{ color: "#94a3b8" }}>
                    career_analytics.dashboard
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono" style={{ color: "#94a3b8" }}>
                    {time || "00:00:00"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: "#059669" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
                    LIVE
                  </div>
                </div>
              </div>

              {/* KPI grid */}
              <div className="grid grid-cols-2 gap-px" style={{ background: "#f1f5f9" }}>
                {kpiCards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-4"
                    style={{ background: "#fff" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-xs" style={{ color: "#94a3b8" }}>
                        {card.label}
                      </p>
                      <span
                        className="text-xs px-1.5 py-0.5 rounded font-mono"
                        style={{
                          background: card.deltaPositive ? "#ecfdf5" : "#fef2f2",
                          color: card.deltaPositive ? "#059669" : "#dc2626",
                        }}
                      >
                        {card.delta}
                      </span>
                    </div>

                    <p
                      className="metric-num text-xl mb-3"
                      style={{ color: card.color }}
                    >
                      {card.value}
                    </p>

                    {card.type === "sparkline" && card.sparkData && (
                      <Sparkline data={card.sparkData} color={card.color} width={100} height={28} />
                    )}
                    {card.type === "bar" && card.barValue !== undefined && (
                      <MiniBar
                        value={card.barValue}
                        color={card.color}
                        showFrom={card.barFrom}
                      />
                    )}

                    <p className="text-xs mt-2" style={{ color: "#94a3b8" }}>
                      {card.sub}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Dashboard footer */}
              <div
                className="px-4 py-3 flex items-center justify-between border-t"
                style={{ borderColor: "#f1f5f9", background: "#fafafa" }}
              >
                <div className="flex items-center gap-4">
                  {["IOL Pulse", "Athena AI", "BRG System"].map((tag) => (
                    <span key={tag} className="text-xs font-mono" style={{ color: "#94a3b8" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono" style={{ color: "#94a3b8" }}>
                  5 yrs experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="flex items-center gap-6">
            {["300+ Chains", "400+ Clients", "2M+ Bookings Analyzed", "90K+ Hotels"].map((item) => (
              <span key={item} className="text-xs font-mono" style={{ color: "#94a3b8" }}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
