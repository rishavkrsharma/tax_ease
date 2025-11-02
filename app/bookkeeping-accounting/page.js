'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function BookkeepingAccountingPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Book-Keeping &</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>Accounting Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Professional Accounting Solutions for Your Business
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
              Accurate bookkeeping and accounting are the foundation of sound financial management. Our expert team provides comprehensive accounting services to help you maintain clear financial records, make informed decisions, and ensure compliance.
            </p>

            {/* Services */}
            <div className="mb-20">
              <h2 className="text-4xl font-light tracking-tight mb-12" style={{color: 'var(--text-primary)'}}>
                Our <span className="gradient-text">Accounting Services</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Day-to-Day Bookkeeping",
                    price: "Starting from ₹2,999/month",
                    features: ["Recording of transactions", "Bank reconciliation", "Invoice management", "Expense tracking", "Payables & Receivables", "Monthly reports"]
                  },
                  {
                    title: "Financial Statements Preparation",
                    price: "Starting from ₹4,999/-",
                    features: ["Profit & Loss Statement", "Balance Sheet", "Cash Flow Statement", "Financial ratio analysis", "Comparative analysis", "Management reports"]
                  },
                  {
                    title: "GST Accounting",
                    price: "Starting from ₹1,999/month",
                    features: ["GST compliant books", "Input tax credit reconciliation", "GST ledgers maintenance", "GSTR filing support", "GST reports", "Vendor reconciliation"]
                  },
                  {
                    title: "TDS/TCS Accounting",
                    price: "Starting from ₹1,499/quarter",
                    features: ["TDS/TCS recording", "Quarterly return filing", "Certificate generation", "TDS reconciliation", "Form 26AS matching", "Payment tracking"]
                  },
                  {
                    title: "Accounts Payable Management",
                    price: "Starting from ₹2,499/month",
                    features: ["Vendor management", "Invoice processing", "Payment scheduling", "Aging analysis", "Vendor reconciliation", "Payment tracking"]
                  },
                  {
                    title: "Accounts Receivable Management",
                    price: "Starting from ₹2,499/month",
                    features: ["Customer invoicing", "Payment collection tracking", "Aging analysis", "Overdue follow-up", "Customer reconciliation", "Credit management"]
                  }
                ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className="p-8 border transition-all duration-500" 
                    style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <h3 className="text-2xl font-light mb-3 tracking-wide" style={{color: 'var(--text-primary)'}}>{service.title}</h3>
                    <p className="mb-6 font-light" style={{color: 'var(--gradient-start)'}}>{service.price}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-2">
                          <span style={{color: 'var(--gradient-start)'}}>✓</span>
                          <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-4xl font-light tracking-tight mb-12" style={{color: 'var(--text-primary)'}}>
                Benefits of <span className="gradient-text">Professional Accounting</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "📊", title: "Accurate Records", desc: "Maintain precise financial records for better decision-making" },
                  { icon: "💰", title: "Cost Savings", desc: "Identify cost-saving opportunities and optimize expenses" },
                  { icon: "✅", title: "Compliance", desc: "Stay compliant with tax laws and accounting standards" },
                  { icon: "📈", title: "Business Insights", desc: "Get valuable insights into your business performance" },
                  { icon: "⏰", title: "Time Saving", desc: "Focus on your core business while we handle accounting" },
                  { icon: "🔒", title: "Data Security", desc: "Secure and confidential handling of financial data" }
                ].map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 border text-center transition-all duration-500"
                    style={{borderColor: 'var(--border-color)'}}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-light mb-3" style={{color: 'var(--text-primary)'}}>{benefit.title}</h3>
                    <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            Ready to <span className="gradient-text">streamline your accounting?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Let our experts handle your books while you focus on growing your business
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg text-white"
          >
            Get Started
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 lg:px-12 py-12 transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

