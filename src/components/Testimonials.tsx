import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Founder @ NextGen AI',
      avatar: 'https://i.pravatar.cc/150?u=alex',
      quote: <>"As soon as you type the command, <code className="text-zinc-800 font-bold bg-zinc-100 px-1 rounded">build-with-ai</code> forces structure. It collects all architectural context before writing a single line of code. <span className="text-emerald-600 font-bold">PicadoLabs saves us weeks of debugging right now.</span>"</>,
      colSpan: 'col-span-1 md:col-span-2'
    },
    {
      name: 'Sarah Miller',
      role: 'Engineering Manager @ AutoDev',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      quote: <>"Onboarding couldn't be simpler. The <code className="text-zinc-800 font-bold bg-zinc-100 px-1 rounded">Model Router</code> dynamically switches our agents between Claude and Llama based on complexity. We cut our token costs by 65% and were integrating within 10 minutes."</>,
      colSpan: 'col-span-1 md:col-span-3'
    },
    {
      name: 'James Wilson',
      role: 'CTO @ DevTools',
      avatar: 'https://i.pravatar.cc/150?u=james',
      quote: <>"<code className="text-zinc-800 font-bold bg-zinc-100 px-1 rounded">Terminal Agent</code> is very simple. The sandboxed execution is great, and the AST verifier ensures no broken code is ever pushed. Took 10 minutes to start integrating."</>,
      colSpan: 'col-span-1 md:col-span-2'
    },
    {
      name: 'David Park',
      role: 'Founder @ AgentOps',
      avatar: 'https://i.pravatar.cc/150?u=david',
      quote: <>"We're seeing much higher completion rates because of <code className="text-zinc-800 font-bold bg-zinc-100 px-1 rounded">AgentBench</code>. It makes it a lot simpler to prove code correctness before deploying to production."</>,
      colSpan: 'col-span-1 md:col-span-1'
    },
    {
      name: 'Elena Rostova',
      role: 'Co-founder @ ZenLabs',
      avatar: 'https://i.pravatar.cc/150?u=elena',
      quote: <>"PicadoLabs preserves full architectural context on disk where other frameworks struggled. The <span className="text-emerald-600 font-bold">self-repair loop</span> automatically fixes AST errors."</>,
      colSpan: 'col-span-1 md:col-span-2'
    }
  ];

  return (
    <section className="relative py-24 bg-[#fafafa] overflow-hidden border-t border-zinc-200" id="testimonials">
      {/* Background Grid Lines matching the image */}
      <div className="absolute inset-0 pointer-events-none flex justify-center opacity-60">
        <div className="w-full max-w-6xl grid grid-cols-5 h-full border-x border-zinc-200 border-dashed">
          <div className="border-r border-zinc-200 border-dashed h-full" />
          <div className="border-r border-zinc-200 border-dashed h-full" />
          <div className="border-r border-zinc-200 border-dashed h-full" />
          <div className="border-r border-zinc-200 border-dashed h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm mb-6">
            <span className="text-[11px] font-extrabold text-zinc-500 uppercase tracking-widest">+ 20K+ DEVELOPERS</span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            What developers say
          </h2>
          <p className="text-[16px] text-zinc-500 font-medium">
            Feedback from the engineers shipping with us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className={`bg-white rounded-[20px] p-7 border border-zinc-200 shadow-sm flex flex-col ${t.colSpan} hover:shadow-md transition-shadow`}>
              <div>
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full mb-4 object-cover border border-zinc-100" />
                <h4 className="text-[12px] font-extrabold text-zinc-900 uppercase tracking-widest mb-3">{t.name}</h4>
                <p className="text-[15px] leading-relaxed text-zinc-700 font-medium">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
