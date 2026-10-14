import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const projects = [
  {
    id: '01',
    stage: 'PLAN',
    name: 'build-with-ai',
    desc: 'Zero-API, local-first CLI that turns software ideas into phased architecture plans with persistent context memory (.buildwithai/) and 11 production templates.',
    stack: 'Node.js (>=18) • TypeScript • CLI',
    stats: '15+ contributors • 1.2k downloads',
    repo: 'https://github.com/PicadoLabs/build-with-ai'
  },
  {
    id: '02',
    stage: 'ROUTE',
    name: 'Model Router',
    desc: 'Sub-3ms Pareto AI Traffic Control Room with triple-mode heuristics + ONNX embeddings, Thompson Sampling RL auto-tuning, and PyPI distribution.',
    stack: 'Python (>=3.10) • FastAPI • React 18 • PyPI',
    stats: '5+ contributors • 2.2k downloads',
    repo: 'https://github.com/PicadoLabs/ai-model-router'
  },
  {
    id: '03',
    stage: 'EXECUTE',
    name: 'Terminal Agent',
    desc: 'Verify-first autonomous coding agent with independent test verifier, 12 core tools, dual sandboxing (psutil/Docker), and instant checkpoint rollback.',
    stack: 'Python (>=3.10) • Typer • psutil • Docker',
    stats: '2+ contributors • 440+ downloads',
    repo: 'https://github.com/PicadoLabs/terminal-agent'
  },
  {
    id: '04',
    stage: 'EVALUATE',
    name: 'AgentBench',
    desc: 'Provider-agnostic benchmark platform with instant GitHub PR ingestion into reproducible tasks, local Ollama mode ($0 cost), and 5D composite scoring.',
    stack: 'Python (>=3.10) • Node.js (>=18) • Pytest',
    stats: '3+ contributors',
    repo: 'https://github.com/PicadoLabs/agent-bench'
  }
];

export const ProjectsBento = () => {
  return (
    <section className="py-24 relative bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Core Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Four open-source systems, one pipeline.
            </h2>
          </div>
          <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
            <span>View GitHub organization</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white border border-zinc-200/90 hover:border-emerald-400/80 rounded-2xl p-6 flex flex-col relative group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(16,185,129,0.12)]"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card Header: Stage badge + external link */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100/90 border border-zinc-200/70 text-zinc-700 font-mono text-[11px] font-bold tracking-wider">
                  <span className="text-emerald-600 font-extrabold">{proj.id}</span>
                  <span className="text-zinc-300 font-light">/</span>
                  <span>{proj.stage}</span>
                </span>
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-colors"
                  title="View on GitHub"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors mb-2 tracking-tight">
                {proj.name}
              </h3>

              {/* Stats pill */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50/90 border border-emerald-200/70 text-emerald-800 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{proj.stats}</span>
                </span>
              </div>
              
              {/* Description */}
              <p className="text-[13px] text-zinc-600 leading-relaxed mb-5 flex-grow font-medium">
                {proj.desc}
              </p>
              
              {/* Stack & Repo Footer */}
              <div className="pt-4 border-t border-zinc-100 mt-auto flex flex-col gap-3">
                <div className="text-[11px] font-mono font-semibold text-zinc-500 truncate" title={proj.stack}>
                  {proj.stack}
                </div>
                
                <div className="flex items-center justify-between text-xs font-semibold">
                  <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-emerald-600 transition-colors">
                    <Code2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-500" />
                    <span>Repository</span>
                  </a>
                  <a href={`${proj.repo}/issues`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-700 transition-colors">
                    <span>Issues</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
