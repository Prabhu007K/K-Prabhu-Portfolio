import type { PortfolioData, PortfolioMode } from "@/types/portfolio";
import { developerPortfolio } from "./portfolio-developer";
import { securityPortfolio } from "./portfolio-security";

export function getPortfolio(mode: PortfolioMode): PortfolioData {
  return mode === "security" ? securityPortfolio : developerPortfolio;
}

/** @deprecated Use usePortfolio() hook for mode-aware data */
export const portfolio = developerPortfolio;
