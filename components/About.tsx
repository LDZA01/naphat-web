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
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
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
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700"
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
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Languages
              </h3>
              <div className="space-y-2">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.language} className="flex items-center gap-3">
                    <span className="text-black dark:text-white font-medium">
                      {lang.language}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
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
