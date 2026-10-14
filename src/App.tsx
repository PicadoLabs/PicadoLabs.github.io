import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Snapshot } from './components/Snapshot';
import { ArchitectureFlow } from './components/ArchitectureFlow';
import { ProjectsBento } from './components/ProjectsBento';
import { CodeExplorer } from './components/CodeExplorer';
import { ProofSection, Quickstart } from './components/ProofSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { DocsView } from './components/DocsView';
import { Footer } from './components/Footer';

function App() {
  const [view, setView] = useState<'home' | 'docs'>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.includes('docs')) {
        setView('docs');
      } else {
        setView('home');
      }
    };
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenDocs = () => {
    window.location.hash = 'docs';
    setView('docs');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-emerald-500/20 selection:text-emerald-900 flex flex-col font-sans">
      <Navbar onOpenDocs={handleOpenDocs} />
      
      <main className="flex-1 flex flex-col">
        {view === 'home' ? (
          <>
            <Hero />
            <Snapshot />
            <ArchitectureFlow />
            <ProjectsBento />
            <CodeExplorer />
            <ProofSection />
            <Quickstart />
            <Testimonials />
            <FAQ />
            <CTA />
          </>
        ) : (
          <DocsView />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
