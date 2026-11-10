import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Snapshot = () => {
  const rows = [
    {
      project: 'build-with-ai',
      link: 'https://github.com/PicadoLabs/build-with-ai',
      stage: 'Plan',
      problem: 'Developers face blank canvas paralysis, context drift, and broken code when asking AI to build whole applications.',
      edge: 'Zero-API, local-first CLI with 11 production templates and persistent .buildwithai/ context injection (31 contributors • 1.4k downloads • npm v1.4.0).'
    },
    {
      project: 'AI Model Router',
      link: 'https://github.com/PicadoLabs/ai-model-router',
      stage: 'Route',
      problem: 'Companies face ballooning API costs, rate limits, and latency spikes across models without explainable routing logic.',
      edge: 'Sub-3ms Pareto AI Traffic Control Room UI with triple-mode analysis, Thompson Sampling RL, and PyPI distribution (11 contributors • 2.8k+ PyPI downloads • model-router-cli v1.2.0).'
    },
    {
      project: 'Terminal Agent',
      link: 'https://github.com/PicadoLabs/terminal-agent',
      stage: 'Execute',
      problem: 'Autonomous coding agents make sweeping unverified changes, hallucinate task success, and break repository builds.',
      edge: 'Verify-first sandboxing (psutil/Docker), 12 core tools, 12-category self-healing recovery, and instant checkpoint rollback (3 contributors • 1.0k+ PyPI downloads • terminal-agent-cli v0.1.1).'
    },
    {
      project: 'AgentBench',
      link: 'https://github.com/PicadoLabs/agent-bench',
      stage: 'Evaluate',
      problem: 'Traditional LLM benchmarks test isolated toy functions, while evaluating multi-turn agents is complex and provider-locked.',
      edge: 'Instant GitHub PR Ingestion into reproducible tasks, 12 polyglot benchmarks, local Ollama mode ($0 cost), and 5D composite scoring (4 contributors • 520+ PyPI downloads • agentbench-core v1.0.0).'
    }
  ];

  return (
    <section className="relative py-24 bg-white border-y border-zinc-200" id="stack">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top intro */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Why PicadoLabs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            The problem we're solving
          </h2>
          <p className="text-[15px] text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Instead of a monolithic AI prompt, we divide the engineering lifecycle into four specialized, verifiable tools.
          </p>
        </div>

        {/* Table */}
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[1.1fr_0.6fr_1.6fr_1.7fr] gap-6 bg-zinc-100 border-b border-zinc-200 px-6 py-3.5 text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
            <div>Project</div>
            <div>Stage</div>
            <div>The Problem</div>
            <div>The Picado Edge</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-1 md:grid-cols-[1.1fr_0.6fr_1.6fr_1.7fr] gap-4 md:gap-6 px-6 py-5 items-start ${
                i < rows.length - 1 ? 'border-b border-zinc-200' : ''
              } hover:bg-white transition-colors`}
            >
              <div>
                <a 
                  href={row.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-emerald-600 hover:text-emerald-700 text-[14px] flex items-center gap-1 group/link underline underline-offset-4 decoration-emerald-200 hover:decoration-emerald-500 transition-colors"
                >
                  <span>{row.project}</span>
                  <span className="text-[11px] text-zinc-400 group-hover/link:text-emerald-500 group-hover/link:translate-x-0.5 transition-all">↗</span>
                </a>
              </div>
              <div>
                <span className="inline-flex px-2.5 py-1 rounded-full bg-zinc-200/70 text-[11px] font-mono font-bold text-zinc-700 uppercase tracking-wider">
                  {row.stage}
                </span>
              </div>
              <div className="text-[13px] text-zinc-600 font-medium leading-relaxed pr-2">
                {row.problem}
              </div>
              <div className="text-[13px] text-zinc-900 font-medium leading-relaxed">
                {row.edge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
