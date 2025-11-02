'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function NCLTMattersPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Litigation & Disputes</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">NCLT Matters</span>
            
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            National Company Law Tribunal Representation
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            NCLT handles corporate disputes, insolvency, and company law matters. Our experienced professionals provide end-to-end support for all NCLT proceedings.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Insolvency & Bankruptcy</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>IBC proceedings and resolution</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Corporate insolvency</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Resolution plans</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Liquidation matters</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Moratorium applications</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Claims filing</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Creditors committee</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Oppression & Mismanagement</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Shareholder disputes</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Oppression cases</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Mismanagement matters</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Minority protection</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Relief applications</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Settlement negotiations</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Exit options</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Mergers & Amalgamations</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Corporate restructuring</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Merger approval</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Amalgamation schemes</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Demerger matters</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Objections handling</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Compliance</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Court representation</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Company Law Matters</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Other NCLT proceedings</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>RoC compounding</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Director disqualification</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Winding up</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Class action suits</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Non-compliance matters</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Appeals to NCLAT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Experienced company law professionals</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>NCLT representation expertise</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Strategic legal advice</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Documentation support</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>End-to-end assistance</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Appeals to NCLAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            NCLT <span class="gradient-text">Matter?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Expert representation for NCLT proceedings
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg text-white"
          >
            Get Expert Help
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      <footer className="border-t px-6 lg:px-12 py-12 transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
