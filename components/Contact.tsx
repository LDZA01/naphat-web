"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { contact, personalInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12">
            Get In Touch
          </h2>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
              I&apos;m always open to discussing new opportunities, projects, or collaborations.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${contact.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group border border-gray-200 dark:border-gray-700"
              >
                <Mail className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                  {contact.email}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${contact.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group border border-gray-200 dark:border-gray-700"
              >
                <Phone className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                  {contact.phone}
                </span>
              </motion.a>

              <motion.a
                href={contact.github.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group border border-gray-200 dark:border-gray-700"
              >
                <Github className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                  github.com/{contact.github.username}
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <MapPin className="w-5 h-5 text-black dark:text-white" />
                <span className="text-gray-700 dark:text-gray-300">
                  {personalInfo.location}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
