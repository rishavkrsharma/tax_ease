'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function CustomsDisputesPage() {
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">Home › Litigation & Disputes</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">Custom & Excise Notices</span>
            <br />
            <span className="text-white">& Disputes</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            Classification, valuation, origin, and FTP-linked disputes — Commissioner to CESTAT and High Court.
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
            Customs disputes typically involve HS code classification, valuation, FTA origin, and alleged violations under the Customs Act, 1962 or FTP. Our team supports complex Show Cause Notices before Commissioners, appeals before CESTAT, and High Court matters in customs and FEMA-related cases.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Customs Disputes</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Customs duty and compliance matters</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Valuation disputes</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Classification issues</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Duty demands</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Confiscation cases</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Penalty proceedings</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Import/export violations</span>
                </div>
              </div>
            </div><div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Excise Matters</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Central excise litigation</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Duty recovery</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">CENVAT credit disputes</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Classification matters</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Valuation issues</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Penalty defense</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Refund claims</span>
                </div>
              </div>
            </div><div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Appeals & Litigation</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Representation before authorities</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Commissioner (Appeals)</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">CESTAT</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">High Court</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Settlement Commission</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Stay applications</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Review petitions</span>
                </div>
              </div>
            </div><div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Anti-Dumping</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Anti-dumping duty matters</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Anti-dumping investigations</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Safeguard duty</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Countervailing duty</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Sunset review</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Mid-term review</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Duty mitigation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8 text-[#0B1F3A]">Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Customs law specialists</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">CESTAT experience</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Import-export advisory</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Duty optimization</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Effective representation</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Cost-effective solutions</span>
              </div>
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
            Need <span className="text-white">Customs Support?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Expert assistance in customs and excise disputes
          </p>
          <Link 
            href="/contact" 
            className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get Expert Help
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
