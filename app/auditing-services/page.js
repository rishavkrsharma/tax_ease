'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function AuditingServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Auditing Services</span>
          </h1>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Professional auditing services by qualified Chartered Accountants. We conduct Income Tax Audit, GST Audit, and Statutory Audit with thorough examination and compliance assurance.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Audit Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {type: "Income Tax Audit", desc: "Section 44AB audit for businesses with turnover above ₹1 crore", who: "Businesses, Professionals"},
                {type: "GST Audit", desc: "GSTR-9C reconciliation statement for turnover above ₹5 crore", who: "GST Registered Businesses"},
                {type: "Statutory Audit", desc: "Mandatory audit for companies under Companies Act, 2013", who: "Private & Public Companies"}
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">{item.type}</h3>
                  <p className="text-gray-700 mb-3 text-sm">{item.desc}</p>
                  <p className="text-xs" style={{color: 'var(--text-tertiary)'}}><span className="font-semibold">For:</span> {item.who}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-1 mb-12">
            <div className="bg-white rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Audit Package</h2>
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">Starting from ₹4,999/-</div>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all">Book Audit</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="" style={{color: 'var(--text-secondary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

