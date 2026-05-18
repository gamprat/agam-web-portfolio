"use client";

import ScrollingBackground from "@/app/components/ScrollingBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { useEffect } from "react";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Durasi animasi (dalam milidetik)
      once: false, // Set ke true jika animasi hanya ingin jalan 1 kali saat di-scroll
      easing: "ease-out-cubic", // Efek pergerakan animasi
      offset: 120, // Jarak piksel dari layar sebelum animasi terpicu
    });
  }, []);

  return (
    <main className="relative min-h-screen">
      <ScrollingBackground />

      <Navbar/>

      <Hero/>

      <About/>

      <Projects/>

      <Contact/>
    </main>
  );
}
