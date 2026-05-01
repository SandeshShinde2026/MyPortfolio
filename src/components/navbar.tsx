"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-lg text-primary">
          Sandesh Shinde
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => mounted && toggleTheme()}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentTheme === "dark" ? "dark" : "light"}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {currentTheme === "dark" ? (
                    <Moon className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
                  ) : (
                    <Sun className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
                  )}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
