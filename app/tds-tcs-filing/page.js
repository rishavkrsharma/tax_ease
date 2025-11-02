'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function TDSTCSFilingPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">TDS / TCS</span>
            <br />
            <span style={{color: 'var(--text-secondary)'}}>Return Filing</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Expert TDS/TCS Compliance and Filing Services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-16" style={{color: 'var(--text-secondary)'}}>
              Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) are critical compliance requirements. We ensure accurate calculation, timely payment, and filing of TDS/TCS returns to keep you compliant and avoid penalties.
            </p>

            {/* Services */}
            <div className="mb-20">
              <h2 className="text-4xl font-light tracking-tight mb-12" style={{color: 'var(--text-primary)'}}>
                Our <span className="gradient-text">TDS/TCS Services</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "TDS on Salary",
                    price: "₹1,499/quarter",
                    features: ["Salary TDS calculation", "Form 24Q filing", "Form 16 issuance", "Challan verification"]
                  },
                  {
                    title: "TDS on Non-Salary",
                    price: "₹1,999/quarter",
                    features: ["TDS calculation", "Form 26Q filing", "Form 16A issuance", "Payment tracking"]
                  },
                  {
                    title: "TDS on Property",
                    price: "₹999/transaction",
                    features: ["TDS on rent/property", "Form 26QB filing", "Form 16B issuance", "Payment assistance"]
                  },
                  {
                    title: "TCS Return Filing",
                    price: "₹1,499/quarter",
                    features: ["TCS calculation", "Form 27EQ filing", "Form 27D certificate", "Compliance check"]
                  },
                  {
                    title: "Lower Deduction Certificate",
                    price: "₹2,999/-",
                    features: ["Application preparation", "Documentation support", "Follow-up with IT dept", "Certificate procurement"]
                  },
                  {
                    title: "TDS/TCS Advisory",
                    price: "₹1,999/-",
                    features: ["TDS applicability advice", "Rate determination", "Compliance planning", "Notice handling"]
                  }
                ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 border transition-all duration-500" 
                    style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <h3 className="text-xl font-light mb-3 tracking-wide" style={{color: 'var(--text-primary)'}}>{service.title}</h3>
                    <p className="text-2xl mb-4 font-light gradient-text">{service.price}</p>
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

            {/* TDS Forms Covered */}
            <div className="mb-20 p-12 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)'}}>
              <h2 className="text-4xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>TDS/TCS Forms We Handle</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { form: "Form 24Q", desc: "TDS on Salary" },
                  { form: "Form 26Q", desc: "TDS on Non-Salary" },
                  { form: "Form 26QB", desc: "TDS on Property" },
                  { form: "Form 26QC", desc: "TDS on Rent" },
                  { form: "Form 26QD", desc: "TDS on Cash Withdrawal" },
                  { form: "Form 27Q", desc: "TDS on NRI Payments" },
                  { form: "Form 27EQ", desc: "TCS Return" },
                  { form: "Form 16/16A", desc: "TDS Certificates" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 border text-center transition-colors duration-300"
                    style={{borderColor: 'var(--border-color)'}}
                  >
                    <h3 className="text-lg font-light mb-2 gradient-text">{item.form}</h3>
                    <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "⏰", title: "Timely Filing", desc: "Never miss TDS/TCS filing deadlines" },
                { icon: "✅", title: "Accurate Calculations", desc: "Error-free TDS/TCS computation" },
                { icon: "💰", title: "Avoid Penalties", desc: "Prevent interest and penalties on late filing" },
                { icon: "📊", title: "Reconciliation", desc: "Form 26AS & AIS reconciliation" },
                { icon: "🔔", title: "Regular Updates", desc: "Stay informed about TDS/TCS changes" },
                { icon: "📝", title: "Expert Support", desc: "Professional assistance on TDS matters" }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="p-6 border text-center transition-all duration-500"
                  style={{borderColor: 'var(--border-color)'}}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-light mb-3" style={{color: 'var(--text-primary)'}}>{feature.title}</h3>
                  <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8" style={{color: 'var(--text-primary)'}}>
            Need <span className="gradient-text">TDS/TCS Support?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Let us handle your TDS/TCS compliance - accurate, timely, and hassle-free
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

