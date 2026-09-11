<div align="center">

# Picado Labs

**Deterministic, verify-first software systems for autonomous AI agents.**

*Open-source infrastructure for planning, routing, executing, verifying, and evaluating AI-driven software development.*

[![GitHub Org](https://img.shields.io/badge/GitHub-PicadoLabs-181717?style=flat-square&logo=github)](https://github.com/PicadoLabs)
[![Website](https://img.shields.io/badge/Website-picadolabs.me-2e7d58?style=flat-square)](https://picadolabs.me)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![X](https://img.shields.io/badge/X-@PicadoLabs-000000?style=flat-square&logo=x)](https://x.com/PicadoLabs)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Picado_Labs-0077b5?style=flat-square&logo=linkedin)](https://www.linkedin.com/company/picado-labs/)

[Ecosystem](#the-engineering-lifecycle) • [Projects](#core-projects) • [Quickstart](#5-minute-ecosystem-quickstart) • [Repositories](#repositories--issues) • [Community](#community--maintainers)

</div>

---

## The Engineering Lifecycle

Picado Labs structures autonomous software development into disciplined, closed-loop stages:

$$\textbf{PLAN} \longrightarrow \textbf{ROUTE} \longrightarrow \textbf{EXECUTE} \longrightarrow \textbf{VERIFY} \longrightarrow \textbf{EVALUATE}$$

```text
[ Software Goal / Spec ]
           │
           ▼
┌────────────────────────────────────────────────────────┐
│ 01 • BUILD-WITH-AI                                     │
│ PLAN  ──>  Context • Memory • Prompt Architect         │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 02 • MODEL ROUTER                                      │
│ ROUTE ──>  Sub-3ms Pareto (Quality, Cost, Latency)     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│ 03 • TERMINAL AGENT                                    │ ◄────────────────────────┐
│ EXECUTE ──> psutil Sandbox • 12 Tools • Checkpoints    │                          │
└──────────────────────────┬─────────────────────────────┘                          │
                           │                                                        │
                           ▼                                                        │
┌────────────────────────────────────────────────────────┐                          │
│ 04 • INDEPENDENT VERIFIER                              │                          │
│ VERIFY ──> Automated Tests • AST Proof of Done         │                          │
└──────────────────────────┬─────────────────────────────┘                          │
                           │                                                        │
                 ┌─────────┴─────────┐                                              │
                 │                   │                                              │
               [PASS]              [FAIL] ─── Auto-Repair / Rollback Loop ──────────┘
                 │
                 ▼
┌────────────────────────────────────────────────────────┐
│ 05 • AGENTBENCH                                        │
│ EVALUATE ──> 12 Tasks • 5D SWE Score • Telemetry       │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ├─ "Performance Feedback" ──> [ 02 • Model Router ]
                           └─ "Failure Insights"     ──> [ 03 • Terminal Agent ]
```

---

## Core Projects

| Project | Stage | Role | Tech Stack | Repository | Issue Tracker |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **build-with-ai** | `01 • PLAN` | Zero-API CLI orchestrator & prompt architect | Node.js (>=16), TypeScript | [GitHub](https://github.com/PicadoLabs/build-with-ai) • [npm](https://www.npmjs.com/package/build-with-ai) | [Issues](https://github.com/PicadoLabs/build-with-ai/issues) |
| **Model Router** | `02 • ROUTE` | Sub-3ms Pareto AI Traffic Control Room | Python (>=3.10), FastAPI, React 18 | [ai-model-router](https://github.com/PicadoLabs/ai-model-router) | [Issues](https://github.com/PicadoLabs/ai-model-router/issues) |
| **Terminal Agent** | `03 • EXECUTE & VERIFY` | Sandboxed verify-first autonomous coding agent | Python (>=3.10), Typer, psutil | [terminal-agent](https://github.com/PicadoLabs/terminal-agent) | [Issues](https://github.com/PicadoLabs/terminal-agent/issues) |
| **AgentBench** | `04 • EVALUATE` | 12-task benchmark suite & 5D SWE scoring platform | Python (>=3.10), Node.js (>=18), FastAPI | [agent-bench](https://github.com/PicadoLabs/agent-bench) | [Issues](https://github.com/PicadoLabs/agent-bench/issues) |

---

## Projects Overview

### 1. build-with-ai - *Plan & Orchestrate*
- **Zero-API, 100% Private**: $0 cost, 0 API keys, local `.buildwithai/` context store (`state.json`, `context.json`, `history/`).
- **Dynamic Context Injection**: Automatically injects architectural decisions into downstream prompts via `{{decisions.key}}`.
- **7 Production Workflows**: Built-in templates for SaaS MVP, Full-Stack Web App, REST API, Mobile App, Flutter App, Chrome Extension, and AI Agent & RAG.
```bash
npx build-with-ai init
npx build-with-ai next
```

### 2. Model Router - *Route & Optimize*
- **Sub-3ms Pareto Engine**: Regex & heuristic analysis (<2.5ms) + in-memory multi-criteria scoring (<0.5ms) across Quality, Cost, Speed, Capabilities, and Reliability.
- **Budget Control & Fallback**: Tiered fallback (HTTP 429/503 retry cascading) and automated spend thresholds (80%, 95% local-only Ollama, 100% block).
- **Traffic Control Room**: FastAPI backend (port 8000) + React 18 dashboard (port 5173) with real-time SSE topology streaming and telemetry export.
```bash
python backend/app/cli/main.py doctor
python backend/app/cli/main.py route "Build async rate limiter in Python"
```

### 3. Terminal Agent - *Execute & Verify*
- **Verify-First Architecture**: Requires 0 test failures executed inside an isolated sandbox before declaring completion.
- **Deterministic Context Engine**: BM25 keyword + AST symbol ranking (`def`, `class`, `function`) without heavy vector databases.
- **Process Sandboxing & Self-Healing**: Local `psutil` process-tree termination, Docker sandbox, and 12-category automated error recovery.
```bash
terminal-agent doctor
terminal-agent run "Implement JWT auth middleware with pytest tests"
```

### 4. AgentBench - *Benchmark & Evaluate*
- **12 Standardized Tasks**: Polyglot evaluation across Python (`pytest`) and Node.js (`node --test`).
- **5D Composite SWE Scoring**: $0.50 \times \text{Correctness} + 0.25 \times \text{PassRate} + 0.10 \times \text{Quality} + 0.10 \times \text{Efficiency} + 0.05 \times \text{Repair}$.
- **PR Ingestion & Live Dashboard**: Ingests real GitHub PR diffs into executable tasks with React leaderboard and CI/CD gatekeeper.
```bash
python agentbench.py doctor
python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b
```

---

## 5-Minute Ecosystem Quickstart

```bash
# 1. Initialize project with disciplined prompt architecture
npx build-with-ai init

# 2. Check toolchain readiness
python backend/app/cli/main.py doctor  # Model Router
terminal-agent doctor                 # Terminal Agent
python agentbench.py doctor           # AgentBench

# 3. Plan -> Route -> Execute -> Verify -> Evaluate
npx build-with-ai next
python backend/app/cli/main.py route "Build a secure token bucket rate limiter in Python"
terminal-agent run "Implement token bucket rate limiter with pytest tests"
python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b
```

---

## Repositories & Issues

- **build-with-ai**: [PicadoLabs/build-with-ai](https://github.com/PicadoLabs/build-with-ai) • [npm package](https://www.npmjs.com/package/build-with-ai) • [Issues](https://github.com/PicadoLabs/build-with-ai/issues)
- **Model Router**: [PicadoLabs/ai-model-router](https://github.com/PicadoLabs/ai-model-router) • [Issues](https://github.com/PicadoLabs/ai-model-router/issues)
- **Terminal Agent**: [PicadoLabs/terminal-agent](https://github.com/PicadoLabs/terminal-agent) • [Issues](https://github.com/PicadoLabs/terminal-agent/issues)
- **AgentBench**: [PicadoLabs/agent-bench](https://github.com/PicadoLabs/agent-bench) • [Issues](https://github.com/PicadoLabs/agent-bench/issues)
- **Organization**: [github.com/PicadoLabs](https://github.com/PicadoLabs)

---

## Community & Maintainers

- **Founder & Maintainer**: **Vardhman (Kap10)** - [GitHub](https://github.com/Kaap10) • [X (Twitter)](https://x.com/Kap10x)
- **Official Organization X**: [@PicadoLabs](https://x.com/PicadoLabs)
- **LinkedIn**: [Picado Labs](https://www.linkedin.com/company/picado-labs/)
- **Official Website**: [picadolabs.me](https://picadolabs.me)
- **Contact & Inquiries**: [picadolabs@gmail.com](mailto:picadolabs@gmail.com)

---

<div align="center">

<sub><b>Picado Labs &bull; Open source. Practical AI infrastructure. Built to be verified.</b></sub>

</div>