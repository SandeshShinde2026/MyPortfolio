"use client";

import { AppId, useOsStore } from "@/store/os-store";
import { Folder, Terminal, Layers, Mail, Battery, Wifi, Signal, FileText, Globe, User, Search, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HomeScreen() {
  const { openApp, openFolder, activeFolder, currentTime, osType } = useOsStore();

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const isIOS = osType === 'ios';

  return (
    <div className="w-full h-full pt-12 pb-2 px-5 flex flex-col relative">
      {/* Status Bar */}
      <div className={`absolute top-0 left-0 w-full h-12 flex justify-between items-center px-8 text-[12px] font-semibold z-10 text-white tracking-wider ${!isIOS && 'px-6'}`}>
        <span>{formattedTime}</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5 fill-current" />
          <Wifi className="w-4 h-4 fill-current" />
          <Battery className={`w-5 h-5 fill-current ${!isIOS && 'rotate-90'}`} />
        </div>
      </div>

      {/* Grid of Apps */}
      <div className="flex-grow pt-8 px-1">
        <div className="grid grid-cols-4 gap-y-7 gap-x-3">
          
          {/* Projects Folder */}
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={() => openFolder('featured-projects')}
              className={`w-[60px] h-[60px] bg-white/20 backdrop-blur-md p-2.5 grid grid-cols-2 gap-1 content-center items-center shadow-lg active:scale-95 transition-transform border border-white/10 ${isIOS ? 'rounded-[16px]' : 'rounded-full'}`}
            >
              <div className={`w-full aspect-square bg-[#007AFF] ${isIOS ? 'rounded-[5px]' : 'rounded-full'}`} />
              <div className={`w-full aspect-square bg-[#5856D6] ${isIOS ? 'rounded-[5px]' : 'rounded-full'}`} />
              <div className={`w-full aspect-square bg-[#34C759] ${isIOS ? 'rounded-[5px]' : 'rounded-full'}`} />
            </button>
            <span className="text-[11px] font-medium text-white shadow-black/80 drop-shadow-md tracking-wide mt-0.5">Projects</span>
          </div>

          {/* Process App */}
          <AppIcon isIOS={isIOS} icon={<Layers className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-[#FF9500] to-[#FF3B30]" name="Process" onClick={() => openApp('process')} />
          
          {/* Tech Stack App */}
          <AppIcon isIOS={isIOS} icon={<Terminal className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-[#8E8E93] to-[#1C1C1E]" name="Stack" onClick={() => openApp('techStack')} />
        </div>
      </div>

      {/* Android Search Bar */}
      {!isIOS && (
        <div className="w-full px-2 mb-6">
          <div className="w-full h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center px-4 border border-white/10 shadow-lg">
            <Search className="w-5 h-5 text-white/70" />
            <span className="flex-grow text-white/50 text-sm ml-3 font-medium">Search</span>
            <Mic className="w-5 h-5 text-white/70" />
          </div>
        </div>
      )}

      {/* Dock */}
      <div className={`w-full flex justify-between items-center self-end ${isIOS ? 'h-[84px] bg-white/15 dark:bg-white/10 backdrop-blur-[30px] rounded-[32px] px-3.5 mb-6 border border-white/20 shadow-2xl' : 'h-[70px] px-4 mb-4'}`}>
         <AppIcon isIOS={isIOS} icon={<Globe className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-[#34C759] to-[#28CD41]" name="" onClick={() => openApp('contact')} hideName />
         <AppIcon isIOS={isIOS} icon={<User className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-[#007AFF] to-[#0040DD]" name="" onClick={() => openApp('contact')} hideName />
         <AppIcon isIOS={isIOS} icon={<FileText className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-[#FF9500] to-[#FF2D55]" name="" onClick={() => openApp('contact')} hideName />
         <AppIcon isIOS={isIOS} icon={<Mail className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-[#5AC8FA] to-[#007AFF]" name="" onClick={() => openApp('contact')} hideName />
      </div>

      {/* Home Indicator */}
      <div className={`absolute left-1/2 -translate-x-1/2 rounded-full z-50 shadow-sm ${isIOS ? 'bottom-2 w-1/3 h-1 bg-white' : 'bottom-1 w-1/4 h-1 bg-white/60'}`} />

      {/* Folder Overlay */}
      <AnimatePresence>
        {activeFolder === 'featured-projects' && <FolderOverlay isIOS={isIOS} />}
      </AnimatePresence>
    </div>
  );
}

function AppIcon({ icon, bg, name, onClick, hideName = false, isIOS }: { icon: React.ReactNode, bg: string, name: string, onClick: () => void, hideName?: boolean, isIOS: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button 
        onClick={onClick}
        className={`w-[60px] h-[60px] ${bg} ${isIOS ? 'rounded-[16px]' : 'rounded-full'} flex items-center justify-center shadow-lg active:scale-95 transition-transform border border-white/10`}
      >
        {icon}
      </button>
      {!hideName && <span className="text-[11px] font-medium text-white shadow-black/80 drop-shadow-md tracking-wide mt-0.5">{name}</span>}
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
      className="absolute inset-0 z-40 bg-black/60 backdrop-blur-xl flex items-center justify-center"
      onClick={closeFolder}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className={`w-[320px] bg-white/20 backdrop-blur-3xl border border-white/20 p-7 text-white shadow-2xl ${isIOS ? 'rounded-[38px]' : 'rounded-[24px]'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center text-xl font-medium mb-7 tracking-wide">Featured Projects</h3>
        <div className="grid grid-cols-3 gap-y-7 gap-x-5">
          <AppIcon isIOS={isIOS} icon={<span className="font-bold text-white text-xl">FT</span>} bg="bg-gradient-to-br from-[#007AFF] to-[#5856D6]" name="FinTrack" onClick={() => { closeFolder(); openApp('project-fintrack'); }} />
          <AppIcon isIOS={isIOS} icon={<span className="font-bold text-white text-xl">HS</span>} bg="bg-gradient-to-br from-[#34C759] to-[#00C7BE]" name="HealthSync" onClick={() => { closeFolder(); openApp('project-healthsync'); }} />
          <AppIcon isIOS={isIOS} icon={<span className="font-bold text-white text-xl">SC</span>} bg="bg-gradient-to-br from-[#AF52DE] to-[#FF2D55]" name="SmartHome" onClick={() => { closeFolder(); openApp('project-smarthome'); }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
