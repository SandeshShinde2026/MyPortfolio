"use client";

import { motion } from "framer-motion";

const TECH_CATEGORIES = [
  {
    category: "Languages",
    items: ["Swift", "Kotlin", "Dart", "TypeScript"],
  },
  {
    category: "Frameworks",
    items: ["SwiftUI", "React Native", "Flutter", "Next.js"],
  },
  {
    category: "Tools & Backend",
    items: ["Firebase", "Node.js", "Git", "Figma"],
  }
];

export function TechStack() {
  return (
    <section className="w-full px-4 py-6 bg-surface min-h-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-2">
            Tech Stack
          </h2>
          <p className="text-base text-secondary">
            The precise tools and languages I use.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {TECH_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4 border-b border-border pb-2">
                {cat.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
