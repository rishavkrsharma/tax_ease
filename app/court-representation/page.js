'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function CourtRepresentationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Litigation & Disputes</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Representation in</span>
            <br /><span style={{color: 'var(--text-secondary)'}}>Courts & Tribunals</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Expert Representation Before All Forums
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            We provide expert representation before all tax and corporate law forums including Income Tax Tribunal, GST Tribunal, Customs Tribunal, NCLT, High Courts, and Supreme Court.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Tribunal Representation</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>ITAT, CESTAT, GST Tribunal</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Income Tax Tribunal</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Customs Tribunal</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>GST Tribunal</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>NCLAT</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Arguments</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Written submissions</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>High Court Matters</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Writ petitions and appeals</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Writ petitions</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Tax appeals</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Stay applications</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Constitutional matters</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>PIL</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Review petitions</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Supreme Court</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Matters before apex court</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>SLP filing</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Appeals</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Constitutional benches</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Review petitions</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Curative petitions</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Oral arguments</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Authority for Advance Ruling</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>AAR applications</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Income Tax AAR</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>GST AAR</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Customs AAR</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Application drafting</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Oral hearing</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Implementation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Experienced advocates</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Multi-disciplinary team</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>All forums covered</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Strong arguments</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Research-backed</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Success track record</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            Need Court <span class="gradient-text">Representation?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Expert representation at all legal forums
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
