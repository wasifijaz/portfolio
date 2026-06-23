"use client";

import { useState, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Assessment from "@/components/sections/Assessment";
import Hero from "@/components/sections/Hero";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import WhatIDo from "@/components/sections/WhatIDo";
import FeaturedWork from "@/components/sections/FeaturedWork";
import AllProjects from "@/components/sections/AllProjects";
import Skills from "@/components/sections/Skills";
import CareerJourney from "@/components/sections/CareerJourney";
import About from "@/components/sections/About";
import ThoughtLeadership from "@/components/sections/ThoughtLeadership";
import Contact from "@/components/sections/Contact";
import RevenueStory from "@/components/overlays/RevenueStory";
import DecisionRoom from "@/components/overlays/DecisionRoom";

type Overlay = "revenue" | "decisions" | null;

export default function PortfolioClient() {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleAssessmentComplete = useCallback(() => {
    requestAnimationFrame(() => {
      portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <>
      <Navbar
        onRevenue={() => setOverlay("revenue")}
        onDecisions={() => setOverlay("decisions")}
      />

      <Assessment onComplete={handleAssessmentComplete} />

      <div ref={portfolioRef} id="portfolio">
        <Hero />
        <ImpactMetrics />
        <WhatIDo />
        <FeaturedWork />
        <AllProjects />
        <Skills />
        <CareerJourney />
        <About />
        <ThoughtLeadership />
        <Contact />
      </div>

      <Footer />

      <AnimatePresence>
        {overlay === "revenue" && (
          <RevenueStory key="revenue" onClose={() => setOverlay(null)} />
        )}
        {overlay === "decisions" && (
          <DecisionRoom key="decisions" onClose={() => setOverlay(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
