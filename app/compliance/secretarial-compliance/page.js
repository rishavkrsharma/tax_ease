'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function SecretarialCompliancePage() {
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
            <span className="text-[#0B1F3A]">Secretarial Compliance</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Board and AGM documentation, registers, share certificates, and MCA event forms — governance done to Companies Act and SEBI standards where applicable.
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
              Secretarial compliance covers the full spectrum of corporate governance under the Companies Act, 2013 — from properly convened Board and General Meetings to statutory registers, share certificates, and event-based MCA filings. For listed companies and prescribed unlisted public companies, a Secretarial Audit by a practising Company Secretary may also be mandatory.
            </p>

            {/* Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
                Our <span className="text-[#C9A84C]">Secretarial Services</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Board Meetings",
                    desc: "Organization and documentation of board meetings, preparation of agenda, minutes, and resolutions.",
                    features: ["Meeting notices", "Agenda preparation", "Minutes drafting", "Resolution filing"]
                  },
                  {
                    title: "General Meetings (AGM/EGM)",
                    desc: "Complete management of Annual General Meetings and Extraordinary General Meetings.",
                    features: ["AGM/EGM notices", "Preparation of reports", "Minutes of meetings", "MCA filing"]
                  },
                  {
                    title: "Statutory Registers",
                    desc: "Maintenance of all statutory registers as per Companies Act requirements.",
                    features: ["Member register", "Director register", "Charge register", "Share transfer register"]
                  },
                  {
                    title: "MCA Compliances",
                    desc: "Filing of various forms and returns with Ministry of Corporate Affairs.",
                    features: ["Annual filing", "Event-based filing", "Form MGT-7", "Form AOC-4"]
                  },
                  {
                    title: "Share Capital Management",
                    desc: "Complete management of share allotment, transfer, and related compliances.",
                    features: ["Share allotment", "Share transfer", "Share certificates", "Share capital filing"]
                  },
                  {
                    title: "Secretarial Audit",
                    desc: "Annual secretarial audit by qualified Company Secretaries as per Section 204.",
                    features: ["Audit report (Form MR-3)", "Compliance certificate", "Recommendations", "MCA filing"]
                  }
                ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{service.title}</h3>
                    <p className="mb-6 leading-relaxed text-[#3D5A80]">{service.desc}</p>
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

            {/* Why Choose Us */}
            <div className="mb-20 bg-[#FDFBF6] rounded-[32px] p-8 lg:p-12 border border-[#E2DFD6]">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8 text-[#0B1F3A]">Why Choose ANYTAX for Secretarial Compliance?</h2>
              <ul className="space-y-4">
                {[
                  "Qualified Company Secretaries with extensive experience",
                  "Timely compliance and filing to avoid penalties",
                  "Complete documentation and record maintenance",
                  "Advisory on corporate governance best practices",
                  "Technology-driven compliance management",
                  "Regular updates on regulatory changes"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-2xl text-[#C9A84C]">✓</span>
                    <span className="text-lg text-[#3D5A80]">{point}</span>
                  </li>
                ))}
              </ul>
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
            Need <span className="text-white">Secretarial Support?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Ensure complete corporate compliance with our expert secretarial services
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

