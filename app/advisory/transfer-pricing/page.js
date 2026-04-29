'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function TransferPricingPage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">Home › Advisory</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">Transfer</span>
            <br />
            <span className="text-white">Pricing</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed text-[#0B1F3A]/55 font-light">
            Section 92D documentation, CbCR, APA/MAP, and TPO/DRP/ITAT defence for international transactions.
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

      {/* ═══ SERVICES — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-[#3D5A80] leading-relaxed mb-14 max-w-4xl mx-auto text-center">
            Chapter X applies to international transactions and specified domestic transactions between associated enterprises. We prepare TP documentation under Section 92D, CbCR where group revenue crosses thresholds, APA applications, MAP for bilateral relief, and audit defence before TPO, DRP, and ITAT using prescribed methods (CUP, cost plus, resale price, profit split, TNMM).
          </p>
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              Transfer Pricing <span className="text-[#C9A84C]">Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "TP Study & Documentation",
                desc: "Comprehensive transfer pricing documentation for compliance",
                icon: "📊",
                items: ["Functional analysis", "Economic analysis", "Benchmarking study", "Form 3CEB filing", "Master file preparation", "Local file preparation"]
              },
              {
                title: "ALP Analysis",
                desc: "Arm's Length Price determination and method selection",
                icon: "⚖️",
                items: ["Method selection (CUP/RPM/CPM/TNMM/PSM)", "Comparability analysis", "Adjustments computation", "Range determination", "Sensitivity analysis", "Detailed documentation"]
              },
              {
                title: "Advance Pricing Agreement",
                desc: "APA applications for certainty in transfer pricing",
                icon: "📜",
                items: ["Unilateral APA filing", "Bilateral APA coordination", "Rollback provisions", "Annual compliance reporting", "APA renewal services", "Amendment applications"]
              },
              {
                title: "TP Litigation Support",
                desc: "Transfer pricing dispute resolution and defense",
                icon: "🛡️",
                items: ["Assessment support before TPO", "TP adjustment defense", "Appeals & representations", "Penalty defense proceedings", "Mutual Agreement Procedure", "Safe harbour applications"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#7A8FA6] mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-[#3D5A80]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — Navy ═══ */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto pt-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Step by Step</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Our TP <span className="text-[#C9A84C]">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Scoping", desc: "Identify international transactions and assess transfer pricing requirements" },
              { step: "02", title: "Analysis", desc: "Conduct functional, economic analysis and select the most appropriate method" },
              { step: "03", title: "Benchmarking", desc: "Search comparables, compute arm's length range and price" },
              { step: "04", title: "Documentation", desc: "Prepare TP report, master file, local file and file Form 3CEB" }
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
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══ WHY CHOOSE — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Why Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              Why Choose <span className="text-[#C9A84C]">ANYTAX</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🏆</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Our Strengths</h3>
              </div>
              <ul className="space-y-3">
                {["Dedicated TP specialists with deep expertise", "Industry-specific knowledge and benchmarking", "Proven track record in TP assessments", "Access to global databases (Prowess, TP Catalyst)", "Timely delivery ahead of due dates"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#3D5A80]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🎯</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">Value We Add</h3>
              </div>
              <ul className="space-y-3">
                {["Audit defense and penalty protection", "APA feasibility assessment and filing", "Compliance risk mitigation strategies", "Cost-effective solutions for all enterprise sizes", "Post-assessment appeal and litigation support"].map((item, i) => (
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
            Need Transfer Pricing{' '}
            <span className="text-white">Services?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Comprehensive transfer pricing solutions — from documentation to litigation
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get Expert Help <span className="text-lg leading-none">→</span>
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
