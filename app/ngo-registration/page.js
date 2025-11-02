'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function NGORegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">NGO Registration</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Non-Governmental Organizations (NGOs) play a crucial role in social development. Get your NGO registered under the appropriate legal structure to make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Types of <span className="gradient-text">NGO Registration</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Trust Registration", desc: "Ideal for charitable and religious purposes. Governed by Indian Trusts Act, 1882" },
                { title: "Society Registration", desc: "Suitable for cultural, educational, and social activities. Governed by Societies Registration Act, 1860" },
                { title: "Section 8 Company", desc: "For promoting commerce, art, science, religion, charity. Governed by Companies Act, 2013" },
                { title: "Section 12A Registration", desc: "Income tax exemption for charitable organizations under Income Tax Act" },
                { title: "80G Registration", desc: "Tax deduction benefits for donors contributing to charitable organizations" },
                { title: "FCRA Registration", desc: "For receiving foreign contributions and donations from abroad" }
              ].map((type, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{type.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Trust Registration</h3>
                <ul className="space-y-4">
                  {[
                    "Trust deed on stamp paper",
                    "PAN Card of trustees",
                    "Address proof of trustees",
                    "Passport-sized photographs",
                    "Proof of registered office address"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Society Registration</h3>
                <ul className="space-y-4">
                  {[
                    "Memorandum of Association",
                    "Rules and Regulations",
                    "PAN Card of members",
                    "Address proof of members",
                    "Proof of registered office"
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
              <span className="gradient-text">Benefits</span> of NGO Registration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Legal Recognition", desc: "Gain legal entity status and credibility" },
                { title: "Tax Exemptions", desc: "Avail income tax exemptions under Section 12A" },
                { title: "Donor Benefits", desc: "Provide tax benefits to donors under Section 80G" },
                { title: "Government Grants", desc: "Eligible for government funding and grants" },
                { title: "Foreign Funding", desc: "Receive foreign contributions with FCRA registration" },
                { title: "Property Ownership", desc: "Own and manage properties in NGO's name" },
                { title: "Bank Accounts", desc: "Open bank accounts and manage finances" },
                { title: "Perpetual Existence", desc: "Continue operations beyond founder's lifetime" }
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
              <span className="gradient-text">Process</span> Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Choose Structure", desc: "Select appropriate legal structure (Trust/Society/Company)" },
                { step: "02", title: "Document Preparation", desc: "Prepare all required documents and forms" },
                { step: "03", title: "Application Filing", desc: "File application with appropriate authority" },
                { step: "04", title: "Registration", desc: "Receive registration certificate and start operations" }
              ].map((process, idx) => (
                <div key={idx} className="p-6 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="text-4xl font-light mb-4 transition-colors" style={{color: 'var(--gradient-start)'}}>{process.step}</div>
                  <h3 className="text-lg font-light mb-3 tracking-wide">{process.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Compliance</span> Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Annual Compliance</h3>
                <ul className="space-y-4">
                  {[
                    "Annual return filing",
                    "Audit of accounts",
                    "Income tax return filing",
                    "Maintenance of books of accounts",
                    "Compliance with state laws"
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{compliance}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Ongoing Requirements</h3>
                <ul className="space-y-4">
                  {[
                    "Regular board meetings",
                    "Maintenance of minutes",
                    "Annual general meetings",
                    "Financial reporting",
                    "Statutory compliance"
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{compliance}</span>
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
            Start Your <span className="gradient-text">NGO Journey</span> Today
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Get expert guidance for NGO registration and make a positive impact in society
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Register Your NGO
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
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional NGO Registration Services</p>
        </div>
      </footer>
    </div>
  );
}