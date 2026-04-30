'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function LitigationPage() {
  const litigationServices = [
    {
      title: "Income Tax Notices & Disputes",
      icon: "⚖️",
      description: "Expert handling of Income Tax notices, scrutiny assessments, and dispute resolution.",
      price: null,
      link: "/litigation/income-tax-disputes",
      features: ["Notice analysis & response", "Scrutiny assessment handling", "Appeal filing (CIT-A)", "ITAT representation", "Penalty reduction", "Settlement commission"]
    },
    {
      title: "GST Notices & Disputes",
      icon: "📮",
      description: "Comprehensive GST litigation support including show cause notices, demands, and appeals.",
      price: "Starting from ₹999/-",
      link: "/litigation/gst-disputes",
      features: ["Show cause notice reply", "GST demand handling", "Appellate authority representation", "GST tribunal cases", "Refund litigation", "Input credit disputes"]
    },
    {
      title: "Custom & Excise Notices & Disputes",
      icon: "🚨",
      description: "Professional assistance for customs and excise disputes. Handle duty demands and classification.",
      price: "Starting from ₹999/-",
      link: "/litigation/customs-disputes",
      features: ["Customs notice response", "Duty demand litigation", "Classification disputes", "Valuation issues", "CESTAT representation", "Drawback claims disputes"]
    },
    {
      title: "TDS / TCS Notices & Disputes",
      icon: "💼",
      description: "Expert handling of TDS/TCS related notices, demands, and disputes. Minimize penalties.",
      price: "Starting from ₹999/-",
      link: "/litigation/tds-tcs-disputes",
      features: ["TDS demand notice reply", "Interest & penalty reduction", "Rectification applications", "Appeal filing", "Late filing condonation", "Certificate correction"]
    },
    {
      title: "NCLT Matters",
      icon: "🏛️",
      description: "National Company Law Tribunal matters including insolvency, mergers, and corporate disputes.",
      price: "Starting from ₹9,999/-",
      link: "/litigation/nclt-matters",
      features: ["Insolvency proceedings", "Merger & amalgamation", "Oppression & mismanagement", "Scheme of arrangement", "Company winding up", "Corporate debt restructuring"]
    },
    {
      title: "International Tax Disputes",
      icon: "🌐",
      description: "Cross-border tax dispute resolution, transfer pricing litigation, and DTAA matters.",
      price: "Starting from ₹14,999/-",
      link: "/litigation/international-tax-disputes",
      features: ["Transfer pricing disputes", "DTAA interpretation", "MAP procedure", "APA agreement", "PE issues", "Withholding tax disputes"]
    },
    {
      title: "Tax Recovery & Stay Applications",
      icon: "🛑",
      description: "Prevent coercive recovery while disputes are pending. Stay applications and relief.",
      price: "Starting from ₹1,999/-",
      link: "/litigation/tax-recovery-stay",
      features: ["Stay application filing", "Recovery notice response", "Bank attachment removal", "Property attachment relief", "Installment arrangements", "Penalty waiver applications"]
    },
    {
      title: "Representation in Courts & Tribunals",
      icon: "⚖️",
      description: "Expert legal representation before ITAT, High Courts, and Supreme Court for tax matters.",
      price: "Starting from ₹4,999/-",
      link: "/litigation/court-representation",
      features: ["ITAT appeals & hearings", "High Court representation", "Supreme Court matters", "Writ petitions", "Case law research", "Legal opinion & advice"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══ HERO — Gold ═══ */}
      <section className="relative bg-[#C9A84C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-32 lg:pb-40 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/80 font-semibold">Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-[#0B1F3A]">
            Litigation <span className="text-white">&amp; Disputes</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#0B1F3A]/60 font-light">
            From income tax and GST notices to customs, TDS, NCLT, international tax, recovery stays, and tribunal or court representation — CA-led strategy, drafting, and advocacy at every stage.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICES GRID — White ═══ */}
      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {litigationServices.map((service, index) => (
              <div key={index} className="group bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] tracking-wide mb-3">{service.title}</h3>
                <p className="text-sm text-[#3D5A80] leading-relaxed mb-5">{service.description}</p>
                <div className="mb-5 px-4 py-3 rounded-2xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/20">
                  {service.price != null ? (
                    <p className="text-base font-extrabold text-[#0B1F3A] tracking-tight leading-snug tabular-nums">
                      {service.price}
                    </p>
                  ) : (
                    <p className="text-sm font-semibold text-[#3D5A80] leading-snug">
                      Contact us to discuss scope and fees
                    </p>
                  )}
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-[#3D5A80]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.link} className="pill-btn block w-full text-center bg-[#0B1F3A] text-white px-6 py-3.5 text-sm tracking-wider uppercase">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#C9A84C" />
          </svg>
        </div>
      </section>

      {/* ═══ CTA — Gold ═══ */}
      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Facing a <span className="text-white">Tax Notice?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-12 max-w-2xl mx-auto">
            Don&apos;t worry! Our expert team has successfully handled thousands of tax disputes. Get immediate assistance.
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get Legal Help Now <span className="text-lg leading-none">→</span>
          </Link>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
