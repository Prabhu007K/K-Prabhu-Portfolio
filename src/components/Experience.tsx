"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  const { portfolio } = usePortfolio();
  return (
    <section id="experience" className="scroll-mt-28 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="experience-title"
          subtitle="Work history"
          title="Experience"
        />
        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
          {portfolio.experience.map((job, i) => (
            <motion.div
              key={job.company + job.role}
              className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-accent/40 sm:p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="shrink-0 rounded-lg bg-accent/20 p-2 text-accent">
                    <HiBriefcase size={22} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground sm:text-lg">
                      {job.company}
                    </h3>
                    <p className="text-sm text-accent sm:text-base">{job.role}</p>
                  </div>
                </div>
                <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-600 sm:text-base">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
