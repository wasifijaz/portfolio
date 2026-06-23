import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { featuredWork, allProjects } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const allWork = [...featuredWork, ...allProjects];

const pulseScreenshots = [
  { src: "/images/pulse/revenue-insights.avif", label: "Revenue Insights", desc: "Real-time revenue tracking across hotel portfolio" },
  { src: "/images/pulse/rate-parity-insights.avif", label: "Rate Parity Insights", desc: "Competitive rate monitoring and parity alerts" },
  { src: "/images/pulse/compset-analysis.avif", label: "Compset Analysis", desc: "Competitive set benchmarking and positioning" },
  { src: "/images/pulse/crisis-intelligence.avif", label: "Crisis Intelligence", desc: "Market disruption signals and early warning system" },
];

export async function generateStaticParams() {
  return allWork.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);
  if (!project) return { title: "Work" };
  return {
    title: `${project.title} — Muhammad Wasif Ijaz`,
    description: project.outcome,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredWork.find((p) => p.slug === slug);

  if (!project) notFound();

  const isIolPulse = slug === "iol-pulse";

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24" style={{ background: "#f8fafc" }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-colors"
            style={{ color: "#64748b" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Work
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
              style={{ color: "#0f172a", letterSpacing: "-0.025em" }}
            >
              {project.title}
            </h1>
            <p className="text-lg" style={{ color: "#64748b" }}>
              {project.subtitle}
            </p>
          </div>

          {/* Key metrics */}
          <div
            className="grid grid-cols-3 gap-px mb-12 rounded-xl overflow-hidden"
            style={{ background: "#e2e8f0" }}
          >
            {project.metrics.map((m, i) => (
              <div key={i} className="p-6" style={{ background: "#ffffff" }}>
                <p className="metric-num text-2xl font-bold mb-1" style={{ color: "#2563eb" }}>
                  {m.value}
                </p>
                <p className="text-xs" style={{ color: "#64748b" }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome callout */}
          <div
            className="p-6 rounded-xl mb-12"
            style={{
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
            }}
          >
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-2" style={{ color: "#2563eb" }}>
              Bottom Line
            </p>
            <p className="text-sm leading-relaxed font-medium" style={{ color: "#1e40af" }}>
              {project.outcome}
            </p>
          </div>

          {/* SCAR sections */}
          {[
            { label: "Situation", content: project.situation },
            { label: "Challenge", content: project.challenge },
            { label: "Action", content: project.action },
            { label: "Result", content: project.result },
          ].map((section, i) => (
            <div
              key={i}
              className="mb-10 pb-10 border-b last:border-0"
              style={{ borderColor: "#e2e8f0" }}
            >
              <h2
                className="text-xs tracking-widest uppercase mb-4 font-mono font-semibold"
                style={{ color: "#2563eb" }}
              >
                {section.label}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                {section.content}
              </p>
            </div>
          ))}

          {/* IOL Pulse Screenshot Gallery */}
          {isIolPulse && (
            <div className="mt-4 mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1" style={{ background: "#e2e8f0" }} />
                <p className="text-xs font-mono font-semibold uppercase tracking-widest px-3" style={{ color: "#2563eb" }}>
                  Platform Screenshots
                </p>
                <div className="h-px flex-1" style={{ background: "#e2e8f0" }} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pulseScreenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="group rounded-xl overflow-hidden"
                    style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  >
                    <div className="relative w-full aspect-video bg-slate-50 overflow-hidden">
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#0f172a" }}>{shot.label}</p>
                      <p className="text-xs" style={{ color: "#94a3b8" }}>{shot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to work */}
          <div className="mt-16 pt-10 border-t" style={{ borderColor: "#e2e8f0" }}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#64748b" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 7H3M3 7L6.5 3.5M3 7L6.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
