"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-6 top-28 h-px bg-gradient-to-r from-transparent via-[var(--stroke)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-6 bottom-20 h-px bg-gradient-to-r from-transparent via-[var(--stroke)] to-transparent" />

      <div className="container mx-auto max-w-5xl text-center section-shell rounded-2xl px-6 md:px-12 lg:px-14 py-12 md:py-16 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--ink-soft)] mb-5 font-semibold">
            Portfolio 2026
          </p>
          <h1 className="display-title text-5xl md:text-7xl font-bold text-[var(--ink)] mb-6 leading-tight">
            Hi, I&apos;m <span className="accent-gradient">{personalInfo.name}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--ink-soft)] mb-10"
        >
          {personalInfo.title} at {personalInfo.university}
          <br />
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {personalInfo.techBadges.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-white/70 text-[var(--ink)] border border-[var(--stroke)] shadow-[0_8px_20px_rgba(47,43,35,0.06)]"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-[var(--ink)] hover:bg-[var(--accent-deep)] text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-[0_10px_22px_rgba(47,43,35,0.16)]"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
