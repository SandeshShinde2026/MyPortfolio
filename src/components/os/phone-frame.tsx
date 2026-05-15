"use client";

import { useOsStore } from "@/store/os-store";
import { BootSequence } from "./boot-sequence";
import { HomeScreen } from "./home-screen";
import { AppWindow } from "./app-window";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FallingImages from "@/components/ui/falling-images";
import { TrackateDetailsOverlay } from "@/components/trackate-details-overlay";
import { SpinMealDetailsOverlay } from "@/components/spinmeal-details-overlay";


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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => setStartPhysics(true), 5500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update time every minute and handle resize scaling
  useEffect(() => {
    const interval = setInterval(() => {
      useOsStore.setState({ currentTime: new Date() });
    }, 60000);

    const handleResize = () => {
      const availableHeight = window.innerHeight - 80;
      const contentHeight = 880;
      setScale(Math.min(1, availableHeight / contentHeight));
      
      // Responsive falling image size
      setImageSize(window.innerWidth < 768 ? 45 : 100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030303] flex items-center justify-center overflow-hidden">
      
      {/* Enhanced Premium Background: Deep gradient mesh + Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e]/40 via-[#030303] to-[#000000] z-0" />
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay z-0 pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* Dynamic Glow following mouse for depth */}
      <motion.div 
        animate={{ 
          x: mousePos.x * 2, 
          y: mousePos.y * 2 
        }}
        transition={{ type: "spring", damping: 50, stiffness: 50 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0" 
      />

      {/* Background Watermark Marquee */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-center overflow-hidden z-0 select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="whitespace-nowrap font-black text-[100px] md:text-[200px] leading-[0.8] text-white/[0.04] tracking-tighter uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}
        >
          PREMIUM DESIGN • PREMIUM DESIGN • PREMIUM DESIGN • PREMIUM DESIGN • PREMIUM DESIGN • PREMIUM DESIGN • 
        </motion.div>
        <motion.div 
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="whitespace-nowrap font-black text-[100px] md:text-[200px] leading-[0.8] text-transparent tracking-tighter uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}
        >
          IOS & ANDROID • IOS & ANDROID • IOS & ANDROID • IOS & ANDROID • IOS & ANDROID • 
        </motion.div>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="whitespace-nowrap font-black text-[100px] md:text-[200px] leading-[0.8] text-white/[0.04] tracking-tighter uppercase"
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}
        >
          EXPERIENCE • EXPERIENCE • EXPERIENCE • EXPERIENCE • EXPERIENCE • EXPERIENCE • 
        </motion.div>
      </div>

      {/* Falling Tech Stack Icons (Physics based) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <FallingImages imageUrls={TECH_IMAGES} trigger={startPhysics ? "auto" : "none"} gravity={0.3} imageSize={imageSize} />
      </div>

      <TrackateDetailsOverlay />
      <SpinMealDetailsOverlay />


      {/* Main Content Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-0 h-0 flex items-center justify-center z-10"
      >
        <div 
          className="flex flex-col items-center justify-center origin-center"
          style={{ transform: `scale(${scale})` }}
        >
          {/* OS Switcher - Refined */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10 flex bg-[#1a1a1a]/80 backdrop-blur-md p-1 rounded-full border border-white/5 shrink-0 shadow-2xl relative z-20"
          >
            <button 
              onClick={() => setOsType('ios')}
              className={`px-10 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ${osType === 'ios' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-white/40 hover:text-white'}`}
            >
              iOS
            </button>
            <button 
              onClick={() => setOsType('android')}
              className={`px-10 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ${osType === 'android' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-white/40 hover:text-white'}`}
            >
              Android
            </button>
          </motion.div>

          {/* The Phone Hardware Frame - Enhanced Lighting */}
          <div className="relative w-[370px] h-[780px] rounded-[60px] shadow-[0_0_0_2px_rgba(255,255,255,0.05),_0_30px_60px_-12px_rgba(0,0,0,0.8),_0_18px_36px_-18px_rgba(0,0,0,0.5)] bg-[#050505] p-[10px] border-[1px] border-white/10 shrink-0">
            
            {/* Hardware Buttons - Realistic */}
            <div className="absolute -left-[3px] top-[120px] w-[3px] h-[30px] bg-[#222] rounded-l-sm border-l border-white/10" />
            <div className="absolute -left-[3px] top-[170px] w-[3px] h-[60px] bg-[#222] rounded-l-sm border-l border-white/10" />
            <div className="absolute -left-[3px] top-[240px] w-[3px] h-[60px] bg-[#222] rounded-l-sm border-l border-white/10" />
            <div className="absolute -right-[3px] top-[190px] w-[3px] h-[90px] bg-[#222] rounded-r-sm border-r border-white/10" />
            
            {/* The Screen */}
            <div className="relative w-full h-full bg-[#000] rounded-[52px] overflow-hidden">
              
              {/* Dynamic Screen Glare (Mouse tracked) */}
              <motion.div 
                animate={{ 
                  x: mousePos.x, 
                  y: mousePos.y 
                }}
                transition={{ type: "spring", damping: 30, stiffness: 100 }}
                className="absolute -inset-20 z-[60] pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] blur-3xl opacity-50" 
              />
              
              {/* Top Glass Reflection */}
              <div className="absolute top-0 inset-x-0 h-1/4 z-[60] pointer-events-none bg-gradient-to-b from-white/[0.05] to-transparent opacity-80" />

              {/* iOS Dynamic Island */}
              {osType === 'ios' && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-black rounded-full z-[70] flex items-center justify-between px-3 shadow-[0_0_10px_rgba(0,0,0,1)] border border-white/[0.03]">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#080808] border border-white/5 ml-1" />
                   <div className="w-3.5 h-3.5 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center mr-1">
                      <div className="w-1.5 h-1.5 bg-[#1a1a5a] rounded-full blur-[1px] opacity-40" />
                   </div>
                </div>
              )}

              {/* Android Punch Hole */}
              {osType === 'android' && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-7 h-7 bg-black rounded-full z-[70] flex items-center justify-center shadow-inner border border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#080808] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#1a1a5a] rounded-full blur-[1px] opacity-30" />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {bootState !== 'booted' ? (
                  <BootSequence key="boot" />
                ) : (
                  <motion.div 
                    key="os" 
                    initial={{ opacity: 0, filter: "blur(10px)" }} 
                    animate={{ opacity: 1, filter: "blur(0px)" }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full relative text-white bg-cover bg-center"
                    style={{ 
                      backgroundImage: osType === 'ios' 
                        ? `url('/ios-wallpaper.jpeg')` 
                        : `url('/andriodwallpaper.jpg')`
                    }}
                  >
                    <HomeScreen />
                    <AppWindow />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Home Indicator */}
              <div className={`absolute left-1/2 -translate-x-1/2 rounded-full z-[80] transition-all duration-500 ${osType === 'ios' ? 'bottom-2 w-[120px] h-1.5 bg-white/40' : 'bottom-1.5 w-[80px] h-1 bg-white/20'}`} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
