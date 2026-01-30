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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
            Get In Touch
          </h2>

          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg">
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
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
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {contact.email}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${contact.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
              >
                <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
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
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  github.com/{contact.github.username}
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
              >
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300">
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
