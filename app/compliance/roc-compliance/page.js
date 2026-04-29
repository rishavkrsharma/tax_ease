'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function ROCCompliancePage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">Home › Compliance</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">ROC Compliance</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed text-[#0B1F3A]/55 font-light">
            MGT-7/AOC-4, DIR-3 KYC, MSME Form I, and event-based MCA forms — tracked so penalties and director disqualification risk stay low.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row">
        <SubpageSidebar />
        <div className="flex-1 min-w-0">

      {/* ═══ ANNUAL FILINGS — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-[#3D5A80] leading-relaxed mb-14 max-w-4xl mx-auto text-center">
            Every company under the Companies Act, 2013 must meet mandatory annual and event-based filings with the Registrar of Companies. Non-compliance attracts compounding penalties, director disqualification, and in serious cases striking off. We calendar MGT-7/MGT-7A, AOC-4, ADT-1, DIR-3 KYC, and MSME Form I so nothing is missed.
          </p>
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Annual Filings</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              ROC <span className="text-[#C9A84C]">Compliance Calendar</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { form: "AOC-4", desc: "Financial statements filing with the Registrar of Companies", due: "Within 30 days of AGM", icon: "📊" },
              { form: "MGT-7", desc: "Annual return filing containing company details and shareholding", due: "Within 60 days of AGM", icon: "📋" },
              { form: "DIR-3 KYC", desc: "Director KYC verification for all active directors", due: "30th September annually", icon: "👤" },
              { form: "ADT-1", desc: "Auditor appointment notification to MCA", due: "Within 15 days of AGM", icon: "🔍" },
              { form: "DPT-3", desc: "Return of deposits or transactions not considered as deposits", due: "30th June annually", icon: "💰" },
              { form: "MGT-14", desc: "Filing of board and special resolutions with ROC", due: "Within 30 days", icon: "📜" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-1">{item.form}</h3>
                <p className="text-sm leading-relaxed text-[#7A8FA6] mb-3">{item.desc}</p>
                <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-3 py-1">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] font-semibold">Due: {item.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY COMPLIANCE MATTERS — Navy ═══ */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto pt-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Why It Matters</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Consequences of <span className="text-[#C9A84C]">Non-Compliance</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Heavy Penalties", desc: "Late filing attracts penalties ranging from ₹100 to ₹5 lakh per form", icon: "⚠️" },
              { title: "Director Disqualification", desc: "Non-compliant directors can be disqualified under Section 164", icon: "🚫" },
              { title: "Company Strike-Off", desc: "ROC can initiate strike-off proceedings for inactive companies", icon: "❌" },
              { title: "Prosecution", desc: "Serious defaults can lead to criminal prosecution of directors", icon: "⚖️" }
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

      {/* ═══ OUR SERVICES — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">What We Cover</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              Our ROC <span className="text-[#C9A84C]">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">📅</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Annual Compliance</h3>
              </div>
              <ul className="space-y-3">
                {["Filing of annual returns (MGT-7/MGT-7A)", "Financial statement filing (AOC-4)", "Director KYC (DIR-3 KYC)", "Auditor appointment (ADT-1)", "Conducting AGM and maintaining minutes"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#3D5A80]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🔄</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Event-Based Compliance</h3>
              </div>
              <ul className="space-y-3">
                {["Change in directors or KMP", "Increase in authorised share capital", "Change in registered office address", "Allotment of shares (PAS-3)", "Charge creation and modification"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#3D5A80]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            Stay Compliant with{' '}
            <span className="text-white">ROC Requirements</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Avoid penalties and prosecution — let our experts handle all your ROC filings
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get Started <span className="text-lg leading-none">→</span>
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
