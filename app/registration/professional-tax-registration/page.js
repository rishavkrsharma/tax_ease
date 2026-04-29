'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function ProfessionalTaxPage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">Home › Registration</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">Professional Tax</span>
            <br />
            <span className="text-white">Registration</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            State profession tax — employer registration, salary deductions, self-employed enrolment, and periodic returns so you avoid penalties and interest.
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
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              What is <span className="text-[#C9A84C]">Professional Tax?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg leading-relaxed mb-8 text-[#3D5A80]">
                  Professional Tax is a state-level tax levied on professionals, traders, and salaried employees. It's governed by the respective state governments and varies from state to state. The tax is deducted from salary and paid to the state government.
                </p>
                <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
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
                        <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                        <span className="text-[#3D5A80]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Who Should Pay?</h3>
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
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{category}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">State-wise</span> Professional Tax
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
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{state.state}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{state.rate}</p>
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
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Employees</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card",
                    "Aadhaar Card",
                    "Salary certificate",
                    "Address proof",
                    "Passport-sized photograph"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Employers</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of business",
                    "Certificate of incorporation",
                    "Business address proof",
                    "Employee list with details",
                    "Bank account details"
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
              <span className="text-[#C9A84C]">Registration</span> Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Application", desc: "Submit professional tax registration application", time: "1 day" },
                { step: "02", title: "Verification", desc: "State authorities verify documents", time: "3-5 days" },
                { step: "03", title: "Registration", desc: "Receive professional tax registration certificate", time: "1 day" },
                { step: "04", title: "Payment", desc: "Start monthly/quarterly tax payments", time: "Ongoing" }
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
              <span className="text-[#C9A84C]">Compliance</span> Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Employees</h3>
                <ul className="space-y-4">
                  {[
                    "Register with state professional tax department",
                    "Pay monthly professional tax",
                    "Maintain payment receipts",
                    "File annual returns (if applicable)",
                    "Update registration for job changes"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Employers</h3>
                <ul className="space-y-4">
                  {[
                    "Register as professional tax employer",
                    "Deduct tax from employee salaries",
                    "Deposit tax with state government",
                    "File monthly/quarterly returns",
                    "Maintain employee records"
                  ].map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{requirement}</span>
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
                { title: "Late Registration", desc: "Penalty of ₹5 per day for delay in registration" },
                { title: "Late Payment", desc: "Interest at 1.25% per month on outstanding amount" },
                { title: "Non-Deduction", desc: "Penalty equal to the amount not deducted" },
                { title: "Late Filing", desc: "Penalty of ₹1,000 for late return filing" },
                { title: "False Information", desc: "Penalty of ₹1,000 for providing false information" },
                { title: "Non-Compliance", desc: "Additional penalties as per state rules" }
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
            Get Your <span className="text-white">Professional Tax</span> Registration
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Ensure compliance with state professional tax regulations
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Register Now
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