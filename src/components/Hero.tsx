"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { ProfileHero3D } from "./ProfileHero3D";
import { Typewriter } from "./Typewriter";

export function Hero() {
  const { portfolio } = usePortfolio();
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center scroll-mt-0 overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-6xl flex-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-zinc-600">Hi There,</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent to-violet-500 bg-clip-text text-transparent">
              {portfolio.name}
            </span>
          </h1>
          <div className="mt-4 text-xl text-zinc-700 sm:text-2xl">
            <Typewriter key={portfolio.mode} words={portfolio.roles} />
          </div>
          <p className="mt-6 max-w-lg leading-relaxed text-zinc-600">
            {portfolio.tagline}
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition hover:border-accent hover:text-accent"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ProfileHero3D />
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 transition hover:text-accent"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-label="Scroll to about"
      >
        <HiArrowDown size={28} />
      </motion.button>
    </section>
  );
}
