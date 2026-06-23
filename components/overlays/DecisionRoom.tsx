"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = ["A", "B", "C", "D"];

const decisions = [
  {
    step: 1,
    question:
      "48 hours. 300 hotel partners flying blind. No existing system. What is your first move?",
    options: [
      { text: "Start building dashboards immediately — ship something fast", right: false },
      { text: "Ask stakeholders exactly what data they need", right: false },
      { text: "Define what decision the output must support", right: true },
      { text: "Map all available data sources before touching code", right: false },
    ],
    insight:
      "Every system I build starts with the same question: what decision does this need to support? Building before answering this is how you ship beautiful, useless dashboards.",
  },
  {
    step: 2,
    question:
      "You have access to 90,000 hotels' data. The clock is ticking. What do you prioritise?",
    options: [
      { text: "Comprehensive coverage — include everything relevant", right: false },
      { text: "Historical booking trends to establish context", right: false },
      { text: "Three signals: demand shifts, rate changes, cancellation spikes", right: true },
      { text: "Competitor pricing — that's what they're loudest about", right: false },
    ],
    insight:
      "Noise kills analytics products faster than missing data. In a crisis, three signals that matter beat forty signals that don't. You can always add — you can rarely subtract.",
  },
  {
    step: 3,
    question: "It's hour 24. You have something rough but functional. What do you do?",
    options: [
      { text: "Keep building — present when it's production-ready", right: false },
      { text: "Write documentation first, then present to stakeholders", right: false },
      { text: "Get data engineering sign-off before any external demo", right: false },
      { text: "Present now — imperfect intelligence beats no intelligence", right: true },
    ],
    insight:
      "A revenue manager making a decision with 70% of the data is better than making it with 0%. Ship early. Iterate in the open. Trust your stakeholders to handle uncertainty — they already are.",
  },
  {
    step: 4,
    question:
      "The POC has been live for a week. How do you know if it actually worked?",
    options: [
      { text: "User adoption — how many people logged in daily", right: false },
      { text: "Data coverage — how many hotels are tracked", right: false },
      { text: "A revenue decision was made using it that wouldn't have been otherwise", right: true },
      { text: "Time saved versus the previous manual process", right: false },
    ],
    insight:
      "Analytics only creates value when it changes a decision. Everything else is vanity. The only metric that mattered was: did someone do something differently because of what this showed?",
  },
];

type Phase = "scenario" | "deciding" | "complete";

