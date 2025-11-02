'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function InternationalTaxationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Advisory</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">International</span>
            <br /><span style={{color: 'var(--text-secondary)'}}>Taxation</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Cross-Border Tax Advisory
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            Navigate complex international tax regulations with our expert advisory. We provide comprehensive solutions for NRI taxation, foreign investments, and global tax structuring.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>NRI Taxation</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Tax advisory for NRIs</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Residential status</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Income taxation</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Investments in India</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Property transactions</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Repatriation</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Tax returns</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>DTAA Advisory</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Tax treaty optimization</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Treaty benefits</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Tax residency certificates</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Lower withholding tax</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>PE issues</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>MAP</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Dispute resolution</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Foreign Investments</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Inbound and outbound investments</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>FDI compliance</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>ODI planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>FEMA compliance</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Remittances</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Loan transactions</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Equity investments</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Global Tax Structuring</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>International tax planning</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Holding structures</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>IP migration</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Fund structuring</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Tax efficient routing</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>BEPS compliance</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>MLI impact</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>International tax specialists</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Global perspective</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Treaty expertise</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>FEMA compliance</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Regulatory updates</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Comprehensive solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            International <span class="gradient-text">Tax Advisory?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Expert guidance on cross-border taxation
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
