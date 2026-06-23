"use client";

export default function Footer() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded flex items-center justify-center text-white text-xs font-bold" style={{ background: "#2563eb" }}>W</div>
          <span className="text-sm font-medium" style={{ color: "#0f172a" }}>Muhammad Wasif Ijaz</span>
          <span className="text-sm" style={{ color: "#94a3b8" }}>· Analytics & Product Intelligence Leader</span>
        </div>
        <div className="flex items-center gap-5">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/wasifijaz" },
            { label: "GitHub", href: "https://github.com/wasifijaz" },
            { label: "Email", href: "mailto:wasif.ijaz16@yahoo.com" },
          ].map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm transition-colors" style={{ color: "#94a3b8" }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
