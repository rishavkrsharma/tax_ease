'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ProfessionalTaxPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Professional Tax</span>
            <br />
            <span className="" style={{color: 'var(--text-secondary)'}}>Registration</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Professional Tax is a state-level tax levied on professionals and salaried employees. Get your professional tax registration done for compliance with state regulations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              What is <span className="gradient-text">Professional Tax?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{color: 'var(--text-secondary)'}}>
                  Professional Tax is a state-level tax levied on professionals, traders, and salaried employees. It's governed by the respective state governments and varies from state to state. The tax is deducted from salary and paid to the state government.
                </p>
                <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                  <h3 className="text-2xl font-light mb-4 tracking-wide">Key Features</h3>
                  <ul className="space-y-3">
                    {[
                      "State-level tax (varies by state)",
                      "Deducted from salary/income",
                      "Annual registration required",
                      "Monthly/quarterly payment",
                      "Maximum ₹2,500 per year"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                        <span className="" style={{color: 'var(--text-secondary)'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">Who Should Pay?</h3>
                <ul className="space-y-4">
                  {[
                    "Salaried employees",
                    "Self-employed professionals",
                    "Business owners and traders",
                    "Partners in firms",
                    "Directors of companies",
                    "Freelancers and consultants"
                  ].map((category, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              <span className="gradient-text">State-wise</span> Professional Tax
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { state: "Maharashtra", rate: "₹200 per month (max ₹2,500/year)" },
                { state: "Karnataka", rate: "₹200 per month (max ₹2,500/year)" },
                { state: "West Bengal", rate: "₹110-200 per month" },
                { state: "Tamil Nadu", rate: "₹2,500 per year" },
                { state: "Gujarat", rate: "₹2,500 per year" },
                { state: "Andhra Pradesh", rate: "₹2,500 per year" }
              ].map((state, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-xl font-light mb-4 tracking-wide group-hover:gradient-text transition-colors duration-300">{state.state}</h3>
                  <p className="leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>{state.rate}</p>
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
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Employees</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card",
                    "Aadhaar Card",
                    "Salary certificate",
                    "Address proof",
                    "Passport-sized photograph"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300 bg-zinc-900/30" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Employers</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of business",
                    "Certificate of incorporation",
                    "Business address proof",
                    "Employee list with details",
                    "Bank account details"
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
              <span className="gradient-text">Registration</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Application", desc: "Submit professional tax registration application", time: "1 day" },
                { step: "02", title: "Verification", desc: "State authorities verify documents", time: "3-5 days" },
                { step: "03", title: "Registration", desc: "Receive professional tax registration certificate", time: "1 day" },
                { step: "04", title: "Payment", desc: "Start monthly/quarterly tax payments", time: "Ongoing" }
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
              <span className="gradient-text">Compliance</span> Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Employees</h3>
                <ul className="space-y-4">
                  {[
                    "Register with state professional tax department",
                    "Pay monthly professional tax",
                    "Maintain payment receipts",
                    "File annual returns (if applicable)",
                    "Update registration for job changes"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">For Employers</h3>
                <ul className="space-y-4">
                  {[
                    "Register as professional tax employer",
                    "Deduct tax from employee salaries",
                    "Deposit tax with state government",
                    "File monthly/quarterly returns",
                    "Maintain employee records"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="" style={{color: 'var(--text-secondary)'}}>{requirement}</span>
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
                { title: "Late Registration", desc: "Penalty of ₹5 per day for delay in registration" },
                { title: "Late Payment", desc: "Interest at 1.25% per month on outstanding amount" },
                { title: "Non-Deduction", desc: "Penalty equal to the amount not deducted" },
                { title: "Late Filing", desc: "Penalty of ₹1,000 for late return filing" },
                { title: "False Information", desc: "Penalty of ₹1,000 for providing false information" },
                { title: "Non-Compliance", desc: "Additional penalties as per state rules" }
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
            Get Your <span className="gradient-text">Professional Tax</span> Registration
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Ensure compliance with state professional tax regulations
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Register Now
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
          <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>Professional Tax Registration Services</p>
        </div>
      </footer>
    </div>
  );
}