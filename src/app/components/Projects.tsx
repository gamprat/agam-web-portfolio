import Image from "next/image";

export default function Projects() {
  const projectList = [
    {
      title: "SAF",
      type: "Professional Project",
      scope:
        "Manual End-to-End Testing • Regression Testing • API Testing • Bug Reporting",
      description:
        "Bertanggung jawab atas pengujian teknis tingkat lanjut termasuk validasi API menggunakan Postman, manajemen tiket isu, serta pembaruan dokumentasi berkala.",
      tech: ["Postman", "API Testing", "Ticket Management"],
      image: "/images/cover_saf.png",
    },
    {
      title: "Salammu",
      type: "Professional Project",
      scope:
        "Manual End-to-End Testing • Regression Testing • API Testing • Bug Reporting",
      description:
        "Mengelola siklus pengujian teknis, pelacakan bug, dan penyusunan metrik kualitas pada ekosistem aplikasi Salammu untuk memastikan stabilitas rilis.",
      tech: ["Technical Testing", "Bug Tracking", "QA Docs"],
      image: "/images/cover_salammu.png",
    },
    {
      title: "LPPOM Indonesia",
      type: "Professional Project",
      scope:
        "Manual Testing • Automation Testing • Katalon Studio • Bug Reporting",
      description:
        "Bertindak sebagai QA Tester yang mengelola dan mengeksekusi skenario pengujian komprehensif untuk 10 modul sistem yang saling terintegrasi secara masif.",
      tech: ["Module Testing", "System Integration", "Test Scenarios"],
      image: "/images/cover_lppom.png",
    },
    {
      title: "Lakumanah",
      type: "Professional Project",
      scope:
        "Manual End-to-End Testing • Payment Gateway Integration • Bug Reporting",
      description:
        "Melakukan pengujian menyeluruh (E2E) pada alur transaksi dan integrasi gerbang pembayaran, serta menyusun dokumentasi pengujian yang komprehensif.",
      tech: ["Manual Testing", "E2E Testing", "Payment Gateway"],
      image: "/images/cover_lakumanah.png",
    },
    {
      title: "Sanbercode QA Bootcamp",
      type: "Bootcamp Project",
      scope: "Fundamental SQA • Automation Testing Frameworks",
      description:
        "Proyek intensif membangun arsitektur pengujian otomatis dari dasar, mencakup pembuatan script otomatisasi pengujian fungsional dan end-to-end.",
      tech: ["Cypress", "Automation Testing", "Katalon Studio"],
      image: "/images/cover_sanbercode.png",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="relative z-10 min-h-screen py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Projects
          </h2>
          <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest"></p>
        </div>

        {/* Grid Layout untuk Card Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden backdrop-blur-md border border-white/5 rounded-2xl h-[420px] hover:border-white/20 transition-all duration-500 flex flex-col justify-end p-8"
            >
              {/* Gambar Cover sebagai Background Card */}
              <div className="absolute inset-0 -z-10 bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-40 grayscale-0 md:opacity-30 md:grayscale group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Efek Gradasi Gelap ke Atas agar Teks di Bawah Selalu Terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
              </div>

              {/* Konten Teks di Atas Gambar */}
              <div className="relative z-10">
                <div className="mb-3">
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                      project.type.includes("Professional")
                        ? "text-purple-400 border-purple-500/20 bg-purple-500/10"
                        : "text-blue-400 border-blue-500/20 bg-blue-500/10"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-[11px] font-mono text-gray-400 mt-1 mb-3 leading-relaxed">
                  Scope: {project.scope}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed font-light mb-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 overflow-hidden">
                  {project.description}
                </p>

                {/* Badges Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((techName, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
