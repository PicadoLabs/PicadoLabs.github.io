import React from 'react';
import { Terminal, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0b0c10] overflow-hidden border-t border-white/5">
      {/* Water Effect at the Top of Footer */}
      <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden">
        {/* Emerald gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/40 via-emerald-700/30 to-[#0b0c10] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-10" />
        
        {/* Water Caustic Layer 1 */}
        <div 
          className="absolute inset-[-100%] opacity-[0.6] mix-blend-overlay z-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            animation: 'footerWater1 45s linear infinite'
          }}
        />
        
        {/* Water Caustic Layer 2 */}
        <div 
          className="absolute inset-[-100%] opacity-[0.5] mix-blend-overlay z-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '250px 250px',
            animation: 'footerWater2 35s linear infinite'
          }}
        />

        {/* Dashed grid overlay on the water */}
        <div className="absolute inset-0 flex justify-center opacity-20 z-20 pointer-events-none">
          <div className="w-full max-w-6xl grid grid-cols-4 h-full border-x border-white/20 border-dashed">
            <div className="border-r border-white/20 border-dashed h-full" />
            <div className="border-r border-white/20 border-dashed h-full" />
            <div className="border-r border-white/20 border-dashed h-full" />
            <div className="h-full" />
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes footerWater1 {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-120px, -60px) scale(1.2); }
          100% { transform: translate(0, 0) scale(1.1); }
        }
        @keyframes footerWater2 {
          0% { transform: translate(0, 0) scale(1.2); }
          50% { transform: translate(90px, -70px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1.2); }
        }
      `}</style>

      {/* Faint Background Grid Lines for content area */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-20">
        <div className="w-full max-w-6xl grid grid-cols-4 h-full border-x border-white/10 border-dashed">
          <div className="border-r border-white/10 border-dashed h-full" />
          <div className="border-r border-white/10 border-dashed h-full" />
          <div className="border-r border-white/10 border-dashed h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10 pt-4">
        {/* Top Row: Brand & Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12 gap-10">
          <div className="max-w-md pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-3 px-3 py-2 rounded bg-white text-black w-fit shadow-sm">
                <div className="w-7 h-7 bg-emerald-500 rounded flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wide leading-tight">Backed by</span>
                  <span className="text-[14px] font-black leading-none">Open Source</span>
                </div>
              </div>

              <a 
                href="https://github.com/Kaap10" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-3 py-2 rounded bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all text-left group"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Founder & Maintainer</span>
                  <span className="text-[13px] font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1 leading-none mt-0.5">
                    @Vardhman Gupta
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400" />
                  </span>
                </div>
              </a>
            </div>
            
            <p className="text-white font-bold text-[14px] mb-1">
              Deterministic infrastructure for AI agents.
            </p>
            <p className="text-zinc-400 text-[14px] font-semibold mb-6">
              Plan accurately. Route instantly. Execute safely. Verify rigorously.
            </p>
            
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="mailto:picadolabs@gmail.com" className="hover:text-white transition-colors" aria-label="Mail">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="https://x.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3.5 h-3.5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/picado-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 pt-4">
            <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-zinc-700/50 flex flex-col items-center justify-center bg-[#0e1015] mb-2 shadow-sm relative">
              <div className="absolute inset-[3px] rounded-full border border-zinc-800" />
              <span className="text-[7px] text-white font-bold uppercase tracking-widest leading-none mb-0.5 z-10">APACHE</span>
              <span className="text-[12px] font-black text-white leading-none z-10 tracking-tight">2.0</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Apache 2.0 Licensed
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-[#12141a] text-[11px] font-bold text-zinc-300 shadow-sm mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              All systems operational
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-12 border-y border-white/10 border-dashed relative z-10">
          <div className="flex flex-col gap-3.5">
            <strong className="text-white text-[12px] font-bold mb-2">Projects</strong>
            <a href="https://github.com/PicadoLabs/build-with-ai" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">build-with-ai</a>
            <a href="https://github.com/PicadoLabs/ai-model-router" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Model Router</a>
            <a href="https://github.com/PicadoLabs/terminal-agent" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Terminal Agent</a>
            <a href="https://github.com/PicadoLabs/agent-bench" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">AgentBench</a>
          </div>
          <div className="flex flex-col gap-3.5">
            <strong className="text-white text-[12px] font-bold mb-2">Developers</strong>
            <a href="#docs" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Documentation</a>
            <a href="#architecture" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Architecture</a>
            <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">GitHub</a>
            <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Issue Tracker</a>
            <a href="#quickstart" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Quickstart</a>
          </div>
          <div className="flex flex-col gap-3.5">
            <strong className="text-white text-[12px] font-bold mb-2">Resources</strong>
            <a href="#proof" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Benchmarks</a>
            <a href="#stack" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Use Cases</a>
            <a href="#quickstart" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Templates</a>
            <a href="#faq" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex flex-col gap-3.5">
            <strong className="text-white text-[12px] font-bold mb-2">Company</strong>
            <a href="#stack" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="https://github.com/Kaap10" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
              Founder: @Vardhman Gupta
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="mailto:picadolabs@gmail.com" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-zinc-400 hover:text-white transition-colors">Community</a>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-semibold text-zinc-400 py-8">
          <div>&copy; {new Date().getFullYear()} Picado Labs</div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Founder and Maintainer</span>
            <a 
              href="https://github.com/Kaap10" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-emerald-500/40"
            >
              @Vardhman Gupta
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex gap-4 text-zinc-500 text-[11px] font-bold">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">License</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>

      {/* Giant Logo at bottom matching context.dev style */}
      <div className="w-full flex justify-center items-end pointer-events-none select-none overflow-hidden h-[180px] sm:h-[240px] md:h-[320px] mt-4 relative z-0">
        <h1 className="flex items-baseline leading-[0.75]">
          <span className="text-[18vw] font-black tracking-tighter text-emerald-500">
            picado
          </span>
          <span className="text-[18vw] font-black tracking-tighter text-white">
            labs
          </span>
        </h1>
      </div>
    </footer>
  );
};
