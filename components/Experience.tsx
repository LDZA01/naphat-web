"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative pl-8 border-l-2 ${
                  exp.highlight
                    ? "border-black dark:border-white"
                    : "border-gray-300 dark:border-gray-700"
                }`}
              >
                <div
                  className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${
                    exp.highlight
                      ? "bg-black dark:bg-white"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />

                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    {exp.highlight && (
                      <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="capitalize">{exp.type}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex gap-2"
                      >
                        <span className="text-black dark:text-white mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-md text-sm border border-gray-300 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
