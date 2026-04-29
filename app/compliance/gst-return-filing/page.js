'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function GSTReturnFilingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
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
            <span className="text-[#0B1F3A]">GST Return Filing</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            GSTR-1, GSTR-3B, annual GSTR-9/9C, QRMP, and ITC reconciliation — reminders, review, and CA-backed accuracy.
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
          <p className="text-lg leading-relaxed text-[#3D5A80] mb-16 max-w-4xl">
            GST return filing is mandatory for every registered business for each applicable period — including nil returns. Late filing attracts late fees, interest, and in serious cases cancellation of registration. AnyTax.in provides end-to-end GST return filing — from GSTR-1 and GSTR-3B to annual GSTR-9/9C — with timely reminders, accurate ITC reconciliation, and coordination with your accounts team.
          </p>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Types of <span className="text-[#C9A84C]">GST Returns</span>
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-2xl font-light mb-4 tracking-wide group-hover:text-[#C9A84C] transition-colors duration-300">{returnType.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{returnType.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Monthly</span> Return Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Data Collection", desc: "Gather sales and purchase data from books of accounts" },
                { step: "02", title: "GSTR-1 Filing", desc: "File outward supplies return with sales details" },
                { step: "03", title: "GSTR-3B Filing", desc: "File monthly summary return and pay tax liability" },
                { step: "04", title: "Reconciliation", desc: "Match GSTR-2A with purchase records and claim ITC" }
              ].map((process, idx) => (
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-extrabold text-[#C9A84C]/30 mb-3">{process.step}</div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{process.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7A8FA6]">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Sales Data</h3>
                <ul className="space-y-4">
                  {[
                    "Sales invoices and bills",
                    "Export documents (if applicable)",
                    "Credit notes and debit notes",
                    "E-way bills for transportation",
                    "Bank statements for sales receipts"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Purchase Data</h3>
                <ul className="space-y-4">
                  {[
                    "Purchase invoices and bills",
                    "Import documents (if applicable)",
                    "Credit notes and debit notes",
                    "E-way bills for purchases",
                    "Bank statements for purchase payments"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Benefits</span> of Professional Filing
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
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-[#7A8FA6]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Important</span> Deadlines
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Monthly Returns</h3>
                <ul className="space-y-4">
                  {[
                    "11th of next month: GSTR-1 filing deadline",
                    "20th of next month: GSTR-3B filing deadline",
                    "22nd of next month: GSTR-3B payment deadline",
                    "Last day of month: GSTR-2A auto-population"
                  ].map((deadline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{deadline}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Annual Returns</h3>
                <ul className="space-y-4">
                  {[
                    "December 31st: GSTR-9 annual return deadline",
                    "December 31st: GSTR-9C reconciliation deadline",
                    "March 31st: Extended deadline for annual returns",
                    "September 30th: GSTR-4 quarterly return deadline"
                  ].map((deadline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{deadline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Penalties</span> for Non-Compliance
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{penalty.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{penalty.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        </div>
      </div>

      {/* CTA Section */}
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
            File Your <span className="text-white">GST Returns</span> on Time
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Professional GST return filing services to ensure compliance and avoid penalties
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            File GST Returns
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