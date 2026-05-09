"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="w-full h-full relative bg-black overflow-hidden">
      {IMAGES.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt={`Trackate App Screen ${index + 1}`}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-fill"
          // @ts-ignore
          fetchPriority={index === 0 ? "high" : "low"}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
