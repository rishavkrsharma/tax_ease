'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function CompanyRegistrationPage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">Home › Registration</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">Company Registration</span>
            <br />
            <span className="text-white">in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            CA-led incorporation from name reservation to Certificate of Incorporation — typically 7–10 working days with complete documents.
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
              Registering your company is the single most important step in transforming your business idea into a legally recognised, investor-ready enterprise. Under the Companies Act, 2013, a properly registered company enjoys separate legal identity, limited liability protection, and access to a vastly wider pool of funding, talent, and market opportunities. At AnyTax.in, our CA-led team manages the entire incorporation process — from name reservation and DSC procurement to MOA/AOA drafting and Certificate of Incorporation — so you can focus entirely on building your business.
            </p>

            {/* Why Incorporate */}
            <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
            Why Incorporate a <span className="text-[#C9A84C]">Private Limited Company</span>?
          </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { num: "01", title: "Separate Legal Entity", desc: "The company can own property, enter contracts, and sue or be sued in its own name — independent of its promoters." },
                  { num: "02", title: "Limited Liability Shield", desc: "Shareholders are liable only to the extent of their shareholding. Personal assets remain fully protected." },
                  { num: "03", title: "Preferred by Investors & VCs", desc: "Angel investors, venture capitalists, and private equity firms almost exclusively invest in Pvt Ltd companies." },
                  { num: "04", title: "Tax Efficiency", desc: "Corporate tax rates of 22% (existing companies) and 15% (new manufacturing companies under Section 115BAB) are significantly lower than individual slab rates for higher incomes." },
                  { num: "05", title: "Credibility with Banks & Clients", desc: "A registered company inspires greater confidence in lenders, enterprise clients, and government bodies." },
                  { num: "06", title: "Employee Stock Options (ESOPs)", desc: "Attract and retain top talent with structured equity compensation plans." },
                  { num: "07", title: "Perpetual Succession", desc: "The company survives beyond any changes in its ownership or management structure." },
                ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#FDFBF6] rounded-[24px] p-6 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                <div className="text-4xl font-extrabold text-[#C9A84C]/30 mb-3">{item.num}</div>
                <h3 className="text-xl font-semibold mb-3 tracking-wide text-[#0B1F3A]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#7A8FA6]">{item.desc}</p>
              </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
        Comparison: <span className="text-[#C9A84C]">Company</span> vs Other Entities
      </h2>
              <div className="overflow-x-auto">
                <table className="w-full rounded-[24px] overflow-hidden border border-[#E2DFD6]">
                  <thead className="bg-[#FDFBF6]">
                    <tr>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-[#0B1F3A]">Feature</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-[#0B1F3A]">Company</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-[#0B1F3A]">Sole Proprietorship</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-[#0B1F3A]">Partnership</th>
                      <th className="px-6 py-4 text-left font-light tracking-wider text-[#0B1F3A]">LLP</th>
                    </tr>
                  </thead>
                  <tbody className="border-t border-[#E2DFD6]">
                    {[
                      { feature: "Legal Entity", company: "Separate legal entity", sole: "No separate entity", partner: "No separate entity", llp: "Separate legal entity" },
                      { feature: "Liability", company: "Limited liability", sole: "Unlimited liability", partner: "Unlimited liability", llp: "Limited liability" },
                      { feature: "Funding Options", company: "Issue shares, attract investors", sole: "Limited", partner: "Limited", llp: "Limited" },
                      { feature: "Tax Benefits", company: "Lower tax rates, incentives", sole: "Individual slab rates", partner: "Individual slab rates", llp: "Flat 30% rate" },
                      { feature: "Transferability", company: "Easy transfer of shares", sole: "Difficult", partner: "Difficult", llp: "Transfer requires consent" },
                      { feature: "Global Expansion", company: "Easy to expand globally", sole: "Difficult", partner: "Difficult", llp: "Moderate" }
                    ].map((row, idx) => (
                      <tr 
                        key={idx} 
                        className="transition-colors duration-300 border-t border-[#E2DFD6]">
                        <td className="px-6 py-4 font-light text-[#3D5A80]">{row.feature}</td>
                        <td className="px-6 py-4 text-sm text-[#3D5A80]">{row.company}</td>
                        <td className="px-6 py-4 text-sm text-[#7A8FA6]">{row.sole}</td>
                        <td className="px-6 py-4 text-sm text-[#7A8FA6]">{row.partner}</td>
                        <td className="px-6 py-4 text-sm text-[#3D5A80]">{row.llp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Types of Companies */}
            <div className="mb-20">
      <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
        Types of <span className="text-[#C9A84C]">Companies</span> in India
      </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { type: "Private Limited Company (Pvt Ltd)", desc: "The most popular structure for startups, SMEs, and growth-oriented businesses. Requires a minimum of 2 directors and 2 shareholders. Offers the strongest combination of credibility, funding access, and tax efficiency." },
                  { type: "One Person Company (OPC)", desc: "Ideal for solo entrepreneurs who want limited liability and separate legal identity without a co-promoter. Requires just one director and one nominee." },
                  { type: "Public Limited Company", desc: "Suited for large enterprises seeking to raise capital from the public through stock exchanges. Requires a minimum of 3 directors and 7 shareholders, and is subject to greater regulatory scrutiny." },
                  { type: "Section 8 Company", desc: "The preferred entity for non-profits, NGOs, and social enterprises. Registered under Section 8 of the Companies Act, 2013, it enjoys income tax exemptions and is viewed with high credibility by donors and CSR grantors." }
                ].map((item, idx) => (
        <div 
          key={idx} 
          className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
          <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.type}</h3>
          <p className="leading-relaxed text-[#7A8FA6]">{item.desc}</p>
        </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="mb-20 bg-[#FDFBF6] rounded-[32px] p-8 lg:p-12 border border-[#E2DFD6]">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">Documents Required for Incorporation</h2>
              <ul className="space-y-4">
                {[
                  "PAN Card and Aadhaar Card of all proposed directors and shareholders",
                  "Latest passport-sized photographs of all directors",
                  "Proof of residential address (bank statement, utility bill, or rental agreement — not older than 2 months)",
                  "Proof of registered office address (rent/lease agreement or ownership deed + NOC from property owner)",
                  "Digital Signature Certificates (DSC) for all directors",
                  "Memorandum of Association (MOA) and Articles of Association (AOA) — drafted by our experts",
                ].map((doc, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <span className="text-2xl text-[#C9A84C]">✓</span>
          <span className="text-lg text-[#3D5A80]">{doc}</span>
        </li>
                ))}
              </ul>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
                Our Step-by-Step <span className="text-[#C9A84C]">Registration Process</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: 'Step 1 — Initial Consultation', text: 'Understand your business, recommend the right entity type, and answer all your questions. (Day 1)' },
                  { step: 'Step 2 — Name Approval', text: 'File RUN (Reserve Unique Name) application on the MCA portal. Approval typically within 1–2 working days.' },
                  { step: 'Step 3 — DSC & DIN Procurement', text: 'Obtain Digital Signature Certificates and Director Identification Numbers for all proposed directors.' },
                  { step: 'Step 4 — Document Preparation', text: 'Draft MOA, AOA, and prepare all required declarations and affidavits.' },
                  { step: 'Step 5 — SPICe+ Filing', text: 'File the integrated incorporation form (SPICe+) on the MCA portal, covering PAN, TAN, EPFO, and ESIC registrations simultaneously.' },
                  { step: 'Step 6 — Certificate of Incorporation', text: 'Receive the Certificate of Incorporation, PAN, and TAN from the Registrar of Companies. Total time: 7–10 working days.' },
                ].map((row, idx) => (
                  <div key={idx} className="bg-[#FDFBF6] rounded-[24px] p-6 border border-[#E2DFD6]">
                    <h3 className="text-lg font-semibold text-[#0B1F3A] mb-2">{row.step}</h3>
                    <p className="text-sm text-[#7A8FA6] leading-relaxed">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
                Frequently Asked <span className="text-[#C9A84C]">Questions</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is the minimum capital required to incorporate a company?',
                    a: 'There is no minimum paid-up capital requirement for a Private Limited Company. You can incorporate with even ₹1 as authorised capital, although a nominal amount of ₹1–10 lakh is commonly used.',
                  },
                  {
                    q: 'Can an NRI or foreign national be a director?',
                    a: 'Yes. However, at least one director must be a resident Indian (a person who has stayed in India for at least 182 days in the preceding calendar year).',
                  },
                  {
                    q: 'How long does company registration take?',
                    a: 'With complete documents, the entire process typically takes 7–10 working days. Name approval alone takes 1–2 days.',
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-[#FDFBF6] rounded-[24px] p-6 border border-[#E2DFD6]">
                    <h3 className="text-lg font-semibold text-[#0B1F3A] mb-2">{faq.q}</h3>
                    <p className="text-[#7A8FA6] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>

      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Ready to <span className="text-white">get started?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-[#3D5A80]">
            Get expert assistance with complete documentation and hassle-free registration
          </p>
          <Link 
            href="/contact" 
            className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
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
