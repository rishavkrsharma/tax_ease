'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow only digits, max 10
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: digits });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors({ ...fieldErrors, [name]: '' });
    }
  };

  const validate = () => {
    const errors = {};

    // Name: required
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Phone: 10 digits, must not start with 0
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.length !== 10) {
      errors.phone = 'Phone number must be exactly 10 digits';
    } else if (formData.phone.startsWith('0')) {
      errors.phone = 'Phone number should not start with 0';
    } else if (!/^[6-9]/.test(formData.phone)) {
      errors.phone = 'Enter a valid Indian mobile number';
    }

    // Email: required + valid format
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }

    // Message: required
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection.');
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══ SUCCESS POPUP MODAL ═══ */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0B1F3A]/60 backdrop-blur-sm"
            onClick={() => setStatus('idle')}
          />
          {/* Modal */}
          <div className="relative bg-white rounded-[32px] max-w-md w-full p-10 text-center shadow-2xl animate-[popIn_0.35s_ease-out]">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3 tracking-tight">
              Message Sent Successfully!
            </h3>
            <p className="text-[#3D5A80] leading-relaxed mb-2">
              Thank you for reaching out to us. We truly appreciate your interest.
            </p>
            <p className="text-[#7A8FA6] text-sm leading-relaxed mb-8">
              A member of our team will review your inquiry and get back to you at the earliest. We typically respond within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="pill-btn bg-[#0B1F3A] text-white px-10 py-3.5 text-sm tracking-wider uppercase inline-flex items-center gap-2 shadow-xl hover:opacity-90 transition-opacity"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}

      {/* ═══ HERO — Gold Section ═══ */}
      <section className="relative bg-[#C9A84C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-32 lg:pb-40 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/80 font-semibold">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-[#0B1F3A]">Contact</span>{' '}
            <span className="text-white">Us</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-[#0B1F3A]/60 font-light">
            Have a question? Don&apos;t hesitate to reach out. We&apos;re here to help!
          </p>
        </div>

        {/* Wave → White */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══ CONTACT FORM + INFO — White Section ═══ */}
      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-[#0B1F3A] mb-3 tracking-tight">
                  We would love to <span className="gradient-text">hear from you</span>
                </h2>
                <p className="text-[#3D5A80] leading-relaxed">
                  Feel free to reach out if you want to work with us, or simply have a chat about your tax needs.
                </p>
              </div>

              {/* Info Cards */}
              <div className="bg-[#FDFBF6] rounded-[24px] p-6 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🏢</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Headquarters</div>
                </div>
                <p className="text-sm text-[#3D5A80] leading-relaxed">
                  1212B, Tower-A, Phase-I<br />
                  Spectrum @Metro Mall<br />
                  Sector-75, Noida, UP - 201301
                </p>
              </div>

              <div className="bg-[#FDFBF6] rounded-[24px] p-6 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">🏛️</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Branch Office</div>
                </div>
                <p className="text-sm text-[#3D5A80] leading-relaxed">
                  1508, RG Trade Tower<br />
                  Near D-Mall, Netaji Subhash Place<br />
                  Pitampura, Delhi - 110034
                </p>
              </div>

              <div className="bg-[#FDFBF6] rounded-[24px] p-6 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-lg">📞</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">Contact Info</div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#3D5A80]">
                    <span className="text-[#7A8FA6] text-xs">Email:</span><br />
                    <a href="mailto:askanytax@gmail.com" className="text-[#C9A84C] hover:underline font-medium">askanytax@gmail.com</a>
                  </p>
                  <p className="text-sm text-[#3D5A80]">
                    <span className="text-[#7A8FA6] text-xs">Phone:</span><br />
                    <a href="tel:+918877777345" className="text-[#C9A84C] hover:underline font-medium text-lg">+91 88777 77345</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Contact Form (3 cols) */}
            <div className="lg:col-span-3 bg-[#FDFBF6] rounded-[32px] p-8 lg:p-10 border border-[#E2DFD6]">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8 tracking-tight">Send us a message</h3>

              {/* Error Message */}
              {status === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✕</span>
                  <div>
                    <p className="text-red-800 font-semibold text-sm">Failed to send message</p>
                    <p className="text-red-600 text-xs mt-1">{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#7A8FA6] font-semibold mb-2">Your Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3.5 rounded-2xl border bg-white text-[#0B1F3A] outline-none focus:ring-2 transition-all text-sm ${
                        fieldErrors.name
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                          : 'border-[#E2DFD6] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20'
                      }`}
                      placeholder="Enter your name"
                    />
                    {fieldErrors.name && <p className="text-red-500 text-xs mt-1.5 pl-1">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#7A8FA6] font-semibold mb-2">Phone Number <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-[#7A8FA6] font-medium select-none">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        inputMode="numeric"
                        className={`w-full pl-14 pr-5 py-3.5 rounded-2xl border bg-white text-[#0B1F3A] outline-none focus:ring-2 transition-all text-sm ${
                          fieldErrors.phone
                            ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                            : 'border-[#E2DFD6] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20'
                        }`}
                        placeholder="98XXXXXXXX"
                      />
                    </div>
                    {fieldErrors.phone && <p className="text-red-500 text-xs mt-1.5 pl-1">{fieldErrors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7A8FA6] font-semibold mb-2">Email Address <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 rounded-2xl border bg-white text-[#0B1F3A] outline-none focus:ring-2 transition-all text-sm ${
                      fieldErrors.email
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                        : 'border-[#E2DFD6] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20'
                    }`}
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && <p className="text-red-500 text-xs mt-1.5 pl-1">{fieldErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7A8FA6] font-semibold mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl border border-[#E2DFD6] bg-white text-[#0B1F3A] outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Company Registration">Company Registration</option>
                    <option value="GST Registration">GST Registration</option>
                    <option value="Income Tax Filing">Income Tax Filing</option>
                    <option value="GST Return Filing">GST Return Filing</option>
                    <option value="Tax Planning">Tax Planning</option>
                    <option value="Litigation & Disputes">Litigation & Disputes</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7A8FA6] font-semibold mb-2">Message <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-5 py-3.5 rounded-2xl border bg-white text-[#0B1F3A] outline-none focus:ring-2 transition-all text-sm resize-none ${
                      fieldErrors.message
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                        : 'border-[#E2DFD6] focus:border-[#C9A84C] focus:ring-[#C9A84C]/20'
                    }`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {fieldErrors.message && <p className="text-red-500 text-xs mt-1.5 pl-1">{fieldErrors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`pill-btn w-full bg-[#0B1F3A] text-white py-4 text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl transition-opacity ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <span className="text-lg leading-none">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Wave → Navy */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,40 C480,120 960,10 1440,60 L1440,120 L0,120 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICE CARDS — Navy Section ═══ */}
      <section className="relative bg-[#0B1F3A] py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-[#C9A84C]/15 rounded-full px-5 py-1.5 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold">
                Quick Access
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">
              Looking for <span className="gradient-text">something specific?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Registration', link: '/registration', icon: '📋', desc: 'Start your business journey' },
              { name: 'Compliance', link: '/compliance', icon: '✅', desc: 'Stay compliant with ease' },
              { name: 'Litigation', link: '/litigation', icon: '⚖️', desc: 'Expert dispute resolution' },
              { name: 'Advisory', link: '/advisory', icon: '💡', desc: 'Strategic tax planning' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className="glass-dark rounded-[32px] p-8 text-center group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <div className="text-lg font-semibold text-white tracking-wide mb-1">{service.name}</div>
                <div className="text-xs text-[#7A8FA6]">{service.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Wave → Navy footer */}
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
