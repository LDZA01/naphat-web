"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-12 text-center">
            About Me
          </h2>

          <div className="section-shell rounded-3xl p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 text-[var(--ink-soft)] text-base md:text-lg leading-relaxed">
            {personalInfo.about.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-white/80 text-[var(--ink)] rounded-xl border border-[var(--stroke)]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3">
                Languages
              </h3>
              <div className="space-y-2">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.language} className="flex items-center gap-3">
                    <span className="text-[var(--ink)] font-semibold">
                      {lang.language}
                    </span>
                    <span className="text-[var(--accent-alt)]">•</span>
                    <span className="text-[var(--ink-soft)]">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
