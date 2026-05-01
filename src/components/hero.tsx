"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
            Mobile App Developer <br className="hidden md:block" />
            <span className="text-secondary">(iOS & Android)</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto">
            Crafting fast, scalable, and beautifully designed mobile apps.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-16 relative w-full max-w-sm mx-auto aspect-[1/2] rounded-[3rem] border-[8px] border-border bg-surface shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 to-surface/5 flex items-center justify-center text-secondary">
          App Mockup Placeholder
        </div>
      </motion.div>
    </section>
  );
}
