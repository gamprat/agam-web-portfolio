export default function ScrollingBackground() {
  const rows = [
    "QUALITY ASSURANCE • MANUAL TEST • TEST AUTOMATION • ",
    "BUG STATUS • PASSED • FAILED • ",
    "TEST PLAN • TEST SCENARIO • TEST CASE • ",
    "MAJOR • MEDIUM • MINOR • ",
    "KATALON • CYPRESS • SELENIUM • ",
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505] select-none pointer-events-none">
      {/* Efek Glow Ungu/Biru (biar mirip video Bobby) */}
      <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-purple-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-900/10 rounded-full blur-[120px]" />

      {/* Teks Berjalan */}
      <div className="flex flex-col opacity-[0.03] scale-125">
        {rows.map((text, i) => (
          <div 
            key={i} 
            className={`flex whitespace-nowrap text-8xl font-black leading-tight ${
              i % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'
            }`}
          >
            {/* Kita gandakan teksnya agar tidak putus */}
            <span>{text}{text}{text}{text}</span>
            <span>{text}{text}{text}{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}