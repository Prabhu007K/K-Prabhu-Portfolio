"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

export function About() {
  const { portfolio } = usePortfolio();

  return (
    <section id="about" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id="about-title" subtitle="About Me" title="Who I am" />
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-zinc-200 bg-surface p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground">
              I&apos;m {portfolio.name}
            </h3>
            <p className="mt-1 text-lg text-accent">{portfolio.title}</p>

            <div className="mt-4 space-y-4 leading-relaxed text-zinc-600">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-sm font-semibold tracking-widest text-accent transition hover:bg-accent hover:text-white"
              >
                <HiDownload size={18} />
                RESUME
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
