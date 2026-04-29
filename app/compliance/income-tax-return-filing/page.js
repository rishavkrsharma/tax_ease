'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function IncomeTaxReturnFilingPage() {
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
            <span className="text-[#0B1F3A]">Income Tax Return</span>
            <br />
            <span className="text-white">Filing Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Optimal old vs new regime, correct ITR form, and full use of eligible deductions — CA-supervised filing under the Income Tax Act, 1961.
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
            Filing your Income Tax Return (ITR) accurately and on time is not merely a legal obligation — it is a financial discipline that protects your interests, establishes your income credentials for loans and visas, enables tax refunds, and avoids compounding penalties and prosecution under the Income Tax Act, 1961. With frequent amendments — including the New Tax Regime and updated return filing provisions under Section 139(8A) — navigating ITR filing correctly requires professional expertise. AnyTax.in&apos;s CA-led team ensures your return is filed using the optimal regime, all eligible deductions are claimed, and your tax liability is minimised within the bounds of law.
          </p>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Who Should File <span className="text-[#C9A84C]">ITR?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Individuals", desc: "Anyone with income above ₹2.5 lakhs (₹3 lakhs for senior citizens)" },
                { title: "Business Owners", desc: "Proprietors, partners, and company directors with business income" },
                { title: "Salaried Employees", desc: "Employees with income above threshold or multiple sources" },
                { title: "Freelancers", desc: "Independent contractors and consultants with professional income" },
                { title: "Investors", desc: "People with capital gains, dividends, or interest income" },
                { title: "NRIs", desc: "Non-resident Indians with Indian income sources" }
              ].map((category, idx) => (
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{category.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">ITR Forms</span> Available
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Individuals</h3>
                <ul className="space-y-4">
                  {[
                    "ITR-1: For salaried individuals with income up to ₹50 lakhs",
                    "ITR-2: For individuals with capital gains and foreign assets",
                    "ITR-3: For individuals with business/professional income",
                    "ITR-4: For presumptive taxation (business/profession)"
                  ].map((form, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{form}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Businesses</h3>
                <ul className="space-y-4">
                  {[
                    "ITR-5: For partnership firms, LLPs, and AOPs",
                    "ITR-6: For companies (except claiming 80G exemption)",
                    "ITR-7: For trusts, political parties, and institutions",
                    "ITR-8: For return of income under section 115JC"
                  ].map((form, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{form}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Salaried Individuals</h3>
                <ul className="space-y-4">
                  {[
                    "Form 16 from employer",
                    "Bank statements and passbooks",
                    "Investment proofs (ELSS, PPF, etc.)",
                    "Rent receipts (if claiming HRA)",
                    "Medical bills and insurance premiums"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Business Owners</h3>
                <ul className="space-y-4">
                  {[
                    "Books of accounts and financial statements",
                    "Bank statements of all accounts",
                    "Purchase and sales invoices",
                    "Expense vouchers and receipts",
                    "Previous year's ITR and audit reports"
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
                { title: "Tax Optimization", desc: "Maximize deductions and minimize tax liability" },
                { title: "Error-Free Filing", desc: "Accurate calculations and proper documentation" },
                { title: "Timely Compliance", desc: "Meet all deadlines and avoid penalties" },
                { title: "Audit Support", desc: "Professional assistance during tax audits" },
                { title: "Refund Processing", desc: "Faster processing of tax refunds" },
                { title: "Legal Compliance", desc: "Ensure compliance with all tax laws" },
                { title: "Record Keeping", desc: "Maintain proper records for future reference" },
                { title: "Expert Guidance", desc: "Professional advice on tax planning" }
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
              <span className="text-[#C9A84C]">Process</span> Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Document Collection", desc: "Gather all required documents and information", time: "1-2 days" },
                { step: "02", title: "Income Calculation", desc: "Calculate total income and applicable deductions", time: "2-3 days" },
                { step: "03", title: "Return Preparation", desc: "Prepare and review ITR for accuracy", time: "1-2 days" },
                { step: "04", title: "Filing & Verification", desc: "File ITR and complete e-verification", time: "1 day" }
              ].map((process, idx) => (
                <div key={idx} className="group bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="text-3xl font-extrabold text-[#C9A84C]/30 mb-3">{process.step}</div>
                  <h3 className="text-base font-bold text-[#0B1F3A] mb-2">{process.title}</h3>
                  <p className="text-sm leading-relaxed mb-2 text-[#7A8FA6]">{process.desc}</p>
                  <div className="text-xs tracking-wider uppercase text-[#C9A84C]">{process.time}</div>
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
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Individual Returns</h3>
                <ul className="space-y-4">
                  {[
                    "July 31st: Due date for most individual returns",
                    "October 31st: Extended due date for audit cases",
                    "December 31st: Belated return filing deadline",
                    "March 31st: Revised return filing deadline"
                  ].map((deadline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{deadline}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Business Returns</h3>
                <ul className="space-y-4">
                  {[
                    "September 30th: Due date for audit cases",
                    "October 31st: Extended due date for companies",
                    "December 31st: Belated return filing deadline",
                    "March 31st: Revised return filing deadline"
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
            File Your <span className="text-white">ITR</span> with Experts
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Get professional ITR filing services and ensure maximum tax savings
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            File ITR Now
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