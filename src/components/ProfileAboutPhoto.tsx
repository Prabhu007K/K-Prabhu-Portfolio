"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import Image from "next/image";

const ABOUT_IMAGE = "/profile.png";

export function ProfileAboutPhoto() {
  const { portfolio } = usePortfolio();
  return (
    <motion.div
      className="group relative mx-auto w-full max-w-md lg:mx-0"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-photo-glow pointer-events-none absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-cyan-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

      <div className="about-photo-frame relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={ABOUT_IMAGE}
            alt={`${portfolio.name} — photo`}
            fill
            sizes="(max-width: 1024px) 100vw, 24rem"
            className="about-photo-img object-cover object-[50%_22%]"
          />
          <div className="about-photo-duotone pointer-events-none absolute inset-0" />
          <div className="about-photo-grain pointer-events-none absolute inset-0 opacity-40" />
        </div>

        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/80 to-transparent p-4 pt-16">
          <p className="text-lg font-bold text-white">{portfolio.name}</p>
        </div>
      </div>
    </motion.div>
  );
}
