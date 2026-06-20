"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { AnimatePresence, motion } from "framer-motion";
import { About } from "./About";
import { Certifications } from "./Certifications";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function PortfolioMain() {
  const { mode } = usePortfolio();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={mode}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35 }}
      >
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </motion.main>
    </AnimatePresence>
  );
}
