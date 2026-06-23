import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Wasif Ijaz — Analytics & Product Intelligence Leader",
  description:
    "Analytics leader with 5+ years building revenue intelligence systems across hospitality technology. Originated IOL Pulse — a commercial product serving 300+ hotel chains and 90,000+ hotels.",
  keywords: [
    "Analytics Lead", "BI Lead", "Analytics Manager", "Head of Analytics",
    "Business Intelligence", "Revenue Intelligence", "Hospitality Analytics",
    "Muhammad Wasif Ijaz", "Data & Analytics Manager",
  ],
  authors: [{ name: "Muhammad Wasif Ijaz" }],
  openGraph: {
    type: "website",
    title: "Muhammad Wasif Ijaz — Analytics & Product Intelligence Leader",
    description:
      "Designing analytics products that move businesses from instinct to intelligence. 90,000+ hotels, $350M→$1B growth strategy, 90% analyst workload eliminated.",
    siteName: "Muhammad Wasif Ijaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Wasif Ijaz — Analytics & Product Intelligence Leader",
    description: "Designing analytics products that move businesses from instinct to intelligence.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
