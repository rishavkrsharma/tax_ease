'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function FSSAIRegistrationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#C9A84C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-32 lg:pb-40">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">Home › Registration</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">FSSAI Registration</span>
            <br />
            <span className="text-white">Food License in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Basic, State, or Central authorisation for every FBO — from cloud kitchens to processors — under FSS Act, 2006, with the right tier for turnover and scale.
          </p>
        </div>
      
        {/* Wave → White */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row">
        <SubpageSidebar />
        <div className="flex-1 min-w-0">

      {/* Content */}
      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Types of <span className="text-[#C9A84C]">FSSAI Registration</span>
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-2xl font-light mb-4 tracking-wide group-hover:text-[#C9A84C] transition-colors duration-300">{type.title}</h3>
                  <p className="leading-relaxed text-sm mb-6 text-[#7A8FA6]">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-sm mt-1 text-[#C9A84C]">✓</span>
                        <span className="text-sm text-[#3D5A80]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Who Needs <span className="text-[#C9A84C]">FSSAI License?</span>
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{business.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{business.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Individual/Proprietorship</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of proprietor",
                    "Aadhaar Card of proprietor",
                    "Bank account details",
                    "Business address proof",
                    "Food safety management plan"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Company/Partnership</h3>
                <ul className="space-y-4">
                  {[
                    "Certificate of incorporation",
                    "PAN Card of entity",
                    "Bank account details",
                    "Business address proof",
                    "Board resolution/Partnership deed"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Benefits</span> of FSSAI License
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
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7A8FA6]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Process</span> Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Document Collection", desc: "Gather all required documents and information", time: "1-2 days" },
                { step: "02", title: "Application Filing", desc: "Submit FSSAI application online", time: "1 day" },
                { step: "03", title: "Verification", desc: "FSSAI officer verifies documents and premises", time: "7-15 days" },
                { step: "04", title: "License Issuance", desc: "Receive FSSAI license certificate", time: "1-2 days" }
              ].map((process, idx) => (
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-extrabold text-[#C9A84C]/30 mb-3">{process.step}</div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{process.title}</h3>
                  <p className="text-sm leading-relaxed mb-2 text-[#7A8FA6]">{process.desc}</p>
                  <div className="text-xs tracking-wider uppercase text-[#C9A84C]">{process.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Compliance</span> Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Food Safety Standards</h3>
                <ul className="space-y-4">
                  {[
                    "Maintain hygienic food handling practices",
                    "Follow food safety management system",
                    "Regular quality testing of food products",
                    "Proper storage and transportation",
                    "Employee training on food safety"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Record Keeping</h3>
                <ul className="space-y-4">
                  {[
                    "Maintain food safety records",
                    "Document supplier information",
                    "Keep production and processing logs",
                    "Record quality test results",
                    "Maintain customer complaint records"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>
      </div>

      {/* CTA Section */}
      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Get Your <span className="text-white">FSSAI License</span> Today
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Ensure food safety compliance and build consumer trust with FSSAI registration
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Apply for FSSAI License
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}