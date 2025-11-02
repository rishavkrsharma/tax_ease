'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function IECPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Import Export Code</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>(IEC) Registration</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Import Export Code (IEC) is mandatory for businesses engaged in import or export activities. Get your IEC registration done quickly and start your international trade.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              What is <span className="gradient-text">IEC?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{color: 'var(--text-secondary)'}}>
                  Import Export Code (IEC) is a 10-digit unique identification number issued by the Directorate General of Foreign Trade (DGFT) to businesses engaged in import or export activities. It's mandatory for all import-export transactions.
                </p>
                <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                  <h3 className="text-2xl font-light mb-4 tracking-wide">Key Features</h3>
                  <ul className="space-y-3">
                    {[
                      "10-digit unique identification number",
                      "Lifetime validity (no renewal required)",
                      "Required for all import-export transactions",
                      "Issued by DGFT, Ministry of Commerce",
                      "Free of cost registration"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                        <span className="" style={{color: 'var(--text-secondary)'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Who Needs IEC?</h3>
                <ul className="space-y-4">
                  {[
                    "Importers of goods and services",
                    "Exporters of goods and services",
                    "Businesses dealing in international trade",
                    "Manufacturers exporting products",
                    "Trading companies",
                    "Service providers with international clients"
                  ].map((category, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Individual/Proprietorship</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of applicant",
                    "Aadhaar Card of applicant",
                    "Bank account details",
                    "Business address proof",
                    "Passport-sized photograph"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Company/Partnership</h3>
                <ul className="space-y-4">
                  {[
                    "Certificate of incorporation",
                    "PAN Card of entity",
                    "Bank account details",
                    "Business address proof",
                    "Board resolution/Partnership deed"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Benefits</span> of IEC Registration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Legal Compliance", desc: "Meet mandatory requirements for import-export" },
                { title: "International Trade", desc: "Conduct business with foreign countries" },
                { title: "Customs Clearance", desc: "Required for customs clearance of goods" },
                { title: "Banking Transactions", desc: "Open foreign currency accounts" },
                { title: "Government Benefits", desc: "Avail export incentives and schemes" },
                { title: "Business Expansion", desc: "Expand business to international markets" },
                { title: "Tax Benefits", desc: "Claim export benefits and duty drawbacks" },
                { title: "Global Recognition", desc: "Enhance business credibility globally" }
              ].map((benefit, idx) => (
                <div key={idx} className="p-6 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-lg font-light mb-3 tracking-wide group-hover:gradient-text transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Process</span> Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Document Collection", desc: "Gather all required documents", time: "1-2 days" },
                { step: "02", title: "Application Filing", desc: "Submit IEC application online", time: "1 day" },
                { step: "03", title: "Verification", desc: "DGFT verifies documents", time: "3-5 days" },
                { step: "04", title: "IEC Issuance", desc: "Receive IEC certificate", time: "1 day" }
              ].map((process, idx) => (
                <div key={idx} className="p-6 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="text-4xl font-light mb-4 transition-colors" style={{color: 'var(--gradient-start)'}}>{process.step}</div>
                  <h3 className="text-lg font-light mb-3 tracking-wide">{process.title}</h3>
                  <p className="text-sm leading-relaxed mb-2" style={{color: 'var(--text-tertiary)'}}>{process.desc}</p>
                  <div className="text-xs tracking-wider uppercase" style={{color: 'var(--gradient-start)'}}>{process.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Post Registration</span> Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Import Requirements</h3>
                <ul className="space-y-4">
                  {[
                    "Obtain necessary import licenses",
                    "Register with customs authorities",
                    "Maintain proper documentation",
                    "Comply with import regulations",
                    "Pay applicable customs duties"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Export Requirements</h3>
                <ul className="space-y-4">
                  {[
                    "Obtain necessary export licenses",
                    "Register with export promotion councils",
                    "Maintain export documentation",
                    "Comply with export regulations",
                    "Avail export benefits and incentives"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            Get Your <span className="gradient-text">IEC Registration</span> Today
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Start your international trade journey with IEC registration
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Apply for IEC
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t transition-colors duration-300 px-6 lg:px-12 py-12" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <div className="text-2xl font-light tracking-wider mb-4">
            <span className="gradient-text">ANY</span>
            <span className="text-white">TAX</span>
          </div>
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional IEC Registration Services</p>
        </div>
      </footer>
    </div>
  );
}