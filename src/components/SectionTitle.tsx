"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  id: string;
  subtitle: string;
  title: string;
};

export function SectionTitle({ id, subtitle, title }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      className="mb-12 text-center scroll-mt-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {subtitle}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </motion.div>
  );
}
