import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Hash } from 'lucide-react';

const faqs = [
  {
    q: "Is Picado Labs entirely open-source?",
    a: "Yes. All four of our core systems (build-with-ai, Model Router, Terminal Agent, and AgentBench) are 100% open-source and released under the permissive Apache 2.0 License. You can inspect, modify, and deploy them freely."
  },
  {
    q: "How does the Model Router achieve sub-3ms latency?",
    a: "Model Router combines fast deterministic regex heuristics (<2.5ms) across 12 task types with dense ONNX semantic embeddings and multi-criteria scoring (<0.5ms). It evaluates Quality, Cost, Speed, Capability, and Reliability in sub-3ms without blocking your execution pipeline."
  },
  {
    q: "Can I run the entire stack locally?",
    a: "Absolutely. We designed Picado Labs with a local-first philosophy. Using Ollama, you can route tasks to local models (like Llama 3, Qwen 2.5 Coder, or DeepSeek-R1), run benchmarks with $0.00 API costs, and execute sandbox commands with zero network egress, keeping your proprietary code entirely on your machine."
  },
  {
    q: "How do automatic rollbacks work in the Terminal Agent?",
    a: "Before the agent modifies any files or runs commands, it creates atomic checkpoint snapshots. If tests fail, timeouts occur, or the independent verification engine flags a contract violation, the agent triggers an instant rollback to the last known-good baseline and synthesizes an automated recovery plan via its 12-category failure classifier."
  },
  {
    q: "How is 'verify-first' different from standard AI coding tools?",
    a: "Standard agents rely on LLM self-reporting to declare tasks complete, often leading to hallucinatory loops or syntax errors. In contrast, Terminal Agent enforces an independent verification engine: changes must pass isolated sandbox test execution, git diff boundary validation, and contract assertions before being accepted."
  },
  {
    q: "Do I need an OpenAI API key to get started?",
    a: "No API keys are required. You can initialize a project and use the zero-API prompt architect (`npx build-with-ai init`) completely offline. For Model Router and AgentBench, free local Ollama models are supported out of the box."
  },
  {
    q: "What programming languages does the sandbox support?",
    a: "The sandboxes (psutil local process-tree and Docker) are polyglot. AgentBench actively benchmarks against Python (pytest) and Node.js/TypeScript (node --test), while Terminal Agent and build-with-ai support Python, TypeScript/JavaScript, Go, Rust, Flutter/Dart, and more."
  },
  {
    q: "How do I monitor the agent's performance over time?",
    a: "AgentBench evaluates autonomous agents across 12 standardized polyglot tasks or any public GitHub PR. It computes an objective 5-dimensional composite SWE score (Correctness 50%, Pass Rate 25%, Quality 10%, Efficiency 10%, Repair 5%) and categorizes non-passing runs into explicit root cause failure modes."
  }
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`bg-zinc-50 border rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${
        isOpen ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'border-zinc-200 hover:border-zinc-300'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-5 flex items-start justify-between gap-4 select-none">
        <h3 className={`text-[14px] sm:text-[15px] font-semibold leading-snug pt-0.5 transition-colors ${isOpen ? 'text-zinc-900' : 'text-zinc-800'}`}>
          {q}
        </h3>
        <div 
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? 'bg-emerald-500/10 text-emerald-600' : 'bg-zinc-100 text-zinc-600'
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-0 text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section className="py-24 bg-white relative" id="faq">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-[11px] font-mono font-bold text-zinc-700 mb-6 uppercase tracking-widest shadow-sm">
            <Hash className="w-3.5 h-3.5 text-emerald-600" />
            FAQs
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-5 leading-[1.1]">
            Frequently asked <br />
            <span className="text-emerald-600">
              questions
            </span>
          </h2>
          
          <p className="text-zinc-600 text-[15px] sm:text-base max-w-lg leading-relaxed">
            Everything you need to know about integrating and scaling with Picado Labs verified infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-4">
            {col1.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
