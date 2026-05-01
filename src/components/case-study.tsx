"use client";

import { motion } from "framer-motion";

export function CaseStudy() {
  return (
    <article className="w-full px-4 py-6 bg-background min-h-full">
      <div className="w-full">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-4">
            FinTrack App
          </h1>
          <div className="w-full aspect-video bg-surface border border-border rounded-2xl flex items-center justify-center text-secondary">
            App Hero Image
          </div>
        </motion.div>

        {/* Content Sections */}
        {[
          { title: "Overview", content: "FinTrack is a minimalist personal finance tracker that helps users budget and monitor their expenses seamlessly." },
          { title: "The Problem", content: "Most budgeting apps are cluttered, overwhelming, and require too much manual input, causing users to abandon them after a few weeks." },
          { title: "The Solution", content: "We designed a clean, native iOS experience focused on speed. By utilizing smooth micro-interactions and reducing cognitive load, logging an expense takes less than 3 seconds." },
          { title: "Key Features", content: "• Offline-first architecture with CoreData\n• Interactive expense charts and trends\n• FaceID/TouchID biometric lock\n• Custom categorization engine" },
          { title: "Tech Stack", content: "• Language: Swift 5\n• UI Framework: SwiftUI\n• Database: CoreData\n• Analytics: Firebase Crashlytics" }
        ].map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-primary mb-3 border-b border-border pb-1">
              {section.title}
            </h2>
            <p className="text-base text-secondary whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
           <h2 className="text-xl font-bold text-primary mb-4 border-b border-border pb-1">
              Screens
            </h2>
            <div className="flex flex-col gap-6">
              <div className="w-full aspect-[1/2] bg-surface rounded-2xl border border-border flex items-center justify-center text-secondary shadow-lg">Screen 1</div>
              <div className="w-full aspect-[1/2] bg-surface rounded-2xl border border-border flex items-center justify-center text-secondary shadow-lg">Screen 2</div>
            </div>
        </motion.div>
      </div>
    </article>
  );
}
