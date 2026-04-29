'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SubpageSidebar from '../../components/SubpageSidebar';

export default function GSTDisputesPage() {
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
            <span className="text-[#0B1F3A]">GST Notices</span>
            <br />
            <span className="text-white">& Disputes</span>
          </h1>
          <p className="text-xl max-w-3xl leading-relaxed text-[#0B1F3A]/60 font-light">
            SCNs, ITC mismatches, adjudication, appeals, tribunal, and High Court writs — data-led defence.
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
            GST notices have risen as the Department uses analytics, e-invoicing, and GSTN matching to find mismatches in ITC, turnover across GSTR-1/3B/annual returns, RCM, and blocked credits under Section 17(5). We defend Section 73/74 SCNs, assessments, appeals, and coordinate tribunal and writ strategies where needed.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">GST Notice Handling</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Expert response to all GST notices</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">GSTR-3B mismatch notices</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">ITC notices</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Annual return notices</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Audit notices</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Show cause notices</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Demand notices</span>
                </div>
              </div>
            </div><div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">GST Appeals</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Appeals at all levels</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">First appeal</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Tribunal representation</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">High Court matters</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Stay applications</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Revision petitions</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Advance rulings</span>
                </div>
              </div>
            </div><div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">GST Audit Defense</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">Defense in GST audits</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Audit preparation</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Document review</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Reconciliation</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Defense strategy</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Post-audit actions</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Settlement options</span>
                </div>
              </div>
            </div><div 
              className="bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">Refund Litigation</h3>
              <p className="mb-6 leading-relaxed text-[#3D5A80]">GST refund disputes</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Export refunds</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">ITC refunds</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Excess payment refunds</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Refund appeals</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Interest claims</span>
                </div><div className="flex items-start gap-2">
                  <span className="text-[#C9A84C]">✓</span>
                  <span className="text-sm text-[#7A8FA6]">Deficiency handling</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 border transition-colors duration-300">
            <h2 className="text-3xl font-bold text-[#0B1F3A] tracking-tight mb-8 text-[#0B1F3A]">Why Choose ANYTAX?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">GST litigation specialists</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Strong track record</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Strategic dispute resolution</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Minimize financial impact</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Timely representation</span>
              </div><div className="flex items-start gap-4">
                <span className="text-2xl text-[#C9A84C]">✓</span>
                <span className="text-lg text-[#3D5A80]">Regular compliance updates</span>
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
            Facing <span className="text-white">GST Issues?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-10 max-w-2xl mx-auto">
            Let our experts resolve your GST notices and disputes
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
