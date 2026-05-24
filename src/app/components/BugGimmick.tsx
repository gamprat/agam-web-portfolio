"use client";

import { useState } from "react";

export default function BugGimmick() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixing, setIsFixing] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const [bugMessage, setBugMessage] = useState("");

  const triggerBug = () => {
    if (isBroken) return; // Mencegah klik ganda saat sistem sudah rusak

    setIsBroken(true);
    setBugMessage("⚠️ CRITICAL ERROR: DOM_MUTATION_DETECTED!");

    // 1. RUSAK ELEMEN HERO (Nama & Teks di sekitarnya)
    const heroText = document.querySelector<HTMLHeadingElement>("h1");
    if (heroText) {
      heroText.style.transform = "skewX(-20deg) scaleY(0.85) translateY(10px)";
      heroText.style.filter =
        "hue-rotate(120deg) blur(1.5px) drop-shadow(8px 8px 0px #ef4444)";
      heroText.style.transition = "all 0.1s ease-in-out";
    }

    // Mengacak seksi hero agar efek kerusakan makin dramatis
    const heroSection = document.querySelector<HTMLElement>("#home");
    if (heroSection) {
      heroSection.style.backgroundColor = "#1a0505"; // Ubah latar belakang hero jadi kemerahan
    }

    // 2. JEDA ALUR (Gaya QA): Beri waktu rekruter melihat kerusakan sebelum modal menutupi layar
    setTimeout(() => {
      setIsOpen(true);
    }, 1500); // 1.5 detik kemudian, jendela penanganan automation baru muncul
  };

  const runAutomationFix = () => {
    setIsFixing(true);

    setTimeout(() => {
      const heroText = document.querySelector<HTMLHeadingElement>("h1");
      const heroSection = document.querySelector<HTMLElement>("#home");

      // Kembalikan semua DOM ke status stabil (PASSED)
      if (heroText) {
        heroText.style.transform = "none";
        heroText.style.filter = "none";
        heroText.style.transition = "all 0.5s ease";
      }
      if (heroSection) {
        heroSection.style.backgroundColor = "";
      }

      setIsFixing(false);
      setIsBroken(false);
      setIsOpen(false);
      setBugMessage("");

      alert(
        "🤖 [PASSED] Automation Framework Integration Success: 1 Critical Bug Resolved. System Health: 100%",
      );
    }, 2500);
  };

  return (
    <>
      {/* TOMBOL UTAMA */}
      <button
        onClick={triggerBug}
        disabled={isBroken && !isOpen} // Kunci tombol saat jeda simulasi sedang berlangsung
        className={`fixed bottom-6 right-6 z-50 p-4 border rounded-full shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110 group flex items-center gap-2 ${
          isBroken
            ? "bg-red-950 border-red-500 text-red-500 shadow-red-900/40"
            : "bg-gray-900 border-red-500/30 hover:border-red-500 text-red-400 shadow-black/40"
        }`}
      >
        <span
          className={`text-xl ${isBroken ? "animate-spin" : "group-hover:animate-bounce"}`}
        >
          🪲
        </span>
        <span className="text-xs font-mono tracking-wider hidden sm:inline uppercase text-gray-400 group-hover:text-red-400">
          {isBroken ? "System Corrupted" : "Inject Bug"}
        </span>
      </button>

      {/* BANNER NOTIFIKASI ERROR (Dipindahkan ke Atas Layar agar Tidak Tertutup Modal) */}
      {bugMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 bg-red-600 border border-red-400 text-white font-mono text-xs md:text-sm px-6 py-3 rounded-full shadow-xl shadow-red-900/50 animate-pulse uppercase tracking-widest font-bold flex items-center gap-2">
          <span>❌</span> {bugMessage}
        </div>
      )}

      {/* JENDELA POP-UP MODAL TEST REPORT */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#090909] border border-red-500/40 rounded-2xl p-6 max-w-md w-full font-mono text-sm shadow-2xl shadow-red-500/20 relative">
            <button
              onClick={() => {
                setIsOpen(false);
                const heroText =
                  document.querySelector<HTMLHeadingElement>("h1");
                const heroSection =
                  document.querySelector<HTMLElement>("#home");
                if (heroText) {
                  heroText.style.transform = "none";
                  heroText.style.filter = "none";
                }
                if (heroSection) {
                  heroSection.style.backgroundColor = "";
                }
                setIsBroken(false);
                setBugMessage("");
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
              <h3 className="text-red-500 font-bold uppercase tracking-wider flex items-center gap-2 text-xs">
                🚨 Webdriver Test Report: FAILED
              </h3>
            </div>

            <div className="bg-black/60 p-4 rounded-xl text-xs text-gray-400 space-y-1.5 mb-6 border border-white/5 max-h-[150px] overflow-y-auto">
              <p className="text-yellow-500">
                [WARN] Init regression check on local-env...
              </p>
              <p className="text-red-500 font-bold">
                [FAIL] AssertionError: Expected &lt;h1&gt; to be stable
              </p>
              <p className="text-red-400">
                [ERROR] Element mutated: SkewX(-20deg) detected
              </p>
              <p className="text-gray-500">
                --------------------------------------
              </p>
              <p className="text-red-500 font-bold">
                Status: 1 Critical Bug Found
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={runAutomationFix}
                disabled={isFixing}
                className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer text-center text-xs ${
                  isFixing
                    ? "bg-yellow-600/20 border border-yellow-500/40 text-yellow-400"
                    : "bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20"
                }`}
              >
                {isFixing ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin inline-block w-3 h-3 border-2 border-current border-t-transparent rounded-full" />
                    Executing Auto-Fix Script...
                  </span>
                ) : (
                  "⚡ Run Automation Framework Fix"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
