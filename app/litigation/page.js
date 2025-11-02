'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function LitigationPage() {
  const litigationServices = [
    {
      title: "Income Tax Notices & Disputes",
      icon: "⚖️",
      description: "Expert handling of Income Tax notices, scrutiny assessments, and dispute resolution. Professional representation before tax authorities.",
      price: "Starting from ₹999/-",
      link: "/income-tax-disputes",
      features: ["Notice analysis & response", "Scrutiny assessment handling", "Appeal filing (CIT-A)", "ITAT representation", "Penalty reduction", "Settlement commission"]
    },
    {
      title: "GST Notices & Disputes",
      icon: "📮",
      description: "Comprehensive GST litigation support including show cause notices, demands, and appeals. Expert representation at all GST appellate forums.",
      price: "Starting from ₹999/-",
      link: "/gst-disputes",
      features: ["Show cause notice reply", "GST demand handling", "Appellate authority representation", "GST tribunal cases", "Refund litigation", "Input credit disputes"]
    },
    {
      title: "Custom & Excise Notices & Disputes",
      icon: "🚨",
      description: "Professional assistance for customs and excise disputes. Handle Bill of Entry issues, duty demands, and classification disputes.",
      price: "Starting from ₹999/-",
      link: "/customs-disputes",
      features: ["Customs notice response", "Duty demand litigation", "Classification disputes", "Valuation issues", "CESTAT representation", "Drawback claims disputes"]
    },
    {
      title: "TDS / TCS Notices & Disputes",
      icon: "💼",
      description: "Expert handling of TDS/TCS related notices, demands, and disputes. Minimize penalties with professional representation.",
      price: "Starting from ₹999/-",
      link: "/tds-tcs-disputes",
      features: ["TDS demand notice reply", "Interest & penalty reduction", "Rectification applications", "Appeal filing", "Late filing condonation", "Certificate correction"]
    },
    {
      title: "NCLT Matters",
      icon: "🏛️",
      description: "National Company Law Tribunal matters including insolvency, mergers, company disputes, and corporate restructuring cases.",
      price: "Starting from ₹9,999/-",
      link: "/nclt-matters",
      features: ["Insolvency proceedings", "Merger & amalgamation", "Oppression & mismanagement", "Scheme of arrangement", "Company winding up", "Corporate debt restructuring"]
    },
    {
      title: "International Tax Disputes",
      icon: "🌐",
      description: "Cross-border tax dispute resolution, transfer pricing litigation, and double taxation avoidance. Expert international tax advisory.",
      price: "Starting from ₹14,999/-",
      link: "/international-tax-disputes",
      features: ["Transfer pricing disputes", "DTAA interpretation", "MAP (Mutual Agreement Procedure)", "APA (Advance Pricing Agreement)", "Permanent establishment issues", "Withholding tax disputes"]
    },
    {
      title: "Tax Recovery & Stay Applications",
      icon: "🛑",
      description: "Professional assistance in tax recovery proceedings and stay applications. Prevent coercive recovery while disputes are pending.",
      price: "Starting from ₹1,999/-",
      link: "/tax-recovery-stay",
      features: ["Stay application filing", "Recovery notice response", "Bank attachment removal", "Property attachment relief", "Installment arrangements", "Penalty waiver applications"]
    },
    {
      title: "Representation in Courts & Tribunals",
      icon: "⚖️",
      description: "Expert legal representation before Income Tax Appellate Tribunal (ITAT), High Courts, and Supreme Court for tax matters.",
      price: "Starting from ₹4,999/-",
      link: "/court-representation",
      features: ["ITAT appeals & hearings", "High Court representation", "Supreme Court matters", "Writ petitions", "Case law research", "Legal opinion & advice"]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Services</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Litigation & Disputes</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Expert legal representation for all tax-related disputes and litigation. Protect your interests with professional advocacy.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {litigationServices.map((service, index) => (
              <div key={index} className="group border transition-colors duration-300 p-8 transition-all duration-500" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:gradient-text">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{service.description}</p>
                <div className="mb-6 p-4 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                  <p className="font-light tracking-wide" style={{color: 'var(--gradient-start)'}}>{service.price}</p>
                </div>
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.link} className="block w-full text-center px-6 py-4 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg text-white">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            Facing a <span className="gradient-text">Tax Notice?</span>
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Don't worry! Our expert team has successfully handled thousands of tax disputes. Get immediate assistance.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg">
            Get Legal Help Now →
          </Link>
        </div>
      </section>

      <footer className="border-t transition-colors duration-300 px-6 lg:px-12 py-12" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
