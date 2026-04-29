'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function NGORegistrationPage() {
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
            <span className="text-[#0B1F3A]">NGO Registration</span>
            <br />
            <span className="text-white">in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Trust, Society, or Section 8 Company — plus 12A, 80G, FCRA, and CSR funding paths. We help you pick the structure that matches donors and compliance intensity.
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
              Types of <span className="text-[#C9A84C]">NGO Registration</span>
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{type.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{type.desc}</p>
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
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Trust Registration</h3>
                <ul className="space-y-4">
                  {[
                    "Trust deed on stamp paper",
                    "PAN Card of trustees",
                    "Address proof of trustees",
                    "Passport-sized photographs",
                    "Proof of registered office address"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Society Registration</h3>
                <ul className="space-y-4">
                  {[
                    "Memorandum of Association",
                    "Rules and Regulations",
                    "PAN Card of members",
                    "Address proof of members",
                    "Proof of registered office"
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
              <span className="text-[#C9A84C]">Benefits</span> of NGO Registration
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
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7A8FA6]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Process</span> Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Choose Structure", desc: "Select appropriate legal structure (Trust/Society/Company)" },
                { step: "02", title: "Document Preparation", desc: "Prepare all required documents and forms" },
                { step: "03", title: "Application Filing", desc: "File application with appropriate authority" },
                { step: "04", title: "Registration", desc: "Receive registration certificate and start operations" }
              ].map((process, idx) => (
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-extrabold text-[#C9A84C]/30 mb-3">{process.step}</div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{process.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7A8FA6]">{process.desc}</p>
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
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Annual Compliance</h3>
                <ul className="space-y-4">
                  {[
                    "Annual return filing",
                    "Audit of accounts",
                    "Income tax return filing",
                    "Maintenance of books of accounts",
                    "Compliance with state laws"
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{compliance}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Ongoing Requirements</h3>
                <ul className="space-y-4">
                  {[
                    "Regular board meetings",
                    "Maintenance of minutes",
                    "Annual general meetings",
                    "Financial reporting",
                    "Statutory compliance"
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{compliance}</span>
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
            Start Your <span className="text-white">NGO Journey</span> Today
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Get expert guidance for NGO registration and make a positive impact in society
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Register Your NGO
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