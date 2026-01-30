"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all group ${
                  project.highlight ? "border-2 border-indigo-600 dark:border-indigo-400" : ""
                }`}
              >
                {project.highlight && (
                  <div className="absolute -top-3 -right-3 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-slate-900 rounded-full p-2">
                    <Star className="w-5 h-5" fill="currentColor" />
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {project.longDescription.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
                    >
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
