"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { projects } from "../data/portfolio";
import { useState } from "react";
import ImageModal from "./ImageModal";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-6 transition-all group section-shell ${
                  project.highlight ? "ring-1 ring-[rgba(143,125,82,0.36)]" : ""
                }`}
              >
                {project.highlight && (
                  <div className="absolute -top-3 -right-3 bg-[var(--accent)] text-white rounded-full p-2 shadow-[0_8px_16px_rgba(47,43,35,0.14)]">
                    <Star className="w-5 h-5" fill="currentColor" />
                  </div>
                )}

                {/* Project Image */}
                {project.image && (
                  <motion.div
                    className="mb-4 overflow-hidden rounded-xl border border-[var(--stroke)] cursor-pointer relative bg-white/80"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() =>
                      setSelectedImage({ src: project.image!, alt: project.title })
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain hover:opacity-90 transition-opacity p-2"
                    />
                  </motion.div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--accent-alt)] transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-[var(--ink-soft)] font-semibold mb-2">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-[var(--ink-soft)] mb-4">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {project.longDescription.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--ink-soft)] flex gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/80 text-[var(--ink)] rounded-lg text-sm font-medium border border-[var(--stroke)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                  <span className="px-2 py-1 bg-white/80 rounded border border-[var(--stroke)]">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
      />
    </section>
  );
}
