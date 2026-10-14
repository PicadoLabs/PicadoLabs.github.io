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
      raw: '# 1. Verify environment health and local execution sandboxes\n$ python agentbench.py doctor\n\n# 2. Run benchmark sweep with free local model via Ollama ($0 API cost)\n$ python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b\n\n# 3. Ingest any public GitHub PR into a reproducible benchmark task\n$ python agentbench.py ingest --pr https://github.com/org/repo/pull/123',
      content: (
        <>
          <span className="text-zinc-500 italic"># 1. Verify environment health and local execution sandboxes</span><br />
          <span className="text-emerald-400 font-bold">$</span> python agentbench.py doctor<br /><br />
          <span className="text-zinc-500 italic"># 2. Run benchmark sweep with free local model via Ollama ($0 API cost)</span><br />
          <span className="text-emerald-400 font-bold">$</span> python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b<br /><br />
          <span className="text-zinc-500 italic"># 3. Ingest any public GitHub PR into a reproducible benchmark task</span><br />
          <span className="text-emerald-400 font-bold">$</span> python agentbench.py ingest --pr https://github.com/org/repo/pull/123
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

        <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide border-b border-zinc-200">
          {(Object.keys(snippets) as Array<keyof typeof snippets>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={"px-4 py-2 rounded-lg font-mono text-[13px] font-semibold whitespace-nowrap transition-colors " + 
                (activeTab === key
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm"
                  : "bg-transparent text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent")
              }
            >
              {snippets[key].label}
            </button>
          ))}
        </div>

        <div className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/50 border-b border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-amber-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors cursor-pointer" />
              </div>
              <span className="font-mono text-xs text-zinc-400">{snippets[activeTab].file}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-mono text-[11px] transition-colors border border-zinc-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? <span className="text-emerald-400">Copied</span> : 'Copy'}
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[13px] sm:text-[14px] leading-relaxed text-zinc-300"
              >
                {snippets[activeTab].content}
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
