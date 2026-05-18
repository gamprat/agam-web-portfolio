"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol hamburger menu

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mengunci scroll layar utama saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? "backdrop-blur-md bg-[#050505]/80 py-4 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-xl font-black tracking-tighter text-white z-50"
          >
            AGAM<span className="text-purple-500">.</span>
          </Link>

          {/* MENU DESKTOP (Muncul di layar besar, hilang di HP) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link
              href="#about"
              className="hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/file/d/1nAsdPopKSlD7HJ09CSHB79nESFRb_nBg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:bg-purple-500 hover:text-white transition duration-300"
            >
              Resume
            </a>
          </div>

          {/* TOMBOL HAMBURGER (Hanya muncul di HP/Tablet, hilang di Desktop) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center md:hidden z-50 w-8 h-8 gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Garis Atas */}
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 transform origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            {/* Garis Tengah */}
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            {/* Garis Bawah */}
            <span
              className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 transform origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* LACI MENU OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 bg-[#050505] z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-xl font-bold tracking-widest uppercase font-mono">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>

          {/* Resume diletakkan paling bawah di menu laci mobile */}
          <a
            href="https://drive.google.com/file/d/1nAsdPopKSlD7HJ09CSHB79nESFRb_nBg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 bg-white text-black text-xs font-bold tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
          >
            RESUME
          </a>
        </div>
      </div>
    </>
  );
}
