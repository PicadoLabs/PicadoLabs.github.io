import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const ProofSection = () => {
  return (
    <section className="py-24" id="proof">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Why Picado Labs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
            Less self-reporting.<br />More empirical proof.
          </h2>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border border-zinc-200 border-l-2 border-l-emerald-500 rounded-r-xl hover:bg-zinc-50 transition-colors">
            <strong className="block text-lg text-zinc-900 mb-2 font-bold">Deterministic Context</strong>
            <p className="text-sm text-zinc-600 leading-relaxed">Persistent filesystem memory and context injection prevent prompt degradation and LLM hallucination over long multi-turn sessions.</p>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200 border-l-2 border-l-emerald-500 rounded-r-xl hover:bg-zinc-50 transition-colors">
            <strong className="block text-lg text-zinc-900 mb-2 font-bold">Bounded Sandboxing</strong>
            <p className="text-sm text-zinc-600 leading-relaxed">Hard command policies, secret leak detection, and automatic checkpoint rollback keep your local system and codebase completely safe during autonomous execution.</p>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200 border-l-2 border-l-emerald-500 rounded-r-xl hover:bg-zinc-50 transition-colors">
            <strong className="block text-lg text-zinc-900 mb-2 font-bold">Independent Verification</strong>
            <p className="text-sm text-zinc-600 leading-relaxed">The agent never declares itself finished. Work is verified through automated test suites and AST validation before code is accepted into your codebase.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Quickstart = () => {
  const [copied, setCopied] = useState(false);

  const lines = [
    '# 1. Initialize project architecture (zero API keys)',
    '$ npx build-with-ai init',
    '',
    '# 2. Get step-by-step guidance & copy prompt to clipboard',
    '$ npx build-with-ai next',
    '',
    '# 3. Record decisions and proceed to next phase',
    '$ npx build-with-ai done',
    '',
    '# 4. Inspect current workflow status & progress',
    '$ npx build-with-ai status'
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('npx build-with-ai init\nnpx build-with-ai next\nnpx build-with-ai done\nnpx build-with-ai status');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-radial-gradient from-emerald-500/10 to-transparent to-70%" id="quickstart">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Start in 30 Seconds
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">
            Get started with planning.
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Use <code className="bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded font-mono text-sm font-semibold">build-with-ai</code> to turn an idea into an actionable blueprint with zero setup and zero API dependencies.
          </p>
        </div>
        
        <div className="bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/60 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-xs text-zinc-400">terminal</span>
            </div>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-mono text-[11px] transition-colors border border-zinc-700"
            >
              {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied</span></> : <><Copy className="w-3.5 h-3.5" /><span>Copy</span></>}
            </button>
          </div>
          <div className="p-5 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed text-zinc-300">
              {lines.map((line, i) => (
                <div key={i}>
                  {line.startsWith('#') ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : line.startsWith('$') ? (
                    <><span className="text-emerald-400 font-bold">$</span>{line.slice(1)}</>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-10 md:p-14 bg-zinc-50 border border-zinc-300 rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_40px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col md:flex-row items-center gap-10 text-center md:text-left before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-emerald-400 before:to-transparent">
          <img src="/assets/img/logo.png" alt="Picado Labs" className="w-20 h-20 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] shrink-0" />
          <div className="flex-1">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open-Source Engineering
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight leading-snug mb-6">
              Built in the open for deterministic, verifiable AI software systems.
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="h-10 px-6 bg-emerald-500 hover:bg-[#10b981] text-zinc-900 font-bold rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                Contribute on GitHub
              </a>
              <a href="mailto:picadolabs@gmail.com" className="h-10 px-6 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold rounded-lg border border-zinc-300 flex items-center justify-center transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
