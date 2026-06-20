"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

export function Education() {
  const { portfolio } = usePortfolio();
  return (
    <section id="education" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="education-title"
          subtitle="Learning path"
          title="My Education"
        />
        <p className="-mt-6 mb-12 text-center text-zinc-500 italic">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30 md:left-1/2 md:-translate-x-px" />
          {portfolio.education.map((item, i) => (
            <motion.article
              key={item.degree + item.institution}
              className={`relative mb-10 flex gap-6 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="hidden w-1/2 md:block" />
              <div
                className={`z-10 flex w-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                }`}
              >
                <div
                  className={`mb-3 flex items-center gap-2 text-accent ${
                    i % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <HiAcademicCap size={22} />
                  <span className="text-sm font-medium">{item.period}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.degree}</h3>
                {"field" in item && item.field && (
                  <p className="text-zinc-600">{item.field}</p>
                )}
                <p className="mt-1 text-accent/90">{item.institution}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.detail}</p>
              </div>
              <div className="absolute left-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-white md:left-1/2">
                <span className="text-sm font-bold text-accent">{i + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
