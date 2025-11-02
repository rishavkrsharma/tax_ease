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
      link: "/income-tax-return-filing",
      features: ["ITR-1 to ITR-7 filing", "Tax computation & planning", "Maximum refund claims", "Loss carry forward", "Capital gains calculation", "E-verification support"]
    },
    {
      title: "GST Return Filing",
      icon: "🧾",
      description: "Complete GST return filing services - GSTR-1, GSTR-3B, GSTR-4, GSTR-9, and annual returns. Stay compliant with timely and accurate GST filings.",
      price: "Starting from ₹499/-",
      link: "/gst-return-filing",
      features: ["Monthly GSTR-1 & 3B filing", "Quarterly filing (Composition)", "Annual return GSTR-9", "Input tax credit reconciliation", "Notice handling", "GST audit support"]
    },
    {
      title: "ROC Compliance",
      icon: "🏛️",
      description: "Ministry of Corporate Affairs (MCA) compliance services. Annual filing, board meetings, AGM, and all statutory compliances for companies.",
      price: "Starting from ₹999/-",
      link: "/roc-compliance",
      features: ["AOC-4 & MGT-7 filing", "DIR-3 KYC compliance", "Board meeting minutes", "Annual General Meeting", "Form MGT-14 filing", "DPT-3 return filing"]
    },
    {
      title: "Secretarial Compliance",
      icon: "📝",
      description: "Complete secretarial compliance for companies including board resolutions, minutes, registers maintenance, and statutory record keeping.",
      price: "Starting from ₹999/-",
      link: "/secretarial-compliance",
      features: ["Statutory register maintenance", "Minutes book preparation", "Board resolutions drafting", "Share certificate issuance", "Secretarial audit", "CS certification"]
    },
    {
      title: "Book-Keeping / Accounting",
      icon: "💰",
      description: "Professional accounting and book-keeping services. Maintain accurate financial records with real-time updates and monthly MIS reports.",
      price: "Starting from ₹999/-",
      link: "/bookkeeping-accounting",
      features: ["Daily transaction recording", "Bank reconciliation", "Accounts payable/receivable", "Monthly MIS reports", "Financial statements", "Tally/QuickBooks support"]
    },
    {
      title: "Auditing Services",
      icon: "🔍",
      description: "Comprehensive auditing services - Income Tax Audit, GST Audit, and Statutory Audit by qualified Chartered Accountants.",
      price: "Starting from ₹4,999/-",
      link: "/auditing-services",
      features: ["Income Tax Audit (44AB)", "GST Audit (GSTR-9C)", "Statutory Audit", "Internal Audit", "Tax audit report", "Audit certificate"]
    },
    {
      title: "TDS / TCS Return Filing",
      icon: "💳",
      description: "TDS/TCS return filing services for all quarters. Form 24Q, 26Q, 27Q filing with accurate computation and timely payment.",
      price: "Starting from ₹499/-",
      link: "/tds-tcs-filing",
      features: ["Quarterly TDS returns", "Form 24Q (Salary)", "Form 26Q (Non-salary)", "Form 27Q (NRI payments)", "TDS certificate generation", "Late filing support"]
    },
    {
      title: "PF Return Filing",
      icon: "🏦",
      description: "Employee Provident Fund (EPF) and ESI return filing services. Monthly ECR filing and annual returns for employers.",
      price: "Starting from ₹499/-",
      link: "/pf-filing",
      features: ["Monthly ECR filing", "PF & ESI challan", "Employee enrollment", "Annual returns", "Compliance certificates", "EPFO portal management"]
    },
    {
      title: "Customs & Import-Export Compliance",
      icon: "🚢",
      description: "Complete customs and import-export compliance services. Bill of Entry, Shipping Bill filing, and customs documentation.",
      price: "Starting from ₹999/-",
      link: "/customs-import-export-compliance",
      features: ["Bill of Entry filing", "Shipping Bill preparation", "Customs duty calculation", "ICEGATE filing", "Import-export documentation", "Drawback claims"]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Services</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Compliance</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Stay compliant with all tax and regulatory requirements. Expert assistance for timely filing and complete compliance management.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
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

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{background: 'linear-gradient(135deg, hsla(23, 92%, 71%, 0.03) 0%, rgba(0, 0, 0, 1) 100%)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            Need Help with <span className="gradient-text">Compliance?</span>
          </h2>
          <Link href="/contact" className="inline-block px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg">
            Schedule Consultation →
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
