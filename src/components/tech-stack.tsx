"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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

function TechCategory({ cat, index }: { cat: typeof TECH_CATEGORIES[0], index: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const [parent] = useAutoAnimate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div 
        className="flex items-center justify-between border-b border-border pb-2 mb-4 cursor-pointer hover:border-primary/50 transition-colors group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
          {cat.category}
        </h3>
        <div className="text-secondary/50 group-hover:text-primary/50 transition-colors">
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          )}
        </div>
      </div>
      <div ref={parent}>
        {isOpen && (
          <ul className="flex flex-col gap-3">
            {cat.items.map((item) => (
              <li key={item} className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

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
            <TechCategory key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
