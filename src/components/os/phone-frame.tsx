"use client";

import { useOsStore } from "@/store/os-store";
import { BootSequence } from "./boot-sequence";
import { HomeScreen } from "./home-screen";
import { AppWindow } from "./app-window";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FallingImages from "@/components/ui/falling-images";

const BASE_TECH_IMAGES = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg",
];

// Create a massive pile of icons by repeating the base array 5 times
const TECH_IMAGES = Array(5).fill(BASE_TECH_IMAGES).flat();

export function PhoneFrame() {
  const { bootState, osType, setOsType } = useOsStore();
  const [scale, setScale] = useState(1);
  const [startPhysics, setStartPhysics] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartPhysics(true), 5500);
    return () => clearTimeout(timer);
  }, []);

  // Update time every minute and handle resize scaling
  useEffect(() => {
    // Time interval
    const interval = setInterval(() => {
      useOsStore.setState({ currentTime: new Date() });
    }, 60000);

    // Resize handler
    const handleResize = () => {
      const availableHeight = window.innerHeight - 60; // 60px total vertical margin
      const contentHeight = 860; // Approximate total height of phone + switcher
      setScale(Math.min(1, availableHeight / contentHeight));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-background flex items-center justify-center overflow-hidden">
      
      {/* Background Watermark Marquee */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-center overflow-hidden z-0 select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="whitespace-nowrap font-black text-[150px] md:text-[220px] leading-[0.9] text-transparent opacity-20 dark:opacity-[0.25]"
          style={{ WebkitTextStroke: '3px var(--primary)' }}
        >
          NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. NATIVE APPS. 
        </motion.div>
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="whitespace-nowrap font-black text-[150px] md:text-[220px] leading-[0.9] text-transparent opacity-20 dark:opacity-[0.25]"
          style={{ WebkitTextStroke: '3px var(--primary)' }}
        >
          NATIVE PERFORMANCE. NATIVE PERFORMANCE. NATIVE PERFORMANCE. NATIVE PERFORMANCE. NATIVE PERFORMANCE. NATIVE PERFORMANCE. NATIVE PERFORMANCE. NATIVE PERFORMANCE. 
        </motion.div>
      </div>

      {/* Falling Tech Stack Icons (Physics based) */}
      <FallingImages imageUrls={TECH_IMAGES} trigger={startPhysics ? "auto" : "none"} gravity={0.3} imageSize={100} />

      {/* Zero-size anchor guarantees perfect visual centering regardless of unscaled size */}
      <div className="w-0 h-0 flex items-center justify-center z-10">
        
        {/* Scaled Container for Both Switcher and Phone */}
        <div 
          className="flex flex-col items-center justify-center origin-center"
          style={{ transform: `scale(${scale})` }}
        >
          {/* OS Switcher */}
          <div className="mb-8 flex bg-surface p-1.5 rounded-full border border-border/50 shrink-0 shadow-lg relative z-20">
            <button 
              onClick={() => setOsType('ios')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${osType === 'ios' ? 'bg-primary text-background shadow-md' : 'text-secondary hover:text-primary'}`}
            >
              iOS
            </button>
            <button 
              onClick={() => setOsType('android')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${osType === 'android' ? 'bg-primary text-background shadow-md' : 'text-secondary hover:text-primary'}`}
            >
              Android
            </button>
          </div>

          {/* The Phone Hardware Frame */}
          <div className="relative w-[360px] h-[760px] rounded-[55px] shadow-[0_0_0_1px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.5),_0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-[#1A1A1A] p-[12px] border-[2px] border-[#333] shrink-0">
            
            {/* Hardware Buttons */}
            {/* Action/Mute Button (Left Top) */}
            <div className="absolute -left-[4px] top-[120px] w-[4px] h-[26px] bg-[#333] rounded-l-md border border-l-white/20 border-y-white/20 z-0 shadow-[inset_-1px_0_1px_rgba(0,0,0,0.5)]"></div>
            {/* Volume Up (Left Middle) */}
            <div className="absolute -left-[4px] top-[160px] w-[4px] h-[50px] bg-[#333] rounded-l-md border border-l-white/20 border-y-white/20 z-0 shadow-[inset_-1px_0_1px_rgba(0,0,0,0.5)]"></div>
            {/* Volume Down (Left Bottom) */}
            <div className="absolute -left-[4px] top-[220px] w-[4px] h-[50px] bg-[#333] rounded-l-md border border-l-white/20 border-y-white/20 z-0 shadow-[inset_-1px_0_1px_rgba(0,0,0,0.5)]"></div>
            {/* Power Button (Right Side) */}
            <div className="absolute -right-[4px] top-[180px] w-[4px] h-[70px] bg-[#333] rounded-r-md border border-r-white/20 border-y-white/20 z-0 shadow-[inset_1px_0_1px_rgba(0,0,0,0.5)]"></div>
            
            {/* Antenna Bands */}
            <div className="absolute left-[30px] -top-[2px] w-[4px] h-[2px] bg-[#000] opacity-30 z-0"></div>
            <div className="absolute right-[30px] -top-[2px] w-[4px] h-[2px] bg-[#000] opacity-30 z-0"></div>
            <div className="absolute left-[30px] -bottom-[2px] w-[4px] h-[2px] bg-[#000] opacity-30 z-0"></div>
            <div className="absolute right-[30px] -bottom-[2px] w-[4px] h-[2px] bg-[#000] opacity-30 z-0"></div>

            {/* The Screen */}
            <div className="relative w-full h-full bg-[#000] rounded-[44px] overflow-hidden">
            
            {/* Screen Glare Overlays */}
            <div className="absolute inset-0 z-[60] pointer-events-none rounded-[44px] bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] mix-blend-overlay"></div>
            <div className="absolute top-0 inset-x-0 h-1/3 z-[60] pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent"></div>

            {/* iOS Dynamic Island */}
            {osType === 'ios' && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[115px] h-[32px] bg-black rounded-full z-[70] flex items-center justify-between px-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-white/[0.02]">
                 <div className="w-[10px] h-[10px] rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden border border-white/5 ml-1">
                    <div className="w-1.5 h-1.5 bg-[#0A0A0A] rounded-full"></div>
                 </div>
                 <div className="w-3 h-3 rounded-full bg-[#050505] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] border border-white/5 flex items-center justify-center mr-1">
                    <div className="w-1 h-1 bg-[#1a1a5a] rounded-full blur-[0.5px]"></div>
                 </div>
              </div>
            )}

            {/* Android Punch Hole */}
            {osType === 'android' && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full z-[70] flex items-center justify-center shadow-[0_0_5px_rgba(0,0,0,0.5)] border border-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#050505] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#1a1a5a] rounded-full blur-[0.5px]"></div>
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {bootState !== 'booted' ? (
                <BootSequence key="boot" />
              ) : (
                <motion.div 
                  key="os" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="w-full h-full relative text-white bg-cover bg-center transition-all duration-500"
                  style={{ 
                    backgroundImage: osType === 'ios' 
                      ? `url('/ios-wallpaper.jpeg')` 
                      : `url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop')`
                  }}
                >
                  <HomeScreen />
                  <AppWindow />
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
