"use client";

import {
  SiCypress,
  SiPostman,
  SiSelenium,
  SiJira,
  SiGithub,
} from "react-icons/si";

export default function TechStack() {
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
      name: "Jira",
      category: "Bug Tracking & Agile",
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
  ];

  return (
    <section
      id="tech-stack"
      className="relative z-10 min-h-screen py-32 px-6 md:px-12 bg-[#050505] overflow-hidden"
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
          {techTools.map((tech, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className={`group relative bg-[#090909]/90 border border-white/5 rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-[#0d0d0d] flex flex-col justify-between h-[190px] cursor-pointer overflow-hidden ${tech.color}`}
            >
              {/* Efek Bias Cahaya Masking Internal */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Baris Atas: Ikon Berputar Lambat & Label Level */}
              <div className="flex justify-between items-start">
                <div
                  className={`w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-2xl font-black font-mono transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white/[0.04] ${tech.textColor}`}
                >
                  {tech.icon}
                </div>
                <span className="text-[9px] font-mono text-gray-600 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                  {tech.level}
                </span>
              </div>

              {/* Baris Bawah: Nama Tools & Spesialisasi QA */}
              <div className="relative z-10 mt-4">
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wider">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
