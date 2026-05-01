"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AppCardProps {
  title: string;
  description: string;
  techStack: string[];
  delay?: number;
}

export function AppCard({ title, description, techStack, delay = 0 }: AppCardProps) {
  return (
    <Link href="/case-study/demo">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="group relative flex flex-col bg-surface border border-border rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 h-full"
      >
        {/* Mockup Area */}
        <div className="w-full aspect-[4/3] bg-background/50 flex items-center justify-center p-8">
          <div className="w-full h-full max-w-[200px] bg-background border-[6px] border-border rounded-[2rem] shadow-xl relative overflow-hidden flex items-center justify-center text-secondary text-sm">
            App Screen
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold text-primary tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-secondary mb-6 flex-grow">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-primary">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
            View Case Study
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
