"use client";

interface MiniBarProps {
  value: number;
  max?: number;
  color?: string;
  label?: string;
  showFrom?: number;
}

export default function MiniBar({ value, max = 100, color = "#059669", showFrom }: MiniBarProps) {
  const pct = Math.min((value / max) * 100, 100);
  const fromPct = showFrom ? Math.min((showFrom / max) * 100, 100) : 0;

  return (
    <div className="w-full">
      <div
        className="relative h-1.5 rounded-full overflow-hidden"
        style={{ background: "#f1f5f9" }}
      >
        {showFrom !== undefined && (
          <div
            className="absolute top-0 left-0 h-full rounded-full opacity-30"
            style={{ width: `${fromPct}%`, background: color }}
          />
        )}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}
