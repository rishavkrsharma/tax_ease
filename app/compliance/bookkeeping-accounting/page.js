'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function BookkeepingAccountingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Hero */}
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
            <span className="text-[#0B1F3A]">Book-Keeping &</span>
            <br />
            <span className="text-white">Accounting Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Cloud books on Tally, Zoho, QuickBooks, or Busy — with MIS, GST reconciliation, and audit-ready ledgers.
          </p>
        </div>
      
        {/* Wave → White */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row">
        <SubpageSidebar />
        <div className="flex-1 min-w-0">

      {/* Content */}
      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-16 text-[#3D5A80]">
              Accurate, real-time bookkeeping is the financial heartbeat of your business — not merely a prerequisite for tax compliance, but the foundation for pricing, profitability, cash flow, and bank credit. Under the Income Tax Act, businesses with turnover exceeding ₹25 lakhs and professionals with gross receipts exceeding ₹10 lakhs must maintain books of accounts. AnyTax.in offers cloud-based bookkeeping using industry-standard platforms — giving you 24/7 access, automated GST reconciliation, and instant MIS reports.
            </p>

            {/* Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
                Our <span className="text-[#C9A84C]">Accounting Services</span>
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
                    className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-2xl font-light mb-3 tracking-wide text-[#0B1F3A]">{service.title}</h3>
                    <p className="mb-6 font-light text-[#C9A84C]">{service.price}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-2">
                          <span className="text-[#C9A84C]">✓</span>
                          <span className="text-sm text-[#7A8FA6]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
                Benefits of <span className="text-[#C9A84C]">Professional Accounting</span>
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
                    className="p-6 border text-center transition-all duration-500">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-light mb-3 text-[#0B1F3A]">{benefit.title}</h3>
                    <p className="text-sm text-[#7A8FA6]">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        </div>
      </div>

      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 leading-[0] rotate-180">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Ready to <span className="text-white">streamline your accounting?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Let our experts handle your books while you focus on growing your business
          </p>
          <Link 
            href="/contact" 
            className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get Started
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

