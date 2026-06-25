"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo, contact } from "../data/portfolio";

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
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[rgba(201,122,90,0.18)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-[rgba(139,111,71,0.14)] blur-3xl" />

      <div className="container mx-auto max-w-5xl text-center section-shell rounded-[2rem] px-6 md:px-12 lg:px-14 py-12 md:py-16 lg:py-14">
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
              className="px-4 py-2 rounded-full text-sm font-semibold bg-white/75 text-[var(--ink)] border border-[var(--stroke)] shadow-[0_8px_20px_rgba(75,60,45,0.12)]"
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
            className="px-8 py-3 bg-[var(--accent)] hover:bg-[#b8714e] text-white rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-[0_10px_22px_rgba(201,122,90,0.35)]"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
