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
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12 text-center">
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
                className={`relative bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all group border ${
                  project.highlight ? "border-2 border-black dark:border-white" : "border-gray-200 dark:border-gray-800"
                }`}
              >
                {project.highlight && (
                  <div className="absolute -top-3 -right-3 bg-black dark:bg-white text-white dark:text-black rounded-full p-2">
                    <Star className="w-5 h-5" fill="currentColor" />
                  </div>
                )}

                {/* Project Image */}
                {project.image && (
                  <motion.div
                    className="mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer relative"
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      setSelectedImage({ src: project.image!, alt: project.title })
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                  </motion.div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {project.longDescription.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-gray-400 flex gap-2"
                    >
                      <span className="text-black dark:text-white mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md text-sm font-medium border border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700">
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
