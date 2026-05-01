"use client";

import { motion } from "framer-motion";

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
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative p-5 rounded-2xl bg-surface border border-border overflow-hidden"
            >
              <span className="absolute -top-4 -right-2 text-[60px] font-bold text-border/40 dark:text-border/30 select-none leading-none z-0">
                {step.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
