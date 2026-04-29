'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function CompliancePage() {
  const complianceServices = [
    {
      title: "Income Tax Return Filing",
      icon: "📊",
      description: "Expert income tax return filing services for individuals, businesses, and professionals. Maximize deductions and ensure timely compliance with IT department.",
      price: "Starting from ₹499/-",
      link: "/compliance/income-tax-return-filing",
      features: ["ITR-1 to ITR-7 filing", "Tax computation & planning", "Maximum refund claims", "Loss carry forward", "Capital gains calculation", "E-verification support"]
    },
    {
      title: "GST Return Filing",
      icon: "🧾",
      description: "Complete GST return filing services - GSTR-1, GSTR-3B, GSTR-4, GSTR-9, and annual returns. Stay compliant with timely and accurate GST filings.",
      price: "Starting from ₹499/-",
      link: "/compliance/gst-return-filing",
      features: ["Monthly GSTR-1 & 3B filing", "Quarterly filing (Composition)", "Annual return GSTR-9", "Input tax credit reconciliation", "Notice handling", "GST audit support"]
    },
    {
      title: "ROC Compliance",
      icon: "🏛️",
      description: "Ministry of Corporate Affairs (MCA) compliance services. Annual filing, board meetings, AGM, and all statutory compliances for companies.",
      price: "Starting from ₹999/-",
      link: "/compliance/roc-compliance",
      features: ["AOC-4 & MGT-7 filing", "DIR-3 KYC compliance", "Board meeting minutes", "Annual General Meeting", "Form MGT-14 filing", "DPT-3 return filing"]
    },
    {
      title: "Secretarial Compliance",
      icon: "📝",
      description: "Complete secretarial compliance for companies including board resolutions, minutes, registers maintenance, and statutory record keeping.",
      price: "Starting from ₹999/-",
      link: "/compliance/secretarial-compliance",
      features: ["Statutory register maintenance", "Minutes book preparation", "Board resolutions drafting", "Share certificate issuance", "Secretarial audit", "CS certification"]
    },
    {
      title: "Book-Keeping / Accounting",
      icon: "💰",
      description: "Professional accounting and book-keeping services. Maintain accurate financial records with real-time updates and monthly MIS reports.",
      price: "Starting from ₹999/-",
      link: "/compliance/bookkeeping-accounting",
      features: ["Daily transaction recording", "Bank reconciliation", "Accounts payable/receivable", "Monthly MIS reports", "Financial statements", "Tally/QuickBooks support"]
    },
    {
      title: "Auditing Services",
      icon: "🔍",
      description: "Comprehensive auditing services - Income Tax Audit, GST Audit, and Statutory Audit by qualified Chartered Accountants.",
      price: "Starting from ₹4,999/-",
      link: "/compliance/auditing-services",
      features: ["Income Tax Audit (44AB)", "GST Audit (GSTR-9C)", "Statutory Audit", "Internal Audit", "Tax audit report", "Audit certificate"]
    },
    {
      title: "TDS / TCS Return Filing",
      icon: "💳",
      description: "TDS/TCS return filing services for all quarters. Form 24Q, 26Q, 27Q filing with accurate computation and timely payment.",
      price: "Starting from ₹499/-",
      link: "/compliance/tds-tcs-filing",
      features: ["Quarterly TDS returns", "Form 24Q (Salary)", "Form 26Q (Non-salary)", "Form 27Q (NRI payments)", "TDS certificate generation", "Late filing support"]
    },
    {
      title: "PF Return Filing",
      icon: "🏦",
      description: "Employee Provident Fund (EPF) and ESI return filing services. Monthly ECR filing and annual returns for employers.",
      price: "Starting from ₹499/-",
      link: "/compliance/pf-filing",
      features: ["Monthly ECR filing", "PF & ESI challan", "Employee enrollment", "Annual returns", "Compliance certificates", "EPFO portal management"]
    },
    {
      title: "Customs & Import-Export Compliance",
      icon: "🚢",
      description: "Complete customs and import-export compliance services. Bill of Entry, Shipping Bill filing, and customs documentation.",
      price: "Starting from ₹999/-",
      link: "/compliance/customs-import-export-compliance",
      features: ["Bill of Entry filing", "Shipping Bill preparation", "Customs duty calculation", "ICEGATE filing", "Import-export documentation", "Drawback claims"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══ HERO — Gold Section ═══ */}
      <section className="relative bg-[#C9A84C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-32 lg:pb-40 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/80 font-semibold">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">Compliance <span className="text-white">&amp; Due Diligence</span></span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#0B1F3A]/60 font-light">
            Timely ITR and GST filings, ROC and secretarial compliance, bookkeeping, audits, TDS/TCS, PF, and customs support — supervised by Chartered Accountants so you meet due dates and reduce penalty risk.
          </p>
        </div>

        {/* Wave → White */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICES GRID — White Section ═══ */}
      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceServices.map((service, index) => (
              <div
                key={index}
                className="group bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#3D5A80] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="mb-5 px-4 py-3 rounded-2xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/20">
                  <p className="text-sm font-semibold text-[#C9A84C]">{service.price}</p>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-[#3D5A80]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.link}
                  className="pill-btn block w-full text-center bg-[#0B1F3A] text-white px-6 py-3.5 text-sm tracking-wider uppercase"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Wave → Gold CTA */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#C9A84C" />
          </svg>
        </div>
      </section>

      {/* ═══ CTA — Gold "Shout" Section ═══ */}
      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-1.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Need Help with{' '}
            <span className="text-white">Compliance?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Our team of experts will ensure your business stays fully compliant with all regulatory requirements. Get in touch today.
          </p>
          <Link
            href="/contact"
            className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl"
          >
            Schedule Consultation <span className="text-lg leading-none">→</span>
          </Link>
        </div>

        {/* Wave → Navy footer */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══ FOOTER — Navy Void ═══ */}
      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">
            © ANYTAX.IN - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
