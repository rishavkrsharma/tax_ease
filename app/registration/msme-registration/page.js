'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function MSMERegistrationPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══ HERO — Gold ═══ */}
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
            <span className="text-[#0B1F3A]">MSME / Udyam</span>
            <br />
            <span className="text-white">Registration</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed text-[#0B1F3A]/55 font-light">
            Free, online Udyam registration based on self-declared investment and turnover — unlock priority lending, MSME Act payment protection, and scheme access.
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

      {/* ═══ CLASSIFICATION TABLE — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-[#3D5A80] leading-relaxed mb-14 max-w-4xl mx-auto text-center">
            Udyam Registration (formerly Udyog Aadhaar), under the MSME Development Act, 2006, is the official government certification that classifies your enterprise as Micro, Small, or Medium. Registration is free, fully online, and based on self-declaration of turnover and investment. Current classification follows the MSME Development (Amendment) Act, 2020.
          </p>
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Classification</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              MSME <span className="text-[#C9A84C]">Categories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { cat: "Micro Enterprise", invest: "Up to ₹1 Crore", turnover: "Up to ₹5 Crore", icon: "🏠" },
              { cat: "Small Enterprise", invest: "₹1 Cr – ₹10 Crore", turnover: "₹5 Cr – ₹50 Crore", icon: "🏢" },
              { cat: "Medium Enterprise", invest: "₹10 Cr – ₹50 Crore", turnover: "₹50 Cr – ₹250 Crore", icon: "🏗️" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">{item.cat}</h3>
                <div className="space-y-2">
                  <div className="bg-[#C9A84C]/8 rounded-2xl px-4 py-2.5">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#7A8FA6] font-semibold mb-0.5">Investment</div>
                    <div className="text-sm font-semibold text-[#0B1F3A]">{item.invest}</div>
                  </div>
                  <div className="bg-[#C9A84C]/8 rounded-2xl px-4 py-2.5">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#7A8FA6] font-semibold mb-0.5">Turnover</div>
                    <div className="text-sm font-semibold text-[#0B1F3A]">{item.turnover}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KEY BENEFITS — Navy ═══ */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto pt-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Advantages</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Key Benefits of <span className="text-[#C9A84C]">MSME Registration</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Easy Credit Access", desc: "Priority sector lending, lower interest rates, collateral-free loans", icon: "🏦" },
              { title: "Government Subsidies", desc: "Various schemes and subsidies for technology upgradation", icon: "💡" },
              { title: "Tax Benefits", desc: "Income tax benefits, reduced rates for certain services", icon: "💰" },
              { title: "Tender Preference", desc: "Reserved quotas in government tenders and contracts", icon: "📋" },
              { title: "Patent Fee Reduction", desc: "50% reduction in patent filing fees", icon: "📜" },
              { title: "Bank Guarantee Exemption", desc: "Exemption from bank guarantee in government tenders", icon: "✅" }
            ].map((item, idx) => (
              <div key={idx} className="glass-dark rounded-[28px] p-7 group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#B0C4DE]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══ DOCUMENTS — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Checklist</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              Documents <span className="text-[#C9A84C]">Required</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">👤</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Basic Documents</h3>
              </div>
              <ul className="space-y-3">
                {["Aadhaar card of proprietor/partners", "PAN card of business", "Business address proof", "Bank account details", "Mobile number and email ID"].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#3D5A80]">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🏢</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Business Details</h3>
              </div>
              <ul className="space-y-3">
                {["Business name and type", "Date of commencement", "Investment in plant & machinery", "Annual turnover details", "Number of employees"].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#3D5A80]">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — Navy ═══ */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto pt-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Step by Step</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Registration <span className="text-[#C9A84C]">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { step: "01", title: "Visit Udyam Portal", desc: "Go to the official Udyam registration portal" },
              { step: "02", title: "Aadhaar Verification", desc: "Verify Aadhaar number of proprietor/partners" },
              { step: "03", title: "Fill Application", desc: "Enter business details, investment, and turnover information" },
              { step: "04", title: "Submit Documents", desc: "Upload required documents and submit application" },
              { step: "05", title: "Get Udyam Number", desc: "Receive Udyam Registration Number immediately" },
              { step: "06", title: "Download Certificate", desc: "Download the MSME certificate from the portal" }
            ].map((item, idx) => (
              <div key={idx} className="glass-dark rounded-[28px] p-7 group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl font-extrabold text-[#C9A84C]/30 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#B0C4DE]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

        </div>
      </div>

      {/* ═══ CTA — Gold ═══ */}
      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Get Your{' '}
            <span className="text-white">MSME Certificate</span> Today!
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Unlock government benefits and grow your business with MSME registration
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Start Registration <span className="text-lg leading-none">→</span>
          </Link>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
