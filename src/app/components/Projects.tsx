import Image from "next/image";

export default function Projects() {
  const projectList = [
    {
      title: "SAF Original +",
      type: "Professional Project",
      description:
        "Platform ekosistem media digital terintegrasi yang menyajikan konten edukasi, serial kajian Islam multimedial, web series, serta manajemen event bertema pengembangan diri dan gaya hidup Islami.",
      tech: ["Manual End-to-End Testing", "Regression Testing", "API Testing", "Bug Reporting", "Postman", "Ticket Management"],
      image: "/images/cover_saf.png",
    },
    {
      title: "Salammu",
      type: "Professional Project",
      description:
        "Aplikasi resmi yang diinisiasi oleh LPCR PP Muhammadiyah sebagai platform informasi warga Muhammadiyah, dengan kompleksitas fitur geolokasi ranting, streaming kajian, e-commerce, serta gerbang pembayaran iuran digital.",
      tech: ["Manual End-to-End Testing", "Regression Testing", "API Testing", "Bug Reporting", "Technical Testing", "Bug Tracking", "QA Docs"],
      image: "/images/cover_salammu.png",
    },
    {
      title: "LPPOM Indonesia",
      type: "Professional Project",
      description:
        "Sistem sertifikasi halal terintegrasi berskala nasional yang menjembatani proses audit, validasi data, hingga penerbitan ketetapan halal resmi.",
      tech: ["Manual Testing", "Automation Testing", "Katalon Studio", "Bug Reporting", "Module Testing", "System Integration", "Test Scenarios"],
      image: "/images/cover_lppom.png",
    },
    {
      title: "Lakumanah",
      type: "Professional Project",
      description:
        "Platform komunitas dan gerakan pelestarian seni memanah tradisional Jawa (Jemparingan) yang memadukan filosofi budaya leluhur dengan fungsionalitas teknologi modern lintas generasi.",
      tech: ["Manual End-to-End Testing", "Payment Gateway Integration", "Bug Reporting", "Manual Testing", "E2E Testing", "Payment Gateway"],
      image: "/images/cover_lakumanah.png",
    },
    {
      title: "Sanbercode QA Bootcamp",
      type: "Bootcamp Project",
      description:
        "Proyek akhir (Final Project) sebagai bentuk implementasi langsung dari seluruh materi yang dipelajari selama mengikuti bootcamp Quality Assurance.",
      tech: ["Fundamental SQA", "Automation Testing Frameworks", "Cypress", "Automation Testing", "Katalon Studio"],
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
          {projectList.map((project, index) => {
            // LOGIKA QA: Hitung sisa item jika jumlah keahlian lebih dari 3
            const hasMoreTech = project.tech.length > 3;
            const remainingCount = project.tech.length - 3;

            return (
              <div
                key={index}
                className="group relative overflow-hidden backdrop-blur-md border border-white/5 rounded-2xl h-[460px] hover:border-white/20 transition-all duration-500 flex flex-col justify-end p-6 md:p-8"
              >
                {/* Gambar Cover sebagai Background Card */}
                <div className="absolute inset-0 -z-10 bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-40 grayscale-0 md:opacity-30 md:grayscale group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
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

                  {/* Logika Responsif Deskripsi */}
                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-6 opacity-100 max-h-[150px] md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-[100px] transition-all duration-500 overflow-hidden">
                    {project.description}
                  </p>

                  {/* Kontainer Badges Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {/* 1. TAMPILAN KHUSUS MOBILE (Hanya Muncul di HP/Tablet) */}
                    <div className="flex flex-wrap gap-2 md:hidden">
                      {project.tech.slice(0, 3).map((techName, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                        >
                          {techName}
                        </span>
                      ))}
                      {/* Badge "+ X Others" jika datanya melimpah */}
                      {hasMoreTech && (
                        <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 font-bold">
                          +{remainingCount} Others
                        </span>
                      )}
                    </div>

                    {/* 2. TAMPILAN KHUSUS DESKTOP (Hanya Muncul di Laptop Ke Atas) */}
                    <div className="hidden md:flex md:flex-wrap md:gap-2">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
