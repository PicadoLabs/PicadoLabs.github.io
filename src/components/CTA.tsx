import React from 'react';

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-emerald-800 flex items-center justify-center">
      {/* Deep Water Effect Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Base dark teal tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#0f766e] z-0" />
        
        {/* Faint Background Grid Lines (matches footer pattern) */}
        <div className="absolute inset-0 flex justify-center opacity-30 z-10">
          <div className="w-full max-w-6xl grid grid-cols-4 h-full border-x border-white/20 border-dashed">
            <div className="border-r border-white/20 border-dashed h-full" />
            <div className="border-r border-white/20 border-dashed h-full" />
            <div className="border-r border-white/20 border-dashed h-full" />
            <div className="h-full" />
          </div>
        </div>
        
        {/* Flowing Water Layer 1 */}
        <div 
          className="absolute inset-[-100%] opacity-[0.5] mix-blend-overlay z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            animation: 'waterFlow 50s linear infinite'
          }}
        />
        
        {/* Flowing Water Layer 2 */}
        <div 
          className="absolute inset-[-100%] opacity-[0.5] mix-blend-overlay z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '250px 250px',
            animation: 'waterFlow2 40s linear infinite'
          }}
        />
      </div>

      <div className="relative z-20 w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Ship agents that actually <br className="hidden sm:block" />
          <span className="text-emerald-300">build software.</span>
        </h2>
        
        <p className="text-[15px] md:text-[16px] text-white font-medium max-w-xl mx-auto mb-10 leading-relaxed">
          Open-source architecture, sub-3ms routing, and the same verify-first pipeline powering next-gen AI dev tools. 100% free.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 text-[14px] font-bold transition-all shadow-lg shadow-black/10 flex items-center justify-center">
            Explore GitHub
          </a>
          <a href="#docs" className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/10 text-white text-[14px] font-semibold transition-all backdrop-blur-md flex items-center justify-center">
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
};
