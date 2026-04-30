'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function PFFilingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

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
            <span className="text-[#0B1F3A]">PF Return</span>
            <br />
            <span className="text-white">Filing</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            ECR by the 15th, 12%+12% splits, KYC-linked UANs, and penalty-safe deposits for covered establishments (20+ employees).
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

      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg leading-relaxed mb-16 text-[#3D5A80]">
            Establishments employing 20 or more persons are covered under the EPF Act, 1952. Employers contribute 12% of basic + DA to EPF (with 3.67% to EPF, 8.33% to EPS, plus EDLI and admin charges) and deduct a matching 12%. Monthly ECR on the EPFO portal by the 15th of the following month is mandatory; delays attract interest (often 12% p.a.) and damage charges. We manage enrolment, KYC-linked UANs, and monthly filings end to end.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "EPF/EPS/EDLI Filing",
                price: "₹999/-*",
                features: ["Monthly ECR filing", "Challan generation", "Employee coverage", "UAN management", "Wage calculation", "Compliance reporting"]
              },
              {
                title: "PF Registration",
                price: "₹2,999/-",
                features: ["EPFO registration", "Digital signature", "UAN generation", "Establishment code", "Documentation support", "Portal setup"]
              },
              {
                title: "PF Withdrawal Support",
                price: "₹999/case",
                features: ["Form 19 (PF withdrawal)", "Form 10C (pension withdrawal)", "Form 31 (advance)", "Documentation", "EPFO follow-up", "Status tracking"]
              },
              {
                title: "PF Inspection Handling",
                price: "₹4,999/-",
                features: ["Inspection notice handling", "Document preparation", "Representation", "Compliance check", "Rectification support", "Report preparation"]
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-2xl font-light mb-3 tracking-wide text-[#0B1F3A]">{service.title}</h3>
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

          <div className="p-12 border transition-colors duration-300">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8 text-[#0B1F3A]">Why Choose ANYTAX for PF Compliance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Timely monthly ECR filing to avoid penalties",
                "Accurate wage and contribution calculations",
                "Expert handling of EPFO inspections",
                "UAN and member management",
                "Regular compliance updates",
                "Dedicated support team"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-2xl text-[#C9A84C]">✓</span>
                  <span className="text-lg text-[#3D5A80]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            Need <span className="text-white">PF Compliance Support?</span>
          </h2>
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

      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

