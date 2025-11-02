'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function GSTReturnFilingPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">GST Return Filing</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Professional GST return filing services to ensure timely compliance and avoid penalties. Expert assistance for all types of GST returns.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Types of <span className="gradient-text">GST Returns</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "GSTR-1", desc: "Outward supplies return - Details of sales made during the month" },
                { title: "GSTR-3B", desc: "Monthly summary return - Summary of sales, purchases, and tax liability" },
                { title: "GSTR-2A", desc: "Auto-populated inward supplies - Purchase details from vendor returns" },
                { title: "GSTR-9", desc: "Annual return - Comprehensive annual GST return" },
                { title: "GSTR-9C", desc: "Reconciliation statement - Audit report for annual return" },
                { title: "GSTR-4", desc: "Quarterly return for composition dealers" }
              ].map((returnType, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-2xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{returnType.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{returnType.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Monthly</span> Return Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Data Collection", desc: "Gather sales and purchase data from books of accounts" },
                { step: "02", title: "GSTR-1 Filing", desc: "File outward supplies return with sales details" },
                { step: "03", title: "GSTR-3B Filing", desc: "File monthly summary return and pay tax liability" },
                { step: "04", title: "Reconciliation", desc: "Match GSTR-2A with purchase records and claim ITC" }
              ].map((process, idx) => (
                <div key={idx} className="p-6 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="text-4xl font-light mb-4 transition-colors" style={{color: 'var(--gradient-start)'}}>{process.step}</div>
                  <h3 className="text-lg font-light mb-3 tracking-wide">{process.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Sales Data</h3>
                <ul className="space-y-4">
                  {[
                    "Sales invoices and bills",
                    "Export documents (if applicable)",
                    "Credit notes and debit notes",
                    "E-way bills for transportation",
                    "Bank statements for sales receipts"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Purchase Data</h3>
                <ul className="space-y-4">
                  {[
                    "Purchase invoices and bills",
                    "Import documents (if applicable)",
                    "Credit notes and debit notes",
                    "E-way bills for purchases",
                    "Bank statements for purchase payments"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Benefits</span> of Professional Filing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Timely Compliance", desc: "Meet all GST return filing deadlines" },
                { title: "Error-Free Returns", desc: "Accurate calculations and proper documentation" },
                { title: "Penalty Avoidance", desc: "Avoid late fees and interest charges" },
                { title: "ITC Optimization", desc: "Maximize input tax credit claims" },
                { title: "Audit Support", desc: "Professional assistance during GST audits" },
                { title: "Reconciliation", desc: "Proper matching of GSTR-2A with books" },
                { title: "Refund Processing", desc: "Faster processing of GST refunds" },
                { title: "Expert Guidance", desc: "Professional advice on GST compliance" }
              ].map((benefit, idx) => (
                <div key={idx} className="p-6 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-lg font-light mb-3 tracking-wide group-hover:gradient-text transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Important</span> Deadlines
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Monthly Returns</h3>
                <ul className="space-y-4">
                  {[
                    "11th of next month: GSTR-1 filing deadline",
                    "20th of next month: GSTR-3B filing deadline",
                    "22nd of next month: GSTR-3B payment deadline",
                    "Last day of month: GSTR-2A auto-population"
                  ].map((deadline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{deadline}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Annual Returns</h3>
                <ul className="space-y-4">
                  {[
                    "December 31st: GSTR-9 annual return deadline",
                    "December 31st: GSTR-9C reconciliation deadline",
                    "March 31st: Extended deadline for annual returns",
                    "September 30th: GSTR-4 quarterly return deadline"
                  ].map((deadline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{deadline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Penalties</span> for Non-Compliance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Late Filing", desc: "₹200 per day (₹100 for CGST + ₹100 for SGST)" },
                { title: "Late Payment", desc: "18% interest per annum on outstanding tax" },
                { title: "Non-Filing", desc: "Maximum penalty of ₹10,000 or 10% of tax due" },
                { title: "Wrong Information", desc: "Penalty of ₹10,000 or 10% of tax short-paid" },
                { title: "Fraud Cases", desc: "Penalty of ₹10,000 or 100% of tax evaded" },
                { title: "E-way Bill", desc: "Penalty of ₹10,000 or tax evaded, whichever is higher" }
              ].map((penalty, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{penalty.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{penalty.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            File Your <span className="gradient-text">GST Returns</span> on Time
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Professional GST return filing services to ensure compliance and avoid penalties
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            File GST Returns
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t transition-colors duration-300 px-6 lg:px-12 py-12" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <div className="text-2xl font-light tracking-wider mb-4">
            <span className="gradient-text">ANY</span>
            <span className="text-white">TAX</span>
          </div>
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional GST Return Filing Services</p>
        </div>
      </footer>
    </div>
  );
}