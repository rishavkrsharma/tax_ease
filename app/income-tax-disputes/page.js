'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function IncomeTaxDisputesPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Litigation & Disputes</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Income Tax Notices</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>& Disputes</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Expert Resolution of Income Tax Disputes
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            Received an income tax notice? Our expert tax professionals provide comprehensive support in handling all types of income tax notices, assessments, appeals, and disputes at every level.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: 'Assessment & Scrutiny',
                desc: 'Complete support for tax assessments',
                features: ['Scrutiny notice response', 'Assessment proceedings', 'Document submission', 'Personal hearings', 'Best judgment assessments', 'Completion of assessment']
              },
              {
                title: 'Appeals & Litigation',
                desc: 'Representation at all appellate forums',
                features: ['CIT(A) appeals', 'ITAT representation', 'High Court matters', 'Supreme Court cases', 'Stay applications', 'Cross objections']
              },
              {
                title: 'Penalty & Prosecution',
                desc: 'Defense in penalty and prosecution cases',
                features: ['Penalty proceedings', 'Concealment defense', 'Prosecution cases', 'Settlement commission', 'Compounding of offences', 'Immunity applications']
              },
              {
                title: 'Refunds & Rectification',
                desc: 'Claim and recovery of tax refunds',
                features: ['Refund processing', 'Interest on refunds', 'Rectification applications', 'Condonation of delay', 'Refund appeals', 'Litigation for refunds']
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="p-8 border transition-all duration-500" 
                style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>{service.title}</h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <span style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Expert chartered accountants and tax lawyers',
                'Extensive experience in tax litigation',
                'Strong track record of favorable outcomes',
                'Strategic approach to minimize tax liability',
                'Regular updates and transparent communication',
                'Representation at all levels including Supreme Court'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                  <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            Received a <span className="gradient-text">Tax Notice?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Get expert assistance in resolving your income tax disputes
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