export default function DecisionRoom({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<Phase>("scenario");
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleChoose(idx: number) {
    if (chosen !== null) return;
    setChosen(idx);
    setTimeout(() => setRevealed(true), 280);
  }

  function handleNext() {
    setChosen(null);
    setRevealed(false);
    if (step + 1 < decisions.length) {
      setStep((s) => s + 1);
    } else {
      setPhase("complete");
    }
  }

  const current = decisions[step];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: "#ffffff" }}
    >
      {/* Back button */}
      <button
        onClick={onClose}
        className="fixed top-5 left-5 z-10 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        style={{ background: "#ffffff", border: "1px solid #e2e8f0", color: "#64748b" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Portfolio
      </button>

      <div className="max-w-xl mx-auto px-6 py-20">
        <p className="text-xs font-mono font-medium uppercase tracking-widest mb-10" style={{ color: "#94a3b8" }}>
          Decision Room
        </p>

        <AnimatePresence mode="wait">

          {/* Scenario */}
          {phase === "scenario" && (
            <motion.div
              key="scenario"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
                style={{ background: "#fef2f2", border: "1px solid #fecaca" }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#dc2626", animation: "pulse 2s infinite" }}
                />
                <span className="text-xs font-mono font-medium" style={{ color: "#dc2626" }}>
                  LIVE SCENARIO
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold mb-5 leading-tight"
                style={{ color: "#0f172a" }}
              >
                ITB Berlin, early 2024.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                A geopolitical crisis is unfolding in the Middle East. Your CEO calls you directly.
                300 hotel partners are flying blind — no demand signals, no pricing intelligence, no
                visibility on cancellation risk. Bookings are moving in real time and no one knows which way.
              </p>
              <div
                className="rounded-xl p-5 mb-10"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <p className="text-sm font-semibold" style={{ color: "#0f172a" }}>
                  You have 48 hours to build something useful.
                  <br />
                  Four decisions stand between you and the outcome.
                </p>
              </div>
              <button
                onClick={() => setPhase("deciding")}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ background: "#0f172a", color: "#fff" }}
              >
                Enter the decision room →
              </button>
            </motion.div>
          )}

          {/* Decisions */}
          {phase === "deciding" && (
            <motion.div
              key={`decision-${step}`}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {decisions.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-300"
                    style={{
                      background:
                        i < step ? "#0f172a" : i === step ? "#94a3b8" : "#e2e8f0",
                    }}
                  />
                ))}
              </div>

              <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "#94a3b8" }}>
                Decision {current.step} of {decisions.length}
              </p>
              <h3 className="text-xl font-bold mb-7 leading-snug" style={{ color: "#0f172a" }}>
                {current.question}
              </h3>

              <div className="flex flex-col gap-3 mb-6">
                {current.options.map((opt, i) => {
                  let bg = "#ffffff";
                  let border = "#e2e8f0";
                  let textColor = "#374151";
                  let letterBg = "#f1f5f9";
                  let letterColor = "#64748b";

                  if (revealed) {
                    if (opt.right) {
                      bg = "#ecfdf5"; border = "#6ee7b7"; textColor = "#065f46";
                      letterBg = "#059669"; letterColor = "#fff";
                    } else if (chosen === i && !opt.right) {
                      bg = "#fff1f2"; border = "#fecdd3"; textColor = "#9f1239";
                      letterBg = "#e11d48"; letterColor = "#fff";
                    } else {
                      bg = "#fafafa"; textColor = "#94a3b8"; letterColor = "#cbd5e1";
                    }
                  } else if (chosen === i) {
                    bg = "#f0f9ff"; border = "#7dd3fc"; textColor = "#0369a1";
                    letterBg = "#0284c7"; letterColor = "#fff";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleChoose(i)}
                      disabled={chosen !== null}
                      className="flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200"
                      style={{
                        background: bg,
                        border: `1px solid ${border}`,
                        cursor: chosen !== null ? "default" : "pointer",
                      }}
                    >
                      <span
                        className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-all duration-200"
                        style={{ background: letterBg, color: letterColor }}
                      >
                        {LETTERS[i]}
                      </span>
                      <span className="text-sm leading-relaxed flex-1" style={{ color: textColor }}>
                        {opt.text}
                      </span>
                      {revealed && opt.right && (
                        <span className="flex-shrink-0 text-xs font-bold mt-0.5" style={{ color: "#059669" }}>
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {revealed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl p-5 mb-6"
                    style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                  >
                    <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "#94a3b8" }}>
                      The thinking
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                      {current.insight}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {revealed && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{ background: "#0f172a", color: "#fff" }}
                >
                  {step + 1 < decisions.length ? "Next decision →" : "See the outcome →"}
                </motion.button>
              )}
            </motion.div>
          )}

          {/* Outcome */}
          {phase === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
                style={{ background: "#ecfdf5", border: "1px solid #a7f3d0" }}
              >
                <span className="text-xs font-mono font-semibold" style={{ color: "#059669" }}>
                  OUTCOME
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-bold mb-5 leading-tight"
                style={{ color: "#0f172a" }}
              >
                The 48-hour POC became IOL Pulse.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                3 days of work turned into a 5-year product serving 90,000 hotels across 300+ chains. Not
                because the code was exceptional — because every decision was anchored to a specific
                commercial outcome before a single line was written.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { value: "3 days", label: "Original POC" },
                  { value: "5 yrs", label: "In production" },
                  { value: "90K+", label: "Hotels served" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center"
                    style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                  >
                    <p className="metric-num text-xl font-bold mb-1" style={{ color: "#0f172a" }}>
                      {m.value}
                    </p>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "#64748b" }}>
                This is how I approach every analytics problem: anchor to the decision first, build the
                minimum viable intelligence to support it, ship before it&apos;s perfect, iterate in the open.
                Scope creeps. Decisions don&apos;t.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/work/iol-pulse"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{ background: "#0f172a", color: "#fff" }}
                >
                  Read the full case study →
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{ background: "#f1f5f9", color: "#374151" }}
                >
                  Back to portfolio
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
}
