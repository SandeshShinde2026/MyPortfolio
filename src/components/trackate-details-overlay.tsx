import { useState } from "react";
import { useOsStore } from "@/store/os-store";
import { motion, AnimatePresence } from "framer-motion";

export function TrackateDetailsOverlay() {
  const { activeApp, closeApp } = useOsStore();
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  const isTrackate = activeApp === "project-trackate";

  // Shared content chunks to avoid duplication
  const LeftContent = (
    <>
      <div>
        <h1 className="text-[3.5rem] leading-[0.9] font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl font-sans">
          Trackate<span className="text-white/30">.</span>
        </h1>
        <p className="text-[15px] text-white/80 leading-relaxed font-normal tracking-wide">
          A smart personal finance and expense tracking app designed to make money management simple, fast, and effortless. Track expenses, manage budgets, and split bills without the complexity of traditional finance apps.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href="https://play.google.com/store/apps/details?id=com.svnate.trackate" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-3 bg-white text-black rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:scale-105 transition-transform">
            <svg viewBox="0 0 512 512" width="14" height="14" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            Play Store
          </a>
          <a href="https://apps.apple.com/us/app/trackate/id6762513903" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-3 bg-white text-black rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z"/></svg>
            App Store
          </a>
          <a href="https://trackate.svnate.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 px-6 py-3 bg-white/[0.05] border border-white/10 text-white rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white/10 transition-colors">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            Website
          </a>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent my-1" />
      <div>
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4 font-bold">The Problem</h2>
        <p className="text-[15px] text-white/80 leading-relaxed font-normal">
          Most expense tracking apps require constant manual entry, which becomes tiring. Bill splitting apps like Splitwise lock important features behind subscriptions, making basic tracking inconvenient for students and young users.
        </p>
      </div>
    </>
  );

  const RightContent = (
    <>
      <div>
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4 font-bold">The Solution</h2>
        <p className="text-[15px] text-white/80 leading-relaxed font-normal">
          Trackate automates expense tracking and simplifies shared management. Detect expenses automatically, monitor spending in real time, set budgets, and split with friends — <span className="text-white font-semibold">all completely free.</span>
        </p>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-l from-white/20 to-transparent my-1" />
      <div>
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4 font-bold">Key Features</h2>
        <ul className="grid grid-cols-1 gap-3 text-[14px] text-white/80 font-normal">
          {[
            "Automatic expense detection",
            "Expense and income tracking",
            "Smart budgeting & spending insights",
            "Bill splitting with friends",
            "Group expense management",
            "Real-time financial overview",
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-4 group">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 transition-colors" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4 font-bold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Flutter", "Firebase Auth", "Cloud Firestore", "Android Notification Listener", "SharedPreferences", "FCM", "REST APIs"].map((tech, i) => (
            <span key={i} className="px-3 py-1.5 bg-white/[0.05] border border-white/20 rounded-full text-[11px] text-white/90 font-bold backdrop-blur-md hover:bg-white/20 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Global Close Button for Trackate */}
      <AnimatePresence>
        {isTrackate && !mobileSheetOpen && (
          <motion.button
            key="global-close"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={closeApp}
            className="fixed top-6 right-6 lg:top-10 lg:right-10 z-[100] w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all shadow-2xl pointer-events-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop Overlay (Behind Phone) */}
      <AnimatePresence>
        {isTrackate && (
          <motion.div
            key="trackate-overlay-desktop"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-[5] pointer-events-none flex items-center justify-center p-8 lg:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-black/80 pointer-events-none" />
            
            <div className="w-full max-w-[1400px] h-full hidden lg:flex justify-between items-center pointer-events-none relative z-10">
              <motion.div 
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[380px] xl:w-[420px] flex flex-col justify-center gap-8 pr-8 pointer-events-auto"
              >
                {LeftContent}
              </motion.div>

              <motion.div 
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[380px] xl:w-[420px] flex flex-col justify-center gap-8 pl-8 pointer-events-auto"
              >
                {RightContent}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Floating Button (In Front of Phone) */}
      <AnimatePresence>
        {isTrackate && !mobileSheetOpen && (
          <motion.div
            key="mobile-trigger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-x-0 bottom-10 z-[50] pointer-events-none flex lg:hidden items-center justify-center gap-3"
          >
            <button
              onClick={() => setMobileSheetOpen(true)}
              className="pointer-events-auto px-7 py-3.5 bg-white text-black text-[11px] tracking-[0.1em] font-black uppercase rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.2)] active:scale-95 transition-transform"
            >
              Case Study
            </button>
            <a 
              href="https://play.google.com/store/apps/details?id=com.svnate.trackate" 
              target="_blank" 
              rel="noreferrer" 
              className="pointer-events-auto w-[46px] h-[46px] bg-[#111] backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform shadow-xl hover:bg-[#222]"
              title="Play Store"
            >
              <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            </a>
            <a 
              href="https://apps.apple.com/us/app/trackate/id6762513903" 
              target="_blank" 
              rel="noreferrer" 
              className="pointer-events-auto w-[46px] h-[46px] bg-[#111] backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform shadow-xl hover:bg-[#222]"
              title="App Store"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z"/></svg>
            </a>
            <a 
              href="https://trackate.svnate.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="pointer-events-auto w-[46px] h-[46px] bg-[#111] backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform shadow-xl hover:bg-[#222]"
              title="Website"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet (In Front of Phone) */}
      <AnimatePresence>
        {isTrackate && mobileSheetOpen && (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[60] pointer-events-auto flex flex-col justify-end"
          >
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
              onClick={() => setMobileSheetOpen(false)} 
            />
            
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-[85vh] bg-[#050505] rounded-t-[40px] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
            >
              <div className="w-full h-14 shrink-0 flex items-center justify-center relative">
                <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                <button 
                  onClick={() => setMobileSheetOpen(false)}
                  className="absolute right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 pb-16 pt-2 flex flex-col gap-10 no-scrollbar">
                {LeftContent}
                {RightContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
