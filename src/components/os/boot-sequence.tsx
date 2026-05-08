"use client";

import { useOsStore } from "@/store/os-store";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Power } from "lucide-react";
import Image from "next/image";

import SplitText from "@/components/ui/SplitText";
import { Starfield } from "@/components/ui/starfield-1";

export function BootSequence() {
  const { bootState, setBootState } = useOsStore();

  const handleNext = () => {
    if (bootState === 'onboarding1') setBootState('onboarding2');
    else if (bootState === 'onboarding2') setBootState('onboarding3');
    else if (bootState === 'onboarding3') {
      setBootState('booting');
      setTimeout(() => {
        setBootState('booted');
      }, 2000); // simulate boot load
    }
  };

  return (
    <div className="relative w-full h-full bg-[#030303] text-white flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      <Starfield speed={0.5} quantity={150} />
      
      {/* Subtle ambient light */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {bootState === 'onboarding1' && (
            <motion.div 
              key="step1" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, transition: { duration: 1, delay: 5.5 } }} 
              exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 0.5 } }} 
              className="flex flex-col items-center w-full px-4 antialiased"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 5.5, ease: [0.16, 1, 0.3, 1] } }}
                className="w-24 h-24 rounded-full bg-white/[0.05] border border-white/10 shadow-2xl flex items-center justify-center mb-10 overflow-hidden backdrop-blur-2xl relative group"
              >
                 <Image src="/profile.jpg" alt="Sandesh Shinde" fill className="object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700" sizes="96px" priority />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, delay: 5.8, ease: "easeOut" } }}
                className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-4 drop-shadow-2xl"
              >
                Sandesh Shinde
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 6.2 } }}
                className="h-[1px] w-12 bg-white/20 mb-4"
              />

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 6.4, ease: "easeOut" } }}
                className="text-xs font-bold text-white/40 tracking-[0.3em] uppercase" 
              >
                Mobile App Developer • iOS & Android
              </motion.p>
            </motion.div>
          )}

          {bootState === 'onboarding2' && (
            <motion.div 
              key="step2" 
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} 
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
              exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
              className="px-6 w-full flex flex-col items-center text-center antialiased"
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold tracking-tight text-white/90 mb-10"
              >
                The Philosophy
              </motion.h2>
              <SplitText 
                tag="p" 
                text="I believe in performance as a feature and design as a language. Scalable, native, and uncompromising." 
                className="text-lg md:text-xl text-white/60 leading-relaxed font-medium max-w-sm mx-auto" 
                delay={20} 
                duration={0.6} 
                splitType="words" 
              />
            </motion.div>
          )}

          {bootState === 'onboarding3' && (
            <motion.div 
              key="step3" 
              initial={{ opacity: 0, scale: 1.1 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, filter: "blur(20px)" }} 
              transition={{ duration: 1 }} 
              className="flex flex-col items-center w-full px-4 text-center antialiased"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl font-bold tracking-tight text-white mb-16"
              >
                Initialize Experience
              </motion.h2>
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                onClick={handleNext}
                className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Power className="w-8 h-8 stroke-[2.5]" />
              </motion.button>
            </motion.div>
          )}

          {bootState === 'booting' && (
            <motion.div 
              key="booting" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 border-[2px] border-white/5 border-t-white rounded-full animate-spin mb-8" />
              <p className="text-[10px] text-white/30 tracking-[0.5em] uppercase font-bold">System Load</p>
            </motion.div>
          )}
        </AnimatePresence>

        {bootState !== 'booting' && bootState !== 'onboarding3' && (
          <div className="absolute bottom-12 w-full left-0 flex justify-center">
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: bootState === 'onboarding1' ? 7.5 : 1.2 }}
              onClick={handleNext}
              className="flex items-center gap-3 text-[10px] text-white/40 font-bold tracking-[0.3em] hover:text-white transition-all bg-white/[0.03] hover:bg-white/[0.08] px-8 py-4 rounded-full border border-white/5 uppercase"
            >
              Proceed <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
