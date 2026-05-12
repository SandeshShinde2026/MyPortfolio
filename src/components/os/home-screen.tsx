"use client";

import { AppId, useOsStore } from "@/store/os-store";
import { Terminal, Layers, Mail, Battery, Wifi, Signal, FileText, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HomeScreen() {
  const { openApp, openFolder, activeFolder, currentTime, osType } = useOsStore();

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const isIOS = osType === 'ios';

  return (
    <div className="w-full h-full pt-14 pb-4 px-6 flex flex-col relative select-none">
      {/* Status Bar - OS Adaptive */}
      <div className={`absolute top-0 left-0 w-full h-14 flex justify-between items-center px-10 text-[13px] font-bold z-10 tracking-tight ${isIOS ? 'text-black/90' : 'text-white/90'}`}>
        <span className="font-semibold">{formattedTime}</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5 fill-current" />
          <Wifi className="w-4 h-4 fill-current" />
          {isIOS ? (
            <div className="flex items-center gap-0.5 border-[1.5px] border-current/30 rounded-[4px] px-0.5 h-3 w-6 relative">
              <div className="bg-current h-full w-[80%] rounded-[1px]" />
              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-current/30 rounded-r-full" />
            </div>
          ) : (
            <Battery className="w-5 h-5 fill-current rotate-90" />
          )}
        </div>
      </div>

      {/* Grid of Apps */}
      <div className="flex-grow pt-10 px-1">
        <div className="grid grid-cols-4 gap-y-10 gap-x-4">
          
          {/* Projects Folder */}
          <div className="flex flex-col items-center gap-1.5 group">
            <button 
              onClick={() => openFolder('featured-projects')}
              className={`w-[64px] h-[64px] bg-white/40 backdrop-blur-3xl p-3 grid grid-cols-2 gap-1.5 content-center items-center shadow-lg group-active:scale-90 transition-all duration-300 border border-white/20 ${isIOS ? 'rounded-[16px]' : 'rounded-[24px]'}`}
            >
              <div className={`w-full aspect-square bg-[#007AFF] shadow-sm ${isIOS ? 'rounded-[5px]' : 'rounded-[8px]'}`} />
              <div className={`w-full aspect-square bg-[#5856D6] shadow-sm ${isIOS ? 'rounded-[5px]' : 'rounded-[8px]'}`} />
              <div className={`w-full aspect-square bg-[#34C759] shadow-sm ${isIOS ? 'rounded-[5px]' : 'rounded-[8px]'}`} />
              <div className={`w-full aspect-square bg-white/30 ${isIOS ? 'rounded-[5px]' : 'rounded-[8px]'}`} />
            </button>
            <span className={`text-[11px] font-medium tracking-tight drop-shadow-sm ${isIOS ? 'text-black/80' : 'text-white'}`}>Projects</span>
          </div>

          <AppIcon isIOS={isIOS} icon={<Layers className="w-8 h-8 text-white" />} bg="bg-gradient-to-br from-[#FF5E50] to-[#FF2D55]" name="Process" onClick={() => openApp('process')} />
          <AppIcon isIOS={isIOS} icon={<Terminal className="w-8 h-8 text-white" />} bg="bg-[#1C1C1E]" name="Stack" onClick={() => openApp('techStack')} />
        </div>
      </div>

      {/* Android Search Bar - Pixel Style */}
      {!isIOS && (
        <div className="w-full px-2 mb-8">
          <div className="w-full h-14 bg-[#F1F3F4]/10 backdrop-blur-2xl rounded-full flex items-center px-5 border border-white/10 shadow-xl group">
             <div className="flex items-center gap-3 flex-grow">
               <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/60"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
               <span className="text-white/40 text-[15px] font-normal">Search...</span>
             </div>
             <div className="flex items-center gap-4">
               <Mic className="w-5 h-5 text-white/60" />
               <div className="w-5 h-5 border-2 border-white/40 rounded-[4px] relative after:absolute after:inset-1 after:bg-white/40 after:rounded-full" />
             </div>
          </div>
        </div>
      )}

      {/* Dock - OS Specific */}
      <div className={`w-full flex justify-between items-center self-end ${isIOS ? 'h-[92px] bg-white/30 backdrop-blur-[35px] rounded-[38px] px-4 mb-10 border-[0.5px] border-white/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]' : 'h-[84px] bg-white/5 backdrop-blur-xl rounded-[32px] px-6 mb-6 border border-white/5 shadow-2xl'}`}>
         <AppIcon isIOS={isIOS} icon={<img src="/githubLogo.webp" alt="GitHub" className="w-[64px] h-[64px] object-cover" />} bg="bg-black overflow-hidden p-0" name="" onClick={() => window.open('https://github.com/SandeshShinde2026', '_blank')} hideName />
         <AppIcon isIOS={isIOS} icon={<img src="/linkedinlogo.jpg" alt="LinkedIn" className="w-[64px] h-[64px] object-cover" />} bg="bg-[#0A66C2] overflow-hidden p-0" name="" onClick={() => window.open('https://www.linkedin.com/in/sandesh-shinde-b491aa246', '_blank')} hideName />
         <AppIcon isIOS={isIOS} icon={<FileText className="w-8 h-8 text-white" />} bg="bg-[#FF9500]" name="" onClick={() => openApp('contact')} hideName />
         <AppIcon isIOS={isIOS} icon={<Mail className="w-8 h-8 text-white" />} bg="bg-[#5AC8FA]" name="" onClick={() => openApp('contact')} hideName />
      </div>

      {/* Folder Overlay */}
      <AnimatePresence>
        {activeFolder === 'featured-projects' && <FolderOverlay isIOS={isIOS} />}
      </AnimatePresence>
    </div>
  );
}

function AppIcon({ icon, bg, name, onClick, hideName = false, isIOS }: { icon: React.ReactNode, bg: string, name: string, onClick: () => void, hideName?: boolean, isIOS: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <button 
        onClick={onClick}
        className={`w-[64px] h-[64px] ${bg} ${isIOS ? 'rounded-[16px] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.15)]' : 'rounded-full shadow-lg'} flex items-center justify-center active:scale-90 transition-all duration-300 border border-white/10 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">{icon}</div>
      </button>
      {!hideName && <span className={`text-[11px] font-medium tracking-tight drop-shadow-sm ${isIOS ? 'text-black/80' : 'text-white'}`}>{name}</span>}
    </div>
  );
}

function FolderOverlay({ isIOS }: { isIOS: boolean }) {
  const { closeFolder, openApp } = useOsStore();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 bg-black/20 backdrop-blur-2xl flex items-center justify-center"
      onClick={closeFolder}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`w-[340px] bg-white/40 backdrop-blur-3xl border border-white/20 p-8 shadow-2xl relative overflow-hidden ${isIOS ? 'rounded-[44px]' : 'rounded-[32px]'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={`text-center text-lg font-bold mb-10 tracking-tight ${isIOS ? 'text-black/80' : 'text-white'}`}>Featured Projects</h3>
        <div className="grid grid-cols-3 gap-y-10 gap-x-6 relative z-10">
          <AppIcon isIOS={isIOS} icon={<img src="/TrackateLogo.jpg" alt="Trackate" className="w-[64px] h-[64px] object-cover" />} bg="bg-black overflow-hidden p-0" name="Trackate" onClick={() => { closeFolder(); openApp('project-trackate'); }} />
          <AppIcon isIOS={isIOS} icon={<img src="/SpinMealLogo.png" alt="SpinMeal" className="w-[64px] h-[64px] object-cover" />} bg="bg-white overflow-hidden p-0" name="SpinMeal" onClick={() => { closeFolder(); openApp('project-spinmeal'); }} />

          <AppIcon isIOS={isIOS} icon={<span className="font-black text-white text-2xl">SC</span>} bg="bg-[#AF52DE]" name="SmartHome" onClick={() => { closeFolder(); openApp('project-smarthome'); }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
