"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WebsiteLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="website-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex items-center gap-8">
              {/* Android Logo */}
              <motion.div
                animate={{ 
                  opacity: [0.6, 1, 0.6], 
                  scale: [0.95, 1.05, 0.95],
                  filter: ["drop-shadow(0 0 10px rgba(164,198,57,0))", "drop-shadow(0 0 25px rgba(164,198,57,0.7))", "drop-shadow(0 0 10px rgba(164,198,57,0))"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" 
                  alt="Android"
                  className="w-20 h-20"
                  draggable="false"
                />
              </motion.div>
              
              {/* Divider */}
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 60, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[2px] bg-white/20 rounded-full"
              />

              {/* iOS Logo */}
              <motion.div
                animate={{ 
                  opacity: [0.6, 1, 0.6], 
                  scale: [0.95, 1.05, 0.95],
                  filter: ["drop-shadow(0 0 10px rgba(255,255,255,0))", "drop-shadow(0 0 25px rgba(255,255,255,0.7))", "drop-shadow(0 0 10px rgba(255,255,255,0))"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" 
                  alt="iOS"
                  className="w-16 h-16"
                  draggable="false"
                />
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-24 text-white/40 tracking-[0.4em] text-xs font-semibold uppercase"
            >
              Loading OS
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
