'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function CompanyRegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Company Registration</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            A Step-by-Step Guide for Entrepreneurs
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
              Starting a business in India is an exciting journey, but it begins with a crucial step—choosing the type of entity. Whether you're launching a startup, a small business, or a large enterprise, registering your COMPANY is essential to ensure legal compliance, build credibility, and unlock growth opportunities.
            </p>

            {/* Why Register Section */}
            <div className="mb-20">
          <h2 className="text-4xl font-light tracking-tight mb-12">
            Why Register a <span className="gradient-text">Company</span> in India?
          </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { num: "01", title: "Separate Legal Identity", desc: "A registered company is recognized as a separate legal entity, distinct from its owners." },
                  { num: "02", title: "Limited Liability", desc: "Protects the personal assets of shareholders from business liabilities." },
                  { num: "03", title: "Tax Benefits and Incentives", desc: "Registered businesses can avail of various tax deductions, exemptions, and incentives under Indian tax laws." },
                  { num: "04", title: "Access to Funding and Investment", desc: "Registered companies can easily raise capital, apply for loans, or attract investors." },
                  { num: "05", title: "Credibility and Brand Value", desc: "A registered business builds trust with customers, suppliers, and tax authorities." },
                  { num: "06", title: "Perpetual Succession", desc: "The company continues to exist regardless of changes in ownership or management." },
                  { num: "07", title: "Ease of Transferability", desc: "Ownership can be easily transferred through the sale of shares." },
                  { num: "08", title: "Structured Governance", desc: "Companies operate under a structured framework governed by the Companies Act, 2013." },
                  { num: "09", title: "Employee Benefits and ESOPs", desc: "Companies can offer Employee Stock Ownership Plans to attract and retain talent." },
                  { num: "10", title: "Global Recognition", desc: "A company structure is ideal for businesses planning to expand globally." }
                ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 border transition-all duration-500 group" 
                style={{borderColor: 'var(--border-color)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div className="text-6xl font-light mb-4 transition-colors" style={{color: 'var(--gradient-start)'}}>{item.num}</div>
                <h3 className="text-xl font-light mb-3 tracking-wide" style={{color: 'var(--text-primary)'}}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
              </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-20">
      <h2 className="text-4xl font-light tracking-tight mb-12">
        Comparison: <span className="gradient-text">Company</span> vs Other Entities
      </h2>
              <div className="overflow-x-auto">
                <table className="w-full border" style={{borderColor: 'var(--border-color)'}}>
                  <thead style={{backgroundColor: 'var(--surface-hover)'}}>
                    <tr>
                      <th className="px-6 py-4 text-left font-light tracking-wider" style={{color: 'var(--text-primary)'}}>Feature</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider" style={{color: 'var(--text-primary)'}}>Company</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider" style={{color: 'var(--text-primary)'}}>Sole Proprietorship</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider" style={{color: 'var(--text-primary)'}}>Partnership</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider" style={{color: 'var(--text-primary)'}}>LLP</th>
                    </tr>
                  </thead>
                  <tbody style={{borderTop: '1px solid var(--border-color)'}}>
                    {[
                      { feature: "Legal Entity", company: "Separate legal entity", sole: "No separate entity", partner: "No separate entity", llp: "Separate legal entity" },
                      { feature: "Liability", company: "Limited liability", sole: "Unlimited liability", partner: "Unlimited liability", llp: "Limited liability" },
                      { feature: "Funding Options", company: "Issue shares, attract investors", sole: "Limited", partner: "Limited", llp: "Limited" },
                      { feature: "Tax Benefits", company: "Lower tax rates, incentives", sole: "Individual slab rates", partner: "Individual slab rates", llp: "Flat 30% rate" },
                      { feature: "Transferability", company: "Easy transfer of shares", sole: "Difficult", partner: "Difficult", llp: "Transfer requires consent" },
                      { feature: "Global Expansion", company: "Easy to expand globally", sole: "Difficult", partner: "Difficult", llp: "Moderate" }
                    ].map((row, idx) => (
                      <tr 
                        key={idx} 
                        className="transition-colors duration-300"
                        style={{borderTop: '1px solid var(--border-color)'}}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <td className="px-6 py-4 font-light" style={{color: 'var(--text-secondary)'}}>{row.feature}</td>
                        <td className="px-6 py-4 text-sm" style={{color: 'var(--text-secondary)'}}>{row.company}</td>
                        <td className="px-6 py-4 text-sm" style={{color: 'var(--text-tertiary)'}}>{row.sole}</td>
                        <td className="px-6 py-4 text-sm" style={{color: 'var(--text-tertiary)'}}>{row.partner}</td>
                        <td className="px-6 py-4 text-sm" style={{color: 'var(--text-secondary)'}}>{row.llp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Types of Companies */}
            <div className="mb-20">
      <h2 className="text-4xl font-light tracking-tight mb-12">
        Types of <span className="gradient-text">Companies</span> in India
      </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { type: "Private Limited Company (Pvt Ltd)", desc: "Ideal for startups and SMEs. Requires 2 directors and 2 shareholders. Offers limited liability and is eligible for various tax benefits." },
                  { type: "One Person Company (OPC)", desc: "Perfect for solo entrepreneurs. Combines the benefits of a private limited company with the simplicity of a sole proprietorship." },
                  { type: "Public Limited Company", desc: "For large businesses planning to raise capital from the public. Requires 3 directors and 7 shareholders." },
                  { type: "Section 8 Company", desc: "Formed for charitable, educational, or social purposes. Registered under Section 8 of the Companies Act, 2013." }
                ].map((item, idx) => (
        <div 
          key={idx} 
          className="p-8 border transition-all duration-500" 
          style={{borderColor: 'var(--border-color)'}}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
        >
          <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>{item.type}</h3>
          <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
        </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="mb-20 p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
              <h2 className="text-4xl font-light tracking-tight mb-12" style={{color: 'var(--text-primary)'}}>Documents Required</h2>
              <ul className="space-y-4">
                {[
                  "Identity and address proof of directors and shareholders",
                  "Proof of registered office address (rent agreement or ownership documents)",
                  "Passport-sized photographs of directors",
                  "Digital Signature Certificates (DSC) of directors",
                  "Memorandum of Association (MOA) and Articles of Association (AOA)"
                ].map((doc, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
          <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{doc}</span>
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
            Ready to <span className="gradient-text">get started?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Get expert assistance with complete documentation and hassle-free registration
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg"
          >
            Get a Free Quote
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
