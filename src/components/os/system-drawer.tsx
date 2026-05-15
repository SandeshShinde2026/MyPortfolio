"use client";

import { useOsStore } from "@/store/os-store";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Wifi, Bluetooth, Plane, Moon, Sun, Battery, Signal, Volume2, Maximize2, Camera, Calculator, Flashlight, Music } from "lucide-react";
import { useEffect, useState } from "react";

export function SystemDrawer() {
  const { isDrawerOpen, closeDrawer, osType, currentTime } = useOsStore();
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  // Add swipe down to close
  const dragControls = useDragControls();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.div
          key="drawer"
          initial={{ y: "-100%", filter: "blur(20px)" }}
          animate={{ y: 0, filter: "blur(0px)" }}
          exit={{ y: "-100%", filter: "blur(20px)" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          drag="y"
          dragControls={dragControls}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.y < -50 || info.velocity.y < -500) {
              closeDrawer();
            }
          }}
          className={`absolute inset-0 z-[100] flex flex-col ${osType === 'ios' ? 'bg-black/60 backdrop-blur-[60px] backdrop-saturate-[200%]' : 'bg-[#121212]/80 backdrop-blur-3xl'}`}
        >
          {/* Top invisible area to close by tapping */}
          {osType === 'android' && (
            <div className="absolute inset-0 z-0" onClick={closeDrawer} />
          )}

          {/* Drawer Content */}
          <div className="relative z-10 w-full h-full flex flex-col pt-16 px-6">
            {osType === 'ios' ? <IOSControlCenter /> : <AndroidQuickSettings time={formattedTime} date={formattedDate} />}
            
            {/* Close Handle */}
            <div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-colors"
              onClick={closeDrawer}
              onPointerDown={(e) => dragControls.start(e)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function IOSControlCenter() {
  return (
    <div className="w-full flex-1 flex flex-col gap-4 max-h-[80%]">
      {/* Top Row: Connections & Media */}
      <div className="grid grid-cols-2 gap-4 h-[160px]">
        {/* Connectivity */}
        <div className="bg-white/10 rounded-[24px] p-4 grid grid-cols-2 gap-4 place-items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)]">
          <ControlButton icon={<Plane className="w-5 h-5" />} active={false} activeColor="bg-orange-500" />
          <ControlButton icon={<Signal className="w-5 h-5" />} active={true} activeColor="bg-green-500" />
          <ControlButton icon={<Wifi className="w-5 h-5" />} active={true} activeColor="bg-blue-500" />
          <ControlButton icon={<Bluetooth className="w-5 h-5" />} active={true} activeColor="bg-blue-500" />
        </div>
        
        {/* Media Player */}
        <div className="bg-white/10 rounded-[24px] p-4 flex flex-col justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg">
               <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">Not Playing</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2 opacity-50">
             <div className="w-4 h-4 bg-white/50 rounded-full" />
             <div className="w-5 h-5 bg-white rounded-full" />
             <div className="w-4 h-4 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Middle Row: Sliders & Toggles */}
      <div className="grid grid-cols-2 gap-4 h-[160px]">
        {/* Focus & Screen Mirroring */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-white/10 rounded-[24px] p-4 flex items-center gap-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)]">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <Moon className="w-4 h-4 text-indigo-400" />
            </div>
            <span className="text-white font-medium text-sm">Focus</span>
          </div>
          <div className="flex-1 bg-white/10 rounded-[24px] p-4 flex items-center justify-center gap-2 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)]">
             <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>
        
        {/* Brightness & Volume */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-[24px] relative overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)]">
             <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-white" />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 mix-blend-difference text-black">
               <Sun className="w-5 h-5" />
             </div>
          </div>
          <div className="bg-white/10 rounded-[24px] relative overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)]">
             <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-white" />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 mix-blend-difference text-white">
               <Volume2 className="w-5 h-5" />
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Quick Tools */}
      <div className="grid grid-cols-4 gap-4 mt-auto mb-8">
        <ToolButton icon={<Flashlight className="w-5 h-5" />} active={false} />
        <ToolButton icon={<Calculator className="w-5 h-5" />} active={false} />
        <ToolButton icon={<Camera className="w-5 h-5" />} active={false} />
        <ToolButton icon={<Battery className="w-5 h-5" />} active={true} />
      </div>
    </div>
  );
}

function ControlButton({ icon, active, activeColor }: { icon: React.ReactNode, active: boolean, activeColor: string }) {
  return (
    <button className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors shadow-lg ${active ? activeColor + ' text-white' : 'bg-white/10 text-white'}`}>
      {icon}
    </button>
  );
}

function ToolButton({ icon, active }: { icon: React.ReactNode, active: boolean }) {
  return (
    <button className={`w-[60px] h-[60px] rounded-[18px] flex items-center justify-center transition-colors shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_10px_20px_rgba(0,0,0,0.2)] ${active ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
      {icon}
    </button>
  );
}

function AndroidQuickSettings({ time, date }: { time: string, date: string }) {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-8 px-2 text-white">
        <div className="text-[28px] font-normal leading-none tracking-tight">{time}</div>
        <div className="flex gap-2">
           <Signal className="w-4 h-4" />
           <Wifi className="w-4 h-4" />
           <Battery className="w-5 h-5 rotate-90" />
        </div>
      </div>
      <div className="text-white/60 text-sm mb-6 px-2">{date}</div>

      {/* Quick Toggles Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <AndroidToggle icon={<Wifi className="w-5 h-5" />} label="Internet" sublabel="Connected" active={true} />
        <AndroidToggle icon={<Bluetooth className="w-5 h-5" />} label="Bluetooth" sublabel="On" active={true} />
        <AndroidToggle icon={<Flashlight className="w-5 h-5" />} label="Flashlight" sublabel="Off" active={false} />
        <AndroidToggle icon={<Moon className="w-5 h-5" />} label="Do Not Disturb" sublabel="Off" active={false} />
        <AndroidToggle icon={<Sun className="w-5 h-5" />} label="Auto-rotate" sublabel="On" active={true} />
        <AndroidToggle icon={<Battery className="w-5 h-5" />} label="Battery Saver" sublabel="Off" active={false} />
      </div>

      {/* Brightness Slider */}
      <div className="w-full flex items-center gap-4 px-2 mt-4">
        <Sun className="w-5 h-5 text-white/60" />
        <div className="flex-1 h-12 bg-white/10 rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-[80%] bg-[#A8C7FA]" />
        </div>
      </div>
    </div>
  );
}

function AndroidToggle({ icon, label, sublabel, active }: { icon: React.ReactNode, label: string, sublabel: string, active: boolean }) {
  return (
    <button className={`w-full h-[72px] rounded-[28px] px-4 flex items-center gap-4 transition-colors ${active ? 'bg-[#A8C7FA] text-[#041E49]' : 'bg-[#303030] text-white'}`}>
      <div className={`${active ? 'text-[#041E49]' : 'text-white'}`}>
        {icon}
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="font-medium text-[15px] leading-tight">{label}</span>
        <span className={`text-[13px] ${active ? 'text-[#041E49]/80' : 'text-white/60'}`}>{sublabel}</span>
      </div>
    </button>
  );
}
