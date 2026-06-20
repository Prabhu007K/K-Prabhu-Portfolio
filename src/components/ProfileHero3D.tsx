"use client";

import { usePortfolio } from "@/context/PortfolioModeContext";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HiMail, HiPhone } from "react-icons/hi";

const HERO_IMAGE = "/profile-hero.png";

export function ProfileHero3D() {
  const { portfolio } = usePortfolio();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 180,
    damping: 22,
  });

  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, transparent 55%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        ref={ref}
        className="hero-3d-scene relative mx-auto w-full max-w-sm lg:max-w-md"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="hero-3d-aura pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/15 blur-3xl" />

        <motion.div
          className="hero-3d-float relative"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="hero-3d-card relative aspect-square overflow-hidden rounded-3xl border-2 border-zinc-200 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.25)]">
            <div className="hero-3d-rgb pointer-events-none absolute inset-0 z-20 mix-blend-screen">
              <Image
                src={HERO_IMAGE}
                alt=""
                fill
                aria-hidden
                className="hero-3d-layer hero-3d-layer-red object-cover object-[50%_22%]"
              />
              <Image
                src={HERO_IMAGE}
                alt=""
                fill
                aria-hidden
                className="hero-3d-layer hero-3d-layer-blue object-cover object-[50%_22%]"
              />
            </div>

            <Image
              src={HERO_IMAGE}
              alt={`${portfolio.name} — portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 28rem"
              className="hero-3d-main relative z-10 object-cover object-[50%_22%]"
            />

            <motion.div
              className="pointer-events-none absolute inset-0 z-30"
              style={{ background: glare }}
            />

            <div className="hero-3d-shimmer pointer-events-none absolute inset-0 z-30" />
            <div className="hero-3d-vignette pointer-events-none absolute inset-0 z-30" />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${portfolio.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent-hover"
        >
          <HiMail size={18} />
          Mail
        </a>
        <a
          href={`tel:${portfolio.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-accent hover:text-accent"
        >
          <HiPhone size={18} />
          Call
        </a>
      </div>
    </div>
  );
}
