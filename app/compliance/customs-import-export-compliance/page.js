'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function CustomsCompliancePage() {
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
            <span className="text-[#0B1F3A]">Customs & Import-Export</span>
            <br />
            <span className="text-white">Compliance</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            HS classification, Bill of Entry / Shipping Bill, FTA benefits, RoDTEP/SEIS/EPCG — aligned to Customs Act, 1962 and FTP.
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
            India&apos;s customs regime under the Customs Act, 1962 and Foreign Trade Policy creates obligations from HS code classification and Bill of Entry / Shipping Bill filing to duty optimisation via FTAs and export incentive schemes (RoDTEP, SEIS, Advance Authorisation, EPCG). We support ICEGATE filings, FEMA-aligned trade documentation, and end-to-end import-export compliance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "IEC Registration",
                desc: "Import Export Code registration for international trade",
                features: ["DGFT registration", "IEC modification", "Digital signature", "RCMC support"]
              },
              {
                title: "Customs Clearance",
                desc: "End-to-end customs clearance services",
                features: ["Bill of entry", "Shipping bill", "HS code classification", "Duty calculation"]
              },
              {
                title: "Export Documentation",
                desc: "Complete export document preparation",
                features: ["Shipping documents", "Certificate of origin", "GSP certificates", "Export invoice"]
              },
              {
                title: "Import Documentation",
                desc: "Import compliance and documentation",
                features: ["Import license", "BIS certificate", "FSSAI for food imports", "Chemical imports"]
              },
              {
                title: "EPCG Scheme",
                desc: "Export Promotion Capital Goods scheme compliance",
                features: ["EPCG license", "Compliance monitoring", "Export obligation tracking", "Redemption"]
              },
              {
                title: "Advance Authorization",
                desc: "Duty-free import for export production",
                features: ["AA application", "SION verification", "Export obligation", "Scheme benefits"]
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="p-6 border transition-all duration-500">
                <h3 className="text-xl font-semibold mb-3 tracking-wide text-[#0B1F3A]">{service.title}</h3>
                <p className="mb-4 text-sm text-[#3D5A80]">{service.desc}</p>
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

          <div className="p-12 border transition-colors duration-300 mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8 text-[#0B1F3A]">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Customs duty optimization and planning",
                "HS code classification and advisory",
                "DGFT compliance and scheme management",
                "Drawback claims and refunds",
                "Anti-dumping and safeguard duty matters",
                "Customs audit and inspection support",
                "FEMA compliance for imports/exports",
                "Trade policy advisory"
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
            Ready to <span className="text-white">expand globally?</span>
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

