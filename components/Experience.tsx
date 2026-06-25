"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`relative pl-8 border-l-2 ${
                  exp.highlight
                    ? "border-[var(--accent)]"
                    : "border-[rgba(58,55,48,0.16)]"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${
                    exp.highlight
                      ? "bg-[var(--accent)]"
                      : "bg-[rgba(58,55,48,0.24)]"
                  }`}
                />

                <div className="section-shell rounded-2xl p-5 md:p-6 hover:shadow-[0_18px_42px_rgba(47,43,35,0.12)] transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 md:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--ink)] mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-[var(--ink-soft)] font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    {exp.highlight && (
                      <span className="px-3 py-1 bg-[var(--accent)] text-white rounded-full text-xs md:text-sm font-semibold shadow-[0_8px_18px_rgba(47,43,35,0.14)]">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-[var(--ink-soft)] mb-4">
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
                        className="text-[var(--ink-soft)] flex gap-2"
                      >
                        <span className="text-[var(--accent)] mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/80 text-[var(--ink)] rounded-lg text-sm border border-[var(--stroke)]"
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
