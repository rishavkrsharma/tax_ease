'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function GSTRegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">GST Registration</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Goods and Services Tax (GST) registration is mandatory for businesses with turnover above the threshold limit. Get your GST registration done quickly and efficiently.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Who Needs <span className="gradient-text">GST Registration?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Businesses with ₹40L+ Turnover", desc: "Mandatory for businesses with annual turnover above ₹40 lakhs (₹20 lakhs for special category states)" },
                { title: "E-commerce Sellers", desc: "All sellers on e-commerce platforms must register for GST regardless of turnover" },
                { title: "Inter-state Suppliers", desc: "Businesses supplying goods or services across state borders" },
                { title: "Casual Taxable Persons", desc: "Persons who occasionally supply goods or services in a state where they don't have a fixed place of business" },
                { title: "Non-resident Taxable Persons", desc: "Foreign entities supplying goods or services in India" },
                { title: "Input Service Distributors", desc: "Businesses that distribute input tax credit to their branches" }
              ].map((requirement, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{requirement.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{requirement.desc}</p>
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
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Proprietorship</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of proprietor",
                    "Aadhaar Card of proprietor",
                    "Bank account details",
                    "Business address proof",
                    "Digital signature certificate"
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
                    "Bank account details",
                    "Board resolution/LLP agreement",
                    "Digital signature certificate"
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
              <span className="gradient-text">Benefits</span> of GST Registration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Legal Compliance", desc: "Stay compliant with GST laws and avoid penalties" },
                { title: "Input Tax Credit", desc: "Claim ITC on purchases and reduce tax liability" },
                { title: "Business Credibility", desc: "Enhance business credibility and trust among customers" },
                { title: "Inter-state Trade", desc: "Conduct business across state borders without restrictions" },
                { title: "Online Business", desc: "Sell on e-commerce platforms and online marketplaces" },
                { title: "Government Tenders", desc: "Participate in government tenders and contracts" },
                { title: "Bank Loans", desc: "Easy access to business loans and credit facilities" },
                { title: "Export Benefits", desc: "Export goods and services with zero-rated supplies" }
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
                { step: "01", title: "Document Collection", desc: "Gather all required documents and information", time: "1-2 days" },
                { step: "02", title: "Application Filing", desc: "File GST registration application on GST portal", time: "1 day" },
                { step: "03", title: "Verification", desc: "GST officer verifies documents and information", time: "3-7 days" },
                { step: "04", title: "GST Certificate", desc: "Receive GST registration certificate", time: "1 day" }
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
              <span className="gradient-text">Post Registration</span> Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Monthly Returns</h3>
                <ul className="space-y-4">
                  {[
                    "GSTR-1: Outward supplies return",
                    "GSTR-3B: Monthly summary return",
                    "GSTR-2A: Auto-populated inward supplies",
                    "Payment of GST liability",
                    "Reconciliation of books"
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{compliance}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Annual Returns</h3>
                <ul className="space-y-4">
                  {[
                    "GSTR-9: Annual return",
                    "GSTR-9C: Reconciliation statement",
                    "Annual audit (if applicable)",
                    "Maintenance of records",
                    "Compliance with GST rules"
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
            Get Your <span className="gradient-text">GST Registration</span> Today
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Fast, reliable, and hassle-free GST registration with expert guidance and support
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Start Registration
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
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional GST Registration Services</p>
        </div>
      </footer>
    </div>
  );
}