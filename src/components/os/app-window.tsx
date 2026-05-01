"use client";

import { useOsStore } from "@/store/os-store";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Process } from "../process";
import { TechStack } from "../tech-stack";
import { Contact } from "../contact";
import { CaseStudy } from "../case-study";

export function AppWindow() {
  const { activeApp, closeApp, osType } = useOsStore();

  return (
    <AnimatePresence>
      {activeApp && (
        <motion.div
          key="app-window"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute inset-0 z-50 bg-background text-primary flex flex-col rounded-[40px] overflow-hidden"
        >
          {/* App Header */}
          <div className={`w-full h-14 flex items-center px-4 shrink-0 bg-surface/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-10 ${osType === 'ios' ? 'pt-6' : 'pt-2'}`}>
            <button 
              onClick={closeApp}
              className="flex items-center text-accent font-medium hover:opacity-80 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
              Home
            </button>
          </div>

          {/* App Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-10">
            {activeApp === 'process' && <Process />}
            {activeApp === 'techStack' && <TechStack />}
            {activeApp === 'contact' && <Contact />}
            {activeApp?.startsWith('project-') && <CaseStudy />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
