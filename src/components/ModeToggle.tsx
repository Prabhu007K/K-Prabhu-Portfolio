"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiCode, HiShieldCheck } from "react-icons/hi";

export function ModeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = usePortfolio();
  const isDev = mode === "developer";

  return (
    <div
      className={`mode-toggle relative flex rounded-full border border-white/15 bg-surface-elevated/80 p-1 backdrop-blur-sm ${
        compact ? "w-full" : ""
      }`}
      role="group"
      aria-label="Portfolio mode"
    >
      <motion.div
        className="mode-toggle-thumb absolute top-1 bottom-1 rounded-full bg-accent shadow-md shadow-accent/30"
        layout
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        style={{
          left: isDev ? "4px" : "50%",
          width: "calc(50% - 4px)",
        }}
      />
      <button
        type="button"
        onClick={() => setMode("developer")}
        className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
          isDev ? "text-white" : "text-zinc-400 hover:text-zinc-200"
        }`}
        aria-pressed={isDev}
      >
        <HiCode size={16} />
        {!compact && <span className="hidden sm:inline">Developer</span>}
        {!compact && <span className="sm:hidden">Dev</span>}
      </button>
      <button
        type="button"
        onClick={() => setMode("security")}
        className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
          !isDev ? "text-white" : "text-zinc-400 hover:text-zinc-200"
        }`}
        aria-pressed={!isDev}
      >
        <HiShieldCheck size={16} />
        {!compact && <span className="hidden sm:inline">Cyber Sec</span>}
        {!compact && <span className="sm:hidden">Sec</span>}
      </button>
    </div>
  );
}
