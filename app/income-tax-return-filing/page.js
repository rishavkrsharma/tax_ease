'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function IncomeTaxReturnFilingPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Compliance</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Income Tax Return</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>Filing Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Professional income tax return filing services for individuals and businesses. Ensure timely compliance and maximize your tax savings with expert guidance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Who Should File <span className="gradient-text">ITR?</span>
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
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{category.title}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{category.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">ITR Forms</span> Available
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Individuals</h3>
                <ul className="space-y-4">
                  {[
                    "ITR-1: For salaried individuals with income up to ₹50 lakhs",
                    "ITR-2: For individuals with capital gains and foreign assets",
                    "ITR-3: For individuals with business/professional income",
                    "ITR-4: For presumptive taxation (business/profession)"
                  ].map((form, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{form}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Businesses</h3>
                <ul className="space-y-4">
                  {[
                    "ITR-5: For partnership firms, LLPs, and AOPs",
                    "ITR-6: For companies (except claiming 80G exemption)",
                    "ITR-7: For trusts, political parties, and institutions",
                    "ITR-8: For return of income under section 115JC"
                  ].map((form, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{form}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">Documents</span> Required
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Salaried Individuals</h3>
                <ul className="space-y-4">
                  {[
                    "Form 16 from employer",
                    "Bank statements and passbooks",
                    "Investment proofs (ELSS, PPF, etc.)",
                    "Rent receipts (if claiming HRA)",
                    "Medical bills and insurance premiums"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Business Owners</h3>
                <ul className="space-y-4">
                  {[
                    "Books of accounts and financial statements",
                    "Bank statements of all accounts",
                    "Purchase and sales invoices",
                    "Expense vouchers and receipts",
                    "Previous year's ITR and audit reports"
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
                { title: "Tax Optimization", desc: "Maximize deductions and minimize tax liability" },
                { title: "Error-Free Filing", desc: "Accurate calculations and proper documentation" },
                { title: "Timely Compliance", desc: "Meet all deadlines and avoid penalties" },
                { title: "Audit Support", desc: "Professional assistance during tax audits" },
                { title: "Refund Processing", desc: "Faster processing of tax refunds" },
                { title: "Legal Compliance", desc: "Ensure compliance with all tax laws" },
                { title: "Record Keeping", desc: "Maintain proper records for future reference" },
                { title: "Expert Guidance", desc: "Professional advice on tax planning" }
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
              <span className="gradient-text">Process</span> Timeline
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Document Collection", desc: "Gather all required documents and information", time: "1-2 days" },
                { step: "02", title: "Income Calculation", desc: "Calculate total income and applicable deductions", time: "2-3 days" },
                { step: "03", title: "Return Preparation", desc: "Prepare and review ITR for accuracy", time: "1-2 days" },
                { step: "04", title: "Filing & Verification", desc: "File ITR and complete e-verification", time: "1 day" }
              ].map((process, idx) => (
                <div key={idx} className="p-6 border transition-colors duration-300 transition-all duration-500 text-center group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="text-4xl font-light mb-4 transition-colors" style={{color: 'var(--gradient-start)'}}>{process.step}</div>
                  <h3 className="text-lg font-light mb-3 tracking-wide">{process.title}</h3>
                  <p className="text-sm leading-relaxed mb-2" style={{color: 'var(--text-tertiary)'}}>{process.desc}</p>
                  <div className="text-xs tracking-wider uppercase" style={{color: 'var(--gradient-start)'}}>{process.time}</div>
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
                <h3 className="text-2xl font-light mb-6 tracking-wide">Individual Returns</h3>
                <ul className="space-y-4">
                  {[
                    "July 31st: Due date for most individual returns",
                    "October 31st: Extended due date for audit cases",
                    "December 31st: Belated return filing deadline",
                    "March 31st: Revised return filing deadline"
                  ].map((deadline, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{deadline}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Business Returns</h3>
                <ul className="space-y-4">
                  {[
                    "September 30th: Due date for audit cases",
                    "October 31st: Extended due date for companies",
                    "December 31st: Belated return filing deadline",
                    "March 31st: Revised return filing deadline"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            File Your <span className="gradient-text">ITR</span> with Experts
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Get professional ITR filing services and ensure maximum tax savings
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            File ITR Now
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
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional Income Tax Return Filing Services</p>
        </div>
      </footer>
    </div>
  );
}