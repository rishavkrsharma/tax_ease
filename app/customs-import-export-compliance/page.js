'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function CustomsCompliancePage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Customs & Import-Export</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>Compliance</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Complete Customs and Foreign Trade Compliance Solutions
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
            Navigate the complex world of customs and international trade with our expert compliance services. We ensure smooth import-export operations while maintaining full compliance with customs laws and DGFT regulations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "IEC Registration",
                desc: "Import Export Code registration for international trade",
                features: ["DGFT registration", "IEC modification", "Digital signature", "RCMC support"]
              },
              {
                title: "Customs Clearance",
                desc: "End-to-end customs clearance services",
                features: ["Bill of entry", "Shipping bill", "HS code classification", "Duty calculation"]
              },
              {
                title: "Export Documentation",
                desc: "Complete export document preparation",
                features: ["Shipping documents", "Certificate of origin", "GSP certificates", "Export invoice"]
              },
              {
                title: "Import Documentation",
                desc: "Import compliance and documentation",
                features: ["Import license", "BIS certificate", "FSSAI for food imports", "Chemical imports"]
              },
              {
                title: "EPCG Scheme",
                desc: "Export Promotion Capital Goods scheme compliance",
                features: ["EPCG license", "Compliance monitoring", "Export obligation tracking", "Redemption"]
              },
              {
                title: "Advance Authorization",
                desc: "Duty-free import for export production",
                features: ["AA application", "SION verification", "Export obligation", "Scheme benefits"]
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="p-6 border transition-all duration-500" 
                style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <h3 className="text-xl font-light mb-3 tracking-wide" style={{color: 'var(--text-primary)'}}>{service.title}</h3>
                <p className="mb-4 text-sm" style={{color: 'var(--text-secondary)'}}>{service.desc}</p>
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

          <div className="p-12 border transition-colors duration-300 mb-20" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
            <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Customs duty optimization and planning",
                "HS code classification and advisory",
                "DGFT compliance and scheme management",
                "Drawback claims and refunds",
                "Anti-dumping and safeguard duty matters",
                "Customs audit and inspection support",
                "FEMA compliance for imports/exports",
                "Trade policy advisory"
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
            Ready to <span className="gradient-text">expand globally?</span>
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

