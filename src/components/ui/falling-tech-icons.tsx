"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TECH_ICONS = [
  // React
  (props: any) => (
    <svg viewBox="-10.5 -9.45 21 18.9" fill="currentColor" {...props}>
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
  // Apple
  (props: any) => (
    <svg viewBox="0 0 384 512" fill="currentColor" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  ),
  // Android
  (props: any) => (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M325.3 234.3c-6.5 0-11.8-5.3-11.8-11.8s5.3-11.8 11.8-11.8 11.8 5.3 11.8 11.8-5.3 11.8-11.8 11.8zm-138.6 0c-6.5 0-11.8-5.3-11.8-11.8s5.3-11.8 11.8-11.8 11.8 5.3 11.8 11.8-5.3 11.8-11.8 11.8zm213.1-41.3-33-57.1c-1.6-2.7-5-3.6-7.8-2-2.7 1.6-3.6 5-2 7.8l32.5 56.4c-35.3 19.4-75.1 30.5-117.8 30.5-42.7 0-82.5-11.1-117.8-30.5L186.2 141c1.6-2.7.7-6.2-2-7.8-2.7-1.6-6.2-.7-7.8 2l-33 57.1C91.5 221.7 56 280.9 44.4 348.6h423.2c-11.6-67.7-47.1-126.9-99-155.6z"/>
    </svg>
  ),
  // Swift
  (props: any) => (
    <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
      <path d="M165.7 65.5c-20.7-9.5-44.5-16.7-72.3-17.5 13.9-9.5 35-19.1 53.7-22.3-10.3-4.8-22.3-9.5-35-12.7-56.5-12.7-98.7 15.1-98.7 15.1 12.7 7.2 27.8 17.5 38.2 29.4C26.1 71.9 14.2 92.6 7 114.1c0 0 16.7-28.6 44.5-43 0 0-21.5 24.7-25.5 56.5 0 0 32.6-28.6 66.8-28.6 0 0-27.8 30.2-22.3 64.4 0 0 46.1-39.8 89.1-39.8 0 0-24.7 28.6-8.8 62.1 0 0 34.2-20.7 54.1-50.9 0 0-14.3 12.7-33.4 15.1 0 0 31.8-25.5 45.3-64.4 0 0-27.1 23.9-51.7 18.3 0 0 17.5-23.9 16.7-41.4-1.6 0-9.5 2.4-16.1 3.2z"/>
    </svg>
  ),
  // Kotlin
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 24H0V0h24L12 12l12 12z"/>
    </svg>
  )
];

// Generate an array of drops with fixed random properties to avoid hydration mismatch
const generateDrops = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    Icon: TECH_ICONS[i % TECH_ICONS.length],
    left: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 20, // 10s to 30s fall
    delay: -Math.random() * 30, // Start randomly throughout the cycle
    size: 20 + Math.random() * 40, // 20px to 60px size
    opacity: 0.05 + Math.random() * 0.1, // Very subtle, 5% to 15%
    rotation: Math.random() * 360,
  }));
};

export function FallingTechIcons() {
  const [drops, setDrops] = useState<any[]>([]);

  useEffect(() => {
    // Only generate on client side to avoid hydration mismatch and allow screen-size adjustment
    setDrops(generateDrops(30)); // 30 icons floating
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {drops.map((drop) => {
        const Icon = drop.Icon;
        return (
          <motion.div
            key={drop.id}
            initial={{ y: "-10vh", x: 0, rotate: drop.rotation }}
            animate={{ 
              y: "110vh", 
              x: Math.sin(drop.delay) * 50, // Slight horizontal sway
              rotate: drop.rotation + 180 
            }}
            transition={{
              y: { duration: drop.duration, repeat: Infinity, ease: "linear", delay: drop.delay },
              x: { duration: drop.duration / 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
              rotate: { duration: drop.duration * 1.5, repeat: Infinity, ease: "linear" }
            }}
            style={{
              position: "absolute",
              left: drop.left,
              opacity: drop.opacity,
              width: drop.size,
              height: drop.size,
              color: "var(--primary)"
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
