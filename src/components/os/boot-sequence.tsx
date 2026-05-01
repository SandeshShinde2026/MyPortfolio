"use client";

import { useOsStore } from "@/store/os-store";
import { motion, AnimatePresence } from "framer-motion";
import { User, ChevronRight, Power } from "lucide-react";

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
    <div className="relative w-full h-full bg-black text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <Starfield speed={1.5} quantity={300} />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {bootState === 'onboarding1' && (
            <motion.div key="step1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="flex flex-col items-center w-full px-4">
              <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center mb-8 overflow-hidden backdrop-blur-md">
                 <User className="w-14 h-14 text-white/50" />
              </div>
              <SplitText 
                tag="h1" 
                text="Sandesh Shinde" 
                className="text-5xl font-black tracking-tighter mb-4 text-white drop-shadow-lg min-h-[48px] w-full text-center" 
                delay={50} 
                duration={0.8} 
              />
              <SplitText 
                tag="p" 
                text="Mobile App Developer" 
                className="text-lg font-bold text-white/70 tracking-[0.2em] uppercase min-h-[28px] w-full text-center" 
                delay={30} 
                duration={0.6} 
              />
            </motion.div>
          )}

          {bootState === 'onboarding2' && (
            <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="px-6 w-full flex flex-col items-center text-center">
              <SplitText 
                tag="h2" 
                text="The Mission" 
                className="text-5xl font-black tracking-tighter mb-8 text-white drop-shadow-lg min-h-[48px] w-full" 
                delay={50} 
                duration={0.8} 
              />
              <SplitText 
                tag="p" 
                text="I build scalable Android & iOS apps with clean UI, real-time features, and smart integrations like AI and payments." 
                className="text-2xl text-white/90 leading-snug font-bold min-h-[160px] w-full" 
                delay={20} 
                duration={0.5} 
                splitType="words, chars" 
              />
            </motion.div>
          )}

          {bootState === 'onboarding3' && (
            <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="flex flex-col items-center w-full px-4 text-center">
              <SplitText 
                tag="h2" 
                text="Ready to boot?" 
                className="text-5xl font-black tracking-tighter mb-16 text-white drop-shadow-lg min-h-[48px] w-full" 
                delay={50} 
                duration={0.8} 
              />
              <motion.button 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
                onClick={handleNext}
                className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Power className="w-10 h-10 stroke-[2.5]" />
              </motion.button>
            </motion.div>
          )}

          {bootState === 'booting' && (
            <motion.div key="booting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
              <p className="text-sm text-white/50 tracking-widest uppercase font-semibold">Booting OS...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {bootState !== 'booting' && bootState !== 'onboarding3' && (
          <div className="absolute bottom-12 w-full left-0 flex justify-center">
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 text-sm text-white/70 font-medium hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
