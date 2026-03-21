"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";
import { contact } from "../data/portfolio";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-40 p-4 bg-gradient-to-br from-[#c97a5a] to-[#8b6f47] text-white rounded-full shadow-[0_14px_30px_rgba(75,60,45,0.38)] hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="mail"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-40 right-8 z-40 section-shell rounded-xl p-4 min-w-[210px]"
          >
            <p className="text-sm font-semibold text-[var(--ink)] mb-3">Quick Contact</p>
            <div className="space-y-2">
              <a
                href={`mailto:${contact.email}`}
                className="block text-sm text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors"
              >
                Email
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="block text-sm text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors"
              >
                Call
              </a>
              <a
                href={contact.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
