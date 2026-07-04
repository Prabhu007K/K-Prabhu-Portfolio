"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  id: string;
  subtitle?: string;
  title: string;
};

export function SectionTitle({ id, subtitle, title }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      className="mb-8 scroll-mt-28 px-1 text-center sm:mb-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {subtitle ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
          {subtitle}
        </p>
      ) : null}
      <h2
        className={`break-words font-bold text-foreground ${subtitle ? "mt-2 text-2xl sm:text-3xl md:text-4xl" : "text-2xl sm:text-3xl md:text-4xl"}`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </motion.div>
  );
}
