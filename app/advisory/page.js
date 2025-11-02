'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function AdvisoryPage() {
  const advisoryServices = [
    {
      title: "Tax Planning & Optimization",
      icon: "📈",
      description: "Strategic tax planning to minimize tax liability legally. Comprehensive analysis and implementation of tax-saving strategies for individuals and businesses.",
      price: "Starting from ₹4,999/-",
      link: "/tax-planning-optimization",
      features: ["Annual tax planning", "Investment advisory for tax savings", "Salary structuring", "Business structure optimization", "Deduction maximization (80C, 80D)", "Capital gains planning", "Retirement planning", "Estate planning"]
    },
    {
      title: "International Taxation",
      icon: "🌍",
      description: "Cross-border taxation advisory including NRI taxation, FEMA compliance, foreign investment, and global tax structuring.",
      price: "Starting from ₹9,999/-",
      link: "/international-taxation",
      features: ["NRI taxation & compliance", "DTAA benefits optimization", "Foreign income reporting", "FEMA compliance advisory", "Inbound/Outbound investments", "Tax residency certificates", "Repatriation of funds", "Global tax structuring"]
    },
    {
      title: "Transfer Pricing",
      icon: "💱",
      description: "Transfer pricing documentation, compliance, and strategy. ALP analysis, TP study preparation, and benchmarking for related party transactions.",
      price: "Starting from ₹24,999/-",
      link: "/transfer-pricing",
      features: ["Transfer pricing study", "Form 3CEB certification", "ALP (Arm's Length Price) analysis", "Benchmarking analysis", "Intangible property valuation", "Cost sharing arrangements", "APA (Advance Pricing Agreement)", "TP audit defense"]
    },
    {
      title: "Corporate Tax Advisory",
      icon: "🏢",
      description: "Comprehensive corporate tax advisory for business decisions, mergers & acquisitions, restructuring, and tax-efficient operations.",
      price: "Starting from ₹14,999/-",
      link: "/corporate-tax-advisory",
      features: ["Corporate tax planning", "M&A tax structuring", "Business restructuring", "Holding company setup", "Capital structure optimization", "Dividend distribution tax", "Section 115BAA/115BAB advisory", "Tax-efficient exit strategies"]
    },
    {
      title: "GST Advisory",
      icon: "🧮",
      description: "Strategic GST advisory for business operations, transaction structuring, compliance optimization, and input tax credit maximization.",
      price: "Starting from ₹4,999/-",
      link: "/gst-advisory",
      features: ["GST structure planning", "ITC optimization", "Supply chain analysis", "E-commerce GST advisory", "Import-export GST planning", "Composition vs Regular scheme", "Place of supply determination", "GST rate classification"]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Services</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Advisory</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Strategic tax advisory to optimize your tax position and drive business growth. Expert guidance from qualified professionals.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service, index) => (
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
            Ready to Optimize Your <span className="gradient-text">Tax Strategy?</span>
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Schedule a consultation with our expert advisors and discover opportunities for tax savings
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg">
            Schedule Advisory Session →
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
