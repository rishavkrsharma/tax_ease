'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function PFFilingPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">PF Return</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>Filing</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Provident Fund Compliance and Filing Services
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            Provident Fund (PF) compliance is mandatory for establishments with 20 or more employees. We provide complete EPF, EPS, and EDLI filing services to ensure your business stays compliant with EPFO regulations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "EPF/EPS/EDLI Filing",
                price: "₹1,499/month",
                features: ["Monthly ECR filing", "Challan generation", "Employee coverage", "UAN management", "Wage calculation", "Compliance reporting"]
              },
              {
                title: "PF Registration",
                price: "₹2,999/-",
                features: ["EPFO registration", "Digital signature", "UAN generation", "Establishment code", "Documentation support", "Portal setup"]
              },
              {
                title: "PF Withdrawal Support",
                price: "₹999/case",
                features: ["Form 19 (PF withdrawal)", "Form 10C (pension withdrawal)", "Form 31 (advance)", "Documentation", "EPFO follow-up", "Status tracking"]
              },
              {
                title: "PF Inspection Handling",
                price: "₹4,999/-",
                features: ["Inspection notice handling", "Document preparation", "Representation", "Compliance check", "Rectification support", "Report preparation"]
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="p-8 border transition-all duration-500" 
                style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h3 className="text-2xl font-light mb-3 tracking-wide" style={{color: 'var(--text-primary)'}}>{service.title}</h3>
                <p className="text-2xl mb-4 font-light gradient-text">{service.price}</p>
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
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX for PF Compliance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Timely monthly ECR filing to avoid penalties",
                "Accurate wage and contribution calculations",
                "Expert handling of EPFO inspections",
                "UAN and member management",
                "Regular compliance updates",
                "Dedicated support team"
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
            Need <span className="gradient-text">PF Compliance Support?</span>
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg text-white"
          >
            Get Started
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

