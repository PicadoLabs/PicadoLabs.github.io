<div align="center">

# Picado Labs

**Deterministic, verify-first software systems for autonomous AI agents.**

*Open-source infrastructure for planning, routing, executing, verifying, and evaluating AI-driven software development.*

[![GitHub Org](https://img.shields.io/badge/GitHub-PicadoLabs-181717?style=flat-square&logo=github)](https://github.com/PicadoLabs)
[![Website](https://img.shields.io/badge/Website-picadolabs.me-2e7d58?style=flat-square)](https://picadolabs.me)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
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

# PicadoLabs Open Source Projects: Deep Analysis & Competitive Strategy

Welcome to the PicadoLabs organization repository overview. PicadoLabs currently maintains four primary open-source projects. Each project is designed to solve a specific real-world problem in the rapidly evolving AI engineering and developer tools ecosystem.

This document outlines the context, real-world applications, and competitive advantages of each project. It serves as a unified strategy to ensure all PicadoLabs projects maintain a cohesive identity while clearly communicating their unique value propositions.

---

## 1. Agent Bench
**Tagline:** Provider-agnostic evaluation and benchmarking platform for autonomous AI coding agents.

### The Real-World Problem
As AI coding agents become more autonomous, developers and researchers struggle to measure their actual capabilities objectively. Testing agents is often ad-hoc, tied to specific LLM providers, or requires heavy, complex environments (like running thousands of Docker containers). Teams need a way to answer: *"Is this new agent prompt or model actually better at fixing bugs than the old one?"*

### Competitors
- **SWE-bench:** The industry standard, but extremely heavy, slow to run, and hard to set up locally.
- **OpenAI Evals:** Tightly coupled to OpenAI's ecosystem and less focused on autonomous multi-step agents.
- **LangChain Benchmarks / AutoGPT:** Often fragmented or tied to specific frameworks.

### Why Agent Bench is Unique (The "Edge")
- **Instant GitHub PR Ingestion:** The killer feature. Users can turn *any* public GitHub PR into a reproducible benchmark task with a single CLI command.
- **Provider & Framework Agnostic:** Tests the *agent's* ability to solve the problem, regardless of whether it uses Ollama, OpenAI, or a custom local model.
- **Beautiful Telemetry & UI:** Unlike CLI-only tools, Agent Bench includes a React-based Web UI for visual telemetry, leaderboards, and failure taxonomy.
- **Local Sandbox Flexibility:** Supports both `LocalProcessSandbox` for speed and `DockerSandbox` for isolation.

---

## 2. AI Model Router
**Tagline:** Intelligent, explainable LLM request routing platform & AI Traffic Control Room.

### The Real-World Problem
Companies building AI applications face ballooning API costs, rate limits, and latency spikes. They want to use large models (like GPT-4 or Claude 3.5 Sonnet) for complex reasoning, but cheaper/faster models (like Llama 3 or Haiku) for simple tasks. Manually writing logic to route these requests is brittle and hard to maintain.

### Competitors
- **LiteLLM / RouteLLM:** Focus heavily on API translation and basic routing, but lack deep visual observability.
- **Martian / Portkey:** Enterprise SaaS solutions that require sending data to a third party.

### Why AI Model Router is Unique (The "Edge")
- **The "Traffic Control Room":** A stunning frontend UI that makes routing decisions transparent and explainable. You don't just route; you see *why* a request went to a specific model.
- **100% Local & Self-Hosted:** No data leaves the user's infrastructure.
- **A/B Policy Experimentation:** Built-in tools to test different routing policies (e.g., "lowest cost" vs "balanced") and see projected savings.
- **Dual-Mode Analyzer:** Uses both fast heuristics (regex/length) and LLM-based complexity scoring to route requests efficiently.

---

## 3. build-with-ai
**Tagline:** A minimal, zero-API CLI that guides developers through building software with any AI by giving them the right prompt at each step.

### The Real-World Problem
Developers want to build complex applications using AI (like ChatGPT or Claude web interfaces), but they often don't know *what* to ask or in *what order*. They end up with monolithic, broken code because they asked the AI to "build a whole app" in one prompt.

### Competitors
- **Cursor / GitHub Copilot:** Integrated into the IDE, but require subscriptions, API keys, and sometimes struggle with high-level architectural scaffolding across an entire project.
- **Devin / AutoGPT:** Fully autonomous but often spin out of control, cost money, and are a "black box."
- **v0.dev:** Great for UI, but lacks full-stack scaffolding (database, backend, etc.).

### Why build-with-ai is Unique (The "Edge")
- **Zero API / Zero Cost:** Operates purely via the terminal and clipboard. The user pastes the generated prompts into their existing free/paid AI web interface (ChatGPT/Claude).
- **Curated Expert Workflows:** Provides exact, battle-tested prompt sequences for 9 different architectures (SaaS MVP, Chrome Extension, Discord Bot, etc.).
- **Educational:** It doesn't just write code; it teaches the user how to orchestrate AI-assisted development step-by-step.
- **Resilient & Stateful:** Remembers where you are in the build process without accessing your source code.

---

## 4. Terminal Agent
**Tagline:** Autonomous terminal-based coding agent designed around verifiable software changes. Build. Verify. Ship.

### The Real-World Problem
Autonomous coding agents (like Aider or OpenHands) often make sweeping changes that break the build. They lack a strict verification loop and can leave a repository in a messy state if they fail halfway through a task.

### Competitors
- **Aider:** Excellent AI pair programmer, but relies heavily on the user to verify changes.
- **OpenHands (formerly OpenDevin):** Very powerful but requires a heavy Docker setup and is optimized for complex environments rather than fast, local terminal workflows.

### Why Terminal Agent is Unique (The "Edge")
- **Verification-First Engine:** The agent doesn't just write code; it is strictly gated by an independent verification engine (e.g., running `pytest` automatically before committing).
- **Checkpoints & Safe Rollback:** Built-in state snapshots. If the agent goes down a rabbit hole and breaks things, the user can instantly roll back to a known good state.
- **Lean & Terminal-Native:** No heavy Electron apps or complex Docker setups required. It's a pure, fast Python CLI designed for terminal power users.
- **Strict Security Boundaries:** Built-in policies to prevent destructive commands or unauthorized network access during autonomous execution.

---

## Standardization Strategy

To unify the PicadoLabs brand, all four projects will share a common standard:

1. **GitHub README Template:**
   - Clear Tagline and Badges.
   - **"The Problem it Solves"** section (highlighting the real-world need).
   - **"Why it's Unique"** section (competitive advantage).
   - Standardized Installation, Usage, and Project Structure sections.
   - Consistent PicadoLabs branding footer.

2. **CI/CD Workflows (`.github/workflows/ci.yml`):**
   - Unified naming conventions.
   - Matrix testing across OS and language versions.
   - Standardized linting and testing steps.

3. **Contributing Guidelines (`CONTRIBUTING.md`):**
   - Unified Code of Conduct reference.
   - Standardized PR submission rules.
   - Consistent local development setup instructions.


