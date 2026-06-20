"use client";

import { getPortfolio } from "@/data/portfolio";
import type { PortfolioData, PortfolioMode } from "@/types/portfolio";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type PortfolioModeContextValue = {
  mode: PortfolioMode;
  portfolio: PortfolioData;
  isSecurity: boolean;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
};

const PortfolioModeContext = createContext<PortfolioModeContextValue | null>(
  null,
);

const STORAGE_KEY = "portfolio-mode";

export function PortfolioModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setModeState] = useState<PortfolioMode>("developer");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "developer" || saved === "security") {
      setModeState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = useCallback((next: PortfolioMode) => {
    setModeState(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((m) => (m === "developer" ? "security" : "developer"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const value = useMemo(
    () => ({
      mode,
      portfolio: getPortfolio(mode),
      isSecurity: mode === "security",
      setMode,
      toggleMode,
    }),
    [mode, setMode, toggleMode],
  );

  return (
    <PortfolioModeContext.Provider value={value}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioModeContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioModeProvider");
  }
  return ctx;
}
