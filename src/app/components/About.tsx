export default function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="relative z-10 min-h-screen flex items-center py-32 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Kolom Kiri: Judul Besar */}
        <div className="relative md:sticky md:top-32 mb-8 md:mb-0">
          <h2 className="text-4xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            About Me
          </h2>
          <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest">
            Profile & Experience
          </p>
        </div>

        {/* Kolom Kanan: Detail Cerita & Kompetensi */}
        <div className="md:col-span-2 space-y-8">
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Lulusan{" "}
            <span className="text-white font-medium">Teknik Informatika</span>{" "}
            dengan IPK <span className="text-purple-400 font-bold">3.85</span>.
            Pengalaman lebih dari satu tahun dalam bidang{" "}
            <span className="text-white font-medium">
              Software Quality Assurance
            </span>
            , yang telah dipercaya menangani proyek pengujian aplikasi dan
            website skala regional maupun nasional secara profesional.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Dengan fondasi kuat di bidang rekayasa perangkat lunak, fokus utama
            saya adalah memastikan sistem berjalan sesuai dengan spesifikasi dan
            bebas dari bug. Saya juga memastikan alur fungsionalitasnya berjalan
            lancar dan efisien saat digunakan oleh pengguna akhir.
          </p>

          {/* Sub-Section: Core Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
            <div>
              <h3 className="font-mono text-xs text-purple-400 uppercase tracking-wider mb-2">
                Manual Testing
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Berpengalaman dalam mengeksekusi end-to-end testing, manajemen
                skenario uji, pengujian fungsionalitas modul terintegrasi, serta
                pelacakan bug yang komprehensif. Fokus pada validasi alur
                transaksi, integrasi payment gateway, dan penyusunan
                dokumentasi/manual book untuk memastikan reliabilitas aplikasi
                sebelum rilis.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-blue-400 uppercase tracking-wider mb-2">
                Automation Testing
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Memiliki kapabilitas dalam membangun arsitektur otomatisasi
                pengujian menggunakan framework modern seperti Cypress dan
                Katalon Studio. Terbiasa melakukan teknis validasi performa
                sistem tingkat lanjut, pengujian fungsionalitas API secara
                mendalam menggunakan Postman, serta manajemen tiket isu yang
                terstruktur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
