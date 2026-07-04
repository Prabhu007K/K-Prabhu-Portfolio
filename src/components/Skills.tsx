"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiCss,
  SiEclipseide,
  SiGit,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiKalilinux,
  SiLinux,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVercel,
  SiWireshark,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>
> = {
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
  vercel: SiVercel,
  netlify: SiNetlify,
  eclipse: SiEclipseide,
  intellij: SiIntellijidea,
};

const colorMap: Record<string, string> = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  nextjs: "#18181b",
  nodejs: "#339933",
  git: "#F05032",
  linux: "#FCC624",
  python: "#3776AB",
  network: "#ef4444",
  wireshark: "#1679A7",
  burp: "#ff6633",
  kali: "#557CFF",
  vercel: "#18181b",
  netlify: "#00C7B7",
  eclipse: "#2C2255",
  intellij: "#18181b",
};

function useWheelMetrics() {
  const [metrics, setMetrics] = useState({
    size: 380,
    radius: 150,
    base: 72,
    expanded: 128,
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setMetrics({ size: 280, radius: 108, base: 52, expanded: 84 });
      } else if (width < 768) {
        setMetrics({ size: 320, radius: 124, base: 60, expanded: 100 });
      } else {
        setMetrics({ size: 380, radius: 150, base: 72, expanded: 128 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return metrics;
}

export function Skills() {
  const { portfolio, mode } = usePortfolio();
  const skills = portfolio.skills;
  const count = skills.length;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isPaused = hoveredIndex !== null;
  const { size: wheelSize, radius, base, expanded } = useWheelMetrics();

  return (
    <section id="skills" className="scroll-mt-28 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="skills-title"
          subtitle="What I use"
          title="Skills & Abilities"
        />

        {/* Mobile: clear icon grid */}
        <motion.ul
          key={`${mode}-grid`}
          className="grid grid-cols-2 gap-3 min-[400px]:grid-cols-3 sm:hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? HiShieldCheck;
            const color = colorMap[skill.icon] ?? "var(--accent)";
            return (
              <li
                key={skill.name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-100 bg-surface"
                  style={{ color }}
                >
                  <Icon size={24} style={{ color }} />
                </span>
                <span className="text-center text-[11px] font-semibold leading-tight text-foreground">
                  {skill.name}
                </span>
              </li>
            );
          })}
        </motion.ul>

        {/* Tablet / desktop: rotating wheel */}
        <motion.div
          key={`${mode}-wheel`}
          className="relative mx-auto hidden items-center justify-center sm:flex"
          style={{
            width: wheelSize,
            height: wheelSize,
            maxWidth: "100%",
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="pointer-events-none absolute inset-4 rounded-full border border-dashed border-accent/25"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-12 rounded-full border border-zinc-200"
            aria-hidden
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/30 bg-white shadow-md md:h-24 md:w-24">
            <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500 md:text-xs">
              Skills
            </span>
            <span className="mt-0.5 text-xl font-bold text-accent md:text-2xl">
              {count}
            </span>
          </div>

          <div
            className={`skills-wheel absolute inset-0 ${isPaused ? "skills-wheel-paused" : ""}`}
          >
            {skills.map((skill, i) => {
              const angle = (360 / count) * i - 90;
              const Icon = iconMap[skill.icon] ?? HiShieldCheck;
              const color = colorMap[skill.icon] ?? "var(--accent)";
              const isHovered = hoveredIndex === i;
              const iconSize = isHovered ? expanded : base;

              return (
                <div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                  }}
                >
                  <div
                    className={`skill-wheel-counter absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ${isPaused ? "skills-wheel-paused" : ""}`}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <motion.button
                        type="button"
                        className="relative flex cursor-pointer items-center justify-center rounded-full border-2 bg-white shadow-md outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        style={{
                          borderColor: isHovered ? color : "rgba(0,0,0,0.08)",
                          boxShadow: isHovered
                            ? `0 0 32px -4px ${color}88, 0 12px 28px -8px rgba(0,0,0,0.15)`
                            : undefined,
                          zIndex: isHovered ? 30 : 10,
                        }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(i)}
                        onBlur={() => setHoveredIndex(null)}
                        animate={{
                          width: iconSize,
                          height: iconSize,
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
                          size={isHovered ? Math.round(expanded * 0.31) : Math.round(base * 0.39)}
                          style={{ color }}
                          className="transition-all duration-300"
                        />
                        <motion.span
                          className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-foreground md:-bottom-8 md:text-sm"
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
      </div>
    </section>
  );
}
