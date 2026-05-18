export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="relative z-10 min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-12"
    >
      {/* Bagian Utama: Ajakan Berkolaborasi */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center flex-grow my-auto text-center">
        <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">
          Let's connect
        </p>

        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
          Interested in <br />
          {/* Ditambahkan pr-2 (padding-right) agar tanda tanya tidak terpotong oleh clipping mask */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 pr-2">
            Collaboration?
          </span>
        </h2>

        <p className="text-gray-400 text-sm md:text-base font-light max-w-md mx-auto mb-10 leading-relaxed">
          Saya selalu terbuka untuk berdiskusi
        </p>

        {/* Tombol Utama: Email */}
        <a
          href="mailto:agam.pratama.id@gmail.com"
          className="inline-block px-8 py-4 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/5"
        >
          Send an Email
        </a>
      </div>

      {/* Bagian Bawah: Sosial Media & Footer */}
      <div className="flex max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center pt-16 gap-6 text-xs text-gray-500">
        {/* Tautan Sosial */}
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/agampratama16"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-white transition-colors duration-300 py-1"
            title="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-300"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="text-[11px] font-bold tracking-wider hidden sm:inline">
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.github.com/gamprat"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-white transition-colors duration-300 py-1"
            title="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="text-[11px] font-bold tracking-wider hidden sm:inline">
              GitHub
            </span>
          </a>
        </div>

        <p className="tracking-wide">
          &copy; {new Date().getFullYear()} AGAM PRATAMA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  );
}
