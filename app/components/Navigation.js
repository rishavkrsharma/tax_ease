'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const navigationItems = [
    {
      title: 'Registration',
      link: '/registration',
      items: [
        { name: 'Company Registration', link: '/registration/company-registration' },
        { name: 'LLP Registration', link: '/registration/llp-registration' },
        { name: 'Partnership Registration', link: '/registration/partnership-registration' },
        { name: 'Proprietor Registration', link: '/registration/proprietor-registration' },
        { name: 'GST Registration', link: '/registration/gst-registration' },
        { name: 'NGO Registration', link: '/registration/ngo-registration' },
        { name: 'MSME Registration', link: '/registration/msme-registration' },
        { name: 'Trade Mark Registration', link: '/registration/trademark-registration' },
        { name: 'FSSAI Registration', link: '/registration/fssai-registration' },
        { name: 'Import-Export Code (IEC)', link: '/registration/import-export-code' },
        { name: 'Professional Tax Registration', link: '/registration/professional-tax-registration' },
      ],
    },
    {
      title: 'Compliance',
      link: '/compliance',
      items: [
        { name: 'Income Tax Return Filing', link: '/compliance/income-tax-return-filing' },
        { name: 'GST Return Filing', link: '/compliance/gst-return-filing' },
        { name: 'ROC Compliance', link: '/compliance/roc-compliance' },
        { name: 'Secretarial Compliance', link: '/compliance/secretarial-compliance' },
        { name: 'Book-Keeping / Accounting', link: '/compliance/bookkeeping-accounting' },
        { name: 'Auditing Services', link: '/compliance/auditing-services' },
        { name: 'TDS / TCS Return Filing', link: '/compliance/tds-tcs-filing' },
        { name: 'PF Return Filing', link: '/compliance/pf-filing' },
        { name: 'Customs & Import-Export Compliance', link: '/compliance/customs-import-export-compliance' },
      ],
    },
    {
      title: 'Litigation & Disputes',
      link: '/litigation',
      items: [
        { name: 'Income Tax Notices & Disputes', link: '/litigation/income-tax-disputes' },
        { name: 'GST Notices & Disputes', link: '/litigation/gst-disputes' },
        { name: 'Custom & Excise Notices & Disputes', link: '/litigation/customs-disputes' },
        { name: 'TDS / TCS Notices & Disputes', link: '/litigation/tds-tcs-disputes' },
        { name: 'NCLT Matters', link: '/litigation/nclt-matters' },
        { name: 'International Tax Disputes', link: '/litigation/international-tax-disputes' },
        { name: 'Tax Recovery & Stay Applications', link: '/litigation/tax-recovery-stay' },
        { name: 'Representation in Courts & Tribunals', link: '/litigation/court-representation' },
      ],
    },
    {
      title: 'Advisory',
      link: '/advisory',
      items: [
        { name: 'Tax Planning & Optimization', link: '/advisory/tax-planning-optimization' },
        { name: 'International Taxation', link: '/advisory/international-taxation' },
        { name: 'Transfer Pricing', link: '/advisory/transfer-pricing' },
        { name: 'Corporate Tax Advisory', link: '/advisory/corporate-tax-advisory' },
        { name: 'GST Advisory', link: '/advisory/gst-advisory' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg backdrop-blur-2xl' : 'backdrop-blur-md'
      }`}
      style={{
        backgroundColor: scrolled
          ? 'var(--nav-bg-scrolled)'
          : 'var(--nav-bg)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Icon: checkmark sweeping upward (compliance ✓ + growth ↑) + ledger line */}
            <svg className="w-10 h-10 flex-shrink-0 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="60" height="60" rx="16" fill="#0B1F3A"/>
              <path d="M15 36 L25 46 L49 18" stroke="#C9A84C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <line x1="15" y1="52" x2="49" y2="52" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
            </svg>
            {/* Wordmark: "any" light = breadth, "TAX" black = expertise */}
            <div className="flex items-baseline leading-none">
              <span className="text-[22px] font-light tracking-[0.04em] lowercase" style={{ color: 'var(--text-primary)' }}>any</span>
              <span className="text-[22px] font-black tracking-tight uppercase text-[#C9A84C]">TAX</span>
              <span className="text-[11px] font-semibold text-[#C9A84C]/50 ml-0.5">.in</span>
            </div>
          </Link>

          {/* ─── Desktop Menu ─── */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((nav, index) => (
              <div
                key={index}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDropdown(nav.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={nav.link}
                  className="px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#C9A84C]/[0.08] hover:text-[#0B1F3A]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {nav.title}
                </Link>

                {/* Dropdown */}
                {openDropdown === nav.title && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                    <div
                      className="rounded-[20px] shadow-2xl overflow-hidden py-2 backdrop-blur-2xl"
                      style={{
                        backgroundColor: 'var(--dropdown-bg)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      {nav.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.link}
                          className="block px-5 py-2.5 text-[13px] font-medium transition-all duration-200 hover:bg-[#C9A84C]/[0.07] hover:text-[#0B1F3A] hover:pl-6"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/about"
              className="px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-200 hover:bg-[#C9A84C]/[0.08] hover:text-[#0B1F3A]"
              style={{ color: 'var(--text-secondary)' }}
            >
              About
            </Link>

            <div className="w-px h-5 mx-2" style={{ backgroundColor: 'var(--border-color)' }} />

            <Link
              href="/contact"
              className="pill-btn bg-[#C9A84C] text-[#0B1F3A] text-[13px] px-7 py-2.5 shadow-xl"
            >
              Contact Us
            </Link>
          </div>

          {/* ─── Mobile hamburger ─── */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/contact"
              className="pill-btn bg-[#C9A84C] text-[#0B1F3A] text-xs px-5 py-2 shadow-lg"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full transition-colors"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      {isMenuOpen && (
        <div
          className="lg:hidden backdrop-blur-2xl border-t"
          style={{
            backgroundColor: 'var(--dropdown-bg)',
            borderColor: 'var(--border-color)',
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 py-6 space-y-1 max-h-[70vh] overflow-y-auto">
            {navigationItems.map((nav, index) => (
              <div key={index}>
                <button
                  className="w-full text-left text-[15px] font-medium py-3 px-4 rounded-2xl flex items-center justify-between transition-colors hover:bg-[#C9A84C]/[0.07]"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() =>
                    setOpenDropdown(openDropdown === nav.title ? null : nav.title)
                  }
                >
                  {nav.title}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openDropdown === nav.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openDropdown === nav.title && (
                  <div className="ml-4 mb-2 space-y-0.5 border-l-2 border-[#C9A84C]/25 pl-4">
                    {nav.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        className="block text-[13px] py-2 transition-colors hover:text-[#C9A84C]"
                        style={{ color: 'var(--text-secondary)' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/about"
              className="block text-[15px] font-medium py-3 px-4 rounded-2xl transition-colors hover:bg-[#C9A84C]/[0.07]"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
