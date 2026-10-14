import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Code2, Network, Terminal, ShieldCheck, Box, GitMerge, Copy, Check, ExternalLink, ChevronRight } from 'lucide-react';

export const DocsView = () => {
  const [activeId, setActiveId] = useState('overview');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCmd = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'build', 'route', 'execute', 'eval', 'quickstart'];
      const scrollY = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveId(id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'build', label: 'build-with-ai' },
    { id: 'route', label: 'Model Router' },
    { id: 'execute', label: 'Terminal Agent' },
    { id: 'eval', label: 'AgentBench' },
    { id: 'quickstart', label: 'Quickstart' }
  ];

  const CmdBlock = ({ id, cmds }: { id: string; cmds: string[] }) => (
    <div className="bg-zinc-950 rounded-xl overflow-hidden shadow-lg border border-zinc-800 my-6">
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/60 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="font-mono text-[11px] text-zinc-500">terminal</span>
        </div>
        <button
          onClick={() => copyCmd(id, cmds.join('\n'))}
          className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          {copiedId === id ? <><Check className="w-3 h-3 text-emerald-400" /> <span className="text-emerald-400">Copied</span></> : <><Copy className="w-3 h-3" /> Copy</>}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-[13px] leading-relaxed text-zinc-300">
          {cmds.map((line, i) => (
            <div key={i}>
              {line.startsWith('#') ? (
                <span className="text-zinc-500 italic">{line}</span>
              ) : line.startsWith('$') ? (
                <><span className="text-emerald-400 font-bold">$</span>{line.slice(1)}</>
              ) : (
                <span className="text-zinc-400">{line}</span>
              )}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-start gap-3 py-2">
      <span className="text-[13px] font-bold text-zinc-500 w-28 shrink-0">{label}</span>
      <span className="text-[13px] text-zinc-700 font-medium">{value}</span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 flex gap-12 relative min-h-screen">
      {/* Sidebar */}
      <div className="w-56 shrink-0 hidden md:block">
        <div className="sticky top-28 bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-zinc-200 shadow-sm">
          <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Documentation</h3>
          <nav className="flex flex-col gap-0.5">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-3 py-2 text-[13px] font-semibold rounded-lg transition-colors ${
                  activeId === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
            <a href="https://github.com/PicadoLabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> View on GitHub
            </a>
            <a href="https://github.com/Kaap10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-semibold text-zinc-400 hover:text-emerald-600 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Founder: @Vardhman Gupta</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-3xl">

        {/* ── OVERVIEW ── */}
        <section id="overview" className="mb-20 scroll-mt-28">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Documentation
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">PicadoLabs Architecture</h1>
          <p className="text-[15px] text-zinc-600 font-medium leading-relaxed mb-8">
            Deterministic, verify-first infrastructure for autonomous AI agents. The stack enforces a strict closed-loop: <strong>Plan → Route → Execute → Verify → Evaluate</strong>.
          </p>

          {/* Pipeline Diagram */}
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {[
                { icon: Code2, label: 'Plan', sub: 'build-with-ai', step: '01' },
                { icon: Network, label: 'Route', sub: 'Model Router', step: '02' },
                { icon: Terminal, label: 'Execute', sub: 'Terminal Agent', step: '03' },
                { icon: ShieldCheck, label: 'Verify', sub: 'AST + Tests', step: '04' },
                { icon: Box, label: 'Evaluate', sub: 'AgentBench', step: '05' }
              ].map((s, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center text-center w-full md:w-auto">
                    <div className="text-[10px] font-mono font-bold text-emerald-600 mb-2">{s.step}</div>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center mb-2">
                      <s.icon className="w-5 h-5 text-zinc-800" />
                    </div>
                    <strong className="text-[13px] text-zinc-900">{s.label}</strong>
                    <span className="text-[11px] text-zinc-500 font-medium">{s.sub}</span>
                  </div>
                  {i < 4 && <ArrowRight className="w-5 h-5 text-emerald-400 shrink-0 rotate-90 md:rotate-0" />}
                </React.Fragment>
              ))}
            </div>

            {/* Feedback loop arrow */}
            <div className="mt-6 pt-4 border-t border-zinc-200 border-dashed flex items-center justify-center gap-2">
              <span className="text-[11px] font-mono font-bold text-zinc-400">FAIL →</span>
              <div className="px-3 py-1 rounded-full bg-zinc-900 text-white text-[11px] font-mono font-bold">
                Auto-Repair Loop → Step 03
              </div>
            </div>
          </div>
        </section>


        {/* Problem & Edge Table */}
        <div className="mt-12 mb-20">
          <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-3">What problem we're solving</h3>
          <p className="text-[14px] text-zinc-500 font-medium mb-6">Instead of a monolithic AI prompt, we divide the engineering lifecycle into four specialized, verifiable tools.</p>
          
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm text-[13px]">
            <div className="hidden md:grid grid-cols-[1.1fr_0.6fr_1.6fr_1.7fr] gap-6 bg-zinc-100 border-b border-zinc-200 px-5 py-3 font-bold text-zinc-500 uppercase tracking-wider text-[11px]">
              <div>Project</div>
              <div>Stage</div>
              <div>The Problem</div>
              <div>The Picado Edge</div>
            </div>
            {[
              { project: 'build-with-ai', link: 'https://github.com/PicadoLabs/build-with-ai', stage: 'Plan', problem: 'Developers face blank canvas paralysis, context drift, and broken code when asking AI to build whole applications.', edge: 'Zero-API, local-first CLI that guides step-by-step with 11 production templates and persistent .buildwithai/ context injection (15+ contributors • 1.2k downloads).' },
              { project: 'AI Model Router', link: 'https://github.com/PicadoLabs/ai-model-router', stage: 'Route', problem: 'Companies face ballooning API costs, rate limits, and latency spikes across models without explainable routing logic.', edge: 'Sub-3ms Pareto AI Traffic Control Room UI with triple-mode analysis, Thompson Sampling RL, and PyPI distribution (5+ contributors • 2.2k downloads).' },
              { project: 'Terminal Agent', link: 'https://github.com/PicadoLabs/terminal-agent', stage: 'Execute', problem: 'Autonomous coding agents make sweeping unverified changes, hallucinate task success, and break repository builds.', edge: 'Verify-first sandboxing (psutil/Docker), 12 core tools, 12-category self-healing recovery, and instant checkpoint rollback (2+ contributors • 440+ downloads).' },
              { project: 'AgentBench', link: 'https://github.com/PicadoLabs/agent-bench', stage: 'Evaluate', problem: 'Traditional LLM benchmarks test isolated toy functions, while evaluating multi-turn agents is complex and provider-locked.', edge: 'Instant GitHub PR Ingestion into reproducible tasks, 12 polyglot benchmarks, local Ollama mode ($0 cost), and 5D composite scoring (3+ contributors).' }
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-[1.1fr_0.6fr_1.6fr_1.7fr] px-5 py-4 items-start gap-4 md:gap-6 ${i < 3 ? 'border-b border-zinc-200' : ''} hover:bg-white transition-colors`}>
                <div><a href={row.link} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-2 decoration-emerald-200">{row.project}</a></div>
                <div><span className="inline-flex px-2 py-0.5 rounded-full bg-zinc-200/80 text-[11px] font-bold text-zinc-700 uppercase tracking-wide">{row.stage}</span></div>
                <div className="text-zinc-600 font-medium leading-relaxed pr-2">{row.problem}</div>
                <div className="text-zinc-800 font-semibold leading-relaxed">{row.edge}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-zinc-200 mb-16" />

        {/* ── 1. BUILD-WITH-AI ── */}
        <section id="build" className="mb-20 scroll-mt-28">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[12px] font-bold text-emerald-700">1</span>
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">build-with-ai</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              15+ contributors • 1.2k downloads
            </span>
            <a href="https://github.com/PicadoLabs/build-with-ai" target="_blank" rel="noopener noreferrer" className="ml-auto text-[12px] font-semibold text-zinc-400 hover:text-emerald-600 flex items-center gap-1 transition-colors"><ExternalLink className="w-3.5 h-3.5" /> GitHub</a>
          </div>
          <p className="text-[15px] text-zinc-600 font-medium leading-relaxed mb-4">
            A zero-API, local-first CLI that generates structured architecture plans before any code is written. Prevents context drift and blank-canvas paralysis by persisting state to <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-[13px] font-mono text-zinc-800">.buildwithai/</code> and automatically interpolating prior decisions into downstream prompts.
          </p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <InfoRow label="Tech Stack" value="Node.js (>=18), TypeScript" />
            <div className="border-t border-zinc-100"><InfoRow label="Community" value="15+ contributors • 1.2k downloads" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Cost" value="$0 — Zero API keys required (100% Local)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Templates" value="11 production templates (SaaS MVP, Full-Stack, REST API, FastAPI, Mobile, Flutter, Electron, Chrome Ext, AI Agent, Multi-Agent, Discord Bot)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Storage" value="Branch-scoped .buildwithai/ memory + automated documentation export" /></div>
          </div>

          <CmdBlock id="build-1" cmds={[
            '# 1. Initialize a structured project plan',
            '$ npx build-with-ai init',
            '',
            '# 2. Advance to next step (copies context-injected prompt to clipboard)',
            '$ npx build-with-ai next',
            '',
            '# 3. Record architectural decisions and advance',
            '$ npx build-with-ai done',
            '',
            '# 4. Export complete architectural documentation',
            '$ npx build-with-ai export'
          ]} />
        </section>

        {/* ── 2. MODEL ROUTER ── */}
        <section id="route" className="mb-20 scroll-mt-28">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[12px] font-bold text-emerald-700">2</span>
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Model Router</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              5+ contributors • 2.2k downloads
            </span>
            <a href="https://github.com/PicadoLabs/ai-model-router" target="_blank" rel="noopener noreferrer" className="ml-auto text-[12px] font-semibold text-zinc-400 hover:text-emerald-600 flex items-center gap-1 transition-colors"><ExternalLink className="w-3.5 h-3.5" /> GitHub</a>
          </div>
          <p className="text-[15px] text-zinc-600 font-medium leading-relaxed mb-4">
            Sub-3ms Pareto routing engine and AI Traffic Control Room. Analyzes prompt complexity via regex heuristics (&lt;2.5ms), dense ONNX semantic embeddings, and continuous complexity scoring (0.05 - 0.99) with Thompson Sampling RL auto-tuning.
          </p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <InfoRow label="Tech Stack" value="Python (>=3.10), FastAPI, React 18, PyPI (model-router-cli)" />
            <div className="border-t border-zinc-100"><InfoRow label="Community" value="5+ contributors • 2.2k downloads" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Dashboard" value="AI Traffic Control Room (FastAPI + React with live SSE streaming, A/B simulator)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Resilience" value="Sliding-window circuit breaker + tiered fallback supervisor (429/503 retry)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Observability" value="OpenTelemetry distributed tracing + native Prometheus /metrics" /></div>
          </div>

          {/* Routing Decision Table */}
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm text-[13px] font-medium mb-6">
            <div className="grid grid-cols-3 bg-zinc-50 border-b border-zinc-200 px-4 py-3 text-zinc-500 font-bold">
              <div>Task Complexity</div>
              <div>Constraint</div>
              <div>Selected Model</div>
            </div>
            <div className="grid grid-cols-3 px-4 py-3 border-b border-zinc-100 items-center">
              <div className="text-zinc-800">Simple refactor</div>
              <div className="text-amber-600 font-mono text-[12px]">latency &lt; 500ms</div>
              <div className="font-mono text-zinc-800">Llama-3 via Groq</div>
            </div>
            <div className="grid grid-cols-3 px-4 py-3 border-b border-zinc-100 items-center">
              <div className="text-zinc-800">API integration</div>
              <div className="text-amber-600 font-mono text-[12px]">cost &lt; $0.02</div>
              <div className="font-mono text-zinc-800">GPT-4o-mini</div>
            </div>
            <div className="grid grid-cols-3 px-4 py-3 items-center">
              <div className="text-zinc-800">System architecture</div>
              <div className="text-amber-600 font-mono text-[12px]">quality &gt; 95%</div>
              <div className="font-mono text-zinc-800">Claude 3.5 Sonnet</div>
            </div>
          </div>

          <CmdBlock id="route-1" cmds={[
            '# 1. Install official CLI from PyPI',
            '$ pip install model-router-cli',
            '',
            '# 2. Check system diagnostics & toolchain health',
            '$ modelrouter doctor',
            '',
            '# 3. Route prompt and inspect explainability factors',
            '$ modelrouter route "Write an optimized async task worker in Python"',
            '',
            '# 4. Launch AI Traffic Control Room UI & API Gateway',
            '$ modelrouter ui --open-browser'
          ]} />
        </section>

        {/* ── 3. TERMINAL AGENT ── */}
        <section id="execute" className="mb-20 scroll-mt-28">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[12px] font-bold text-emerald-700">3</span>
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Terminal Agent</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              2+ contributors • 440+ downloads
            </span>
            <a href="https://github.com/PicadoLabs/terminal-agent" target="_blank" rel="noopener noreferrer" className="ml-auto text-[12px] font-semibold text-zinc-400 hover:text-emerald-600 flex items-center gap-1 transition-colors"><ExternalLink className="w-3.5 h-3.5" /> GitHub</a>
          </div>
          <p className="text-[15px] text-zinc-600 font-medium leading-relaxed mb-4">
            Autonomous terminal coding agent built on a verify-first architectural paradigm. Enforces a strict closed loop: <strong>Observe → Plan → Act → Test → Independent Verify → Repair → Prove Completion</strong>. Executes in isolated sandboxes and self-heals across a 12-category failure taxonomy.
          </p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <InfoRow label="Tech Stack" value="Python (>=3.10), Typer, psutil, Docker, PyPI (terminal-agent-cli)" />
            <div className="border-t border-zinc-100"><InfoRow label="Community" value="2+ contributors • 440+ downloads" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Verification" value="Independent Verifier (dual-phase isolated test runner & AST contract assertions)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Sandboxing" value="Dual-layer (psutil process-tree isolation with zombie cleanup + Docker containers)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Security" value="Zero-Trust Secret Guard (.env/keys blocked, tokens redacted) + Command classifier" /></div>
          </div>

          {/* Execution Flow Diagram */}
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-6 shadow-sm mb-6">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-4 w-full justify-center">
                <div className="bg-white border border-zinc-200 px-4 py-3 rounded-xl shadow-sm text-center">
                  <Terminal className="w-5 h-5 text-zinc-700 mx-auto mb-1" />
                  <div className="text-[12px] font-bold text-zinc-900">Execute Code</div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="bg-white border border-zinc-200 px-4 py-3 rounded-xl shadow-sm text-center">
                  <ShieldCheck className="w-5 h-5 text-zinc-700 mx-auto mb-1" />
                  <div className="text-[12px] font-bold text-zinc-900">Run Tests</div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="bg-white border border-zinc-200 px-4 py-3 rounded-xl shadow-sm text-center">
                  <GitMerge className="w-5 h-5 text-zinc-700 mx-auto mb-1" />
                  <div className="text-[12px] font-bold text-zinc-900">AST Verify</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-mono font-bold">PASS → Done</div>
                <div className="px-3 py-1 rounded-full bg-zinc-900 text-white text-[11px] font-mono font-bold">FAIL → 12-Cat Repair</div>
              </div>
            </div>
          </div>

          <CmdBlock id="exec-1" cmds={[
            '# 1. Install Terminal Agent from PyPI',
            '$ pip install terminal-agent-cli',
            '',
            '# 2. Check agent readiness & execution sandbox',
            '$ terminal-agent doctor',
            '',
            '# 3. Run autonomous coding task with independent test verification',
            '$ terminal-agent run "Implement JWT auth middleware with pytest tests"',
            '',
            '# 4. Inspect status or resume session from safe checkpoint',
            '$ terminal-agent resume'
          ]} />
        </section>

        {/* ── 4. AGENTBENCH ── */}
        <section id="eval" className="mb-20 scroll-mt-28">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[12px] font-bold text-emerald-700">4</span>
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">AgentBench</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              3+ contributors
            </span>
            <a href="https://github.com/PicadoLabs/agent-bench" target="_blank" rel="noopener noreferrer" className="ml-auto text-[12px] font-semibold text-zinc-400 hover:text-emerald-600 flex items-center gap-1 transition-colors"><ExternalLink className="w-3.5 h-3.5" /> GitHub</a>
          </div>
          <p className="text-[15px] text-zinc-600 font-medium leading-relaxed mb-4">
            Provider-agnostic, local-first evaluation and benchmarking platform for autonomous coding agents. Measures multi-turn agents on 12 standardized polyglot tasks, ingests public GitHub PRs into immutable benchmarks, and computes 5D composite SWE scores.
          </p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden mb-6">
            <InfoRow label="Tech Stack" value="Python (>=3.10), Node.js (>=18), FastAPI, React" />
            <div className="border-t border-zinc-100"><InfoRow label="Community" value="3+ contributors" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Cost" value="$0.00 with free local Ollama models (Qwen2.5-Coder, DeepSeek)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Tasks" value="12 standardized polyglot challenges (Python pytest + Node.js node --test)" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="PR Ingestion" value="CLI & Web tool to turn any public GitHub PR into a benchmark task" /></div>
            <div className="border-t border-zinc-100"><InfoRow label="Sandboxing" value="Dual-layer (Safe LocalProcessSandbox + containerized DockerSandbox)" /></div>
          </div>

          {/* 5D Score Breakdown */}
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm text-[13px] font-medium mb-6">
            <div className="grid grid-cols-3 bg-zinc-50 border-b border-zinc-200 px-4 py-3 text-zinc-500 font-bold">
              <div>Metric</div>
              <div>Weight</div>
              <div>Description</div>
            </div>
            {[
              ['Correctness', '50%', 'Tests pass + AST contract validates'],
              ['Pass Rate', '25%', 'Percentage of benchmark tasks resolved'],
              ['Quality', '10%', 'Code style, cleanliness, and maintainability'],
              ['Efficiency', '10%', 'Token consumption, step count, and latency'],
              ['Repair', '5%', 'Autonomous self-healing success rate']
            ].map(([m, w, d], i) => (
              <div key={i} className={`grid grid-cols-3 px-4 py-2.5 items-center ${i < 4 ? 'border-b border-zinc-100' : ''}`}>
                <div className="text-zinc-800 font-semibold">{m}</div>
                <div className="text-emerald-600 font-mono font-bold">{w}</div>
                <div className="text-zinc-500">{d}</div>
              </div>
            ))}
          </div>

          <CmdBlock id="eval-1" cmds={[
            '# 1. Verify benchmark health & execution sandboxes',
            '$ python agentbench.py doctor',
            '',
            '# 2. List available benchmarks across Python & Node.js',
            '$ python agentbench.py list',
            '',
            '# 3. Run benchmark sweep with free local model via Ollama ($0 API cost)',
            '$ python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b',
            '',
            '# 4. Ingest public GitHub PR into an immutable benchmark task',
            '$ python agentbench.py ingest --pr https://github.com/org/repo/pull/123'
          ]} />
        </section>

        <hr className="border-zinc-200 mb-16" />

        {/* ── QUICKSTART ── */}
        <section id="quickstart" className="mb-10 scroll-mt-28">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            5-Minute Setup
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-6">Full Pipeline Quickstart</h2>

          <CmdBlock id="qs-1" cmds={[
            '# Step 1: Initialize project architecture with persistent context',
            '$ npx build-with-ai init',
            '',
            '# Step 2: Verify toolchain health across all systems',
            '$ modelrouter doctor',
            '$ terminal-agent doctor',
            '$ python agentbench.py doctor',
            '',
            '# Step 3: Run the end-to-end verified pipeline',
            '$ npx build-with-ai next',
            '$ modelrouter route "Build a secure token bucket rate limiter in Python"',
            '$ terminal-agent run "Implement token bucket rate limiter with pytest tests"',
            '$ python agentbench.py run --benchmark fix-rate-limiter --provider ollama'
          ]} />
        </section>

      </div>
    </div>
  );
};
