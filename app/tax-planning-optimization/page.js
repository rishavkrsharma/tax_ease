'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function TaxPlanningPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Advisory</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Tax Planning</span>
            <br /><span style={{color: 'var(--text-secondary)'}}>& Optimization</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Strategic Tax Planning Services
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            Minimize your tax liability legally through strategic tax planning. Our experts provide comprehensive tax planning solutions for individuals and businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Personal Tax Planning</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Individual tax optimization</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Salary structuring</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Investment planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Section 80C-80U deductions</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Capital gains planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Retirement planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Estate planning</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Business Tax Planning</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Corporate tax optimization</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Business structure</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Expense optimization</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Asset depreciation</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Loss carry forward</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>MAT planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Tax credits</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Capital Gains Planning</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Minimize capital gains tax</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>LTCG vs STCG</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Exemptions u/s 54</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Indexation benefits</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Transaction structuring</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Reinvestment planning</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Timing optimization</span>
                </div>
              </div>
            </div><div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>Investment Advisory</h3>
              <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>Tax-efficient investments</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Tax-saving instruments</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Equity investments</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Debt instruments</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Real estate</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>PPF/ELSS/NPS</span>
                </div><div className="flex items-start gap-2">
                  <span style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>Portfolio rebalancing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Certified tax professionals</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Customized strategies</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Legal compliance</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Maximize savings</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Long-term planning</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                <span className="text-lg" style={{color: 'var(--text-secondary)'}}>Regular reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            Want to <span class="gradient-text">Save Tax?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Strategic tax planning for maximum savings
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
