'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function TrademarkRegistrationPage() {
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
            <span className="text-[#0B1F3A]">Trademark Registration</span>
            <br />
            <span className="text-white">in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Exclusive rights to your name, logo, or tagline under the Trade Marks Act, 1999 — search, filing, objection, and renewal support from application to registration.
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
              What is a <span className="text-[#C9A84C]">Trademark?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-8 text-[#3D5A80]">
                  A trademark is a distinctive sign, symbol, word, phrase, logo, or combination that identifies and distinguishes the source of goods or services of one party from those of others. It provides legal protection for your brand identity.
                </p>
                <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
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
                        <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                        <span className="text-[#3D5A80]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Types of Trademarks</h3>
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
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Individual</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of applicant",
                    "Aadhaar Card of applicant",
                    "Address proof",
                    "Trademark image/logo (if applicable)",
                    "Power of Attorney (if filed through agent)"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Company/LLP</h3>
                <ul className="space-y-4">
                  {[
                    "Certificate of incorporation",
                    "PAN Card of entity",
                    "Address proof of entity",
                    "Trademark image/logo (if applicable)",
                    "Board resolution (for companies)"
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
              <span className="text-[#C9A84C]">Process</span> Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Trademark Search", desc: "Conduct availability search to avoid conflicts", time: "1-2 days" },
                { step: "02", title: "Application Filing", desc: "File trademark application with IP India", time: "1 day" },
                { step: "03", title: "Examination", desc: "IP India examines the application", time: "3-6 months" },
                { step: "04", title: "Registration", desc: "Receive trademark registration certificate", time: "6-12 months" }
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
              <span className="text-[#C9A84C]">Classes</span> of Trademarks
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <div className="text-2xl font-light mb-3 transition-colors text-[#C9A84C]">{category.class}</div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{category.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Post Registration</span> Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Legal Protection</h3>
                <ul className="space-y-4">
                  {[
                    "Exclusive rights for 10 years (renewable)",
                    "Protection against trademark infringement",
                    "Right to sue for damages",
                    "Customs protection against counterfeits",
                    "International protection under Madrid Protocol"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Business Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Brand recognition and trust",
                    "Competitive advantage",
                    "Asset value for business",
                    "Licensing opportunities",
                    "Franchise expansion possibilities"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{benefit}</span>
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
            Protect Your <span className="text-white">Brand Identity</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Get your trademark registered and secure exclusive rights to your brand
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Register Trademark
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