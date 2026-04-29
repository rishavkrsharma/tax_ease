'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function LLPRegistrationPage() {
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
            <span className="text-[#0B1F3A]">LLP Registration</span>
            <br />
            <span className="text-white">in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Separate legal entity, limited liability, and lighter compliance than a company — ideal for professionals who practise together.
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
          <p className="text-lg leading-relaxed text-[#3D5A80] mb-16 max-w-4xl">
            A Limited Liability Partnership (LLP) combines the operational flexibility of a traditional partnership with the crucial protection of limited liability. Governed by the Limited Liability Partnership Act, 2008, an LLP is a separate legal entity, meaning partners are not personally liable for the debts or misconduct of other partners. LLPs are especially favoured by chartered accountants, lawyers, architects, consultants, and other professionals who wish to practise collectively without the higher compliance burden of a Private Limited Company.
          </p>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Key Advantages of an <span className="text-[#C9A84C]">LLP</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Limited Liability", desc: "Each partner's liability is restricted to their agreed contribution. Personal assets are fully protected from business debts." },
                { title: "Flexible Governance", desc: "Partners structure profit-sharing, roles, and decision-making through the LLP Agreement — without many restrictions imposed on companies." },
                { title: "Tax Efficiency", desc: "LLPs are taxed at a flat rate of 30% on profits, with no Dividend Distribution Tax (DDT). This is advantageous for high-earning professionals." },
                { title: "Reduced Compliance Burden", desc: "Unlike Pvt Ltd companies, LLPs do not need Board meetings, detailed statutory registers, or voluminous MCA forms annually." },
                { title: "Separate Legal Identity", desc: "The LLP can own assets, enter contracts, and initiate legal proceedings in its own name." },
                { title: "No Minimum Capital", desc: "There is no statutory minimum capital requirement for forming an LLP." },
              ].map((feature, idx) => (
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{feature.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{feature.desc}</p>
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
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Partners</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card and Aadhaar Card",
                    "Passport-sized photograph",
                    "Address proof (bank statement or utility bill — not older than 2 months)",
                    "Digital Signature Certificate (DSC)",
                    "Designated Partner Identification Number (DPIN)",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Business</h3>
                <ul className="space-y-4">
                  {[
                    "Proposed LLP name (3 options recommended)",
                    "Proof of registered office address (rent/lease agreement + NOC from landlord, or ownership deed)",
                    "Draft LLP Agreement (prepared by our experts)",
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
              <span className="text-[#C9A84C]">Process</span> Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Name Reservation", desc: "Via the MCA portal (typically 1–2 working days)." },
                { step: "02", title: "DSC & DPIN", desc: "For all designated partners (about 1–2 days)." },
                { step: "03", title: "LLP Agreement", desc: "Drafted in accordance with the LLP Act, 2008 (about 1 day)." },
                { step: "04", title: "FiLLiP filing", desc: "Form for incorporation of LLP on the MCA portal (1 day)." },
                { step: "05", title: "Certificate & LLPIN", desc: "Issued by the RoC (total about 5–7 working days)." },
              ].map((process, idx) => (
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-extrabold text-[#C9A84C]/30 mb-3">{process.step}</div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{process.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7A8FA6]">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 bg-[#FDFBF6] rounded-[32px] p-8 lg:p-12 border border-[#E2DFD6]">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-6">
              LLP vs. <span className="text-[#C9A84C]">Private Limited Company</span>
            </h2>
            <p className="text-[#3D5A80] leading-relaxed text-lg">
              <span className="font-semibold text-[#0B1F3A]">Choose LLP if:</span> you are a professional (CA, lawyer, architect, consultant), you want minimal compliance, you do not anticipate raising equity investment, and you prefer flexible profit distribution.{' '}
              <span className="font-semibold text-[#0B1F3A]">Choose Pvt Ltd if:</span> you plan to raise external funding, issue ESOPs, scale rapidly, or seek listing on a stock exchange.
            </p>
            <p className="text-[#7A8FA6] mt-4 leading-relaxed">
              Execute and file the LLP Agreement within 30 days of incorporation.
            </p>
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
            Ready to Register Your <span className="text-white">LLP?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Get expert assistance with LLP registration and start your professional practice with confidence
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get a Free Consultation Today
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