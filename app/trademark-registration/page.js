'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function TrademarkRegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Trademark Registration</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Protect your brand identity with trademark registration. Secure exclusive rights to your brand name, logo, and other distinctive marks.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              What is a <span className="gradient-text">Trademark?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{color: 'var(--text-secondary)'}}>
                  A trademark is a distinctive sign, symbol, word, phrase, logo, or combination that identifies and distinguishes the source of goods or services of one party from those of others. It provides legal protection for your brand identity.
                </p>
                <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                  <h3 className="text-2xl font-light mb-4 tracking-wide">Key Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Exclusive rights to use the mark",
                      "Legal protection against infringement",
                      "Brand recognition and trust",
                      "Asset value for your business",
                      "International protection options"
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                        <span className="" style={{color: 'var(--text-secondary)'}}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Types of Trademarks</h3>
                <ul className="space-y-4">
                  {[
                    "Word Marks (Brand names, slogans)",
                    "Logo Marks (Graphic designs, symbols)",
                    "Combination Marks (Words + logos)",
                    "Service Marks (For services)",
                    "Collective Marks (For groups)",
                    "Certification Marks (Quality standards)"
                  ].map((type, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{type}</span>
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
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Individual</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of applicant",
                    "Aadhaar Card of applicant",
                    "Address proof",
                    "Trademark image/logo (if applicable)",
                    "Power of Attorney (if filed through agent)"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Company/LLP</h3>
                <ul className="space-y-4">
                  {[
                    "Certificate of incorporation",
                    "PAN Card of entity",
                    "Address proof of entity",
                    "Trademark image/logo (if applicable)",
                    "Board resolution (for companies)"
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
              <span className="gradient-text">Process</span> Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Trademark Search", desc: "Conduct availability search to avoid conflicts", time: "1-2 days" },
                { step: "02", title: "Application Filing", desc: "File trademark application with IP India", time: "1 day" },
                { step: "03", title: "Examination", desc: "IP India examines the application", time: "3-6 months" },
                { step: "04", title: "Registration", desc: "Receive trademark registration certificate", time: "6-12 months" }
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
              <span className="gradient-text">Classes</span> of Trademarks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { class: "Class 1-5", title: "Chemical Products", desc: "Chemicals, paints, pharmaceuticals, cosmetics" },
                { class: "Class 6-14", title: "Metal Products", desc: "Metals, machinery, jewelry, precious stones" },
                { class: "Class 15-22", title: "Musical Instruments", desc: "Musical instruments, paper, leather goods" },
                { class: "Class 23-34", title: "Textiles & Tobacco", desc: "Yarns, textiles, clothing, tobacco products" },
                { class: "Class 35-45", title: "Services", desc: "Advertising, business, legal, educational services" },
                { class: "Class 46-50", title: "Additional Classes", desc: "Various goods and services categories" }
              ].map((category, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="text-2xl font-light mb-3 transition-colors" style={{color: 'var(--gradient-start)'}}>{category.class}</div>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{category.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{category.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Post Registration</span> Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Legal Protection</h3>
                <ul className="space-y-4">
                  {[
                    "Exclusive rights for 10 years (renewable)",
                    "Protection against trademark infringement",
                    "Right to sue for damages",
                    "Customs protection against counterfeits",
                    "International protection under Madrid Protocol"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Business Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Brand recognition and trust",
                    "Competitive advantage",
                    "Asset value for business",
                    "Licensing opportunities",
                    "Franchise expansion possibilities"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{benefit}</span>
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
            Protect Your <span className="gradient-text">Brand Identity</span>
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Get your trademark registered and secure exclusive rights to your brand
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Register Trademark
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
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional Trademark Registration Services</p>
        </div>
      </footer>
    </div>
  );
}