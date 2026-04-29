'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationData = {
  registration: {
    title: 'Registration',
    icon: '🏢',
    items: [
      { name: 'Company Registration', slug: 'company-registration' },
      { name: 'LLP Registration', slug: 'llp-registration' },
      { name: 'Partnership Registration', slug: 'partnership-registration' },
      { name: 'Proprietor Registration', slug: 'proprietor-registration' },
      { name: 'GST Registration', slug: 'gst-registration' },
      { name: 'NGO Registration', slug: 'ngo-registration' },
      { name: 'MSME Registration', slug: 'msme-registration' },
      { name: 'Trade Mark Registration', slug: 'trademark-registration' },
      { name: 'FSSAI Registration', slug: 'fssai-registration' },
      { name: 'Import-Export Code (IEC)', slug: 'import-export-code' },
      { name: 'Professional Tax Registration', slug: 'professional-tax-registration' },
    ],
  },
  compliance: {
    title: 'Compliance',
    icon: '📋',
    items: [
      { name: 'Income Tax Return Filing', slug: 'income-tax-return-filing' },
      { name: 'GST Return Filing', slug: 'gst-return-filing' },
      { name: 'ROC Compliance', slug: 'roc-compliance' },
      { name: 'Secretarial Compliance', slug: 'secretarial-compliance' },
      { name: 'Book-Keeping / Accounting', slug: 'bookkeeping-accounting' },
      { name: 'Auditing Services', slug: 'auditing-services' },
      { name: 'TDS / TCS Return Filing', slug: 'tds-tcs-filing' },
      { name: 'PF Return Filing', slug: 'pf-filing' },
      { name: 'Customs & Import-Export', slug: 'customs-import-export-compliance' },
    ],
  },
  litigation: {
    title: 'Litigation & Disputes',
    icon: '⚖️',
    items: [
      { name: 'Income Tax Disputes', slug: 'income-tax-disputes' },
      { name: 'GST Disputes', slug: 'gst-disputes' },
      { name: 'Custom & Excise Disputes', slug: 'customs-disputes' },
      { name: 'TDS / TCS Disputes', slug: 'tds-tcs-disputes' },
      { name: 'NCLT Matters', slug: 'nclt-matters' },
      { name: 'International Tax Disputes', slug: 'international-tax-disputes' },
      { name: 'Tax Recovery & Stay', slug: 'tax-recovery-stay' },
      { name: 'Courts & Tribunals', slug: 'court-representation' },
    ],
  },
  advisory: {
    title: 'Advisory',
    icon: '💡',
    items: [
      { name: 'Tax Planning & Optimization', slug: 'tax-planning-optimization' },
      { name: 'International Taxation', slug: 'international-taxation' },
      { name: 'Transfer Pricing', slug: 'transfer-pricing' },
      { name: 'Corporate Tax Advisory', slug: 'corporate-tax-advisory' },
      { name: 'GST Advisory', slug: 'gst-advisory' },
    ],
  },
};

export default function SubpageSidebar() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const category = segments[0];
  const currentSlug = segments[1] || '';

  const data = navigationData[category];
  if (!data) return null;

  return (
    <>
      {/* ── Mobile: horizontal pill navigation ── */}
      <div className="lg:hidden overflow-x-auto bg-[#FDFBF6] border-b border-[#E2DFD6]">
        <div className="flex gap-2 px-4 py-3 min-w-max">
          {data.items.map((item, idx) => {
            const isActive = currentSlug === item.slug;
            return (
              <Link
                key={idx}
                href={`/${category}/${item.slug}`}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-[#C9A84C] text-white'
                    : 'bg-white text-[#3D5A80] border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:text-[#0B1F3A]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Desktop: sticky sidebar ── */}
      <aside className="hidden lg:block w-[280px] flex-shrink-0 self-start sticky top-28 py-10 pl-6 pr-3">
        <div>
          <div className="bg-[#0B1F3A] rounded-t-xl px-5 py-3.5 flex items-center gap-2.5">
            <span className="text-base">{data.icon}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">{data.title}</span>
          </div>
          <nav className="bg-[#FDFBF6] rounded-b-xl border border-t-0 border-[#E2DFD6] py-1 max-h-[calc(100vh-10rem)] overflow-y-auto">
            {data.items.map((item, idx) => {
              const isActive = currentSlug === item.slug;
              return (
                <Link
                  key={idx}
                  href={`/${category}/${item.slug}`}
                  className={`block px-5 py-2.5 text-[13px] border-l-[3px] transition-all duration-200 ${
                    isActive
                      ? 'border-[#C9A84C] text-[#C9A84C] font-semibold bg-[#C9A84C]/[0.06]'
                      : 'border-transparent text-[#3D5A80] hover:text-[#0B1F3A] hover:bg-white/80'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
