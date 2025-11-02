'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ROCCompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">ROC Compliance Services</span>
          </h1>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            ROC (Registrar of Companies) compliance is mandatory for all companies registered under the Companies Act, 2013. Non-compliance can lead to heavy penalties and prosecution. We ensure your company meets all MCA requirements on time.
          </p>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual Compliance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {form: "AOC-4", desc: "Financial statements filing", due: "Within 30 days of AGM"},
                {form: "MGT-7", desc: "Annual return filing", due: "Within 60 days of AGM"},
                {form: "DIR-3 KYC", desc: "Director KYC", due: "30th September annually"},
                {form: "ADT-1", desc: "Auditor appointment", due: "Within 15 days"},
                {form: "DPT-3", desc: "Return of deposits", due: "30th June annually"},
                {form: "MGT-14", desc: "Resolutions filing", due: "Within 30 days"}
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">{item.form}</h3>
                  <p className="text-gray-700 mb-2">{item.desc}</p>
                  <p className="text-sm" style={{color: 'var(--text-tertiary)'}}><span className="font-semibold">Due:</span> {item.due}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-1 mb-12">
            <div className="bg-white rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ROC Compliance Package</h2>
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">Starting from ₹999/-</div>
              <Link href="/contact" className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all">Get Started</Link>
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

