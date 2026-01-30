"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  const categories = Object.keys(skills) as Array<keyof typeof skills>;

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center">
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
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700"
                    >
                      {skill}
                    </span>
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
