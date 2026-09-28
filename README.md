<div align="center">

# Picado Labs

**Deterministic, verify-first infrastructure for autonomous AI software engineering.**

Plan → Route → Execute → Verify → Evaluate

[![GitHub](https://img.shields.io/badge/GitHub-PicadoLabs-181717?style=flat-square&logo=github)](https://github.com/PicadoLabs)
[![Website](https://img.shields.io/badge/Website-picadolabs.me-2e7d58?style=flat-square)](https://picadolabs.me)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

</div>

---

Picado Labs builds open-source infrastructure that splits AI-driven software development into deterministic, observable stages. 

## The Ecosystem

Instead of a monolithic AI prompt, we divide the engineering lifecycle into four specialized, verifiable tools:

| Project | Stage | The Problem | The Picado Edge |
| :--- | :--- | :--- | :--- |
| [**build-with-ai**](https://github.com/PicadoLabs/build-with-ai) | **Plan** | Devs struggle to orchestrate AI for large, complex architectures. | **Zero-API CLI** that guides you step-by-step using your existing ChatGPT/Claude interface. |
| [**AI Model Router**](https://github.com/PicadoLabs/ai-model-router) | **Route** | Balancing LLM costs, rate limits, and reasoning capabilities is hard. | **100% Local & Explainable** routing with a visual "Traffic Control Room" UI. |
| [**Terminal Agent**](https://github.com/PicadoLabs/terminal-agent) | **Execute** | Autonomous agents frequently break builds without strict verification. | **Verification-first sandboxing** with built-in state checkpoints and instant rollback. |
| [**AgentBench**](https://github.com/PicadoLabs/agent-bench) | **Evaluate** | Measuring agent performance objectively is heavy and provider-locked. | **Instant GitHub PR Ingestion** to create provider-agnostic benchmarks in seconds. |

## Quickstart

```bash
# 1. Plan your project architecture
npx build-with-ai init

# 2. Route prompts to the optimal model
python backend/app/cli/main.py route "Build a secure token bucket rate limiter"

# 3. Execute and verify the code
terminal-agent run "Implement token bucket rate limiter with pytest tests"

# 4. Evaluate the agent's performance
python agentbench.py run --benchmark fix-rate-limiter --provider ollama
```

*See individual repository readmes for full setup instructions.*

## Contributing & Community

Open source under Apache 2.0. PRs are welcome! 

Built by [Vardhman (Kap10)](https://github.com/Kaap10) — [X (Twitter)](https://x.com/Kap10x) | [LinkedIn](https://www.linkedin.com/company/picado-labs/) | [picadolabs.me](https://picadolabs.me)

---
<div align="center">
<b>Open source. Practical AI infrastructure. Built to be verified.</b>
</div>
