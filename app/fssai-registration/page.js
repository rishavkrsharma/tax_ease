'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function FSSAIRegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">FSSAI Registration</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>Food License in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            FSSAI (Food Safety and Standards Authority of India) registration is mandatory for all food businesses in India. Ensure food safety compliance and build consumer trust.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Types of <span className="gradient-text">FSSAI Registration</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "FSSAI Registration", 
                  desc: "For small food businesses with annual turnover up to ₹12 lakhs",
                  features: ["Basic registration", "Valid for 1-5 years", "Simple process", "Low cost"]
                },
                { 
                  title: "FSSAI State License", 
                  desc: "For medium food businesses with turnover ₹12 lakhs to ₹20 crores",
                  features: ["State-level license", "Valid for 1-5 years", "Detailed documentation", "Moderate cost"]
                },
                { 
                  title: "FSSAI Central License", 
                  desc: "For large food businesses with turnover above ₹20 crores",
                  features: ["Central-level license", "Valid for 1-5 years", "Comprehensive compliance", "Higher cost"]
                }
              ].map((type, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-2xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{type.title}</h3>
                  <p className="leading-relaxed text-sm mb-6" style={{color: 'var(--text-tertiary)'}}>{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-sm mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                        <span className="text-sm" style={{color: 'var(--text-secondary)'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Who Needs <span className="gradient-text">FSSAI License?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Food Manufacturers", desc: "Companies manufacturing food products for sale" },
                { title: "Food Processors", desc: "Businesses processing raw food materials" },
                { title: "Food Distributors", desc: "Wholesale and retail food distributors" },
                { title: "Restaurants & Cafes", desc: "Food service establishments and eateries" },
                { title: "Food Importers", desc: "Businesses importing food products" },
                { title: "Online Food Sellers", desc: "E-commerce platforms selling food items" }
              ].map((business, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{business.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{business.desc}</p>
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
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Individual/Proprietorship</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of proprietor",
                    "Aadhaar Card of proprietor",
                    "Bank account details",
                    "Business address proof",
                    "Food safety management plan"
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
              <span className="gradient-text">Benefits</span> of FSSAI License
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Legal Compliance", desc: "Meet mandatory food safety regulations" },
                { title: "Consumer Trust", desc: "Build credibility and trust among customers" },
                { title: "Business Expansion", desc: "Eligible for government tenders and contracts" },
                { title: "Export Opportunities", desc: "Required for exporting food products" },
                { title: "Bank Loans", desc: "Easy access to business loans and credit" },
                { title: "E-commerce", desc: "Sell on online platforms and marketplaces" },
                { title: "Quality Assurance", desc: "Ensure food safety and quality standards" },
                { title: "Brand Protection", desc: "Protect your brand from legal issues" }
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
                { step: "02", title: "Application Filing", desc: "Submit FSSAI application online", time: "1 day" },
                { step: "03", title: "Verification", desc: "FSSAI officer verifies documents and premises", time: "7-15 days" },
                { step: "04", title: "License Issuance", desc: "Receive FSSAI license certificate", time: "1-2 days" }
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
              <span className="gradient-text">Compliance</span> Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Food Safety Standards</h3>
                <ul className="space-y-4">
                  {[
                    "Maintain hygienic food handling practices",
                    "Follow food safety management system",
                    "Regular quality testing of food products",
                    "Proper storage and transportation",
                    "Employee training on food safety"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Record Keeping</h3>
                <ul className="space-y-4">
                  {[
                    "Maintain food safety records",
                    "Document supplier information",
                    "Keep production and processing logs",
                    "Record quality test results",
                    "Maintain customer complaint records"
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
            Get Your <span className="gradient-text">FSSAI License</span> Today
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Ensure food safety compliance and build consumer trust with FSSAI registration
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Apply for FSSAI License
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
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional FSSAI Registration Services</p>
        </div>
      </footer>
    </div>
  );
}