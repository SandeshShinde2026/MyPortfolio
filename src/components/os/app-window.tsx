"use client";

import { useOsStore } from "@/store/os-store";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Process } from "../process";
import { TechStack } from "../tech-stack";
import { Contact } from "../contact";
import { CaseStudy } from "../case-study";
import { TrackateCarousel } from "../trackate-carousel";

export function AppWindow() {
  const { activeApp, closeApp, osType } = useOsStore();

  return (
    <AnimatePresence>
      {activeApp && (
        <motion.div
          key="app-window"
          initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
          exit={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="absolute inset-0 z-50 bg-[#050505] text-white flex flex-col rounded-[44px] overflow-hidden shadow-2xl"
        >
          {/* App Header */}
          {activeApp !== 'project-trackate' && (
            <div className={`w-full h-20 flex items-center px-6 shrink-0 absolute top-0 left-0 right-0 z-20 ${osType === 'ios' ? 'pt-8' : 'pt-4'} bg-black/40 backdrop-blur-2xl border-b border-white/5`}>
              <button 
                onClick={closeApp}
                className="flex items-center gap-1 text-white font-bold tracking-tight hover:opacity-60 transition-opacity group drop-shadow-md"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span>Back</span>
              </button>
              <div className="flex-1 text-center pr-10">
                <span className="text-xs font-black uppercase tracking-[0.3em] opacity-30 drop-shadow-md">
                  {activeApp.replace('project-', '').toUpperCase()}
                </span>
              </div>
            </div>
          )}

          {/* App Content */}
          <div className={`flex-1 overflow-y-auto overflow-x-hidden no-scrollbar ${activeApp === 'project-trackate' ? '' : 'pt-20 pb-16'}`}>
            {activeApp === 'process' && <Process />}
            {activeApp === 'techStack' && <TechStack />}
            {activeApp === 'contact' && <Contact />}
            {activeApp === 'project-trackate' && <TrackateCarousel />}
            {activeApp?.startsWith('project-') && activeApp !== 'project-trackate' && <CaseStudy />}
          </div>

          {/* Bottom Fade */}
          {activeApp !== 'project-trackate' && (
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
