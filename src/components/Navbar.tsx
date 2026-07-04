"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  const { portfolio } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = portfolio.navLinks.map((l) =>
      document.getElementById(l.id),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [portfolio.navLinks]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="shrink-0 text-base font-bold text-foreground transition hover:text-accent sm:text-lg"
        >
          {portfolio.shortName}
          <span className="text-accent">.</span>
        </button>

        <div className="hidden min-w-0 md:block md:max-w-[220px] lg:max-w-none">
          <ModeToggle />
        </div>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {portfolio.navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`rounded-lg px-2 py-2 text-sm font-medium transition xl:px-3 ${
                  active === link.id
                    ? "text-accent"
                    : "text-zinc-600 hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-zinc-200 bg-white lg:hidden"
          >
            <div className="px-4 py-4">
              <ModeToggle compact />
            </div>
            <ul className="flex flex-col gap-1 px-4 pb-4">
              {portfolio.navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium ${
                      active === link.id
                        ? "bg-accent/10 text-accent"
                        : "text-zinc-700"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
