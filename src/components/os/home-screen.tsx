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
      <div className={`absolute top-0 left-0 w-full h-16 flex justify-between items-center px-6 pt-1 text-[14px] font-semibold z-10 tracking-tight ${isIOS ? 'text-black/90' : 'text-white/90'}`}>
        <div className="w-[80px] flex justify-center">
          <span>{formattedTime}</span>
        </div>
        <div className="w-[80px] flex justify-center items-center gap-1.5">
          <Signal className="w-4 h-4 fill-current" />
          <Wifi className="w-[18px] h-[18px] fill-current" />
          {isIOS ? (
            <div className="flex items-center gap-0.5 border-[1.5px] border-current/40 rounded-[4px] px-[1.5px] py-[1px] h-[12px] w-[24px] relative opacity-90">
              <div className="bg-current h-full w-[70%] rounded-[1.5px]" />
              <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-current/40 rounded-r-full" />
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
              className={`w-[64px] h-[64px] ${isIOS ? 'bg-white/20 backdrop-blur-2xl backdrop-saturate-200 p-[10px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_0_0_1px_rgba(255,255,255,0.15),_0_10px_20px_-5px_rgba(0,0,0,0.15)] rounded-[18px]' : 'bg-[#e5e5e5]/20 backdrop-blur-lg p-[10px] rounded-[24px]'} grid grid-cols-2 gap-1.5 content-center items-center group-active:scale-90 transition-all duration-300`}
            >
              <div className={`w-full aspect-square bg-[#007AFF] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${isIOS ? 'rounded-[5px]' : 'rounded-[6px]'}`} />
              <div className={`w-full aspect-square bg-[#5856D6] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${isIOS ? 'rounded-[5px]' : 'rounded-[6px]'}`} />
              <div className={`w-full aspect-square bg-[#34C759] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${isIOS ? 'rounded-[5px]' : 'rounded-[6px]'}`} />
              <div className={`w-full aspect-square bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] ${isIOS ? 'rounded-[5px]' : 'rounded-[6px]'}`} />
            </button>
            <span className={`text-[11px] font-medium tracking-tight drop-shadow-sm ${isIOS ? 'text-black/80' : 'text-white'}`}>Projects</span>
          </div>

          <AppIcon isIOS={isIOS} icon={<Layers className="w-8 h-8 text-white" />} bg="bg-gradient-to-br from-[#FF5E50] to-[#FF2D55]" name="Process" onClick={() => openApp('process')} />
          <AppIcon 
            isIOS={isIOS} 
            icon={<img src={isIOS ? "/appleshortcuts.svg" : "/andriodsettings.png"} alt="Stack" className="w-[64px] h-[64px] object-cover" />} 
            bg="bg-transparent overflow-hidden p-0" 
            name="Stack" 
            onClick={() => openApp('techStack')} 
          />
        </div>
      </div>

      {/* Android Search Bar - Samsung Style */}
      {!isIOS && (
        <div className="w-full px-1 mb-8">
          <div className="w-full h-[52px] bg-white/95 backdrop-blur-md rounded-full flex items-center px-5 shadow-sm group">
             <div className="flex items-center gap-3 flex-grow">
               <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4285F4]"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
               <span className="text-gray-500 text-[15px] font-normal">Search...</span>
             </div>
             <div className="flex items-center gap-4">
               <Mic className="w-5 h-5 text-gray-500" />
               <div className="w-5 h-5 border-2 border-gray-500 rounded-[6px] relative after:absolute after:inset-1 after:bg-gray-500 after:rounded-full" />
             </div>
          </div>
        </div>
      )}

      {/* Dock - OS Specific */}
      <div className={`w-full flex justify-between items-center self-end ${isIOS ? 'h-[92px] bg-white/20 backdrop-blur-[50px] backdrop-saturate-[180%] rounded-[38px] px-4 mb-10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),_inset_0_0_0_1px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.25)]' : 'h-[76px] px-1 mb-6'}`}>
         <button
           onClick={() => window.open('https://github.com/SandeshShinde2026', '_blank')}
           className={`w-[64px] h-[64px] overflow-hidden active:scale-90 transition-all duration-300 relative ${isIOS ? 'rounded-[18px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_10px_20px_-5px_rgba(0,0,0,0.3)]' : 'rounded-[24px] shadow-sm'}`}
         >
           <img src="/githubLogo.png" alt="GitHub" className="w-full h-full object-cover" />
           {isIOS && <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/10 pointer-events-none" />}
         </button>
         <button
           onClick={() => window.open('https://www.linkedin.com/in/sandesh-shinde-b491aa246', '_blank')}
           className={`w-[64px] h-[64px] overflow-hidden active:scale-90 transition-all duration-300 relative ${isIOS ? 'rounded-[18px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_10px_20px_-5px_rgba(0,0,0,0.3)]' : 'rounded-[24px] shadow-sm'}`}
         >
           <img src="/linkedinlogofinal.png" alt="LinkedIn" className="w-full h-full object-cover" />
           {isIOS && <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/10 pointer-events-none" />}
         </button>
         <AppIcon isIOS={isIOS} icon={<FileText className="w-8 h-8 text-white" />} bg="bg-[#FF9500]" name="" onClick={() => window.open('/Sandesh_Resume_portfolio.pdf', '_blank')} hideName />
         <button
           onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sandeshshinde2026@gmail.com', '_blank')}
           className={`w-[64px] h-[64px] overflow-hidden active:scale-90 transition-all duration-300 relative ${isIOS ? 'rounded-[18px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_10px_20px_-5px_rgba(0,0,0,0.3)]' : 'rounded-[24px] bg-white shadow-sm flex items-center justify-center'}`}
         >
           <img src={isIOS ? "/iosmail.svg" : "/gmail.svg"} alt="Mail" className={isIOS ? "w-full h-full object-cover" : "w-[60%] h-[60%] object-contain"} />
           {isIOS && <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/10 pointer-events-none" />}
         </button>
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
        className={`w-[64px] h-[64px] ${bg} ${isIOS ? 'rounded-[18px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),_inset_0_0_0_1px_rgba(255,255,255,0.1),_0_10px_20px_-5px_rgba(0,0,0,0.3)]' : 'rounded-[24px] shadow-sm'} flex items-center justify-center active:scale-90 transition-all duration-300 relative overflow-hidden`}
      >
        {isIOS && <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none mix-blend-overlay" />}
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
      className={`absolute inset-0 z-40 flex items-center justify-center ${isIOS ? 'bg-white/5 backdrop-blur-md' : 'bg-black/40 backdrop-blur-xl'}`}
      onClick={closeFolder}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`w-[340px] ${isIOS ? 'bg-white/30 backdrop-blur-[60px] backdrop-saturate-[200%] p-8 rounded-[44px] shadow-[inset_0_1px_3px_rgba(255,255,255,0.6),_inset_0_0_0_1px_rgba(255,255,255,0.2),_0_40px_80px_rgba(0,0,0,0.3)]' : 'bg-[#121212] p-8 rounded-[32px]'} relative overflow-hidden`}
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
