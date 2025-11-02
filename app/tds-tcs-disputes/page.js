'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function TDSTCSDisputesPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Litigation & Disputes</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">TDS / TCS Notices</span>
            <br /><span style={{color: 'var(--text-secondary)'}}>& Disputes</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            TDS/TCS Dispute Resolution
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            Received TDS/TCS demand or penalty notice? Our tax experts provide comprehensive support in handling TDS/TCS notices, disputes, and appeals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>TDS/TCS Notices</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Response to TDS/TCS notices</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Demand notices</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Interest demands</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Penalty proceedings</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Late filing issues</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Incorrect TDS</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Missing challans</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Appeals & Litigation</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>TDS/TCS dispute resolution</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>CIT(A) appeals</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Rectification applications</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Penalty defense</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Interest waiver</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Condonation of delay</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Litigation support</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Rectification</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Correction of TDS errors</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Return rectification</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Challan correction</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Form 26AS mismatch</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Credit mismatch</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>PAN errors</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Rate corrections</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Advisory</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>TDS/TCS compliance advisory</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>TDS applicability</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Rate determination</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Compliance planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Refund claims</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Certificate issues</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Best practices</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>TDS/TCS specialists</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Quick resolution</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Penalty minimization</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Compliance advisory</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Refund assistance</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Expert representation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            TDS/TCS <span class="gradient-text">Notice?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Resolve your TDS/TCS disputes with expert help
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
