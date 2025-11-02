'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function PartnershipRegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Partnership Registration</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            A Partnership Firm is one of the most popular business structures in India, especially for small and medium businesses. It involves two or more persons who agree to share the profits and losses of a business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Key Features of <span className="gradient-text">Partnership Firm</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Easy Formation", desc: "Simple registration process with minimal compliance requirements" },
                { title: "Shared Responsibility", desc: "Partners share management, profits, and losses as per agreement" },
                { title: "Flexibility", desc: "Partners can decide profit-sharing ratio and management structure" },
                { title: "Tax Benefits", desc: "Partners are taxed individually at slab rates, firm taxed at 30%" },
                { title: "Multiple Partners", desc: "Minimum 2 partners, maximum 50 partners allowed" },
                { title: "Cost-Effective", desc: "Lower registration and maintenance costs compared to companies" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:gradient-text transition-colors duration-300">{item.title}</h3>
                  <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Types of <span className="gradient-text">Partnership</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { type: "General Partnership", desc: "All partners have unlimited liability and participate in management" },
                { type: "Limited Partnership", desc: "One or more partners have limited liability based on their investment" },
                { type: "Partnership at Will", desc: "No fixed duration, continues until partners decide to dissolve" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-2xl font-light tracking-wide mb-4">{item.type}</h3>
                  <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Documents <span className="gradient-text">Required</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>Partner Documents</h3>
                <ul className="space-y-4">
                  {["PAN card of all partners", "Aadhaar card of all partners", "Address proof (passport/voter ID/driving license)", "Passport-size photographs", "Bank account details"].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>Business Documents</h3>
                <ul className="space-y-4">
                  {["Registered office address proof", "Rent agreement (if rented)", "NOC from property owner", "Electricity/water bill", "Partnership deed draft"].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Registration <span className="gradient-text">Process</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Draft Partnership Deed", desc: "Prepare partnership deed with all terms, profit-sharing ratio, and clauses" },
                { step: "02", title: "Notarization", desc: "Get the partnership deed notarized on stamp paper" },
                { step: "03", title: "Register with Registrar of Firms", desc: "Submit application with required documents to Registrar" },
                { step: "04", title: "Obtain PAN", desc: "Apply for PAN card in the name of the partnership firm" },
                { step: "05", title: "Open Bank Account", desc: "Open a current account in the firm's name" },
                { step: "06", title: "Additional Registrations", desc: "GST, MSME, Shop & Establishment as applicable" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="flex-shrink-0 w-16 h-16 border transition-colors duration-300 flex items-center justify-center text-2xl font-light" style={{borderColor: 'var(--border-color)'}} style={{color: 'var(--gradient-start)'}}>{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-light tracking-wide mb-3 group-hover:gradient-text transition-colors duration-300">{item.title}</h3>
                    <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 p-16 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
            <div className="text-center">
              <h2 className="text-4xl font-light tracking-tight mb-8">
                Partnership Registration <span className="gradient-text">Package</span>
              </h2>
              <div className="text-6xl font-light mb-6 gradient-text">Starting from ₹999/-</div>
              <p className="text-xl mb-12" style={{color: 'var(--text-secondary)'}}>Complete registration with partnership deed preparation</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
                Get Started Now
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            Ready to Register Your <span className="gradient-text">Partnership Firm?</span>
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Get expert assistance with partnership deed and complete registration
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Contact Us Now
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
          <p className="text-sm tracking-wider" style={{color: 'var(--text-tertiary)'}}>Copyright @ANYTAX All rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}