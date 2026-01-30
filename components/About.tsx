"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
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
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg"
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
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Languages
              </h3>
              <div className="space-y-2">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.language} className="flex items-center gap-3">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {lang.language}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">•</span>
                    <span className="text-slate-600 dark:text-slate-400">
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
