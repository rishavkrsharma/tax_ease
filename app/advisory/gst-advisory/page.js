'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function GSTAdvisoryPage() {
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
            <span className="text-[#0B1F3A]">GST</span>
            <br />
            <span className="text-white">Advisory</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed text-[#0B1F3A]/55 font-light">
            Health checks, ITC optimisation, e-invoicing readiness, real estate &amp; OIDAR positions — proactive GST advice.
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
            GST law continues to evolve across ITC, e-invoicing thresholds, GSTR-2B, and IMS. Proactive advisory covers GST health checks, ITC optimisation and blocked-credit analysis, e-invoicing implementation, real estate and JDA positions, OIDAR and foreign digital supply issues, and voluntary disclosure routes where past errors exist.
          </p>
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              GST Advisory <span className="text-[#C9A84C]">Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "GST Structure Planning",
                desc: "Design the optimal GST structure for your business",
                icon: "🏗️",
                items: ["Registration strategy", "Multiple registrations planning", "Composition vs regular scheme", "SEZ operations planning", "E-commerce GST setup", "Branch transfer optimization"]
              },
              {
                title: "ITC Optimization",
                desc: "Maximize your Input Tax Credit for cost savings",
                icon: "💰",
                items: ["ITC eligibility assessment", "Reversal computation (Rule 42/43)", "ITC reconciliation (GSTR-2B)", "Blocked credits analysis", "ITC planning strategies", "E-way bill compliance"]
              },
              {
                title: "Transaction Advisory",
                desc: "GST-efficient structuring of business transactions",
                icon: "📋",
                items: ["Supply determination", "Valuation under GST", "Rate classification (HSN/SAC)", "Place of supply rules", "Reverse charge mechanism", "Job work compliance"]
              },
              {
                title: "Sectoral GST Advisory",
                desc: "Industry-specific GST guidance and compliance",
                icon: "🏭",
                items: ["Real estate GST advisory", "E-commerce GST compliance", "Healthcare sector GST", "Education institution GST", "BFSI sector advisory", "Manufacturing GST planning"]
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

      {/* ═══ WHY CHOOSE — Navy ═══ */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="max-w-[1400px] mx-auto pt-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Why Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Why Choose <span className="text-[#C9A84C]">ANYTAX</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "GST Specialists", desc: "Dedicated team with in-depth expertise in GST law and compliance", icon: "🏆" },
              { title: "Industry Expertise", desc: "Sector-specific knowledge for tailored GST solutions and planning", icon: "🏭" },
              { title: "Practical Solutions", desc: "Actionable advice that translates into real cost savings for your business", icon: "💡" },
              { title: "Compliance Focus", desc: "Ensuring full GST compliance while maximizing available benefits", icon: "⚖️" },
              { title: "Regular Updates", desc: "Stay informed with the latest GST law changes and notifications", icon: "📊" },
              { title: "Audit Support", desc: "Complete support during GST audits and departmental proceedings", icon: "🛡️" }
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

      {/* ═══ GST HEALTH CHECK — White ═══ */}
      <section className="bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/10 rounded-full px-5 py-1.5 mb-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Health Check</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] tracking-tight">
              GST <span className="text-[#C9A84C]">Health Check</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🔍</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">What We Review</h3>
              </div>
              <ul className="space-y-3">
                {["Return filing accuracy & timeliness", "ITC claim correctness and reconciliation", "HSN/SAC classification review", "Reverse charge applicability", "Valuation compliance check"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-[#3D5A80]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">📊</div>
                <h3 className="text-lg font-bold text-[#0B1F3A]">What You Get</h3>
              </div>
              <ul className="space-y-3">
                {["Detailed compliance report", "Risk identification & mitigation plan", "ITC leakage analysis with savings estimate", "Action plan for pending issues", "Ongoing advisory recommendations"].map((item, i) => (
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
            Need GST{' '}
            <span className="text-white">Advisory?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Strategic GST planning for your business — compliance, optimization, and industry expertise
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
