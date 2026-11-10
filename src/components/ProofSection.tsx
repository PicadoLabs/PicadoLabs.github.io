import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const ProofSection = () => {
  return (
    <section className="py-24" id="proof">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Verified Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight mb-8">
            Less self-reporting.<br />More empirical proof.
          </h2>

          {/* Real Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm">
            <div>
              <div className="text-2xl font-black text-zinc-900 font-mono tracking-tight">44+</div>
              <div className="text-[12px] text-zinc-500 font-medium mt-0.5">Active Contributors</div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-600 font-mono tracking-tight">5.8k+</div>
              <div className="text-[12px] text-zinc-500 font-medium mt-0.5">Total Downloads</div>
            </div>
            <div className="pt-3 border-t border-zinc-200/60">
              <div className="text-2xl font-black text-zinc-900 font-mono tracking-tight">4</div>
              <div className="text-[12px] text-zinc-500 font-medium mt-0.5">Production Packages</div>
            </div>
            <div className="pt-3 border-t border-zinc-200/60">
              <div className="text-2xl font-black text-zinc-900 font-mono tracking-tight">100%</div>
              <div className="text-[12px] text-zinc-500 font-medium mt-0.5">Apache 2.0 Open Source</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border border-zinc-200 border-l-2 border-l-emerald-500 rounded-r-xl hover:bg-white transition-colors">
            <strong className="block text-lg text-zinc-900 mb-2 font-bold">Deterministic Context</strong>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">Persistent filesystem memory and context injection prevent prompt degradation and LLM hallucination over long multi-turn sessions.</p>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200 border-l-2 border-l-emerald-500 rounded-r-xl hover:bg-white transition-colors">
            <strong className="block text-lg text-zinc-900 mb-2 font-bold">Bounded Sandboxing</strong>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">Hard command policies, secret leak detection, and automatic checkpoint rollback keep your local system and codebase completely safe during autonomous execution.</p>
          </div>
          <div className="p-6 bg-zinc-50 border border-zinc-200 border-l-2 border-l-emerald-500 rounded-r-xl hover:bg-white transition-colors">
            <strong className="block text-lg text-zinc-900 mb-2 font-bold">Independent Verification</strong>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">The agent never declares itself finished. Work is verified through automated test suites and AST validation before code is accepted into your codebase.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Quickstart = () => {
  const [copied, setCopied] = useState(false);

  const lines = [
    '# 1. Install official Picado packages',
    '$ npm install -g build-with-ai',
    '$ pip install model-router-cli terminal-agent-cli agentbench-core',
    '',
    '# 2. Initialize project architecture (zero API keys)',
    '$ npx build-with-ai init',
    '',
    '# 3. Get step-by-step guidance & copy prompt to clipboard',
    '$ npx build-with-ai next',
    '',
    '# 4. Route task with sub-3ms explainable decision',
    '$ modelrouter route "Build async rate limiter"',
    '',
    '# 5. Run autonomous verified coding agent',
    '$ terminal-agent run "Implement rate limiter with tests"'
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g build-with-ai\npip install model-router-cli terminal-agent-cli agentbench-core\nnpx build-with-ai init\nnpx build-with-ai next');
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
          <p className="text-zinc-600 leading-relaxed font-medium">
            Use <code className="bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded font-mono text-sm font-semibold">build-with-ai</code> or install our PyPI packages (<code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">model-router-cli</code>, <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">terminal-agent-cli</code>, <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs">agentbench-core</code>) with zero friction.
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
