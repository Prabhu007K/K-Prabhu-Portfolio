"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  const { portfolio } = usePortfolio();

  return (
    <section id="projects" className="scroll-mt-28 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id="projects-title" title="Projects Made" />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span
                className="absolute left-0 top-0 z-10 h-full w-1 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden
              />

              <div className="relative h-44 overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-foreground drop-shadow-sm">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <p className="flex-1 text-sm leading-relaxed text-zinc-600 transition-colors duration-300 group-hover:text-zinc-700">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    View project
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site`}
                    title="Live demo"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-accent transition hover:scale-110 hover:border-accent hover:bg-accent/10"
                  >
                    <HiGlobeAlt size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    title="GitHub repository"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:scale-110 hover:border-zinc-400 hover:bg-zinc-100"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
