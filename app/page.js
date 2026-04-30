'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Gold "Shout" Liquid Section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#C9A84C] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-[#D4B85E]/40 blur-2xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-56 lg:pb-64">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Left — 3 cols */}
            <div className="lg:col-span-3">
              {/* Pill badge */}
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-10 border border-white/25">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/80 font-semibold">
                  Professional&nbsp; •&nbsp; Reliable&nbsp; •&nbsp; Affordable
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold tracking-tight leading-[1.05] mb-8">
                <span className="text-[#0B1F3A]">India&apos;s Trusted Tax &amp; Compliance Platform</span>
                <br />
                <span className="text-white text-3xl md:text-5xl lg:text-[2.65rem]">CA-Led, Tech-Powered, Fully Online</span>
              </h1>

              <p className="text-lg md:text-xl text-[#0B1F3A]/75 font-light mb-6 max-w-2xl leading-relaxed">
                From business registration and GST compliance to income tax litigation and international tax advisory — AnyTax.in delivers expert Chartered Accountant services at transparent, affordable pricing. Serving 1,000+ clients across India since 2020.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="pill-btn bg-[#0B1F3A] text-white px-10 py-4 text-sm uppercase inline-flex items-center gap-2 shadow-2xl"
                >
                  Get a Free Consultation Today <span className="text-lg leading-none">→</span>
                </Link>
                <Link
                  href="/registration"
                  className="pill-btn bg-white/20 backdrop-blur-sm border border-white/30 text-[#0B1F3A] px-10 py-4 text-sm uppercase hover:bg-white/35"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right — 2 cols: Glass service cards (desktop) */}
            <div className="hidden lg:grid lg:col-span-2 grid-cols-2 gap-4">
              {[
                {
                  title: 'Start Your Business',
                  price: 'From ₹499/-*',
                  desc: 'Company, LLP, GST, MSME, FSSAI & more.',
                  link: '/registration',
                },
                {
                  title: 'Stay Compliant',
                  price: 'From ₹499/-*',
                  desc: 'ITR filing, GST returns, TDS, ROC compliance & bookkeeping.',
                  link: '/compliance',
                },
                {
                  title: 'Resolve Tax Disputes',
                  price: 'From ₹999/-*',
                  desc: 'Expert representation for IT notices, GST disputes & NCLT matters.',
                  link: '/litigation',
                },
                {
                  title: 'Strategic Tax Advisory',
                  price: 'Consult us',
                  desc: 'Tax planning, transfer pricing, international taxation & corporate advisory.',
                  link: '/advisory',
                },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.link}
                  className={`bg-white/18 backdrop-blur-xl border border-white/25 rounded-[32px] p-6 text-left group hover:bg-white/30 transition-all duration-500 hover:-translate-y-1 ${
                    i % 2 === 0 ? 'animate-float' : 'animate-float-slow'
                  }`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-slate-900 font-semibold mb-2">
                    {s.title}
                  </div>
                  <div className="text-xs text-slate-700 font-light mb-2 leading-relaxed">
                    {s.desc}
                  </div>
                  <div className="text-2xl font-extrabold text-[#0B1F3A] tabular-nums tracking-tight">{s.price}</div>
                  <div className="mt-3 text-[#0B1F3A]/30 text-sm font-medium group-hover:text-[#0B1F3A]/70 transition-colors">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile service cards */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-16">
            {[
              {
                title: 'Start Your Business',
                price: 'From ₹499/-*',
                desc: 'Company, LLP, GST, MSME, FSSAI & more.',
                link: '/registration',
              },
              {
                title: 'Stay Compliant',
                price: 'From ₹499/-*',
                desc: 'ITR, GST, TDS, ROC & bookkeeping.',
                link: '/compliance',
              },
              {
                title: 'Resolve Disputes',
                price: 'From ₹999/-*',
                desc: 'IT notices, GST disputes & NCLT.',
                link: '/litigation',
              },
              {
                title: 'Tax Advisory',
                price: 'Consult us',
                desc: 'Planning, TP, international & corporate.',
                link: '/advisory',
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.link}
                className="bg-white/18 backdrop-blur-xl border border-white/25 rounded-[24px] p-5 text-left group hover:bg-white/30 transition-all duration-500"
              >
                <div className="text-[9px] tracking-[0.25em] uppercase text-[#0B1F3A]/55 font-semibold mb-1">
                  {s.title}
                </div>
                <div className="text-[11px] text-slate-700 font-light mb-1">{s.desc}</div>
                <div className="text-lg font-extrabold text-[#0B1F3A] tabular-nums tracking-tight">{s.price}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Wave → Navy Void */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES — Navy Void Section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B1F3A] py-28 lg:py-36 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Specialized services{' '}
              <span className="gradient-text">we offer</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#B0C4DE] text-lg font-light leading-relaxed">
              End-to-end tax, compliance, and registration support for individuals and businesses — supervised by qualified Chartered Accountants.
            </p>
          </div>

          {/* Service grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '📊', title: 'Income Tax Returns', link: '/compliance/income-tax-return-filing' },
              { icon: '🧾', title: 'GST Returns', link: '/compliance/gst-return-filing' },
              { icon: '🏢', title: 'MCA (ROC) Returns', link: '/compliance/roc-compliance' },
              { icon: '📈', title: 'Project Report', link: '/contact' },
              { icon: '🔐', title: 'Digital Signature Certificate', link: '/contact' },
              { icon: '™️', title: 'Trademark Registration', link: '/registration/trademark-registration' },
              { icon: '🏭', title: 'Company Registration', link: '/registration/company-registration' },
              { icon: '💼', title: 'Business Advisory', link: '/advisory' },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.link}
                className="glass-dark rounded-[32px] p-8 text-center group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
                <div className="text-white font-semibold tracking-wide text-base">
                  {s.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Wave → White */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,80 C360,0 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT — White Section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-28 lg:py-36 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center bg-[#C9A84C]/[0.1] rounded-full px-5 py-1.5 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">
                About Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A]">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          {/* Body */}
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-[#3D5A80] mb-24">
            <p>
              <span className="font-bold text-[#0B1F3A]">AnyTax.in</span> was founded in{' '}
              <span className="text-[#C9A84C] font-semibold">2020</span> by a qualified Chartered Accountant with over a decade of professional experience since{' '}
              <span className="text-[#C9A84C] font-semibold">2011</span>. Built on the belief that every Indian taxpayer — individual or business — deserves access to accurate, professional, and affordable tax services, we leverage technology to eliminate complexity and deliver peace of mind.
            </p>
            <p>
              With <span className="font-semibold text-[#0B1F3A]">50+ expert associates</span> and a presence across Bihar, Delhi &amp; NCR, Telangana, Jharkhand, and Odisha, we bring national capability with local understanding.
            </p>
          </div>

          {/* Presence + Understanding */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-[#FDFBF6] rounded-[32px] p-8 lg:p-10 border border-[#E2DFD6]">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">
                Our Presence
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Bihar',
                  'Delhi & NCR',
                  'Telangana',
                  'Jharkhand',
                  'Odisha',
                ].map((city, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    <span className="text-sm text-[#3D5A80] font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FDFBF6] rounded-[32px] p-8 lg:p-10 border border-[#E2DFD6] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                Radical transparency, client education
              </h3>
              <p className="text-[#3D5A80] leading-relaxed">
                We explain not just what we are doing, but why — so you understand your tax position and can decide with confidence. Upfront communication on scope, timelines, and fees.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '1000+', label: 'Clients Served' },
              { number: '10K+', label: 'Feedback' },
              { number: '50+', label: 'Associates' },
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-[#FDFBF6] rounded-[32px] p-10 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="text-6xl lg:text-7xl font-extrabold gradient-text mb-4 group-hover:scale-105 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-[#3D5A80] tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave → Navy */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — Navy Void Section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0B1F3A] py-28 lg:py-36 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">
                What Our Clients Say
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
              1,000+ satisfied clients{' '}
              <span className="gradient-text">across India</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Shiva Krishna',
                role: 'Proprietor',
                content:
                  'Income Tax return filing done in no time. The return was done in no time and pure professionally. I like the way anytax work.',
                rating: 5,
              },
              {
                name: 'Rajesh Kumar',
                role: 'Employee',
                content:
                  "Filing of GST returns in time was not that easy before. GST return filing even to this date is not easy. Thanks to anytax, we don't have to bother about that now.",
                rating: 5,
              },
              {
                name: 'Vinod Kumar',
                role: 'Director at Kunj Vihar Builders Pvt Ltd',
                content:
                  'Real time accounting provides us with critical insight into our business. We have been using services of anytax for 2 years now. I must say that has changed the way we do business.',
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="glass-dark rounded-[32px] p-8 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-[#C9A84C] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#B0C4DE] font-light leading-relaxed mb-8 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C964] flex items-center justify-center text-[#0B1F3A] font-bold text-lg shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-sm text-[#7A8FA6]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave → Gold CTA */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#C9A84C" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Gold "Shout" Section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-1.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/70 font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Looking for an{' '}
            <span className="text-white">experienced advisor?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Speak with a CA-led team for registration, compliance, disputes, or advisory. We serve clients online across India with the same rigour as at our NCR and regional offices.
          </p>
          <Link
            href="/contact"
            className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl"
          >
            Get a Free Consultation Today <span className="text-lg leading-none">→</span>
          </Link>
        </div>

        {/* Wave → Navy footer */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER — Navy Void
         ═══════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0B1F3A] px-6 lg:px-10 pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="60" height="60" rx="16" fill="#C9A84C"/>
                  <path d="M15 36 L25 46 L49 18" stroke="#0B1F3A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <line x1="15" y1="52" x2="49" y2="52" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" opacity="0.25"/>
                </svg>
                <div className="flex items-baseline leading-none">
                  <span className="text-xl font-light tracking-[0.04em] lowercase text-white">any</span>
                  <span className="text-xl font-black tracking-tight uppercase text-[#C9A84C]">TAX</span>
                  <span className="text-[10px] font-semibold text-[#C9A84C]/40 ml-0.5">.in</span>
                </div>
              </div>
              <p className="text-sm text-[#7A8FA6] leading-relaxed mb-4">
                CA-led tax, compliance, and registration services online and across Bihar, Delhi &amp; NCR, Telangana, Jharkhand, and Odisha.
              </p>
              <p className="text-sm text-[#7A8FA6]">
                Visit:{' '}
                <a href="https://anytax.in" className="text-[#C9A84C] hover:underline font-medium">
                  www.anytax.in
                </a>
              </p>
            </div>

            {/* Services */}
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#7A8FA6] font-semibold mb-6">
                Services
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Company Registration', link: '/registration/company-registration' },
                  { name: 'LLP Registration', link: '/registration/llp-registration' },
                  { name: 'GST Registration', link: '/registration/gst-registration' },
                  { name: 'MSME Registration', link: '/registration/msme-registration' },
                  { name: 'Income Tax Filing', link: '/compliance/income-tax-return-filing' },
                  { name: 'GST Filing', link: '/compliance/gst-return-filing' },
                  { name: 'ROC Compliance', link: '/compliance/roc-compliance' },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.link}
                    className="block text-sm text-[#B0C4DE] hover:text-[#C9A84C] transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Important Links */}
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#7A8FA6] font-semibold mb-6">
                Important Links
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Income Tax Department', url: 'https://www.incometax.gov.in' },
                  { name: 'GST Portal', url: 'https://www.gst.gov.in' },
                  { name: 'MCA', url: 'https://www.mca.gov.in' },
                  { name: 'Startup India', url: 'https://www.startupindia.gov.in' },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-[#B0C4DE] hover:text-[#C9A84C] transition-colors font-light"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#7A8FA6] font-semibold mb-6">
                Address
              </div>
              <div className="text-sm text-[#B0C4DE] space-y-1.5 mb-6 font-light">
                <p className="font-semibold text-white/80">HQ:</p>
                <p>1212B, Tower-A, Phase-I</p>
                <p>Spectrum @Metro Mall</p>
                <p>Sector-75, Noida, UP-201301</p>
              </div>
              <div className="text-sm text-[#B0C4DE] space-y-1.5 font-light">
                <p className="font-semibold text-white/80">Contact:</p>
                <p>
                  Email:{' '}
                  <a href="mailto:hello@anytax.in" className="text-[#C9A84C] hover:underline font-medium">
                    hello@anytax.in
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+918877777345" className="text-[#C9A84C] hover:underline font-medium">
                    +91 88777 77345
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#1A3558] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#7A8FA6] tracking-wider">
              Copyright @ANYTAX All rights Reserved
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pill-btn bg-[#122B4A] text-[#B0C4DE] hover:text-white text-xs px-6 py-2.5 border border-[#1A3558] hover:border-[#C9A84C] flex items-center gap-2"
            >
              Back to top <span>↑</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
