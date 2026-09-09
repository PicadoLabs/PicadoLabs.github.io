# Picado Labs

> **Cooking up tools for building, testing, and routing AI agents.**

Welcome to the official repository for the **[Picado Labs](https://picadolabs.me)** website (`picadolabs.me` / `PicadoLabs.github.io`).

Picado Labs is an open-source, local-first engineering organization building deterministic, verify-first software systems for autonomous AI agents.

---

## The Picado Labs Suite

### 1. Terminal Agent — *Build & Verify*

GitHub: **[PicadoLabs/terminal-agent](https://github.com/PicadoLabs/terminal-agent)**

An autonomous, terminal-based software engineering agent built on a **Verify-First** architectural paradigm. It does not consider a task complete because a language model claimed success; it demands objective test execution.

**Key Architecture:**
- **Verify-First Engine**: Structural separation between agent hypothesis and verification. `IndependentVerifier` executes test suites in isolated sandboxes and confirms 0 failures before declaring success.
- **Deterministic Context Engine**: Token-budgeted repository ranking via `DeterministicRanker` using path matches (10x weight), AST symbol definitions (`def`, `class`, `function`, `interface`, `struct`), and keyword frequency — no vector databases.
- **Zero-Trust Security**: 5-tier command policy (`safe`, `write`, `destructive`, `network`, `privileged`), `SecretGuard` Shannon entropy redaction (regex token prefixes: `sk-`, `ghp_`, `AIza`), and path traversal protection.
- **Process-Tree Sandboxing**: Dual execution modes — `LocalSandbox` (subprocess with `psutil` recursive process-tree termination) and `DockerSandbox` (isolated container).
- **12 Core Typed Tools**: `read_file`, `write_file`, `edit_file`, `list_files`, `search_files`, `run_command`, `run_tests`, `git_status`, `git_diff`, `git_log`, `create_checkpoint`, `restore_checkpoint`.
- **12-Category Failure Recovery**: Runtime `FailureClassifier` maps error signatures to targeted repair plans across: `SYNTAX_ERROR`, `DEPENDENCY_ERROR`, `PERMISSION_ERROR`, `NETWORK_ERROR`, `CONTEXT_OVERFLOW`, `TOOL_ERROR`, `TEST_FAILURE`, `COMMAND_FAILURE`, `WRONG_SOLUTION`, `TIMEOUT`, `INCOMPLETE_TASK`, `UNKNOWN`.
- **Session & Checkpoint Persistence**: SQLite database (`.terminal_agent/terminal_agent.db`) + JSON mirroring + atomic file snapshot checkpoints with instant rollback (`terminal-agent rollback <id>`).

**CLI Commands:** `terminal-agent run`, `resume`, `status`, `diff`, `test`, `checkpoint`, `rollback`, `doctor`, `config`, `trace`

**Tech Stack:** Python 3.10+ (tested 3.12.7), Typer, Rich, Pydantic v2, HTTPX, GitPython, psutil, Hatchling

**Supported Providers:** Mock (testing), Ollama (local), OpenAI, Anthropic Claude, Google Gemini

---

### 2. AgentBench — *Test & Calibrate*

GitHub: **[PicadoLabs/agent-bench](https://github.com/PicadoLabs/agent-bench)**

A provider-agnostic, local-first evaluation and benchmarking platform designed to test, compare, and calibrate autonomous AI coding agents on realistic software-engineering tasks inside isolated, reproducible execution environments.

**Key Architecture:**
- **12 Standardized Multi-Language Benchmarks**: Polyglot tasks across Python (`pytest`) and Node.js 22 (`node --test`) covering JWT auth, pagination, rate limiters, SQL injection, LRU caches, CSV pipelines, tree serializers, config loaders, async queues, Markdown parsers, Express auth, and React hook leaks.
- **GitHub PR & Issue Ingestion**: Automatically downloads GitHub PR metadata, commit SHAs, and unified patch diffs to create executable benchmark tasks (`python agentbench.py ingest <pr-url>`).
- **3 Agent Architectures**: `IterativeCodingAgent` (ReAct with self-repair retry loops), `FastPatchAgent` (rapid single-pass), `BaselineAgent` (zero-shot calibration).
- **Weighted Mathematical Scoring Engine**: Composite score $S \in [0, 100]$: 50% Correctness, 25% Test Pass Rate, 10% Code Quality, 10% Execution Efficiency, 5% Repair Reliability.
- **Automated Failure Taxonomy Classifier**: Categorizes non-passing runs into 7 root-cause categories: `timeout`, `syntax_error`, `permission_error / tool_misuse`, `dependency_issue`, `test_failure`, `incomplete_solution`, `command_failure`.
- **CI/CD PR Gatekeeper**: GitHub Action workflow (`.github/workflows/agentbench-eval.yml`) evaluating coding agents on live pull requests before merge.
- **LocalProcessSandbox**: Ephemeral workspace snapshots, strict path traversal checks (`os.path.commonpath`), sanitized child environment variables, and OS-level process-tree termination via `psutil`.
- **Web Dashboard**: FastAPI backend + React 18/TypeScript/Tailwind frontend with WebSocket telemetry stream, leaderboard, and score trajectory charts.

**CLI Commands:** `python agentbench.py doctor`, `list`, `ingest`, `run`, `inspect`, `leaderboard`, `compare`, `serve`

**Tech Stack (Backend):** Python 3.12, Node.js 22, FastAPI, SQLAlchemy 2.0, Pydantic v2, Pytest, Uvicorn, Httpx, Rich

**Tech Stack (Frontend):** React 18, TypeScript, Tailwind CSS, Vite, Recharts, Lucide React

**Supported Providers:** Ollama (`qwen2.5-coder:1.5b`, `deepseek-r1:1.5b`), OpenAI (`gpt-4o`, `gpt-4o-mini`), Anthropic (`claude-3-5-sonnet`), Google Gemini (`gemini-1.5-pro`, `gemini-1.5-flash`), Mock

---

### 3. Model Router — *Route & Orchestrate*

GitHub: **[PicadoLabs/ai-model-router](https://github.com/PicadoLabs/ai-model-router)**

An intelligent, explainable, cost- and latency-aware Large Language Model routing gateway and real-time AI Traffic Control Room.

**Key Architecture:**
- **Sub-3ms Heuristic Routing**: Deterministic regex and keyword feature extraction classifying 12 task types, numerical complexity (0.05–0.99), and context size. Heuristic analysis: <2.5ms; in-memory scoring: <0.5ms; total routing overhead: <3ms.
- **Multi-Criteria Pareto Scoring**: Weighted objective function optimizing across Quality, Cost Efficiency, Latency Speed, Required Capabilities, and Historical Provider Reliability.
- **Hard Constraint Pruner**: Filters out ineligible models based on context window size and missing capability flags (vision, coding, reasoning) before scoring.
- **Explainability Reports**: 100% auditable "Why this model?" factor breakdown and itemized candidate rejection logs for every routing decision.
- **Budget Control Guards**: Automated threshold interventions — 80% monthly spend triggers cost-optimization policy, 95% forces local-only Ollama inference, 100% triggers hard request blocking.
- **Tiered Fallback Supervisor**: Classifies retryable errors (429, 503) and automatically cascades to backup models; fail-safes to in-memory Mock engine.
- **Visual Block Rules Builder**: Conditional override editor (`IF field == val THEN action`) for operational routing overrides without code redeployment.
- **AI Traffic Control Room**: FastAPI backend + React 18 dashboard with real-time Server-Sent Events (SSE) topology map, playground inspector, analytics simulator, and cost savings tracking.
- **SQLite Persistence in WAL Mode**: Fully asynchronous (`aiosqlite`) with relational tables for models, requests, routing decisions, responses, feedback, budgets, and routing rules.

**CLI Commands:** `modelrouter doctor`, `route`, `run`, `models`, `traffic`, `analytics`

**Tech Stack (Backend):** Python 3.12, FastAPI, Typer, Rich, SQLAlchemy 2.0, aiosqlite, Pydantic v2, Pytest + Pytest-Asyncio (15 passing tests), Httpx

**Tech Stack (Frontend):** React 18, TypeScript, Tailwind CSS v4, Vite, Recharts, Lucide React

**Supported Providers:** Mock (zero-cost simulation), Ollama (local: `qwen2.5-coder`, `llama3.2`, `deepseek-r1`), OpenAI, Anthropic Claude, Google Gemini

---

## Tech Stack Summary

- **Languages**: Python 3.12, Node.js 22, TypeScript
- **Frameworks**: FastAPI, React 18, Typer
- **Local Inference**: Ollama ($0.00 API cost)
- **Cloud Providers**: OpenAI, Anthropic Claude, Google Gemini
- **Domain**: [picadolabs.me](https://picadolabs.me)

---

## Repositories & Contact

- **Terminal Agent**: [github.com/PicadoLabs/terminal-agent](https://github.com/PicadoLabs/terminal-agent)
- **AgentBench**: [github.com/PicadoLabs/agent-bench](https://github.com/PicadoLabs/agent-bench)
- **Model Router**: [github.com/PicadoLabs/ai-model-router](https://github.com/PicadoLabs/ai-model-router)
- **GitHub Organization**: [github.com/PicadoLabs](https://github.com/PicadoLabs)
- **Email**: [picadolabs@gmail.com](mailto:picadolabs@gmail.com)
- **Website**: [picadolabs.me](https://picadolabs.me)