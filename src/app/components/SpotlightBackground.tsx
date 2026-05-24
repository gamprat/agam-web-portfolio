"use client";

import { useState, useEffect } from "react";

export default function SpotlightBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none overflow-hidden z-0 bg-[#050505]">
      {/* 1. LAYER AURORA ALA NEXT.JS (Pusat Cahaya di Tengah Atas) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] opacity-50 pointer-events-none select-none z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(120, 119, 198, 0.28), transparent)",
          }}
        />
      </div>

      {/* 2. JARING GRID ABSTRAK (Lebih tegas di atas, memudar di bawah) */}
      {/* Kita naikkan opasitas garisnya dari #ffffff02 ke #ffffff06 agar lebih terlihat */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:50px_50px] z-10 animate-grid-float"
        style={{
          // Masking murni CSS: Membuat grid hanya tajam di 30% area atas, lalu hilang perlahan ke bawah
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0) 60%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0) 60%)",
        }}
      />

      {/* 3. LAYER INTERAKTIF MOUSE (Hanya PC - Mengikuti Kursor) */}
      <div
        className="absolute inset-0 transition-opacity duration-300 hidden md:block z-20"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.06), transparent 80%)`,
        }}
      />
    </div>
  );
}
