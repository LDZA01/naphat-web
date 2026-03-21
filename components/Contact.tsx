"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { contact, personalInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-12">
            Get In Touch
          </h2>

          <div className="section-shell rounded-2xl p-8">
            <p className="text-[var(--ink-soft)] text-lg mb-8">
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
                className="flex items-center justify-center gap-3 p-4 bg-white/80 rounded-xl hover:bg-white transition-colors group border border-[var(--stroke)]"
              >
                <Mail className="w-5 h-5 text-[var(--ink)]" />
                <span className="text-[var(--ink-soft)] group-hover:text-[var(--ink)]">
                  {contact.email}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${contact.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-white/80 rounded-xl hover:bg-white transition-colors group border border-[var(--stroke)]"
              >
                <Phone className="w-5 h-5 text-[var(--ink)]" />
                <span className="text-[var(--ink-soft)] group-hover:text-[var(--ink)]">
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
                className="flex items-center justify-center gap-3 p-4 bg-white/80 rounded-xl hover:bg-white transition-colors group border border-[var(--stroke)]"
              >
                <Github className="w-5 h-5 text-[var(--ink)]" />
                <span className="text-[var(--ink-soft)] group-hover:text-[var(--ink)]">
                  github.com/{contact.github.username}
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 p-4 bg-white/80 rounded-xl border border-[var(--stroke)]"
              >
                <MapPin className="w-5 h-5 text-[var(--ink)]" />
                <span className="text-[var(--ink-soft)]">{personalInfo.location}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
