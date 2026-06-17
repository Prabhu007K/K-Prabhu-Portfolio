"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

export function Footer() {
  const { portfolio } = usePortfolio();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/10 bg-surface py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">
            {portfolio.name}&apos;s Portfolio
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            Thank you for visiting. Connect with me on socials. Keep rising.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-accent"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-accent"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick links</h4>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-400">
            {portfolio.navLinks.slice(0, 6).map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="transition hover:text-accent"
                >
                  {link.label.toLowerCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact info</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <a
                href={`tel:${portfolio.phoneTel}`}
                className="transition hover:text-accent"
              >
                {portfolio.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${portfolio.email}`}
                className="transition hover:text-accent"
              >
                {portfolio.email}
              </a>
            </li>
            <li>{portfolio.location}</li>
          </ul>
        </div>
      </div>

      <p className="mt-10 flex items-center justify-center gap-1 text-center text-sm text-zinc-500">
        Designed with <HiHeart className="text-accent" /> by {portfolio.name}
      </p>
      <p className="mt-1 text-center text-xs text-zinc-600">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
        {portfolio.name}. All rights reserved.
      </p>
    </footer>
  );
}
