import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Network, Terminal, ShieldCheck, Command } from 'lucide-react';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('plan');

  const tabs = [
    { id: 'plan', label: 'Plan', icon: Code2, cmd: 'npx build-with-ai init' },
    { id: 'route', label: 'Route', icon: Network, cmd: 'modelrouter route "Build async rate limiter"' },
    { id: 'execute', label: 'Execute', icon: Terminal, cmd: 'terminal-agent run "Implement JWT auth with tests"' },
    { id: 'verify', label: 'Evaluate', icon: ShieldCheck, cmd: 'python agentbench.py run --provider ollama' },
  ];

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-white" id="top">
      {/* Moving Water Effect Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-end">
        <div 
          className="relative w-full h-[80vh] overflow-hidden"
          style={{ maskImage: 'linear-gradient(to top, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)' }}
        >
          {/* Base teal tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10b981]/30 to-[#ccfbf1]/20 mix-blend-multiply z-10" />
          
          {/* Flowing Water Layer 1 */}
          <div 
            className="absolute inset-[-100%] opacity-[0.6] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '250px 250px',
              animation: 'waterFlow 40s linear infinite'
            }}
          />
          
          {/* Flowing Water Layer 2 (moves opposite and is scaled differently to create caustics) */}
          <div 
            className="absolute inset-[-100%] opacity-[0.6] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.009' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
              animation: 'waterFlow2 30s linear infinite'
            }}
          />
        </div>

        {/* Global Keyframes for the Water Effect */}
        <style>{`
          @keyframes waterFlow {
            0% { transform: translate(0, 0) scale(1.1); }
            50% { transform: translate(-100px, -50px) scale(1.2); }
            100% { transform: translate(0, 0) scale(1.1); }
          }
          @keyframes waterFlow2 {
            0% { transform: translate(0, 0) scale(1.2); }
            50% { transform: translate(100px, -80px) scale(1.1); }
            100% { transform: translate(0, 0) scale(1.2); }
          }
        `}</style>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* "Backed by" badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wide">Backed by</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-zinc-200 shadow-sm">
            <div className="bg-emerald-500 rounded-[4px] p-0.5">
              <Command className="w-3 h-3 text-white" />
            </div>
            <span className="text-[12px] font-bold text-zinc-800 tracking-tight">Open Source</span>
          </div>
        </motion.div>

        {/* Main Title matching Context.dev style */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] font-semibold text-zinc-900 tracking-tight leading-[1.05] mb-6"
        >
          The verify-first <span className="text-emerald-500 font-medium">{"{pipeline}"}</span> for <span className="text-emerald-500 font-medium">agents</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[15px] md:text-[16px] text-zinc-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
        >
          One API for agents to plan architecture, route models, execute in sandboxes, and empirically verify code.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a href="#quickstart" className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-black text-white text-[14px] font-semibold transition-all shadow-md flex justify-center">
            Start for free
          </a>
          <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200/80 border border-transparent text-zinc-800 text-[14px] font-medium transition-all flex items-center justify-center gap-2">
            <span>Explore ecosystem</span>
            <div className="flex items-center gap-1 ml-1">
              <svg className="w-3.5 h-3.5 opacity-80 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
          </a>
        </motion.div>

        {/* Interactive Floating Interface (Glass container) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring", bounce: 0.3 }}
          className="w-full max-w-[700px] p-3 sm:p-4 rounded-[28px] bg-white/40 border border-white/60 backdrop-blur-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] relative"
        >
          {/* Tabs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 p-1 mb-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                    isActive 
                      ? 'bg-emerald-500 text-white shadow-sm' 
                      : 'bg-transparent text-zinc-500 hover:text-zinc-800 hover:bg-white/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Input Box Area */}
          <div className="relative bg-white rounded-[20px] p-2 flex items-center justify-between gap-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-zinc-100 h-[64px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex items-center pl-4 overflow-hidden"
              >
                <span className="font-mono text-[14px] text-zinc-600 truncate">
                  {tabs.find(t => t.id === activeTab)?.cmd}
                </span>
              </motion.div>
            </AnimatePresence>
            <button className="h-10 w-10 sm:w-12 sm:h-12 shrink-0 rounded-[14px] bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors shadow-sm mr-0.5">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
