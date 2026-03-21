"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[linear-gradient(135deg,#faf6f1,#f3ece4,#f0e8e0)]">
        <h1 className="text-6xl font-bold display-title accent-gradient">NC</h1>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[linear-gradient(135deg,#faf6f1,#f3ece4,#f0e8e0)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl font-bold display-title accent-gradient mb-4">NC</h1>
            <p className="text-lg text-[var(--ink-soft)]">Loading Portfolio...</p>
          </motion.div>

          <div className="w-64 h-1 bg-white/80 rounded-full overflow-hidden border border-[var(--stroke)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#c97a5a] via-[#d4a574] to-[#8b6f47]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <motion.p
            className="mt-4 text-sm text-[var(--ink-soft)] font-mono"
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.p>

          <div className="flex gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[var(--accent)] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
