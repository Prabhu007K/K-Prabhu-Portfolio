"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

export function Education() {
  const { portfolio } = usePortfolio();
  return (
    <section id="education" className="scroll-mt-28 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="education-title"
          subtitle="Learning path"
          title="My Education"
        />
        <p className="-mt-4 mb-8 px-2 text-center text-sm text-zinc-500 italic sm:-mt-6 sm:mb-12 sm:text-base">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-accent/30 sm:left-6 md:left-1/2 md:-translate-x-px" />
          {portfolio.education.map((item, i) => (
            <motion.article
              key={item.degree + item.institution}
              className={`relative mb-8 flex gap-6 pl-14 sm:mb-10 sm:pl-16 md:gap-0 md:pl-0 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="hidden w-1/2 md:block" />
              <div
                className={`z-10 flex w-full min-w-0 flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                }`}
              >
                <div
                  className={`mb-3 flex items-center gap-2 text-accent ${
                    i % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <HiAcademicCap size={22} className="shrink-0" />
                  <span className="text-sm font-medium">{item.period}</span>
                </div>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {item.degree}
                </h3>
                {"field" in item && item.field && (
                  <p className="text-sm text-zinc-600 sm:text-base">{item.field}</p>
                )}
                <p className="mt-1 break-words text-sm text-accent/90 sm:text-base">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{item.detail}</p>
              </div>
              <div className="absolute left-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-white sm:left-6 sm:h-12 sm:w-12 md:left-1/2">
                <span className="text-sm font-bold text-accent">{i + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
