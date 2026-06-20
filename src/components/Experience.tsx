"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  const { portfolio } = usePortfolio();
  return (
    <section id="experience" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="experience-title"
          subtitle="Work history"
          title="Experience"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          {portfolio.experience.map((job, i) => (
            <motion.div
              key={job.company + job.role}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-accent/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 text-accent">
                    <HiBriefcase size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-accent">{job.role}</p>
                  </div>
                </div>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-zinc-600">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
