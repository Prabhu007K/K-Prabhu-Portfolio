"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import { HiCode, HiShieldCheck } from "react-icons/hi";

function ModeLink({
  href,
  active,
  onSelect,
  children,
}: {
  href: string;
  active: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        // Let browser handle new tab / new window / modified clicks
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
          return;
        }
        e.preventDefault();
        onSelect();
      }}
      aria-current={active ? "page" : undefined}
      className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
        active ? "text-white" : "text-zinc-600 hover:text-foreground"
      }`}
    >
      {children}
    </a>
  );
}

export function ModeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode, modeHref } = usePortfolio();
  const isDev = mode === "developer";

  return (
    <div
      className={`mode-toggle relative flex rounded-full border border-zinc-200 bg-zinc-100 p-1 ${
        compact ? "w-full" : ""
      }`}
      role="group"
      aria-label="Portfolio mode"
    >
      <motion.div
        className="mode-toggle-thumb absolute top-1 bottom-1 rounded-full bg-accent shadow-sm"
        layout
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        style={{
          left: isDev ? "4px" : "50%",
          width: "calc(50% - 4px)",
        }}
      />
      <ModeLink
        href={modeHref("developer")}
        active={isDev}
        onSelect={() => setMode("developer")}
      >
        <HiCode size={16} className="shrink-0" />
        {compact ? (
          <span>Developer</span>
        ) : (
          <>
            <span className="hidden sm:inline">Developer</span>
            <span className="sm:hidden">Dev</span>
          </>
        )}
      </ModeLink>
      <ModeLink
        href={modeHref("security")}
        active={!isDev}
        onSelect={() => setMode("security")}
      >
        <HiShieldCheck size={16} className="shrink-0" />
        {compact ? (
          <span>Cyber Sec</span>
        ) : (
          <>
            <span className="hidden sm:inline">Cyber Sec</span>
            <span className="sm:hidden">Sec</span>
          </>
        )}
      </ModeLink>
    </div>
  );
}
