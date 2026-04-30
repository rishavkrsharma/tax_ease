'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function AdvisoryPage() {
  const advisoryServices = [
    {
      title: "Tax Planning & Optimization",
      icon: "📈",
      description: "Strategic tax planning to minimize tax liability legally. Comprehensive analysis and implementation.",
      price: null,
      link: "/advisory/tax-planning-optimization",
      features: ["Annual tax planning", "Investment advisory", "Salary structuring", "Business structure optimization", "Deduction maximization", "Capital gains planning", "Retirement planning", "Estate planning"]
    },
    {
      title: "International Taxation",
      icon: "🌍",
      description: "Cross-border taxation advisory including NRI taxation, FEMA compliance, and global structuring.",
      price: "Starting from ₹9,999/-",
      link: "/advisory/international-taxation",
      features: ["NRI taxation", "DTAA benefits optimization", "Foreign income reporting", "FEMA compliance advisory", "Inbound/Outbound investments", "Tax residency certificates", "Repatriation of funds", "Global tax structuring"]
    },
    {
      title: "Transfer Pricing",
      icon: "💱",
      description: "Transfer pricing documentation, compliance, and strategy. ALP analysis and benchmarking.",
      price: "Starting from ₹24,999/-",
      link: "/advisory/transfer-pricing",
      features: ["Transfer pricing study", "Form 3CEB certification", "ALP analysis", "Benchmarking analysis", "Intangible property valuation", "Cost sharing arrangements", "APA agreement", "TP audit defense"]
    },
    {
      title: "Corporate Tax Advisory",
      icon: "🏢",
      description: "Comprehensive corporate tax advisory for M&A, restructuring, and tax-efficient operations.",
      price: "Starting from ₹14,999/-",
      link: "/advisory/corporate-tax-advisory",
      features: ["Corporate tax planning", "M&A tax structuring", "Business restructuring", "Holding company setup", "Capital structure optimization", "Dividend distribution tax", "Section 115BAA/115BAB advisory", "Tax-efficient exit strategies"]
    },
    {
      title: "GST Advisory",
      icon: "🧮",
      description: "Strategic GST advisory for business operations, transaction structuring, and ITC maximization.",
      price: "Starting from ₹4,999/-",
      link: "/advisory/gst-advisory",
      features: ["GST structure planning", "ITC optimization", "Supply chain analysis", "E-commerce GST advisory", "Import-export GST planning", "Composition vs Regular", "Place of supply determination", "GST rate classification"]
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-[#0B1F3A]">Advisory</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#0B1F3A]/60 font-light">
            Legitimate tax planning, international tax and TP, corporate restructuring, and proactive GST advisory — structured, documented advice within the law, aligned to how you actually operate.
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
            {advisoryServices.map((service, index) => (
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
                    <p className="text-sm font-semibold text-[#3D5A80]">Contact us to discuss scope and fees</p>
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
            Ready to Optimize Your <span className="text-white">Tax Strategy?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our expert advisors and discover opportunities for tax savings.
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Schedule Advisory Session <span className="text-lg leading-none">→</span>
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
