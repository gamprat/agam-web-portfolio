"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Software Tester",
      company: "Lakumanah Digital",
      period: "Apr 2026 - Mei 2026",
      description:
        "Melakukan pengujian manual end-to-end secara intensif pada aplikasi Lakumanah Digital, termasuk pengujian fungsionalitas integrasi payment gateway dan pelaporan bug secara terstruktur.",
    },
    {
      role: "Quality Assurance Bootcamp",
      company: "Sanbercode",
      period: "Jan 2026 - Feb 2026",
      description:
        "Menyelesaikan pelatihan intensif yang berfokus pada penguatan fundamental Software Quality Assurance (SQA) serta implementasi praktis automation testing.",
    },
    {
      role: "QA Tester",
      company: "PT Ragdalion Revolusi Industri",
      period: "Okt 2025 - Jan 2026",
      description:
        "Dipercaya sebagai QA Tester untuk menguji 10 modul yang saling terintegrasi pada sistem LPPOM Indonesia guna menjamin performa sistem berjalan stabil sebelum dirilis.",
    },
    {
      role: "Software Tester",
      company: "PT Mandatech Mataram Mukti",
      period: "Jan 2025 - Des 2025",
      description:
        "Bertanggung jawab penuh dalam menangani software testing untuk proyek SAF dan Salammu. Fokus pada pengujian manual dan API (API Testing) menggunakan Postman.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 min-h-screen py-32 px-6 md:px-12 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-6">
        {/* Bagian Kiri: Judul Section */}
        <div className="relative w-full md:w-1/3">
          <div className="relative md:sticky md:top-32 mb-8 md:mb-0">
            <h2 className="text-4xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Experience
            </h2>
          </div>
        </div>

        {/* Bagian Kanan: Jalur Garis Timeline */}
        <div className="w-full md:w-2/3 relative border-l border-white/10 pl-6 ml-2 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Titik Indikator pada Garis Timeline */}
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-500 border-4 border-[#050505] z-10" />

              {/* Konten Detail Pengalaman */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-mono text-purple-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
