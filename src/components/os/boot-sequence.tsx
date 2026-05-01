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
    <div className="relative w-full h-full bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden font-sans">
      <Starfield speed={1.5} quantity={300} />
      
      {/* Subtle ambient glow in the center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {bootState === 'onboarding1' && (
            <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 5.5, ease: "easeOut" } }} exit={{ opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.3, delay: 0 } }} className="flex flex-col items-center w-full px-4 antialiased">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 5.5, type: "spring", bounce: 0.4 } }}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-2xl flex items-center justify-center mb-8 overflow-hidden backdrop-blur-xl relative"
              >
                 <Image src="/profile.jpg" alt="Sandesh Shinde" fill className="object-cover relative z-10" sizes="(max-width: 768px) 112px, 112px" priority />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 5.7, ease: "easeOut" } }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-balance mb-3 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-blue-200 drop-shadow-sm min-h-[60px] w-full text-center"
              >
                Sandesh Shinde
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 5.9, ease: "easeOut" } }}
                className="text-sm md:text-base font-semibold text-blue-400 tracking-[0.25em] leading-relaxed text-balance uppercase min-h-[28px] w-full text-center opacity-90" 
              >
                Mobile App Developer
              </motion.p>
            </motion.div>
          )}

          {bootState === 'onboarding2' && (
            <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, filter: "blur(10px)" }} transition={{ duration: 0.5, ease: "easeOut" }} className="px-6 w-full flex flex-col items-center text-center antialiased">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-sm min-h-[48px] w-full"
              >
                The Mission
              </motion.h2>
              <SplitText 
                tag="p" 
                text="I build scalable Android & iOS apps with pristine UI, real-time sync, and smart integrations." 
                className="text-xl md:text-2xl text-white/80 leading-relaxed text-pretty font-medium min-h-[160px] w-full max-w-sm mx-auto" 
                delay={15} 
                duration={0.4} 
                splitType="words, chars" 
              />
            </motion.div>
          )}

          {bootState === 'onboarding3' && (
            <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20, filter: "blur(10px)" }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex flex-col items-center w-full px-4 text-center antialiased">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance mb-12 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70 min-h-[48px] w-full"
              >
                Ready to boot?
              </motion.h2>
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                onClick={handleNext}
                className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <Power className="w-8 h-8 stroke-[2.5] group-hover:text-indigo-600 transition-colors" />
              </motion.button>
            </motion.div>
          )}

          {bootState === 'booting' && (
            <motion.div key="booting" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
              <div className="w-12 h-12 border-[3px] border-white/10 border-t-white rounded-full animate-spin mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
              <p className="text-xs text-white/50 tracking-[0.3em] uppercase font-bold">Booting OS...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {bootState !== 'booting' && bootState !== 'onboarding3' && (
          <div className="absolute bottom-10 w-full left-0 flex justify-center">
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: bootState === 'onboarding1' ? 6.5 : 1 }}
              onClick={handleNext}
              className="flex items-center gap-2 text-xs text-white/60 font-semibold tracking-widest hover:text-white transition-all bg-white/5 hover:bg-white/15 px-6 py-3 rounded-full backdrop-blur-md border border-white/5 hover:border-white/20 uppercase"
            >
              Continue <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
