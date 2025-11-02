'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function MSMERegistrationPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Home › Registration</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">MSME/Udyam Registration</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Government certification for Micro, Small, and Medium Enterprises in India. Provides numerous benefits including easier access to credit, government subsidies, and tax benefits.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              MSME <span className="gradient-text">Classification</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left font-light tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left font-light tracking-wider">Investment in Plant & Machinery</th>
                    <th className="px-6 py-4 text-left font-light tracking-wider">Annual Turnover</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-6 py-4 font-light">Micro Enterprise</td>
                    <td className="px-6 py-4" style={{color: 'var(--text-secondary)'}}>Up to ₹1 crore</td>
                    <td className="px-6 py-4" style={{color: 'var(--text-secondary)'}}>Up to ₹5 crore</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-light">Small Enterprise</td>
                    <td className="px-6 py-4" style={{color: 'var(--text-secondary)'}}>₹1 crore to ₹10 crore</td>
                    <td className="px-6 py-4" style={{color: 'var(--text-secondary)'}}>₹5 crore to ₹50 crore</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-light">Medium Enterprise</td>
                    <td className="px-6 py-4" style={{color: 'var(--text-secondary)'}}>₹10 crore to ₹50 crore</td>
                    <td className="px-6 py-4" style={{color: 'var(--text-secondary)'}}>₹50 crore to ₹250 crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Key Benefits of <span className="gradient-text">MSME Registration</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Easy Credit Access", desc: "Priority sector lending, lower interest rates, collateral-free loans" },
                { title: "Government Subsidies", desc: "Various schemes and subsidies for technology upgradation" },
                { title: "Tax Benefits", desc: "Income tax benefits, reduced rates for certain services" },
                { title: "Tender Preference", desc: "Reserved quotas in government tenders and contracts" },
                { title: "Patent Fee Reduction", desc: "50% reduction in patent filing fees" },
                { title: "Bank Guarantee", desc: "Exemption from bank guarantee in government tenders" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:gradient-text transition-colors duration-300">{item.title}</h3>
                  <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Documents <span className="gradient-text">Required</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>Basic Documents</h3>
                <ul className="space-y-4">
                  {["Aadhaar card of proprietor/partners", "PAN card of business", "Business address proof", "Bank account details", "Mobile number and email ID"].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                <h3 className="text-2xl font-light tracking-wide mb-6" style={{color: 'var(--gradient-start)'}}>Business Details</h3>
                <ul className="space-y-4">
                  {["Business name and type", "Date of commencement", "Investment in plant & machinery", "Annual turnover details", "Number of employees"].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-2xl" style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-lg" style={{color: 'var(--text-secondary)'}}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-12">
              Registration <span className="gradient-text">Process</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Visit Udyam Portal", desc: "Go to the official Udyam registration portal" },
                { step: "02", title: "Aadhaar Verification", desc: "Verify Aadhaar number of proprietor/partners" },
                { step: "03", title: "Fill Application", desc: "Enter business details, investment, and turnover information" },
                { step: "04", title: "Submit Documents", desc: "Upload required documents and submit application" },
                { step: "05", title: "Get Udyam Number", desc: "Receive Udyam Registration Number immediately" },
                { step: "06", title: "Download Certificate", desc: "Download the MSME certificate from the portal" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 p-8 border transition-colors duration-300 transition-all duration-500 group" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                  <div className="flex-shrink-0 w-16 h-16 border transition-colors duration-300 flex items-center justify-center text-2xl font-light" style={{borderColor: 'var(--border-color)'}} style={{color: 'var(--gradient-start)'}}>{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-light tracking-wide mb-3 group-hover:gradient-text transition-colors duration-300">{item.title}</h3>
                    <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 p-16 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
            <div className="text-center">
              <h2 className="text-4xl font-light tracking-tight mb-8">
                MSME Registration <span className="gradient-text">Package</span>
              </h2>
              <div className="text-6xl font-light mb-6 gradient-text">Starting from ₹299/-</div>
              <p className="text-xl mb-12" style={{color: 'var(--text-secondary)'}}>Complete registration with certificate delivery</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
                Get Registered
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}} style={{backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            Get Your <span className="gradient-text">MSME Certificate</span> Today!
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Unlock government benefits and grow your business with MSME registration
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg">
            Start Registration
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
          <p className="text-sm tracking-wider" style={{color: 'var(--text-tertiary)'}}>Copyright @ANYTAX All rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}