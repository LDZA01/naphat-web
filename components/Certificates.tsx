"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, FileText } from "lucide-react";
import { certificates } from "../data/portfolio";
import ImageModal from "./ImageModal";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  level: string;
  year: string;
  description: string;
  format?: "image" | "pdf";
  image?: string;
  file?: string;
};

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="certificates" className="py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-title text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-10 md:mb-12 text-center">
            Certificates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {(certificates as Certificate[]).map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="section-shell rounded-2xl p-6 hover:shadow-[0_18px_42px_rgba(57,89,152,0.16)] transition-all"
              >
                {certificate.format === "pdf" ? (
                  <div className="mb-4 rounded-xl border border-[var(--stroke)] bg-white/80 p-6 h-52 flex flex-col items-center justify-center text-center">
                    <FileText className="w-10 h-10 text-[var(--ink-soft)] mb-3" />
                    <p className="text-sm text-[var(--ink-soft)] mb-4">
                      PDF Certificate
                    </p>
                    {certificate.file && (
                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        View PDF
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="mb-4 overflow-hidden rounded-xl border border-[var(--stroke)] cursor-pointer relative bg-white/85">
                    <motion.button
                      type="button"
                      className="w-full"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 280 }}
                      onClick={() => {
                        if (!certificate.image) return;
                        setSelectedImage({
                          src: certificate.image,
                          alt: certificate.title,
                        });
                      }}
                      aria-label={`Open ${certificate.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={certificate.image || ""}
                        alt={certificate.title}
                        className="w-full h-52 object-contain bg-white hover:opacity-90 transition-opacity"
                      />
                    </motion.button>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--ink)] leading-tight">
                    {certificate.title}
                  </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-[rgba(20,157,177,0.12)] text-[var(--accent-alt)] border border-[rgba(20,157,177,0.35)] whitespace-nowrap">
                    <Award className="w-3.5 h-3.5" />
                    {certificate.year}
                  </span>
                </div>

                  <p className="text-sm font-semibold text-[var(--ink)] mb-1">
                  {certificate.issuer}
                </p>
                  <p className="text-sm text-[var(--ink-soft)] mb-3">
                  {certificate.level}
                </p>
                  <p className="text-[var(--ink-soft)] text-sm md:text-base">
                  {certificate.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        alt={selectedImage?.alt || ""}
      />
    </section>
  );
}
