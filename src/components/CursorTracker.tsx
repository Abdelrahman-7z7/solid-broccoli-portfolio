"use client";
import React, { useEffect, useRef } from "react";

export default function CursorTracker() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.animate(
          {
            left: `${e.clientX - 40}px`,
            top: `${e.clientY - 40}px`,
          },
          { duration: 250, fill: "forwards" }
        );
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 w-20 h-20 rounded-full bg-[#4A9782]/30 blur-3xl opacity-80 shadow-[0_0_40px_10px_#4A9782] transition-all duration-250"
      style={{ left: 0, top: 0 }}
    />
  );
} 