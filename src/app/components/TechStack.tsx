"use client";

import { useState } from "react";
import {
  SiCypress,
  SiPostman,
  SiSelenium,
  SiJira,
  SiGithub,
  SiGitlab,
  SiMysql,
} from "react-icons/si";

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  const techTools = [
    {
      name: "Katalon Studio",
      category: "Automation Testing",
      level: "Advanced",
      color:
        "hover:shadow-[0_0_30px_rgba(52,201,135,0.25)] hover:border-[#34c987]/50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          id="Katalon-Icon--Streamline-Svg-Logos"
          height={24}
          width={24}
        >
          <desc>
            {"\n    Katalon Icon Streamline Icon: https://streamlinehq.com\n  "}
          </desc>
          <path
            fill="#19d89f"
            d="M19.670875 15.915775h-7.671v7.8342h7.671V15.915775Z"
            strokeWidth={0.25}
          />
          <path
            fill="#000000"
            d="M12.000075 0.25 4.3291 8.084225v7.8342h7.670975l7.66835 -7.8342V0.25H12.000075Z"
            strokeWidth={0.25}
          />
        </svg>
      ),
      textColor: "text-[#34c987]",
    },
    {
      name: "Cypress",
      category: "Automation Testing",
      level: "Intermediate",
      color:
        "hover:shadow-[0_0_30px_rgba(73,197,149,0.25)] hover:border-[#49c595]/50",
      icon: (
        <SiCypress className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-[#49c595]",
    },
    {
      name: "Selenium",
      category: "Web Automation",
      level: "Intermediate",
      color:
        "hover:shadow-[0_0_30px_rgba(0,181,0,0.25)] hover:border-[#00b500]/50",
      icon: (
        <SiSelenium className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-[#00b500]",
    },
    {
      name: "Postman",
      category: "API Testing",
      level: "Advanced",
      color:
        "hover:shadow-[0_0_30px_rgba(255,108,55,0.25)] hover:border-[#ff6c37]/50",
      icon: (
        <SiPostman className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-[#ff6c37]",
    },
    {
      name: "Jira",
      category: "Bug Tracking & Task Management",
      level: "Advanced",
      color:
        "hover:shadow-[0_0_30px_rgba(0,82,204,0.25)] hover:border-[#0052cc]/50",
      icon: (
        <SiJira className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-[#0052cc]",
    },
    {
      name: "GitHub",
      category: "Version Control",
      level: "Advanced",
      color:
        "hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-white/40",
      icon: (
        <SiGithub className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-white",
    },
    {
      name: "GitLab",
      category: "Version Control & CI/CD Pipeline",
      level: "Advanced",
      color:
        "hover:shadow-[0_0_30px_rgba(252,109,38,0.25)] hover:border-[#fc6d26]/50",
      icon: (
        <SiGitlab className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-[#fc6d26]",
    },
    {
      name: "MySQL",
      category: "Database & Query Testing",
      level: "Intermediate",
      color:
        "hover:shadow-[0_0_30px_rgba(0,117,143,0.25)] hover:border-[#00758f]/50",
      icon: (
        <SiMysql className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
      ),
      textColor: "text-[#00758f]",
    },
  ];

  return (
    <section
      id="tech-stack"
      className="relative z-10 min-h-screen py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Efek Garis Latar Belakang Digital Minimalis */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* VARIASI LAYOUT: Judul ditaruh Sentral di Tengah Atas */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Tech Stack
            </span>
          </h2>
          <p className="text-xs font-mono text-gray-500 mt-3 uppercase tracking-[0.25em] max-w-md mx-auto leading-relaxed">
            Kombinasi Tools Otomatisasi, Pengujian API, dan Manajemen Bug
          </p>
        </div>

        {/* Grid Kartu Interaktif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {techTools.map((tech, index) => {
            const isHiddenOnMobile = !showAll && index >= 4;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className={`group relative bg-[#090909]/90 border border-white/5 rounded-2xl p-6 transition-all duration-500 ease-out md:hover:-translate-y-2 hover:bg-[#0d0d0d] flex flex-col justify-between h-[190px] cursor-pointer overflow-hidden ${tech.color} ${
                  isHiddenOnMobile ? "hidden md:flex" : "flex"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/[0.04] md:group-hover:rotate-6 ${tech.textColor}`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-[9px] font-mono text-gray-400 md:text-gray-600 border border-white/10 md:border-white/5 bg-white/[0.03] md:bg-white/[0.01] px-2.5 py-1 rounded-full uppercase tracking-wider md:group-hover:text-white md:group-hover:border-white/20 transition-all duration-300">
                    {tech.level}
                  </span>
                </div>

                <div className="relative z-10 mt-4">
                  <h3 className="text-lg font-bold text-white tracking-tight transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wider">
                    {tech.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 md:hidden" data-aos="fade-up">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#090909] border border-white/10 text-xs font-mono uppercase tracking-widest text-gray-400 rounded-xl hover:text-white hover:border-purple-500/50 transition-all duration-300 cursor-pointer active:scale-95"
          >
            {showAll ? "▲ Hide Others" : "▼ View Others Tools"}
          </button>
        </div>
      </div>
    </section>
  );
}
