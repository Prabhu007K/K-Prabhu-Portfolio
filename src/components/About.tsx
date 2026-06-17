"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiAcademicCap, HiDownload, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { ProfileAboutPhoto } from "./ProfileAboutPhoto";
import { SectionTitle } from "./SectionTitle";

export function About() {
  const { portfolio } = usePortfolio();

  return (
    <section id="about" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id="about-title" subtitle="About Me" title="About Me" />
        <motion.div
          className="grid gap-10 lg:grid-cols-2 lg:items-start"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-white/10 bg-surface-elevated/50 p-8">
            <h3 className="text-2xl font-bold text-white">
              I&apos;m {portfolio.name}
            </h3>
            <p className="mt-1 text-lg text-accent">{portfolio.title}</p>

            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              {portfolio.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-surface/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <HiAcademicCap size={20} />
                <h4 className="font-semibold text-white">Education</h4>
              </div>
              <ul className="space-y-4">
                {portfolio.education.map((item) => (
                  <li key={item.degree + item.institution} className="text-sm">
                    <p className="font-medium text-white">{item.degree}</p>
                    {"field" in item && item.field && (
                      <p className="text-zinc-400">{item.field}</p>
                    )}
                    <p className="text-accent/90">{item.institution}</p>
                    <p className="mt-1 text-zinc-500">
                      {item.period} · {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex items-center gap-3">
                <HiMail className="shrink-0 text-accent" size={20} />
                <a
                  href={`mailto:${portfolio.email}`}
                  className="transition hover:text-accent"
                >
                  {portfolio.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="shrink-0 text-accent" size={20} />
                <a
                  href={`tel:${portfolio.phoneTel}`}
                  className="transition hover:text-accent"
                >
                  {portfolio.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiLocationMarker className="shrink-0 text-accent" size={20} />
                <span>{portfolio.location}</span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-8 py-3 text-sm font-semibold tracking-widest text-accent transition hover:bg-accent hover:text-white"
              >
                <HiDownload size={18} />
                RESUME
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <ProfileAboutPhoto />
            <div className="grid grid-cols-2 gap-4">
              {portfolio.aboutStats.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-surface-elevated/30 p-6 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(124,58,237,0.5)",
                  }}
                >
                  <p className="text-sm text-zinc-500">{item.label}</p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
