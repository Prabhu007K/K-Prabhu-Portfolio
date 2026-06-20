"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiBadgeCheck, HiExternalLink } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

function CertImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-36 items-center justify-center rounded-xl border border-zinc-200 bg-accent/5">
        <HiBadgeCheck className="text-5xl text-accent" />
      </div>
    );
  }

  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Certifications() {
  const { portfolio } = usePortfolio();
  return (
    <section id="certifications" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id="certifications-title" title="Certifications" />
        <div className="grid gap-6 sm:grid-cols-2">
          {portfolio.certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:z-20"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 320,
                damping: 22,
              }}
              whileHover={{
                scale: 1.03,
                y: -6,
                borderColor: "rgba(124, 58, 237, 0.55)",
                boxShadow:
                  "0 20px 50px -12px rgba(124, 58, 237, 0.35), 0 8px 24px -8px rgba(0, 0, 0, 0.5)",
              }}
            >
              {cert.image && (
                <CertImage src={cert.image} alt={cert.title} />
              )}
              <div className="flex items-start gap-3">
                {!cert.image && (
                  <HiBadgeCheck className="shrink-0 text-4xl text-accent" />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                  <p className="text-zinc-600">{cert.issuer}</p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {cert.date}
                  </p>
                </div>
              </div>
              <a
                href={cert.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
              >
                View Certificate
                <HiExternalLink size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
