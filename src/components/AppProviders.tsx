"use client";

import { PortfolioModeProvider } from "@/context/PortfolioModeContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <PortfolioModeProvider>{children}</PortfolioModeProvider>;
}
