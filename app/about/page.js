'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      <section className="relative bg-[#C9A84C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-32 lg:pb-40 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/80 font-semibold">About Us</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1F3A] mb-8 leading-tight">
            AnyTax.in was born from a conviction: that every Indian — whether a salaried professional in a tier-2 city or a multinational corporation in a metro — deserves access to qualified, honest, and technology-enabled tax expertise.
          </h1>
          <p className="text-lg md:text-xl text-[#0B1F3A]/70 font-light leading-relaxed max-w-3xl mx-auto">
            Too many taxpayers have suffered consequences for errors they did not make — caused by unqualified intermediaries who overpromised and under-delivered. We are different. Every engagement at AnyTax.in is led or supervised by a qualified Chartered Accountant. Our advice is grounded in current law, our filings are accurate, and our clients are never left uninformed.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8 tracking-tight">
            Our <span className="gradient-text">Story</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#3D5A80] mb-20">
            <p>
              AnyTax.in was formally established in <span className="text-[#C9A84C] font-semibold">2020</span>, though its roots go back to{' '}
              <span className="text-[#C9A84C] font-semibold">2011</span> when our founder qualified as a Chartered Accountant from the Institute of Chartered Accountants of India (ICAI). Over nearly a decade of professional practice — spanning corporate finance, taxation, and advisory — he encountered a recurring frustration: the gap between what Indian taxpayers needed and what the market was actually delivering.
            </p>
            <p>
              Unqualified tax preparers charging for services they were legally not permitted to provide. Returns filed without understanding the client&apos;s complete financial picture. Notices ignored until they became demands. Legitimate deductions missed simply because the professional did not know they existed.
            </p>
            <p className="text-xl font-semibold text-[#0B1F3A]">
              ANYTAX.IN was created to fill that gap — leveraging technology to make expert CA services accessible, transparent, and affordable across India.
            </p>
          </div>

          <div className="bg-[#FDFBF6] rounded-[32px] p-8 lg:p-12 border border-[#E2DFD6] mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8 tracking-tight">
              Our <span className="gradient-text">Presence</span>
            </h2>
            <ul className="space-y-4 text-[#3D5A80] leading-relaxed">
              <li>
                <span className="font-semibold text-[#0B1F3A]">National Capital Region (NCR):</span> Head Office at Spectrum Metro Mall, Sector 75, Noida, UP
              </li>
              <li>
                <span className="font-semibold text-[#0B1F3A]">Jharkhand:</span> Ranchi and Dhanbad — serving the mineral and mining business community
              </li>
              <li>
                <span className="font-semibold text-[#0B1F3A]">Bihar:</span> Patna and Begusarai — serving businesses and professionals in the Ganga Belt
              </li>
              <li>
                <span className="font-semibold text-[#0B1F3A]">Telangana:</span> Serving the IT and pharmaceutical sectors in South India
              </li>
              <li>
                <span className="font-semibold text-[#0B1F3A]">Odisha:</span> Serving businesses, industry, and professionals across the state
              </li>
              <li>
                <span className="font-semibold text-[#0B1F3A]">Pan-India:</span> Fully online capability to serve clients in any city or state
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Values</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                title: 'Professional Excellence',
                desc: 'Every service delivered at AnyTax.in is executed under the supervision of a qualified Chartered Accountant, adhering to the professional standards mandated by the ICAI. We take professional responsibility for our advice and filings.',
              },
              {
                title: 'Radical Transparency',
                desc: 'We believe in upfront, honest communication — about what we can do, what we cannot, and what it will cost. No hidden charges, no inflated promises.',
              },
              {
                title: 'Technology-First Delivery',
                desc: 'From digital onboarding and cloud-based document sharing to AI-assisted compliance reminders and real-time return tracking — we use technology to make your experience seamless, responsive, and efficient.',
              },
              {
                title: 'Client Education',
                desc: 'An informed client makes better financial decisions. We invest in explaining not just what we are doing, but why — so you understand your tax position and can make decisions confidently.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="glass-dark rounded-[32px] p-8 text-left group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-[#B0C4DE] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { number: '1000+', label: 'Clients Served' },
              { number: '10K+', label: 'Feedback' },
              { number: '50+', label: 'Associates' },
            ].map((stat, i) => (
              <div key={i} className="glass-dark rounded-[32px] p-10 text-center group hover:bg-white/[0.08] transition-all duration-500">
                <div className="text-6xl lg:text-7xl font-extrabold gradient-text mb-4 group-hover:scale-105 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-[#B0C4DE] tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#C9A84C" />
          </svg>
        </div>
      </section>

      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Join <span className="text-white">1,000+</span> satisfied clients across India
          </h2>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Get a Free Consultation Today <span className="text-lg leading-none">→</span>
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
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved | Established 2020</p>
        </div>
      </footer>
    </div>
  );
}
