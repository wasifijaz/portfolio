"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

interface NavbarProps {
  onRevenue?: () => void;
  onDecisions?: () => void;
}

export default function Navbar({ onRevenue, onDecisions }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(248,250,252,0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "#e2e8f0" : "transparent"}`,
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: "#0f172a" }}
        >
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "#2563eb" }}
          >
            W
          </div>
          Wasif Ijaz
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {/* Experience buttons */}
          {onRevenue && (
            <button
              onClick={onRevenue}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
              style={{ color: "#7c3aed", background: "transparent" }}
              title="Revenue Story"
            >
              <span style={{ opacity: 0.6, fontSize: "10px" }}>$1B</span>
              Revenue Story
            </button>
          )}
          {onDecisions && (
            <button
              onClick={onDecisions}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all"
              style={{ color: "#0891b2", background: "transparent" }}
              title="Decision Room"
            >
              <span style={{ opacity: 0.6, fontSize: "10px" }}>◈</span>
              Decision Room
            </button>
          )}

          <div className="w-px h-4 mx-1" style={{ background: "#e2e8f0" }} />

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-md text-sm transition-colors"
              style={{ color: "#64748b" }}
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 mx-2" style={{ background: "#e2e8f0" }} />
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
            style={{ color: "#64748b", border: "1px solid #e2e8f0", background: "#fff" }}
            title="Download CV"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v7M6.5 8L4 5.5M6.5 8L9 5.5M2 10.5h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            CV
          </a>
          <a
            href="mailto:wasif.ijaz16@yahoo.com"
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: "#0f172a", color: "#fff" }}
          >
            Get in Touch
          </a>
        </nav>

        <button
          className="md:hidden p-1.5 rounded-md"
          style={{ color: "#64748b" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L9 7.586l3.293-3.293a1 1 0 111.414 1.414L10.414 9l3.293 3.293a1 1 0 01-1.414 1.414L9 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 9 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M2 4.5A.5.5 0 012.5 4h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM2 9a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 012 9zm0 4.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-5 flex flex-col gap-4"
          style={{ background: "#fff", borderColor: "#e2e8f0" }}
        >
          {onRevenue && (
            <button
              onClick={() => { onRevenue(); setMenuOpen(false); }}
              className="text-sm font-semibold text-left"
              style={{ color: "#7c3aed" }}
            >
              $1B Revenue Story →
            </button>
          )}
          {onDecisions && (
            <button
              onClick={() => { onDecisions(); setMenuOpen(false); }}
              className="text-sm font-semibold text-left"
              style={{ color: "#0891b2" }}
            >
              Decision Room →
            </button>
          )}
          <div className="h-px" style={{ background: "#f1f5f9" }} />
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm"
              style={{ color: "#64748b" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" download className="text-sm font-medium" style={{ color: "#64748b" }}>
            ↓ Download CV
          </a>
          <a href="mailto:wasif.ijaz16@yahoo.com" className="text-sm font-semibold" style={{ color: "#2563eb" }}>
            Get in Touch →
          </a>
        </div>
      )}
    </header>
  );
}
