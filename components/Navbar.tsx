"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks, personalInfo, contact } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(251,250,247,0.82)] backdrop-blur-lg border-b border-[var(--stroke)] shadow-[0_10px_28px_rgba(47,43,35,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            className="text-xl font-extrabold tracking-tight display-title text-[var(--ink)] hover:text-[var(--accent-alt)] transition-colors"
          >
            {personalInfo.shortName}
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors text-sm font-semibold"
              >
                {link.name}
              </Link>
            ))}

            <a
              href={contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[var(--ink)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl section-shell space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors text-sm font-semibold"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-[var(--stroke)]">
              <a
                href={contact.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-soft)] hover:text-[var(--accent-alt)] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <motion.div
                className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(143,125,82,0.10)] text-[var(--accent-alt)] border border-[rgba(143,125,82,0.22)]"
                whileHover={{ scale: 1.04 }}
              >
                Let&apos;s build
              </motion.div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
