"use client";
import { useState, useEffect } from "react";

interface CounterProps {
  target: number;
  duration?: number; // Durasi animasi dalam milidetik
  suffix?: string;
}

export default function Counter({
  target,
  duration = 2000,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Menghitung angka saat ini berdasarkan progres waktu
      const currentCount = Math.min(
        Math.floor((progress / duration) * target),
        target,
      );

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
