"use client";

import { AppId, useOsStore } from "@/store/os-store";
import { Folder, Terminal, Layers, Mail, Battery, Wifi, Signal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HomeScreen() {
  const { openApp, openFolder, activeFolder, currentTime, osType } = useOsStore();

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="w-full h-full pt-12 pb-6 px-4 flex flex-col relative">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-center px-8 text-[11px] font-bold z-10 text-white">
        <span>{formattedTime}</span>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Grid of Apps */}
      <div className="flex-grow pt-6 px-2">
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          
          {/* Projects Folder */}
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={() => openFolder('featured-projects')}
              className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-2xl p-2 grid grid-cols-2 gap-1 content-center items-center shadow-sm active:scale-95 transition-transform"
            >
              <div className="w-full aspect-square bg-blue-500 rounded-[4px]" />
              <div className="w-full aspect-square bg-purple-500 rounded-[4px]" />
              <div className="w-full aspect-square bg-green-500 rounded-[4px]" />
            </button>
            <span className="text-[10px] font-medium text-white shadow-black/50 drop-shadow-md">Projects</span>
          </div>

          {/* Process App */}
          <AppIcon icon={<Layers className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-orange-400 to-red-500" name="Process" onClick={() => openApp('process')} />
          
          {/* Tech Stack App */}
          <AppIcon icon={<Terminal className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-gray-700 to-gray-900" name="Stack" onClick={() => openApp('techStack')} />
        </div>
      </div>

      {/* Dock */}
      <div className="w-full h-[76px] bg-white/30 backdrop-blur-xl rounded-[28px] p-3 flex justify-around items-center self-end mb-2">
         <AppIcon icon={<Mail className="w-7 h-7 text-white" />} bg="bg-gradient-to-br from-blue-400 to-blue-600" name="" onClick={() => openApp('contact')} hideName />
      </div>

      {/* Folder Overlay */}
      <AnimatePresence>
        {activeFolder === 'featured-projects' && <FolderOverlay />}
      </AnimatePresence>
    </div>
  );
}

function AppIcon({ icon, bg, name, onClick, hideName = false }: { icon: React.ReactNode, bg: string, name: string, onClick: () => void, hideName?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button 
        onClick={onClick}
        className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center shadow-sm active:scale-95 transition-transform`}
      >
        {icon}
      </button>
      {!hideName && <span className="text-[10px] font-medium text-white shadow-black/50 drop-shadow-md">{name}</span>}
    </div>
  );
}

function FolderOverlay() {
  const { closeFolder, openApp } = useOsStore();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 bg-black/40 backdrop-blur-md flex items-center justify-center"
      onClick={closeFolder}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="w-[300px] bg-white/30 backdrop-blur-xl rounded-[36px] p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center text-lg font-medium mb-6">Featured Projects</h3>
        <div className="grid grid-cols-3 gap-y-6 gap-x-4">
          <AppIcon icon={<span className="font-bold text-white text-xl">FT</span>} bg="bg-gradient-to-br from-blue-500 to-indigo-600" name="FinTrack" onClick={() => { closeFolder(); openApp('project-fintrack'); }} />
          <AppIcon icon={<span className="font-bold text-white text-xl">HS</span>} bg="bg-gradient-to-br from-green-400 to-emerald-600" name="HealthSync" onClick={() => { closeFolder(); openApp('project-healthsync'); }} />
          <AppIcon icon={<span className="font-bold text-white text-xl">SC</span>} bg="bg-gradient-to-br from-purple-500 to-pink-600" name="SmartHome" onClick={() => { closeFolder(); openApp('project-smarthome'); }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
