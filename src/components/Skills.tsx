"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKalilinux,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiWireshark,
} from "react-icons/si";
import { FaLock, FaNetworkWired } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  git: SiGit,
  linux: SiLinux,
  python: SiPython,
  network: FaNetworkWired,
  wireshark: SiWireshark,
  burp: HiShieldCheck,
  kali: SiKalilinux,
  crypto: FaLock,
};

const colorMap: Record<string, string> = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#ffffff",
  nodejs: "#339933",
  git: "#F05032",
  linux: "#FCC624",
  python: "#3776AB",
  network: "#ef4444",
  wireshark: "#1679A7",
  burp: "#ff6633",
  kali: "#557CFF",
  crypto: "#ef4444",
};

const WHEEL_SIZE = 380;
const RADIUS = 150;
const BASE_SIZE = 72;
const EXPANDED_SIZE = 128;

export function Skills() {
  const { portfolio, mode } = usePortfolio();
  const skills = portfolio.skills;
  const count = skills.length;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isPaused = hoveredIndex !== null;

  return (
    <section id="skills" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="skills-title"
          subtitle="What I use"
          title="Skills & Abilities"
        />

        <motion.div
          key={mode}
          className="relative mx-auto flex scale-[0.82] items-center justify-center sm:scale-100"
          style={{ width: WHEEL_SIZE, height: WHEEL_SIZE, maxWidth: "min(380px, 92vw)" }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative ring */}
          <div
            className="pointer-events-none absolute inset-4 rounded-full border border-dashed border-accent/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-12 rounded-full border border-white/5"
            aria-hidden
          />

          {/* Center hub */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/30 bg-surface-elevated/90 shadow-[0_0_40px_-8px_rgba(124,58,237,0.5)] backdrop-blur-sm">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Skills
            </span>
            <span className="mt-0.5 text-2xl font-bold text-accent">
              {count}
            </span>
          </div>

          {/* Rotating wheel */}
          <div
            className={`skills-wheel absolute inset-0 ${isPaused ? "skills-wheel-paused" : ""}`}
          >
            {skills.map((skill, i) => {
              const angle = (360 / count) * i - 90;
              const Icon = iconMap[skill.icon] ?? HiShieldCheck;
              const color = colorMap[skill.icon] ?? "var(--accent)";
              const isHovered = hoveredIndex === i;
              const size = isHovered ? EXPANDED_SIZE : BASE_SIZE;

              return (
                <div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    transform: `rotate(${angle}deg) translateY(-${RADIUS}px)`,
                  }}
                >
                  <div
                    className={`skill-wheel-counter absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${isPaused ? "skills-wheel-paused" : ""}`}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <motion.button
                      type="button"
                      className="relative flex cursor-pointer items-center justify-center rounded-full border-2 bg-surface-elevated/95 shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      style={{
                        borderColor: isHovered
                          ? color
                          : "rgba(255,255,255,0.12)",
                        boxShadow: isHovered
                          ? `0 0 32px -4px ${color}88, 0 12px 28px -8px rgba(0,0,0,0.5)`
                          : undefined,
                        zIndex: isHovered ? 30 : 10,
                      }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(i)}
                      onBlur={() => setHoveredIndex(null)}
                      animate={{
                        width: size,
                        height: size,
                        scale: isHovered ? 1 : 0.95,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      }}
                      aria-label={skill.name}
                    >
                    <Icon
                        size={isHovered ? 40 : 28}
                        style={{ color }}
                        className="transition-all duration-300"
                      />
                      <motion.span
                        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-white"
                        initial={false}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 4,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Hover a skill to expand — wheel pauses while you explore
        </p>
      </div>
    </section>
  );
}
