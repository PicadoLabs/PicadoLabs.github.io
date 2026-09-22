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

