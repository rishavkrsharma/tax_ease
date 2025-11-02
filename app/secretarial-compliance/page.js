'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function SecretarialCompliancePage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Secretarial Compliance</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Expert Secretarial Compliance Solutions for Companies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
              Secretarial compliance is crucial for maintaining corporate governance and legal adherence. Our expert team ensures your company meets all statutory requirements under the Companies Act, 2013, and SEBI regulations.
            </p>

            {/* Services */}
            <div className="mb-20">
              <h2 className="text-4xl font-light tracking-tight mb-12" style={{color: 'var(--text-primary)'}}>
                Our <span className="gradient-text">Secretarial Services</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Board Meetings",
                    desc: "Organization and documentation of board meetings, preparation of agenda, minutes, and resolutions.",
                    features: ["Meeting notices", "Agenda preparation", "Minutes drafting", "Resolution filing"]
                  },
                  {
                    title: "General Meetings (AGM/EGM)",
                    desc: "Complete management of Annual General Meetings and Extraordinary General Meetings.",
                    features: ["AGM/EGM notices", "Preparation of reports", "Minutes of meetings", "MCA filing"]
                  },
                  {
                    title: "Statutory Registers",
                    desc: "Maintenance of all statutory registers as per Companies Act requirements.",
                    features: ["Member register", "Director register", "Charge register", "Share transfer register"]
                  },
                  {
                    title: "MCA Compliances",
                    desc: "Filing of various forms and returns with Ministry of Corporate Affairs.",
                    features: ["Annual filing", "Event-based filing", "Form MGT-7", "Form AOC-4"]
                  },
                  {
                    title: "Share Capital Management",
                    desc: "Complete management of share allotment, transfer, and related compliances.",
                    features: ["Share allotment", "Share transfer", "Share certificates", "Share capital filing"]
                  },
                  {
                    title: "Secretarial Audit",
                    desc: "Annual secretarial audit by qualified Company Secretaries as per Section 204.",
                    features: ["Audit report (Form MR-3)", "Compliance certificate", "Recommendations", "MCA filing"]
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
            </div>

            {/* Why Choose Us */}
            <div className="mb-20 p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
              <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Why Choose ANYTAX for Secretarial Compliance?</h2>
              <ul className="space-y-4">
                {[
                  "Qualified Company Secretaries with extensive experience",
                  "Timely compliance and filing to avoid penalties",
                  "Complete documentation and record maintenance",
                  "Advisory on corporate governance best practices",
                  "Technology-driven compliance management",
                  "Regular updates on regulatory changes"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                    <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            Need <span className="gradient-text">Secretarial Support?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Ensure complete corporate compliance with our expert secretarial services
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg text-white"
          >
            Get Started
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 lg:px-12 py-12 transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

