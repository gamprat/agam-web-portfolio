import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {/* Ukuran font dibuat dinamis: text-5xl di HP, text-7xl di Tablet, text-9xl di Desktop */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase select-none text-white text-center leading-tight">
          Agam Pratama<span className="text-purple-500">.</span>
        </h1>

        {/* BADGE TEXT TYPEWRITER ANTERIOR */}
        <div className="mt-5 mb-12 border border-white/10 bg-[#090909]/60 backdrop-blur-sm px-4 py-2 rounded-xl inline-block select-none">
          <div className="flex items-center justify-center font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400">
            {/* Teks dengan Efek Mengetik */}
            <span className="inline-block overflow-hidden border-r-2 border-purple-500 whitespace-nowrap animate-typewriter pr-1 text-white">
              QA Engineer
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 pt-12 w-full max-w-3xl">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              <Counter target={5} />
            </span>
            <span className="text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-[0.2em] mt-2">
              Projects Handled
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              <Counter target={500} suffix="+" />
            </span>
            <span className="text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-[0.2em] mt-2">
              Test Cases Created
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              <Counter target={200} suffix="+" />
            </span>
            <span className="text-[10px] md:text-xs font-mono text-purple-400 uppercase tracking-[0.2em] mt-2">
              Bugs Detected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
