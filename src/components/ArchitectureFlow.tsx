import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', name: 'Plan', desc: 'Break project goals into structured implementation phases with persistent memory and zero token drift.' },
  { num: '02', name: 'Route', desc: 'Select the optimal local or cloud model across Quality, Cost, and Latency in under 3ms.' },
  { num: '03', name: 'Execute', desc: 'Autonomous agent edits files and executes CLI tools inside bounded psutil process sandboxes.' },
  { num: '04', name: 'Verify', desc: 'Independent test suites and AST proof validation before accepting any generated output.' },
  { num: '05', name: 'Evaluate', desc: 'Benchmark agent reliability on realistic SWE challenges and stream telemetry back to router.' },
];

export const ArchitectureFlow = () => {
  return (
    <section className="py-24 relative" id="architecture">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Pipeline
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            One short loop from idea to verified output.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-zinc-100 -z-10" />

          {steps.map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-zinc-50 border border-zinc-200 hover:border-emerald-500/30 rounded-xl p-6 flex flex-col transition-colors group shadow-sm hover:shadow-md relative"
            >
              <div className="text-[10px] font-mono font-bold text-emerald-400 tracking-wider mb-6">
                {step.num} / {step.name.toUpperCase()}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.name}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
