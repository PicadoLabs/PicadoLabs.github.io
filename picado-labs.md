<div align="center">

# Picado Labs

**Deterministic, verify-first software systems for autonomous AI agents.**

*Open-source infrastructure for planning, routing, executing, verifying, and evaluating AI-driven software development.*

[![GitHub Org](https://img.shields.io/badge/GitHub-PicadoLabs-181717?style=flat-square&logo=github)](https://github.com/PicadoLabs)
[![Website](https://img.shields.io/badge/Website-picadolabs.me-2e7d58?style=flat-square)](https://picadolabs.me)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![X](https://img.shields.io/badge/X-@PicadoLabs-000000?style=flat-square&logo=x)](https://x.com/PicadoLabs)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Picado_Labs-0077b5?style=flat-square&logo=linkedin)](https://www.linkedin.com/company/picado-labs/)

[Ecosystem](#the-picado-labs-ecosystem) • [Projects](#core-projects) • [Architecture](#the-closed-loop-architecture) • [Comparison](#architectural-comparison) • [Quickstart](#5-minute-ecosystem-quickstart) • [Contributing](#contributing)

</div>

---

## The Picado Labs Ecosystem

Picado Labs builds an end-to-end engineering pipeline for autonomous software development. Instead of treating AI coding as a single monolithic prompt, the Picado Labs suite structures development into disciplined, verifiable stages:

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

### The Engineering Paradigm

$$\textbf{PLAN} \longrightarrow \textbf{ROUTE} \longrightarrow \textbf{EXECUTE} \longrightarrow \textbf{VERIFY} \longrightarrow \textbf{EVALUATE}$$

1. **Plan the work**: Break monolithic goals into sequential architectural phases with persistent memory.
2. **Route the request**: Dispatch prompts to the optimal local model or cloud frontier LLM in sub-3ms.
3. **Execute in sandboxes**: Run tool-based autonomous loops within secure, process-tree bounded execution environments.
4. **Demand verification**: Require objective test execution and AST validation before accepting completion.
5. **Evaluate objectively**: Benchmark performance across standardized tasks with 5D composite SWE scoring.

---

## Core Projects

| Project | Stage | Primary Role | Tech Stack | Repository / Package | Issue Tracker |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **build-with-ai** | `01 • PLAN` | Zero-API interactive CLI orchestrator & prompt architect with persistent context injection | Node.js (>=16), TypeScript / CommonJS | [GitHub](https://github.com/PicadoLabs/build-with-ai) • [npm](https://www.npmjs.com/package/build-with-ai) | [Issues](https://github.com/PicadoLabs/build-with-ai/issues) |
| **Model Router** | `02 • ROUTE` | Sub-3ms Pareto task-to-model routing gateway & AI Traffic Control Room | Python (>=3.10), FastAPI, React 18, SQLite (WAL) | [PicadoLabs/ai-model-router](https://github.com/PicadoLabs/ai-model-router) | [Issues](https://github.com/PicadoLabs/ai-model-router/issues) |
| **Terminal Agent** | `03 • EXECUTE & VERIFY` | Verify-first autonomous coding agent with psutil process sandboxing & 12-category auto-recovery | Python (>=3.10), Typer, Rich, psutil, SQLite | [PicadoLabs/terminal-agent](https://github.com/PicadoLabs/terminal-agent) | [Issues](https://github.com/PicadoLabs/terminal-agent/issues) |
| **AgentBench** | `04 • EVALUATE` | Standardized 12-task polyglot evaluation suite & 5D composite SWE scoring platform | Python (>=3.10), Node.js (>=18), FastAPI, React 18 | [PicadoLabs/agent-bench](https://github.com/PicadoLabs/agent-bench) | [Issues](https://github.com/PicadoLabs/agent-bench/issues) |

---

## 01 - build-with-ai

### *Plan & Orchestrate • Zero-API Prompt Architect*

[![npm version](https://img.shields.io/npm/v/build-with-ai?style=flat-square&color=cb3837&logo=npm)](https://www.npmjs.com/package/build-with-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![Node >= 16](https://img.shields.io/badge/Node-%3E%3D16-green?style=flat-square&logo=nodedotjs)](https://nodejs.org)

GitHub: **[PicadoLabs/build-with-ai](https://github.com/PicadoLabs/build-with-ai)** • npm: **[build-with-ai](https://www.npmjs.com/package/build-with-ai)** (`npx build-with-ai`)

An interactive CLI that acts as your software architect. It breaks project development down into disciplined, sequential phases and generates context-aware, copy-ready prompts for any AI assistant (Claude, ChatGPT, Cursor, Gemini, DeepSeek, Copilot, or local Ollama models).

```text
┌────────────────────────────────────────┐          ┌────────────────────────────────────────┐
│            LOCAL WORKSPACE             │          │            ANY AI ASSISTANT            │
│                                        │          │   (Claude, GPT-4o, Cursor, Ollama)     │
│  ┌──────────────────────────────────┐  │          │                                        │
│  │        build-with-ai CLI         │  │ 1. Auto  │  ┌──────────────────────────────────┐  │
│  │   (Interactive Prompt Engine)    ├──┼── Copy ──┼─>│         System Clipboard         │  │
│  └──────────────────┬───────────────┘  │  Prompt  │  └──────────────────┬───────────────┘  │
│                     ▲                  │          │                     │ 2. Paste Prompt  │
│                     │                  │          │                     ▼                  │
│             7. Injects Context         │          │  ┌──────────────────────────────────┐  │
│             into Future Prompts        │          │  │       AI Assistant Engine        │  │
│                     │                  │          │  │   Generates Architecture/Code    │  │
│  ┌──────────────────┴───────────────┐  │          │  └──────────────────┬───────────────┘  │
│  │       .buildwithai/ STORE        │  │          │                     │ 3. Produces      │
│  │   • context.json (Memory)        │  │          │                     │    Architecture  │
│  │   • state.json   (Checklist)     │  │          │                     ▼                  │
│  │   • CONTEXT.md   (Decisions)     │  │          │  ┌──────────────────────────────────┐  │
│  └──────────────────▲───────────────┘  │          │  │            DEVELOPER             │  │
│                     │                  │          │  │                                  │  │
│             6. Saves Architectural     │ 4. Code  │  │   • Writes Application Code      │  │
│                Decisions (done)        │<─────────┼──┤   • Records Decisions (done)     │  │
│                     │                  │          │  └──────────────────────────────────┘  │
│  ┌──────────────────┴───────────────┐  │          │                                        │
│  │       APPLICATION CODE           │  │          │                                        │
│  │      (Never touched by CLI)      │  │          │                                        │
│  └──────────────────────────────────┘  │          │                                        │
└────────────────────────────────────────┘          └────────────────────────────────────────┘
```

### Key Capabilities
- **Zero-API, 100% Private**: Requires 0 API keys, 0 accounts, 0 network telemetry, and $0.00 cost. Never overwrites user code.
- **Local Context Memory Store**: State maintained in `.buildwithai/` (`state.json`, `context.json`, `history/`, and `CONTEXT.md`).
- **Dynamic Context Interpolation**: Automatically injects prior decisions into downstream prompts via `{{decisions.key}}` interpolation to eliminate chat drift.
- **7 Production Templates**:
  - `web-app` (Full-Stack Web Application - 23 steps)
  - `saas-mvp` (Modern SaaS MVP - 15 steps)
  - `rest-api` (Backend REST API Service - 10 steps)
  - `mobile-app` (Cross-Platform Mobile App with Expo - 15 steps)
  - `flutter-app` (Flutter Mobile Application - 16 steps)
  - `chrome-extension` (Chrome Browser Extension - 12 steps)
  - `ai-agent` (AI Agent & RAG Pipeline - 14 steps)
- **Deterministic Documentation Export**: Generates complete `README.md`, `BUILD_LOG.md`, and `.buildwithai/CONTEXT.md`.

### CLI Quickstart
```bash
# Run interactive setup wizard
npx build-with-ai init

# Generate prompt for next engineering phase
npx build-with-ai next

# Record decisions and advance workflow
npx build-with-ai done

# Inspect or edit context memory
npx build-with-ai context
npx build-with-ai set decisions.database "PostgreSQL with Prisma ORM"

# Export complete project documentation
npx build-with-ai export
```

---

## 02 - Model Router

### *Route & Optimize • Sub-3ms Pareto AI Traffic Control*

[![Python >= 3.10+](https://img.shields.io/badge/Python-%3E%3D3.10%2B-3776ab?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![FastAPI](https://img.shields.io/badge/FastAPI-REST_%26_SSE-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)

GitHub: **[PicadoLabs/ai-model-router](https://github.com/PicadoLabs/ai-model-router)**

An intelligent, explainable Large Language Model routing gateway and real-time AI Traffic Control Room that dynamically selects the optimal local or cloud model for every task.

```text
                  [ Incoming Request ]
                            │
                            ▼
          ┌───────────────────────────────────┐
          │   Heuristic Feature Extraction    │  ──> <2.5ms (Task Type, Complexity, Context)
          └─────────────────┬─────────────────┘
                            │
                            ▼
          ┌───────────────────────────────────┐
          │     Hard Constraint Pruning       │  ──> Context Windows & Capability Filter
          └─────────────────┬─────────────────┘
                            │
                            ▼
          ┌───────────────────────────────────┐
          │  Multi-Criteria Pareto Scoring    │  ──> <0.5ms In-Memory Matrix
          └─────────────────┬─────────────────┘
                            │
        ┌──────────────┬────┴─────────┬──────────────┐
        ▼              ▼              ▼              ▼
   ┌─────────┐   ┌────────────┐  ┌───────────┐  ┌─────────────┐
   │ Quality │   │    Cost    │  │  Latency  │  │ Reliability │
   │ Weight  │   │ Efficiency │  │   Speed   │  │   Weight    │
   └────┬────┘   └─────┬──────┘  └─────┬─────┘  └──────┬──────┘
        └──────────────┼───────────────┴───────────────┘
                       │
                       ▼
             [ Selected Candidate ]
                       │
                       ▼
             ┌───────────────────┐
             │  Execution Guard  │
             └─────────┬─────────┘
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
      [ SUCCESS ]             [ 429 / 503 OUTAGE ]
          │                         │
          │                         ▼
          │             [ Tiered Fallback Provider ]
          │                         │
          └────────────┬────────────┘
                       │
                       ▼
          [ Response + Telemetry Logs ]
```

### Key Capabilities
- **Sub-3ms Routing Overhead**: Regex and keyword feature extraction classifying 12 task types, complexity (0.05–0.99), and context size. Heuristic analysis: <2.5ms; in-memory scoring: <0.5ms.
- **Multi-Criteria Pareto Scoring**: Weighted optimization across Quality, Cost Efficiency, Latency Speed, Required Capabilities, and Historical Provider Reliability.
- **Hard Constraint Pruner**: Filters out ineligible models based on context window limits and missing capability flags (vision, coding, reasoning) prior to scoring.
- **Explainability Reports**: 100% auditable factor breakdown and itemized candidate rejection logs for every routing decision.
- **Budget Control Guards**: Automated thresholds (80% spend triggers cost-optimization, 95% forces local-only Ollama inference, 100% blocks requests).
- **AI Traffic Control Room**: FastAPI backend (port 8000) + React 18 dashboard (port 5173) with real-time Server-Sent Events (SSE) topology map, playground inspector, analytics simulator, and cost savings tracking.

### CLI Quickstart
```bash
# Clone & install dependencies
git clone https://github.com/PicadoLabs/ai-model-router.git
cd ai-model-router && pip install -r requirements.txt

# Verify local Ollama and configured cloud providers
python backend/app/cli/main.py doctor

# Dry-run route a prompt through the Pareto engine
python backend/app/cli/main.py route "Write an async rate limiter in Python with redis backend"

# Route and execute a query
python backend/app/cli/main.py run "Debug distributed async deadlock in worker pool"

# Launch backend API server and Control Room UI
python backend/main.py
cd frontend && npm run dev
```

---

## 03 - Terminal Agent

### *Execute & Verify • Sandboxed Verify-First Coding Agent*

[![Python >= 3.10+](https://img.shields.io/badge/Python-%3E%3D3.10%2B-3776ab?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![Sandbox: psutil](https://img.shields.io/badge/Sandbox-psutil_%26_Docker-2e7d58?style=flat-square)](https://github.com/PicadoLabs/terminal-agent)

GitHub: **[PicadoLabs/terminal-agent](https://github.com/PicadoLabs/terminal-agent)**

An autonomous, terminal-based software engineering agent built on a **Verify-First** architectural paradigm. It demands objective test execution in an isolated sandbox before declaring any task complete.

```text
┌────────────────────────────────────────┐
│  OBSERVE Task Spec & Workspace Code    │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│  PLAN Bounded Implementation Phase     │
└───────────────────┬────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────┐
│  ACT via 12 Typed Engineering Tools    │ ◄─────────────────────────┐
└───────────────────┬────────────────────┘                           │
                    │                                                │
                    ▼                                                │
┌────────────────────────────────────────┐                           │
│  EXECUTE in psutil Process Sandbox     │                           │
└───────────────────┬────────────────────┘                           │
                    │                                                │
                    ▼                                                │
┌────────────────────────────────────────┐                           │
│  INDEPENDENT VERIFIER (Pytest Runner)  │                           │
└───────────────────┬────────────────────┘                           │
                    │                                                │
          ┌─────────┴─────────┐                                      │
          │                   │                                      │
       [ PASS ]            [ FAIL ]                                  │
          │                   │                                      │
          │                   ▼                                      │
          │         ┌──────────────────────────────────┐             │
          │         │ 12-Category Failure Classifier   │             │
          │         └─────────────────┬────────────────┘             │
          │                           │                              │
          │                           ▼                              │
          │         ┌──────────────────────────────────┐             │
          │         │ Targeted Self-Repair Plan        │             │
          │         └─────────────────┬────────────────┘             │
          │                           │                              │
          │                  ┌────────┴────────┐                     │
          │           Restore Checkpoint?      │                     │
          │                  ├─────────┐       │                     │
          │                [YES]      [NO] ────┼─────────────────────┤
          │                  │                 │                     │
          │                  ▼                 │                     │
          │         ┌──────────────────┐       │                     │
          │         │ SQLite Rollback  │ ──────┘                     │
          │         └──────────────────┘                             │
          │                                                          │
          ▼                                                          │
┌────────────────────────────────────────┐                           │
│     VERIFIED PROOF OF DONE (Exit)      │                           │
└────────────────────────────────────────┘                           │
```

### Key Capabilities
- **Verify-First Engine**: Structural separation between agent hypothesis and verification. `IndependentVerifier` executes test suites in isolated sandboxes and confirms 0 failures before success is declared.
- **Deterministic Context Engine**: Token-budgeted repository ranking via `DeterministicRanker` using path matches (10x weight), AST symbol definitions (`def`, `class`, `function`, `interface`, `struct`), and keyword frequency — no vector databases.
- **Process-Tree Sandboxing**: Dual execution modes — `LocalSandbox` (subprocess with `psutil` recursive process-tree termination) and `DockerSandbox` (isolated container).
- **Zero-Trust Security**: 5-tier command policy (`safe`, `write`, `destructive`, `network`, `privileged`), `SecretGuard` Shannon entropy redaction (prefixes: `sk-`, `ghp_`, `AIza`), and path traversal protection.
- **12-Category Auto-Recovery**: Maps error signatures to targeted repair plans across `SYNTAX_ERROR`, `DEPENDENCY_ERROR`, `PERMISSION_ERROR`, `NETWORK_ERROR`, `CONTEXT_OVERFLOW`, `TOOL_ERROR`, `TEST_FAILURE`, `COMMAND_FAILURE`, `WRONG_SOLUTION`, `TIMEOUT`, `INCOMPLETE_TASK`, `UNKNOWN`.
- **Session & Checkpoint Persistence**: SQLite database (`.terminal_agent/terminal_agent.db`) + atomic file snapshot checkpoints with instant rollback (`terminal-agent rollback <id>`).

### CLI Quickstart
```bash
# Install package
pip install terminal-agent

# Run agent on a task with verify-first enforcement
terminal-agent run "Implement JWT authentication middleware with unit tests"

# Check status, diffs, and health diagnostics
terminal-agent status
terminal-agent diff
terminal-agent doctor

# Roll back to previous verified checkpoint
terminal-agent rollback <checkpoint-id>
```

---

## 04 - AgentBench

### *Benchmark & Evaluate • Polyglot Evaluation Suite*

[![Environment](https://img.shields.io/badge/Environment-Python_3.10%2B_%7C_Node_%3E%3D18-3776ab?style=flat-square)](https://github.com/PicadoLabs/agent-bench)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![Benchmarks](https://img.shields.io/badge/Benchmarks-12_Polyglot_Tasks-2e7d58?style=flat-square)](https://github.com/PicadoLabs/agent-bench)

GitHub: **[PicadoLabs/agent-bench](https://github.com/PicadoLabs/agent-bench)**

A provider-agnostic, local-first evaluation and benchmarking platform designed to test, compare, and calibrate autonomous AI coding agents on realistic software-engineering tasks inside isolated execution environments.

```text
┌────────────────────────────────────────────────────────┐
│ 12 Standardized Polyglot Benchmark Tasks               │
│ (Python pytest & Node.js test suites)                  │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ Clean Local Process / Docker Execution Sandbox         │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ Agent Under Test (IterativeCoding / FastPatch)         │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ Multi-Step Tool Execution & Surgical Code Edits        │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│ Independent Test Suite & Assertion Validation          │
└───────────────────────────┬────────────────────────────┘
                            │
               ┌────────────┴────────────┐
               │                         │
               ▼                         ▼
┌─────────────────────────────┐ ┌─────────────────────────────┐
│ 5D Composite SWE Scoring    │ │ 7-Category Failure Taxonomy │
│ (Correctness, Pass Rate,    │ │ (wrong_solution, timeout,   │
│  Quality, Efficiency, Rel)  │ │  syntax_error, tool_misuse) │
└──────────────┬──────────────┘ └──────────────┬──────────────┘
               │                               │
               └───────────────┬───────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────┐
│ React Live Dashboard & GitHub Actions PR Gatekeeper    │
└────────────────────────────────────────────────────────┘
```

### Key Capabilities
- **12 Polyglot Benchmark Tasks**: Standardized tasks across Python (`pytest`) and Node.js (`node --test`) covering JWT auth, pagination, rate limiters, SQL injection, LRU caches, CSV pipelines, tree serializers, config loaders, async queues, Markdown parsers, Express auth, and React hook leaks.
- **GitHub PR & Issue Ingestion**: Ingests GitHub PR metadata, commit SHAs, and unified patch diffs to dynamically generate benchmark tasks (`python agentbench.py ingest <pr-url>`).
- **3 Agent Architectures**: `IterativeCodingAgent` (ReAct with retry loops), `FastPatchAgent` (rapid single-pass), `BaselineAgent` (zero-shot calibration).
- **Weighted Mathematical Scoring Engine**: Composite score $S \in [0, 100]$:
  $$\text{Score} = 0.50 \times \text{Correctness} + 0.25 \times \text{PassRate} + 0.10 \times \text{CodeQuality} + 0.10 \times \text{Efficiency} + 0.05 \times \text{Repair}$$
- **Automated Failure Taxonomy**: Root-cause categorization across `wrong_solution`, `test_failure`, `syntax_error`, `timeout`, `tool_misuse`, `incomplete_solution`, `dependency_issue`.
- **Web Dashboard & CI Gate**: FastAPI backend + React 18 frontend with WebSocket telemetry stream, leaderboard, and GitHub Actions PR gatekeeper (`agentbench-eval.yml`).

### CLI Quickstart
```bash
# Clone & install dependencies
git clone https://github.com/PicadoLabs/agent-bench.git
cd agent-bench && pip install -r requirements.txt && pip install -e .

# Verify benchmark environment dependencies
python agentbench.py doctor

# Initialize database schema and seed tasks
python agentbench.py init

# List available benchmark tasks
python agentbench.py list

# Run evaluation suite on a benchmark task (Ollama / Mock / Cloud)
python agentbench.py run --benchmark fix-rate-limiter --provider ollama --model qwen2.5-coder:1.5b

# Ingest live GitHub PR as an automated benchmark task
python agentbench.py ingest https://github.com/fastapi/fastapi/pull/1234

# Launch Web Dashboard and Leaderboard
python agentbench.py serve --port 8000
```

---

## The Closed-Loop Architecture

```text
                     PICADO LABS CLOSED LOOP
                                |
                                v
                    +-----------------------+
                    |       01 • PLAN       |
                    |     build-with-ai     |
                    +-----------+-----------+
                                |
                                v
                    +-----------------------+
                    |       02 • ROUTE      |
                    |      Model Router     |
                    +-----------+-----------+
                                |
                                v
                    +-----------------------+
                    |     03 • EXECUTE      |
                    |    Terminal Agent     |
                    +-----------+-----------+
                                |
                                v
                    +-----------------------+
                    |      04 • VERIFY      |
                    |  Independent Verifier |
                    +-----------+-----------+
                                |
                                v
                    +-----------------------+
                    |     05 • EVALUATE     |
                    |       AgentBench      |
                    +-----------+-----------+
                                |
                                v
                       TELEMETRY FEEDBACK
                                |
                                +-----------------> MODEL ROUTER / AGENT
```

---

## Architectural Comparison

| Dimension | Traditional AI Wrappers | Standard Coding Assistants | Picado Labs Suite |
| :--- | :--- | :--- | :--- |
| **Prompt Architecture & Memory** | Monolithic blank-canvas prompt | Ephemeral chat thread memory | Deterministic `.buildwithai/` context injection (7 templates) |
| **Model Selection & Cost** | Hardcoded single model | Fixed cloud endpoint | Sub-3ms Pareto routing across local Ollama & cloud APIs |
| **Completion Verification** | LLM self-report (High hallucination) | User-prompted test reflection | `IndependentVerifier` in isolated sandbox (0 test failures required) |
| **Security & Sandboxing** | Direct host execution, zero bounds | Manual confirmation prompts only | 5-tier policy, `psutil` process tree kill, `SecretGuard` entropy redaction |
| **Context Management** | Raw prompt dumping / overflow | Grep / basic ctags | `DeterministicRanker` (AST symbols, weighted path matching) |
| **Failure Recovery** | Generic "try again" loop | Manual developer intervention | 12-category classification + Checkpoint rollback |
| **Benchmarking & Calibration** | Subjective human testing | Static benchmark scores | 12 standardized polyglot tasks + 5D composite SWE score |

---

## 5-Minute Ecosystem Quickstart

```bash
# 1. Initialize project with disciplined prompt architecture
npx build-with-ai init

# 2. Check toolchain readiness across the suite
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

## Contributing

Picado Labs is built in the open under the **MIT License**. We welcome contributions from developers worldwide!

### Ways to Contribute
- **build-with-ai**: Contribute new domain templates, prompt optimizations, or workflow validation hooks.
- **Model Router**: Add provider adapters (e.g. Mistral, Cohere, Bedrock), routing heuristic rules, or cost benchmarks.
- **Terminal Agent**: Implement new sandbox runtimes, language test runners, or failure classifiers.
- **AgentBench**: Submit realistic benchmark tasks, PR ingest datasets, or evaluation scoring metrics.

### Development Workflow
1. Fork the respective repository under [github.com/PicadoLabs](https://github.com/PicadoLabs).
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Commit changes following conventional commit syntax: `git commit -m "feat(router): add new latency penalty heuristic"`.
4. Ensure all tests pass: `pytest` or `npm test`.
5. Open a Pull Request on GitHub.

---

## Repositories & Issue Trackers

- **build-with-ai**: [PicadoLabs/build-with-ai](https://github.com/PicadoLabs/build-with-ai) • [npm package](https://www.npmjs.com/package/build-with-ai) • [Issues Tracker](https://github.com/PicadoLabs/build-with-ai/issues)
- **Model Router**: [PicadoLabs/ai-model-router](https://github.com/PicadoLabs/ai-model-router) • [Issues Tracker](https://github.com/PicadoLabs/ai-model-router/issues)
- **Terminal Agent**: [PicadoLabs/terminal-agent](https://github.com/PicadoLabs/terminal-agent) • [Issues Tracker](https://github.com/PicadoLabs/terminal-agent/issues)
- **AgentBench**: [PicadoLabs/agent-bench](https://github.com/PicadoLabs/agent-bench) • [Issues Tracker](https://github.com/PicadoLabs/agent-bench/issues)
- **GitHub Organization**: [github.com/PicadoLabs](https://github.com/PicadoLabs)

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
