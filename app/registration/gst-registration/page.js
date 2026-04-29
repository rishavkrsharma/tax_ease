'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function GSTRegistrationPage() {
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
            <span className="text-[#0B1F3A]">GST Registration</span>
            <br />
            <span className="text-white">in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            GSTIN unlocks ITC, interstate trade, and B2B credibility — filed accurately with correct HSN/SAC and business type.
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
            Goods and Services Tax (GST), introduced on 1 July 2017, is the most comprehensive indirect tax reform in India&apos;s history. A GSTIN (GST Identification Number) is not merely a compliance requirement — it is a business credential that unlocks Input Tax Credit (ITC), enables interstate trade, establishes your credibility on B2B platforms, and qualifies your business for government tenders and bank credit. At AnyTax.in, we ensure your GST registration is completed accurately and swiftly, with proper categorisation of your goods/services, correct business type selection, and full document verification — reducing the risk of deficiency notices from the GST officer.
          </p>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Who Must Register for <span className="text-[#C9A84C]">GST?</span>
            </h2>
            <p className="text-sm text-[#7A8FA6] mb-8 max-w-3xl">
              Thresholds and special-category rules apply as per current law; we confirm applicability for your specific state and business model before filing.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Goods suppliers above threshold", desc: "Aggregate annual turnover exceeding ₹40 lakhs for goods (₹20 lakhs for special category states including J&K, Uttarakhand, HP, and North-Eastern states), unless exempt." },
                { title: "Service providers above threshold", desc: "Aggregate annual turnover exceeding ₹20 lakhs for services (₹10 lakhs for special category states), unless exempt." },
                { title: "E-commerce operators & sellers", desc: "All e-commerce operators and sellers on platforms such as Amazon, Flipkart, Meesho, and Zomato — irrespective of turnover." },
                { title: "Inter-state taxable supplies", desc: "Persons making inter-state taxable supplies generally require registration." },
                { title: "Casual & non-resident persons", desc: "Casual taxable persons and non-resident taxable persons as defined under GST law." },
                { title: "RCM, ISD & TDS under GST", desc: "Persons liable to pay tax under reverse charge (RCM), Input Service Distributors (ISDs), and TDS deductors under GST, where applicable." },
              ].map((requirement, idx) => (
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{requirement.title}</h3>
                  <p className="leading-relaxed text-sm text-[#7A8FA6]">{requirement.desc}</p>
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
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Proprietorship</h3>
                <ul className="space-y-4">
                  {[
                    "PAN Card of proprietor",
                    "Aadhaar Card of proprietor",
                    "Bank account details",
                    "Business address proof",
                    "Digital signature certificate"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[28px] p-8 border border-[#E2DFD6]">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">For Company/LLP</h3>
                <ul className="space-y-4">
                  {[
                    "Certificate of incorporation",
                    "PAN Card of entity",
                    "Bank account details",
                    "Board resolution/LLP agreement",
                    "Digital signature certificate"
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
              <span className="text-[#C9A84C]">Benefits</span> of GST Registration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Input Tax Credit (ITC)", desc: "Offset GST paid on purchases against GST collected on sales, reducing your net tax outflow." },
                { title: "Interstate commerce", desc: "Operate across states without additional tax barriers that apply to unregistered supply chains." },
                { title: "B2B credibility", desc: "Registered businesses are preferred vendors by corporates, PSUs, and government entities that need a valid GSTIN for ITC." },
                { title: "E-commerce eligibility", desc: "Mandatory for selling on major e-commerce platforms in India." },
                { title: "Government tenders", desc: "Most government and PSU procurement portals mandate GST registration." },
                { title: "Banking & credit", desc: "A valid GSTIN strengthens your profile for business loans and working capital." },
                { title: "Zero-rated exports", desc: "Exporters can supply goods and services at zero GST rate and claim refunds of accumulated ITC." },
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
                { step: "02", title: "Application Filing", desc: "File GST registration application on GST portal", time: "1 day" },
                { step: "03", title: "Verification", desc: "GST officer verifies documents and information", time: "3-7 days" },
                { step: "04", title: "GST Certificate", desc: "Receive GST registration certificate", time: "1 day" }
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

          <div className="mb-20 bg-[#FDFBF6] rounded-[32px] p-8 lg:p-10 border border-[#E2DFD6]">
            <h2 className="text-2xl font-bold text-[#0B1F3A] tracking-tight mb-4">
              Composition scheme <span className="text-[#C9A84C]">(optional)</span>
            </h2>
            <p className="text-[#3D5A80] leading-relaxed">
              Small businesses with aggregate turnover up to ₹1.5 crore (₹75 lakhs for special category states) may opt for the GST Composition Scheme — fixed reduced rates and quarterly returns, without collecting GST or claiming ITC in the usual manner. Our advisors help you choose between regular and composition schemes based on your facts.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              <span className="text-[#C9A84C]">Post-registration</span> compliance at a glance
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Monthly / quarterly</h3>
                <ul className="space-y-4">
                  {[
                    "GSTR-1: Statement of outward supplies (by the 11th of the following month, or as per QRMP)",
                    "GSTR-3B: Summary return and tax payment (by the 20th, or quarterly due dates under QRMP)",
                    "GSTR-2B: Auto-populated input tax credit statement",
                    "QRMP: IFF for first two months of the quarter + quarterly GSTR-3B where applicable",
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{compliance}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Annual</h3>
                <ul className="space-y-4">
                  {[
                    "GSTR-9: Annual return (by 31st December of the succeeding financial year)",
                    "GSTR-9C: Self-certified reconciliation for taxpayers with turnover above ₹5 crore (with GSTR-9)",
                    "Record-keeping and reconciliation with books and e-invoicing data where applicable",
                  ].map((compliance, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-xl mt-1 text-[#C9A84C]">✓</span>
                      <span className="text-[#3D5A80]">{compliance}</span>
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
            Get Your <span className="text-white">GST Registration</span> Today
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Fast, reliable, and hassle-free GST registration with expert guidance and support
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get a Free Consultation Today
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