import React from 'react';
import { Terminal, Code2, Network, ShieldCheck, ChevronDown } from 'lucide-react';
import logoMark from '../../assets/img/logo-mark.png';

export const Navbar = ({ onOpenDocs }: { onOpenDocs?: () => void }) => {
  const projects = [
    {
      title: 'build-with-ai',
      desc: 'Stateful architecture planning with zero API keys.',
      icon: Code2,
      link: 'https://github.com/PicadoLabs/build-with-ai'
    },
    {
      title: 'Model Router',
      desc: 'Sub-3ms dynamic routing based on cost and quality.',
      icon: Network,
      link: 'https://github.com/PicadoLabs/ai-model-router'
    },
    {
      title: 'Terminal Agent',
      desc: 'Secure sandboxed execution and self-repair loops.',
      icon: Terminal,
      link: 'https://github.com/PicadoLabs/terminal-agent'
    },
    {
      title: 'AgentBench',
      desc: '5D matrix evaluation for autonomous LLM agents.',
      icon: ShieldCheck,
      link: 'https://github.com/PicadoLabs/agent-bench'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => { window.location.hash = ''; window.scrollTo(0,0); }}>
          <img 
            src={logoMark} 
            alt="Picado Labs official logo" 
            className="w-7 h-7 object-contain transition-transform duration-200 group-hover:scale-105" 
          />
          <span className="font-extrabold text-[16px] tracking-tight text-zinc-900">
            Picado<span className="text-emerald-600 font-extrabold ml-0.5">Labs</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Projects Mega Menu */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-[12px] font-bold text-zinc-500 hover:text-zinc-900 transition-colors py-6">
              Projects <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[560px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
              {/* Invisible bridge to prevent hover loss */}
              <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
              
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-zinc-200 p-3 grid grid-cols-2 gap-1 relative overflow-hidden">
                {projects.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <a 
                      key={i} 
                      href={p.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-sm group-hover/item:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-zinc-900 mb-0.5">{p.title}</span>
                        <span className="text-[12px] font-medium text-zinc-500 leading-snug">{p.desc}</span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <a href="#architecture" className="text-[12px] font-bold text-zinc-500 hover:text-zinc-900 transition-colors">Architecture</a>
          <a href="#eval" className="text-[12px] font-bold text-zinc-500 hover:text-zinc-900 transition-colors">Evaluation</a>
          <button onClick={onOpenDocs} className="text-[12px] font-bold text-zinc-500 hover:text-zinc-900 transition-colors">Docs</button>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900 hover:bg-black text-white text-[11px] font-bold transition-colors shadow-sm">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3.5 h-3.5 fill-current"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            GitHub
          </a>
        </div>
        
      </div>
    </nav>
  );
};
