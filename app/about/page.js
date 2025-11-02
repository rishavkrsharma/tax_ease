'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>About Us</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            Our <span className="gradient-text">Journey</span>
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-12 text-lg leading-relaxed mb-32" style={{color: 'var(--text-secondary)'}}>
            <p className="text-2xl font-light" style={{color: 'var(--text-secondary)'}}>
              <span style={{color: 'var(--text-primary)'}}>ANYTAX.IN</span> is a technology-driven online platform dedicated to simplifying tax and financial services for individuals and businesses.
            </p>
            <p>
              Established in <span className="font-light" style={{color: 'var(--gradient-start)'}}>2020</span> by a qualified Chartered Accountant, the company was born out of a long-standing vision that took root back in <span style={{color: 'var(--gradient-start)'}}>2011</span> when the founder first earned his CA certification. Over the years, he nurtured the ambition to create a venture that could revolutionize tax solutions, but personal and social commitments delayed its launch.
            </p>
            <p>
              However, as the saying goes, <span className="italic" style={{color: 'var(--text-secondary)'}}>"better late than never,"</span> the opportunity finally arose, and ANYTAX.IN was brought to life.
            </p>
          </div>

        <div className="mb-32 p-16 border transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
          <h2 className="text-4xl font-light mb-8 tracking-tight">
            The <span className="gradient-text">Challenge</span>
          </h2>
            <div className="space-y-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              <p>
                Navigating the Indian tax system has always been a daunting challenge due to its intricate and ever-evolving nature. Frequent regulatory updates, countless legal precedents, and complex case laws make it difficult for taxpayers to stay compliant.
              </p>
              <p>
                To make matters worse, many unqualified tax consultants claim expertise but often commit careless errors, leading to serious repercussions. In such scenarios, it is ultimately the taxpayer—whether an individual or a business—who suffers the consequences of these mistakes.
              </p>
              <p className="text-lg font-light" style={{color: 'var(--text-primary)'}}>
                ANYTAX.IN was created to provide a reliable, professional, and tech-enabled solution to these challenges, ensuring accuracy and peace of mind for its clients.
              </p>
            </div>
          </div>

          <div className="mb-32">
            <h2 className="text-4xl font-light mb-12 tracking-tight text-center">
              Our <span className="gradient-text">Presence</span>
            </h2>
            <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-4">
              {['New Delhi', 'Noida', 'Ranchi', 'Patna', 'Dhanbad', 'Begusarai', 'Telangana'].map((city, idx) => (
              <div 
                key={idx} 
                className="p-6 border transition-all duration-500 text-center" 
                style={{borderColor: 'var(--border-color)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div className="text-3xl mb-3">📍</div>
                <div className="text-sm tracking-wider">{city}</div>
              </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center mb-32">
            {[
              { number: "1000+", label: "Clients Served" },
              { number: "10K+", label: "Feedback" },
              { number: "50+", label: "Associates" }
            ].map((stat, idx) => (
              <div key={idx} className="group">
              <div className="text-7xl font-light mb-4 gradient-text group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </div>
                <div className="text-xl tracking-wider" style={{color: 'var(--text-secondary)'}}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Professional", icon: "💼", desc: "Qualified experts with years of experience delivering services with the highest standards" },
              { title: "Adorable", icon: "❤️", desc: "Client-centric approach with personalized attention and customized solutions" },
              { title: "Reliable", icon: "🛡️", desc: "Dependable services with accuracy, timely delivery, and complete transparency" }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="p-8 border transition-all duration-500 text-center group" 
                style={{borderColor: 'var(--border-color)'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h3 className="text-2xl font-light mb-4 tracking-wide" style={{color: 'var(--text-primary)'}}>{value.title}</h3>
                <p className="leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-12">
            Join <span className="gradient-text">1000+</span> Satisfied Clients
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase group hover:opacity-90 gradient-bg text-white">
            Get Started Today
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      <footer className="border-t px-6 lg:px-12 py-12 transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved | Established 2020</p>
        </div>
      </footer>
    </div>
  );
}
