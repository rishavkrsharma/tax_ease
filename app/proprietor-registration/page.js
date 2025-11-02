'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ProprietorRegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Sole Proprietorship</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>Registration in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            The simplest and most common form of business organization in India. Perfect for small businesses, freelancers, and individual entrepreneurs who want to start quickly with minimal compliance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Key Benefits of <span className="gradient-text">Proprietorship</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Easy to Start", desc: "Minimal documentation, quick setup process, low cost" },
                { title: "Full Control", desc: "Complete decision-making authority with the owner" },
                { title: "Minimal Compliance", desc: "Lower regulatory requirements compared to other entities" },
                { title: "Tax Efficiency", desc: "Business income taxed at individual slab rates" },
                { title: "No Profit Sharing", desc: "All profits belong to the owner" },
                { title: "Easy to Close", desc: "Can be dissolved anytime without complex procedures" }
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
              Who Should Choose <span className="gradient-text">Proprietorship?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "👤", title: "Solo Entrepreneurs", desc: "Individual business owners starting small" },
                { icon: "💼", title: "Freelancers", desc: "Consultants, designers, writers, professionals" },
                { icon: "🏪", title: "Small Businesses", desc: "Retail shops, service providers, local businesses" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:gradient-text transition-colors duration-300">{item.title}</h3>
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
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>Personal Documents</h3>
                <ul className="space-y-4">
                  {["PAN card of proprietor", "Aadhaar card", "Address proof (passport/voter ID/driving license)", "Passport-size photographs", "Bank account statement"].map((doc, i) => (
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
                  {["Business address proof", "Rent/Lease agreement (if applicable)", "Electricity bill", "Shop & Establishment license (if required)", "MSME/Udyam registration (optional)"].map((doc, i) => (
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
              Registration <span className="gradient-text">Steps</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Choose Business Name", desc: "Select a unique name for your proprietorship" },
                { step: "02", title: "Open Bank Account", desc: "Open current account in proprietor's name or business name" },
                { step: "03", title: "Shop & Establishment License", desc: "Register under Shop & Establishment Act of your state" },
                { step: "04", title: "MSME/Udyam Registration", desc: "Register for MSME benefits (optional but recommended)" },
                { step: "05", title: "GST Registration", desc: "If turnover exceeds threshold or for voluntary registration" },
                { step: "06", title: "Professional Tax", desc: "Register for professional tax if applicable in your state" }
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

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Advantages vs <span className="gradient-text">Disadvantages</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>✓ Advantages</h3>
                <ul className="space-y-4">
                  {["Lowest cost of formation", "Full control and decision-making", "Minimal legal formalities", "Easy to dissolve", "Tax benefits at individual rates", "Quick business decisions"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>•</span>
                      <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>✗ Disadvantages</h3>
                <ul className="space-y-4">
                  {["Unlimited liability", "Difficult to raise funds", "Limited growth potential", "Business dies with owner", "Harder to transfer ownership", "Less credibility vs companies"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>•</span>
                      <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20 p-16 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
            <div className="text-center">
              <h2 className="text-4xl font-light tracking-tight mb-8">
                Proprietorship Setup <span className="gradient-text">Package</span>
              </h2>
              <div className="text-6xl font-light mb-6 gradient-text">Starting from ₹499/-</div>
              <p className="text-xl mb-12" style={{color: 'var(--text-secondary)'}}>Complete setup with all registrations</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
                Start Your Business
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
            Start Your <span className="gradient-text">Solo Business</span> Today!
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Simplest way to start your entrepreneurial journey
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Get Started
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