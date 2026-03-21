"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  const categories = Object.keys(skills) as Array<keyof typeof skills>;

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="section-shell rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-[var(--ink)] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="px-3 py-1.5 bg-white/85 text-[var(--ink)] rounded-lg text-sm hover:bg-white transition-colors border border-[var(--stroke)] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
