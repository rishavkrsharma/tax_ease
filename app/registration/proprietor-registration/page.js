'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function ProprietorRegistrationPage() {
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
            <span className="text-[#0B1F3A]">Sole Proprietorship</span>
            <br />
            <span className="text-white">Registration in India</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            No central &quot;proprietorship certificate&quot; — but GST, Udyam, Shop &amp; Establishment, FSSAI, and a business bank account make you operational and credible. We bundle what your activity actually needs.
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
            A Sole Proprietorship is the simplest form of business entity in India — there is no mandatory registration with a central government authority. The business and the owner are legally the same person. However, a proprietor must obtain a collection of licences and registrations — such as GST registration, Udyam (MSME) registration, Shop &amp; Establishment licence, FSSAI licence (if in food), and a current account in the business name — to operate formally and gain credibility. At AnyTax.in, we guide you through every licence and registration your specific business requires, ensuring you are fully operational and compliant from Day 1.
          </p>
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Key Benefits of <span className="text-[#C9A84C]">Proprietorship</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Easy to Start", desc: "Minimal documentation, quick setup process, low cost" },
                { title: "Full Control", desc: "Complete decision-making authority with the owner" },
                { title: "Minimal Compliance", desc: "Lower regulatory requirements compared to other entities" },
                { title: "Tax Efficiency", desc: "Business income taxed at individual slab rates" },
                { title: "No Profit Sharing", desc: "All profits belong to the owner" },
                { title: "Easy to Close", desc: "Can be dissolved anytime without complex procedures" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                  <p className="leading-relaxed text-[#7A8FA6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Who Should Choose <span className="text-[#C9A84C]">Proprietorship?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "👤", title: "Solo Entrepreneurs", desc: "Individual business owners starting small" },
                { icon: "💼", title: "Freelancers", desc: "Consultants, designers, writers, professionals" },
                { icon: "🏪", title: "Small Businesses", desc: "Retail shops, service providers, local businesses" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 text-center group">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                  <p className="leading-relaxed text-[#7A8FA6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Documents <span className="text-[#C9A84C]">Required</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Personal Documents</h3>
                <ul className="space-y-4">
                  {["PAN card of proprietor", "Aadhaar card", "Address proof (passport/voter ID/driving license)", "Passport-size photographs", "Bank account statement"].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl text-[#C9A84C]">✓</span>
                      <span className="text-lg text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">Business Documents</h3>
                <ul className="space-y-4">
                  {["Business address proof", "Rent/Lease agreement (if applicable)", "Electricity bill", "Shop & Establishment license (if required)", "MSME/Udyam registration (optional)"].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl text-[#C9A84C]">✓</span>
                      <span className="text-lg text-[#3D5A80]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Registration <span className="text-[#C9A84C]">Steps</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Choose Business Name", desc: "Select a unique name for your proprietorship" },
                { step: "02", title: "Open Bank Account", desc: "Open current account in proprietor's name or business name" },
                { step: "03", title: "Shop & Establishment License", desc: "Register under Shop & Establishment Act of your state" },
                { step: "04", title: "MSME/Udyam Registration", desc: "Register for MSME benefits (optional but recommended)" },
                { step: "05", title: "GST Registration", desc: "If turnover exceeds threshold or for voluntary registration" },
                { step: "06", title: "Professional Tax", desc: "Register for professional tax if applicable in your state" }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-8 bg-[#FDFBF6] rounded-[28px] p-7 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-xl font-extrabold text-[#C9A84C]">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                    <p className="leading-relaxed text-[#7A8FA6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-10">
              Advantages vs <span className="text-[#C9A84C]">Disadvantages</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">✓ Advantages</h3>
                <ul className="space-y-4">
                  {["Lowest cost of formation", "Full control and decision-making", "Minimal legal formalities", "Easy to dissolve", "Tax benefits at individual rates", "Quick business decisions"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl text-[#C9A84C]">•</span>
                      <span className="text-lg text-[#3D5A80]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">✗ Disadvantages</h3>
                <ul className="space-y-4">
                  {["Unlimited liability", "Difficult to raise funds", "Limited growth potential", "Business dies with owner", "Harder to transfer ownership", "Less credibility vs companies"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl text-[#C9A84C]">•</span>
                      <span className="text-lg text-[#3D5A80]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#FDFBF6] rounded-[32px] p-10 lg:p-14 border border-[#E2DFD6] mb-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8">
                Proprietorship Setup <span className="text-[#C9A84C]">Package</span>
              </h2>
              <div className="text-5xl lg:text-6xl font-extrabold text-[#0B1F3A] mb-3">₹1,999/-*</div>
              <p className="text-xl mb-12 text-[#3D5A80]">Complete setup with all registrations</p>
              <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
                Start Your Business
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
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
            Start Your <span className="text-white">Solo Business</span> Today!
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Simplest way to start your entrepreneurial journey
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
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