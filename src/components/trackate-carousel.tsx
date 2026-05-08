"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/TrackateDashboardScreen.jpg",
  "/TrackateExpenseScreen.jpg",
  "/TrackateAddExpenseScreen.jpg",
  "/TrackateBudgetsScreen.jpg",
  "/TrackateFriendsScreen.jpg",
  "/TrackateFriendsDetailScreen.jpg",
  "/TrackateAIinsightsSCREEN.jpg",
];

export function TrackateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative bg-black">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          alt="Trackate App Screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}
