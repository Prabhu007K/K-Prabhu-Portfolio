import type { PortfolioMode } from "@/types/portfolio";

export function parseModeParam(search: string): PortfolioMode | null {
  const mode = new URLSearchParams(search).get("mode")?.toLowerCase();
  if (!mode) return null;
  if (mode === "developer" || mode === "web" || mode === "dev") {
    return "developer";
  }
  if (mode === "security" || mode === "cyber" || mode === "sec") {
    return "security";
  }
  return null;
}

export function modeHref(mode: PortfolioMode): string {
  return `/?mode=${mode}`;
}

export function syncModeToUrl(mode: PortfolioMode) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("mode", mode);
  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next !== current) {
    window.history.replaceState(window.history.state, "", next);
  }
}
