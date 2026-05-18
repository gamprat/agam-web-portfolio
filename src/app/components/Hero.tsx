export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {/* Ukuran font dibuat dinamis: text-5xl di HP, text-7xl di Tablet, text-9xl di Desktop */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase select-none text-white text-center leading-tight">
          Agam Pratama<span className="text-purple-500">.</span>
        </h1>

        <p className="text-gray-400 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase mt-4 text-center">
          QA Engineer
        </p>
      </div>
    </section>
  );
}
