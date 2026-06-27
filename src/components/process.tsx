"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const STEPS = [
  {
    num: "01",
    title: "Research & Strategy",
    desc: "Understanding the problem, defining user flows, and setting technical requirements."
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Crafting minimalist, intuitive interfaces that follow Apple's Human Interface Guidelines."
  },
  {
    num: "03",
    title: "Development",
    desc: "Writing clean, scalable code with robust architectures for iOS and Android."
  },
  {
    num: "04",
    title: "Testing & Deployment",
    desc: "Rigorous QA testing, App Store submission, and post-launch monitoring."
  }
];

function ProcessStep({ step, index }: { step: typeof STEPS[0], index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const [parent] = useAutoAnimate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative p-5 rounded-2xl bg-surface border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
      onClick={() => setIsOpen(!isOpen)}
      ref={parent}
    >
      <span className="absolute -top-4 -right-2 text-[60px] font-bold text-border/40 dark:text-border/30 select-none leading-none z-0">
        {step.num}
      </span>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-secondary'}`}>
            {step.title}
          </h3>
          <div className="text-secondary/50">
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            )}
          </div>
        </div>
        {isOpen && (
          <p className="text-sm text-secondary leading-relaxed mt-3">
            {step.desc}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section className="w-full px-4 py-6 bg-background min-h-full">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-2">
            The Process
          </h2>
          <p className="text-base text-secondary">
            A systematic approach from concept to the App Store.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 pt-2">
          {STEPS.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
