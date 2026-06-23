"use client";

interface SparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  showArea?: boolean;
}

export default function Sparkline({
  data,
  color = "#2563eb",
  width = 80,
  height = 32,
  showArea = true,
}: SparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = 2;

  const points = data.map((val, i) => ({
    x: pad + (i / (data.length - 1)) * (width - 2 * pad),
    y: height - pad - ((val - min) / range) * (height - 2 * pad),
  }));

  const linePath = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
    const prev = points[i - 1];
    const cx = ((prev.x + p.x) / 2).toFixed(2);
    return `${acc} C ${cx} ${prev.y.toFixed(2)} ${cx} ${p.y.toFixed(2)} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
  }, "");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;
  const gradId = `sg-${color.replace("#", "")}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} overflow="visible">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {showArea && <path d={areaPath} fill={`url(#${gradId})`} />}
      <path d={linePath} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="2.5"
        fill={color}
      />
    </svg>
  );
}
