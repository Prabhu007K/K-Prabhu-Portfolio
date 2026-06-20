"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";

export function ParticleBackground() {
  const { isSecurity } = usePortfolio();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      <div className="particle-bg-gradient absolute inset-0 opacity-40 transition-opacity duration-500" />
      {isSecurity && (
        <div className="security-grid absolute inset-0 opacity-80" />
      )}
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="particle absolute rounded-full bg-zinc-300/60"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
            animationDelay: `${(i % 10) * 0.5}s`,
            animationDuration: `${8 + (i % 6)}s`,
          }}
        />
      ))}
    </div>
  );
}
