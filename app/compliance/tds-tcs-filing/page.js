'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function TDSTCSFilingPage() {
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
            <span className="text-[#0B1F3A]">TDS / TCS</span>
            <br />
            <span className="text-white">Return Filing</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Deposit, return, and certificate workflow for 24Q/26Q/27Q/27EQ — due dates, interest, and Section 234E handled systematically.
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
              TDS and TCS under Chapter XVII of the Income Tax Act require deductors to withhold or collect tax, deposit by the due date (generally 7th of the following month; 30th April for March), and file quarterly returns (24Q, 26Q, 27Q, 27EQ). Late filing fees (Section 234E), interest, and penalties for failure to deduct or deposit can be severe — we keep computation, challans, and certificates aligned.
            </p>

            {/* Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
                Our <span className="text-[#C9A84C]">TDS/TCS Services</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "TDS on Salary",
                    price: "₹999/quarter*",
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
                    className="p-6 border transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-3 tracking-wide text-[#0B1F3A]">{service.title}</h3>
                    <p className="text-2xl mb-4 font-light text-[#C9A84C]">{service.price}</p>
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

            {/* TDS Forms Covered */}
            <div className="mb-20 bg-[#FDFBF6] rounded-[32px] p-8 lg:p-12 border border-[#E2DFD6]">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8 text-[#0B1F3A]">TDS/TCS Forms We Handle</h2>
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
                    className="p-6 border text-center transition-colors duration-300">
                    <h3 className="text-lg font-light mb-2 text-[#C9A84C]">{item.form}</h3>
                    <p className="text-sm text-[#7A8FA6]">{item.desc}</p>
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
                  className="p-6 border text-center transition-all duration-500">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-light mb-3 text-[#0B1F3A]">{feature.title}</h3>
                  <p className="text-sm text-[#7A8FA6]">{feature.desc}</p>
                </div>
              ))}
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
            Need <span className="text-white">TDS/TCS Support?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Let us handle your TDS/TCS compliance - accurate, timely, and hassle-free
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

