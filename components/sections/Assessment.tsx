"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    q: 'When your CEO asks "why did revenue drop last Tuesday?" your analytics team:',
    options: [
      { text: "Pulls a report and delivers it by Thursday", score: 1 },
      { text: "Points them to a dashboard they can self-serve", score: 2 },
      { text: "Had already sent an alert when it happened", score: 3 },
      { text: "Had predicted the risk 48 hours before it occurred", score: 4 },
    ],
  },
  {
    q: "How does your team discover commercial opportunities?",
    options: [
      { text: "Stakeholders bring us questions — we respond", score: 1 },
      { text: "We monitor dashboards weekly and flag anomalies", score: 2 },
      { text: "Automated detection surfaces issues proactively", score: 3 },
      { text: "Predictive models identify opportunities before they're visible", score: 4 },
    ],
  },
  {
    q: "When a VP needs to understand a drop in hotel occupancy, they:",
    options: [
      { text: "Submit a ticket and wait 2–3 days for analysis", score: 1 },
      { text: "Log into a dashboard and explore it themselves", score: 2 },
      { text: "Ask an analyst who answers in hours with live data", score: 3 },
      { text: "Get a natural language answer from an AI layer instantly", score: 4 },
    ],
  },
  {
    q: "A pricing decision that used to take a week of analysis now takes:",
    options: [
      { text: "Still a week — the process hasn't changed much", score: 1 },
      { text: "2–3 days with better tooling in place", score: 2 },
      { text: "Hours, with automated pipelines", score: 3 },
      { text: "Minutes, with real-time competitive intelligence", score: 4 },
    ],
  },
  {
    q: "How does your leadership describe your analytics function?",
    options: [
      { text: '"They produce good reports when we ask"', score: 1 },
      { text: '"They built dashboards we actually use"', score: 2 },
      { text: '"They help us make faster, better decisions"', score: 3 },
      { text: '"We couldn\'t run the business without them"', score: 4 },
    ],
  },
];

const levels = [
  {
    range: [5, 8],
    level: 1,
    name: "Reactive",
    label: "LEVEL 1 / 4",
    color: "#64748b",
    bg: "#f1f5f9",
    border: "#cbd5e1",
    description:
      "Your analytics function responds to requests. Data answers questions after decisions are already made. Most organisations start here — the gap is building infrastructure to see problems before they're reported.",
  },
  {
    range: [9, 12],
    level: 2,
    name: "Descriptive",
    label: "LEVEL 2 / 4",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    description:
      "You have dashboards and people use them. But the data rarely changes what happens next — it confirms what people suspected. The gap between observation and action is where competitive advantage lives.",
  },
  {
    range: [13, 16],
    level: 3,
    name: "Diagnostic",
    label: "LEVEL 3 / 4",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
    description:
      "Your team finds problems before stakeholders notice. Automation handles routine analysis. You're building real analytical leverage — the kind that creates compounding commercial advantage.",
  },
  {
    range: [17, 20],
    level: 4,
    name: "Predictive",
    label: "LEVEL 4 / 4",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
    description:
      "Analytics drives decisions before events occur. Your function is a commercial advantage, not a support service. Most teams spend years trying to reach this. Few do.",
  },
];

function getLevel(score: number) {
  return levels.find((l) => score >= l.range[0] && score <= l.range[1]) ?? levels[0];
}

const LETTERS = ["A", "B", "C", "D"];
type Phase = "intro" | "answering" | "result";

export default function Assessment({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [chosen, setChosen] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(3);

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const result = getLevel(totalScore);

  const handleAnswer = useCallback(
    (idx: number, score: number) => {
      if (chosen !== null) return;
      setChosen(idx);
      setTimeout(() => {
        const next = [...scores, score];
        setScores(next);
        setChosen(null);
        if (current + 1 < questions.length) {
          setCurrent((c) => c + 1);
        } else {
          setPhase("result");
        }
      }, 550);
    },
    [chosen, current, scores]
  );

  useEffect(() => {
    if (phase !== "result") return;
    const t = setTimeout(onComplete, 3500);
    const i = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => {
      clearTimeout(t);
      clearInterval(i);
    };
  }, [phase, onComplete]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative"
      style={{ background: "#f8fafc" }}
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <span className="text-xs font-mono font-medium uppercase tracking-widest" style={{ color: "#94a3b8" }}>
          Analytics Maturity Assessment
        </span>
      </div>

      <div className="w-full max-w-lg">
        <AnimatePresence mode="wait">

          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
                style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2563eb" }} />
                <span className="text-xs font-mono font-medium" style={{ color: "#2563eb" }}>
                  5 questions · 60 seconds
                </span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-5 tracking-tight"
                style={{ color: "#0f172a", letterSpacing: "-0.025em" }}
              >
                Where does your analytics
                <br />function actually stand?
              </h1>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "#64748b" }}>
                Most analytics teams believe they&apos;re more mature than they are.
                <br />
                Find out where yours sits — honestly.
              </p>
              <button
                onClick={() => setPhase("answering")}
                className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{ background: "#0f172a", color: "#fff" }}
              >
                Start Assessment →
              </button>
              <div className="mt-6">
                <button
                  onClick={onComplete}
                  className="text-xs underline underline-offset-2 transition-colors"
                  style={{ color: "#94a3b8" }}
                >
                  Skip and view portfolio ↓
                </button>
              </div>
            </motion.div>
          )}

          {phase === "answering" && (
            <motion.div
              key={`q-${current}`}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.32 }}
            >
              <div className="flex items-center gap-2 mb-10">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-400"
                    style={{
                      background:
                        i < current ? "#2563eb" : i === current ? "#93c5fd" : "#e2e8f0",
                    }}
                  />
                ))}
              </div>

              <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "#94a3b8" }}>
                Question {current + 1} of {questions.length}
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-8 leading-snug" style={{ color: "#0f172a" }}>
                {questions[current].q}
              </h2>

              <div className="flex flex-col gap-3">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i, opt.score)}
                    disabled={chosen !== null}
                    className="flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200"
                    style={{
                      background: chosen === i ? "#eff6ff" : "#ffffff",
                      border: `1px solid ${chosen === i ? "#2563eb" : "#e2e8f0"}`,
                      cursor: chosen !== null ? "default" : "pointer",
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-all duration-200"
                      style={{
                        background: chosen === i ? "#2563eb" : "#f1f5f9",
                        color: chosen === i ? "#fff" : "#64748b",
                      }}
                    >
                      {LETTERS[i]}
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: chosen === i ? "#1e40af" : "#374151" }}
                    >
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: result.bg, border: `1px solid ${result.border}` }}
              >
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-widest"
                  style={{ color: result.color }}
                >
                  {result.label}
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-bold mb-5 tracking-tight"
                style={{ color: "#0f172a", letterSpacing: "-0.03em" }}
              >
                {result.name}
              </h2>
              <p
                className="text-sm leading-relaxed mb-10 max-w-sm mx-auto"
                style={{ color: "#64748b" }}
              >
                {result.description}
              </p>
              <div
                className="rounded-xl p-5 mb-8 text-left"
                style={{ background: result.bg, border: `1px solid ${result.border}` }}
              >
                <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2" style={{ color: result.color }}>
                  What Level 3→4 looks like
                </p>
                <p className="text-sm font-medium" style={{ color: "#0f172a" }}>
                  I&apos;ve built and scaled analytics functions that reached Level 4 — twice. Here&apos;s the evidence.
                </p>
              </div>
              <p className="text-xs" style={{ color: "#94a3b8" }}>
                {countdown > 0 ? `Continuing in ${countdown}…` : "Scrolling now…"}
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
