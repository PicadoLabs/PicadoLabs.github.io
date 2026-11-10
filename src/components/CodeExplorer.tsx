import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export const CodeExplorer = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'route' | 'execute' | 'eval'>('plan');
  const [copied, setCopied] = useState(false);

  const snippets = {
    plan: {
      label: '01 • build-with-ai',
      file: 'quickstart.sh',
      raw: '# 1. Initialize a structured architecture plan with zero API keys\n$ npx build-with-ai init --template saas-mvp\n\n# 2. Advance to the next task and copy enriched context to clipboard\n$ npx build-with-ai next\n\n# 3. Mark phase complete and record architectural decisions to .buildwithai/\n$ npx build-with-ai done',
      content: (
        <>
          <span className="text-zinc-500 italic"># 1. Initialize a structured architecture plan with zero API keys</span><br />
          <span className="text-emerald-400 font-bold">$</span> npx build-with-ai init --template <span className="text-amber-300">saas-mvp</span><br /><br />
          <span className="text-zinc-500 italic"># 2. Advance to the next task and copy enriched context to clipboard</span><br />
          <span className="text-emerald-400 font-bold">$</span> npx build-with-ai next<br /><br />
          <span className="text-zinc-500 italic"># 3. Mark phase complete and record architectural decisions to .buildwithai/</span><br />
          <span className="text-emerald-400 font-bold">$</span> npx build-with-ai done
        </>
      )
    },
    route: {
      label: '02 • Model Router',
      file: 'modelrouter.sh',
      raw: '# 1. Install official Model Router package from PyPI\n$ pip install model-router-cli\n\n# 2. Sub-3ms explainable routing (<3ms heuristics + ONNX embeddings)\n$ modelrouter route "Write an optimized async task worker in Python"\n\n# 3. Launch the AI Traffic Control Room UI & API Gateway\n$ modelrouter ui --open-browser',
      content: (
        <>
          <span className="text-zinc-500 italic"># 1. Install official Model Router package from PyPI</span><br />
          <span className="text-emerald-400 font-bold">$</span> pip install model-router-cli<br /><br />
          <span className="text-zinc-500 italic"># 2. Sub-3ms explainable routing (&lt;3ms heuristics + ONNX embeddings)</span><br />
          <span className="text-emerald-400 font-bold">$</span> modelrouter route <span className="text-amber-300">"Write an optimized async task worker in Python"</span><br /><br />
          <span className="text-zinc-500 italic"># 3. Launch the AI Traffic Control Room UI &amp; API Gateway</span><br />
          <span className="text-emerald-400 font-bold">$</span> modelrouter ui --open-browser
        </>
      )
    },
    execute: {
      label: '03 • Terminal Agent',
      file: 'terminal_agent.sh',
      raw: '# 1. Install Terminal Agent from PyPI\n$ pip install terminal-agent-cli\n\n# 2. Run autonomous task with independent sandbox test verification\n$ terminal-agent run "Implement JWT auth middleware with pytest tests"\n\n# 3. Inspect status or resume session from safe checkpoint\n$ terminal-agent resume',
      content: (
        <>
          <span className="text-zinc-500 italic"># 1. Install Terminal Agent from PyPI</span><br />
          <span className="text-emerald-400 font-bold">$</span> pip install terminal-agent-cli<br /><br />
          <span className="text-zinc-500 italic"># 2. Run autonomous task with independent sandbox test verification</span><br />
          <span className="text-emerald-400 font-bold">$</span> terminal-agent run <span className="text-amber-300">"Implement JWT auth middleware with pytest tests"</span><br /><br />
          <span className="text-zinc-500 italic"># 3. Inspect status or resume session from safe checkpoint</span><br />
          <span className="text-emerald-400 font-bold">$</span> terminal-agent resume
        </>
      )
    },
    eval: {
      label: '04 • AgentBench',
      file: 'agentbench.sh',
      raw: '# 1. Install official AgentBench package from PyPI\n$ pip install agentbench-core\n\n# 2. Run benchmark sweep with free local model via Ollama ($0 API cost)\n$ python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b\n\n# 3. Ingest any public GitHub PR into a reproducible benchmark task\n$ python agentbench.py ingest --pr https://github.com/org/repo/pull/123',
      content: (
        <>
          <span className="text-zinc-500 italic"># 1. Install official AgentBench package from PyPI</span><br />
          <span className="text-emerald-400 font-bold">$</span> pip install agentbench-core<br /><br />
          <span className="text-zinc-500 italic"># 2. Run benchmark sweep with free local model via Ollama ($0 API cost)</span><br />
          <span className="text-emerald-400 font-bold">$</span> python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model <span className="text-amber-300">qwen2.5-coder:1.5b</span><br /><br />
          <span className="text-zinc-500 italic"># 3. Ingest any public GitHub PR into a reproducible benchmark task</span><br />
          <span className="text-emerald-400 font-bold">$</span> python agentbench.py ingest --pr <span className="text-amber-300">https://github.com/org/repo/pull/123</span>
        </>
      )
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200" id="code-explorer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Developer Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Clean primitives built for developers and agents.
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['plan', 'route', 'execute', 'eval'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCopied(false); }}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-zinc-900 text-white shadow-md'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              {snippets[tab].label}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/60 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-xs text-zinc-400 ml-1">{snippets[activeTab].file}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-mono text-[11px] transition-colors border border-zinc-700"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Content */}
          <div className="p-6 overflow-x-auto min-h-[170px] flex items-center">
            <pre className="font-mono text-[13px] leading-relaxed text-zinc-300">
              {snippets[activeTab].content}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
