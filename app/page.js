'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navigationItems = [
    {
      title: 'Registration',
      items: [
        { name: 'Company Registration', link: '/company-registration' },
        { name: 'LLP Registration', link: '/llp-registration' },
        { name: 'Partnership Registration', link: '/partnership-registration' },
        { name: 'Proprietor Registration', link: '/proprietor-registration' },
        { name: 'GST Registration', link: '/gst-registration' },
        { name: 'NGO Registration', link: '/ngo-registration' },
        { name: 'MSME Registration', link: '/msme-registration' },
        { name: 'Trade Mark Registration', link: '/trademark-registration' },
        { name: 'FSSAI Registration', link: '/fssai-registration' },
        { name: 'Import-Export Code (IEC)', link: '/import-export-code' },
        { name: 'Professional Tax Registration', link: '/professional-tax-registration' }
      ]
    },
    {
      title: 'Compliance',
      items: [
        { name: 'Income Tax Return Filing', link: '/income-tax-return-filing' },
        { name: 'GST Return Filing', link: '/gst-return-filing' },
        { name: 'ROC Compliance', link: '/roc-compliance' },
        { name: 'Secretarial Compliance', link: '/secretarial-compliance' },
        { name: 'Book-Keeping / Accounting', link: '/bookkeeping-accounting' },
        { name: 'Auditing Services', link: '/auditing-services' },
        { name: 'TDS / TCS Return Filing', link: '/tds-tcs-filing' },
        { name: 'PF Return Filing', link: '/pf-filing' },
        { name: 'Customs & Import-Export Compliance', link: '/customs-import-export-compliance' }
      ]
    },
    {
      title: 'Litigation & Disputes',
      items: [
        { name: 'Income Tax Notices & Disputes', link: '/income-tax-disputes' },
        { name: 'GST Notices & Disputes', link: '/gst-disputes' },
        { name: 'Custom & Excise Notices & Disputes', link: '/customs-disputes' },
        { name: 'TDS / TCS Notices & Disputes', link: '/tds-tcs-disputes' },
        { name: 'NCLT Matters', link: '/nclt-matters' },
        { name: 'International Tax Disputes', link: '/international-tax-disputes' },
        { name: 'Tax Recovery & Stay Applications', link: '/tax-recovery-stay' },
        { name: 'Representation in Courts & Tribunals', link: '/court-representation' }
      ]
    },
    {
      title: 'Advisory',
      items: [
        { name: 'Tax Planning & Optimization', link: '/tax-planning-optimization' },
        { name: 'International Taxation', link: '/international-taxation' },
        { name: 'Transfer Pricing', link: '/transfer-pricing' },
        { name: 'Corporate Tax Advisory', link: '/corporate-tax-advisory' },
        { name: 'GST Advisory', link: '/gst-advisory' }
      ]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-xl ${scrolled ? 'shadow-2xl' : ''}`} style={{backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent'}}>
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="group">
              <div className="text-3xl font-light tracking-wider">
                <span className="gradient-text">ANY</span>
                <span className="group-hover:opacity-80 transition-opacity duration-300" style={{color: 'var(--text-primary)'}}>TAX</span>
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase mt-1" style={{color: 'var(--text-tertiary)'}}>Professional Tax Consultation</div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <Link 
                href="/" 
                className="text-sm tracking-wider transition-colors duration-300" 
                style={{color: 'var(--text-secondary)'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                Home
              </Link>
              {navigationItems.map((nav, index) => (
                <div 
                  key={index}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setOpenDropdown(nav.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link 
                    href={`/${nav.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-sm tracking-wider transition-colors duration-300 cursor-pointer py-6"
                    style={{color: 'var(--text-secondary)'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {nav.title}
                  </Link>
                  {openDropdown === nav.title && (
                    <div className="absolute left-0 top-full pt-2 w-80">
                      <div className="backdrop-blur-xl rounded-sm shadow-2xl overflow-hidden" style={{backgroundColor: 'var(--dropdown-bg)', border: '1px solid var(--border-color)'}}>
                        {nav.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.link}
                            className="block px-6 py-3 text-sm transition-all duration-300 last:border-0"
                            style={{color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)'}}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'linear-gradient(to right, rgba(131, 96, 195, 0.1), rgba(46, 191, 145, 0.1))';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = 'var(--text-secondary)';
                            }}
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
                className="text-sm tracking-wider transition-colors duration-300" 
                style={{color: 'var(--text-secondary)'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                About
              </Link>
              
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                className="text-sm tracking-wider px-4 py-3 rounded-full transition-all duration-300 border"
                style={{borderColor: 'var(--border-color)', color: 'var(--text-secondary)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gradient-start)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
                title="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              
              <Link href="/contact" className="text-sm tracking-wider px-8 py-3 transition-all duration-300 gradient-bg hover:opacity-90 text-white">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="text-2xl"
                title="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{backgroundColor: 'var(--text-primary)'}}></span>
                  <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} style={{backgroundColor: 'var(--text-primary)'}}></span>
                  <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{backgroundColor: 'var(--text-primary)'}}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden backdrop-blur-xl" style={{backgroundColor: 'var(--nav-bg)', borderTop: '1px solid var(--border-color)'}}>
            <div className="max-w-[1800px] mx-auto px-6 py-8 space-y-6">
              <Link 
                href="/" 
                className="block text-lg transition-colors" 
                style={{color: 'var(--text-secondary)'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                Home
              </Link>
              {navigationItems.map((nav, index) => (
                <div key={index}>
                  <button 
                    className="w-full text-left text-lg transition-colors flex items-center justify-between"
                    style={{color: 'var(--text-secondary)'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    onClick={() => setOpenDropdown(openDropdown === nav.title ? null : nav.title)}
                  >
                    {nav.title}
                    <span className={`transition-transform duration-300 ${openDropdown === nav.title ? 'rotate-180' : ''}`}>↓</span>
                  </button>
                  {openDropdown === nav.title && (
                    <div className="mt-4 ml-4 space-y-3">
                      {nav.items.map((item, idx) => (
                        <Link 
                          key={idx} 
                          href={item.link} 
                          className="block text-sm transition-colors" 
                          style={{color: 'var(--text-tertiary)'}} 
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
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
                className="block text-lg transition-colors" 
                style={{color: 'var(--text-secondary)'}} 
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                About
              </Link>
              <Link href="/contact" className="block text-lg" style={{color: 'var(--text-primary)'}}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0" style={{backgroundImage: 'var(--gradient-bg-subtle)'}}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(131, 96, 195, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(46, 191, 145, 0.08) 0%, transparent 50%)'
        }}></div>
        
        <div className="max-w-[1400px] mx-auto text-center relative z-10 py-32">
          <div className="mb-8">
            <div className="inline-block">
              <div className="text-[10px] tracking-[0.4em] uppercase mb-4 font-light" style={{color: 'var(--gradient-start)'}}>Professional • Adorable • Reliable</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
            <div className="mb-2">We offer best &</div>
            <div className="gradient-text">
              affordable expert
            </div>
          </h1>

          <p className="text-xl md:text-2xl mb-12 tracking-wide" style={{color: 'var(--text-secondary)'}}>
            For your Tax and Financial Needs
          </p>

          <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-tertiary)'}}>
            Get the financial services and grow your business.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20">
            <Link href="/contact" className="group px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg">
              Get Started
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
            <Link href="/registration" className="px-12 py-5 border transition-all duration-500 text-sm tracking-wider uppercase" style={{borderColor: 'var(--gradient-start)'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'var(--gradient-start)'; e.currentTarget.style.backgroundColor = 'hsla(333, 100%, 53%, 0.1)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'var(--gradient-start)'; e.currentTarget.style.backgroundColor = 'transparent'}}>
              Explore Services
            </Link>
          </div>

          {/* Quick Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { title: "Start Business", price: "INR 999/-*", desc: "Start your business in as low as", link: "/registration" },
              { title: "Maintain Business", price: "499/-*", desc: "Start maintaining your business in as low as", link: "/compliance" },
              { title: "Regulatory Filing", price: "499/-*", desc: "Start filing for your business in as low as", link: "/compliance" },
              { title: "TAX Litigation", price: "999/-*", desc: "Start replying for notices in as low as", link: "/litigation" }
            ].map((service, idx) => (
              <Link 
                key={idx}
                href={service.link}
                className="group p-6 border transition-all duration-500 text-left"
                style={{
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--card-bg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gradient-end)';
                  e.currentTarget.style.backgroundColor = 'var(--card-bg-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                }}
              >
                <div className="text-sm tracking-wider mb-2 uppercase" style={{color: 'var(--text-secondary)'}}>{service.title}</div>
                <div className="text-2xl font-light gradient-text mb-2">
                  {service.price}
                </div>
                <div className="text-xs leading-relaxed" style={{color: 'var(--text-tertiary)'}}>{service.desc}</div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{color: 'var(--gradient-start)'}}>
                  Read More →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-24 text-xs tracking-[0.3em] uppercase animate-bounce" style={{color: 'var(--text-tertiary)'}}>
            Scroll Down ↓
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', background: theme === 'dark' ? 'linear-gradient(to bottom, #000000, #0a0a0a, #000000)' : 'linear-gradient(to bottom, #ffffff, #f9fafb, #ffffff)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-20 text-center">
            <div className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color: 'var(--gradient-start)'}}>Our Expertise</div>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-6">
              Specialized services <span className="gradient-text">we offer</span>
            </h2>
            <p className="max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              We provide Comprehensive tax and related services for individuals and businesses, tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: "📊", title: "Income Tax Returns", link: "/income-tax-return-filing" },
              { icon: "🧾", title: "GST Returns", link: "/gst-return-filing" },
              { icon: "🏢", title: "MCA (ROC) Returns", link: "/roc-compliance" },
              { icon: "📈", title: "Project Report", link: "/contact" },
              { icon: "🔐", title: "Digital Signature Certificate", link: "/contact" },
              { icon: "™️", title: "Trademark Registration", link: "/trademark-registration" },
              { icon: "🏭", title: "Company Registration", link: "/company-registration" },
              { icon: "💼", title: "Business Advisory", link: "/advisory" }
            ].map((service, idx) => (
              <Link 
                key={idx}
                href={service.link}
                className="group p-8 border transition-all duration-500 text-center"
                style={{
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--card-bg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gradient-start)';
                  e.currentTarget.style.backgroundColor = 'var(--card-bg-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <div className="text-lg font-light tracking-wide group-hover:gradient-text transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                  {service.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{
        borderColor: 'var(--border-color)',
        background: theme === 'dark' ? 'linear-gradient(180deg, rgba(39, 39, 42, 0.3) 0%, rgba(0, 0, 0, 1) 100%)' : 'linear-gradient(180deg, rgba(243, 244, 246, 0.5) 0%, rgba(255, 255, 255, 1) 100%)'
      }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <div className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color: 'var(--gradient-start)'}}>About Us</div>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 leading-relaxed text-lg mb-20" style={{color: 'var(--text-secondary)'}}>
            <p>
              <span className="font-light" style={{color: 'var(--text-primary)'}}>ANYTAX.IN</span> is a technology-driven online platform dedicated to simplifying tax and financial services for individuals and businesses. Established in <span style={{color: 'var(--gradient-start)'}}>2020</span> by a qualified Chartered Accountant, the company was born out of a long-standing vision that took root back in 2011 when the founder first earned his CA certification.
            </p>
            <p>
              Navigating the Indian tax system has always been a daunting challenge due to its intricate and ever-evolving nature. Frequent regulatory updates, countless legal precedents, and complex case laws make it difficult for taxpayers to stay compliant. ANYTAX.IN was created to provide a reliable, professional, and tech-enabled solution to these challenges, ensuring accuracy and peace of mind for its clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-light mb-6 tracking-wide">Our Presence</h3>
              <div className="grid grid-cols-2 gap-4">
                {['New Delhi', 'Noida', 'Ranchi', 'Patna', 'Dhanbad', 'Begusarai', 'Telangana'].map((city, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-4 border transition-colors duration-300" 
                    style={{borderColor: 'var(--border-color)'}}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <span style={{color: 'var(--gradient-start)'}}>📍</span>
                    <span style={{color: 'var(--text-secondary)'}}>{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border p-8" style={{borderColor: 'var(--border-color)'}}>
              <h3 className="text-2xl font-light mb-6 tracking-wide" style={{color: 'var(--text-primary)'}}>We always try to understand customers expectation</h3>
              <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                We take the time to listen and understand your unique business needs. Our dedicated team strives to exceed your expectations by delivering customized solutions and exceptional service.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { number: "1000+", label: "Clients Served" },
              { number: "10K+", label: "Feedback" },
              { number: "50+", label: "Associates" }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-6xl lg:text-7xl font-light mb-4 gradient-text group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-xl tracking-wider" style={{color: 'var(--text-secondary)'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-20 text-center">
            <div className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color: 'var(--gradient-start)'}}>Testimonials</div>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight">
              What customers say <span className="gradient-text">about us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Shiva Krishna",
                role: "Proprietor",
                content: "Income Tax return filing done in no time. The return was done in no time and pure professionally. I like the way anytax work.",
                rating: 5
              },
              {
                name: "Rajesh Kumar",
                role: "Employee",
                content: "Filing of GST returns in time was not that easy before. GST return filing even to this date is not easy. Thanks to anytax, we don't have to bother about that now.",
                rating: 5
              },
              {
                name: "Vinod Kumar",
                role: "Director at Kunj Vihar Builders Pvt Ltd",
                content: "Real time accounting provides us with critical insight into our business. We have been using services of anytax for 2 years now. I must say that has changed the way we do business.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="p-8 border transition-all duration-500" 
                style={{
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--card-bg)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-xl" style={{color: 'var(--gradient-start)'}}>★</span>
                  ))}
                </div>
                <p className="mb-8 leading-relaxed italic" style={{color: 'var(--text-secondary)'}}>"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-light text-xl gradient-bg text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-light" style={{color: 'var(--text-primary)'}}>{testimonial.name}</div>
                    <div className="text-sm" style={{color: 'var(--text-tertiary)'}}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundImage: 'var(--gradient-bg-subtle)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-8" style={{color: 'var(--gradient-start)'}}>Get in Touch</div>
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-12 leading-tight">
            Looking for an{' '}
            <span className="gradient-text">
              experienced advisor?
            </span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Our team is here to answer your questions. With a vision to make our services reach the farthest and remotest part of India and provide a link in the growth of our nation. We are always here to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 text-lg hover:gap-6 transition-all duration-500 group"
          >
            <span className="tracking-wider">Get a free Quote</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300" style={{color: 'var(--gradient-start)'}}>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 lg:px-12 py-16 transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-light tracking-wider mb-4">
                <span className="gradient-text">ANY</span>
                <span style={{color: 'var(--text-primary)'}}>TAX</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{color: 'var(--text-tertiary)'}}>
                Technology-driven platform for all your tax and financial needs across India.
              </p>
              <p className="text-sm" style={{color: 'var(--text-tertiary)'}}>
                Visit: <a href="https://anytax.in" className="hover:underline" style={{color: 'var(--gradient-start)'}}>www.anytax.in</a>
              </p>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] uppercase mb-6" style={{color: 'var(--text-tertiary)'}}>Services</div>
              <div className="space-y-3">
                {['Company Registration', 'LLP Registration', 'GST Registration', 'MSME Registration', 'Income Tax Filing', 'GST Filing', 'ROC Compliance'].map((link, idx) => (
                  <Link 
                    key={idx} 
                    href="/registration" 
                    className="block text-sm transition-colors duration-300" 
                    style={{color: 'var(--text-secondary)'}} 
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] uppercase mb-6" style={{color: 'var(--text-tertiary)'}}>Important Links</div>
              <div className="space-y-3">
                {[
                  { name: 'Income Tax Department', url: 'https://www.incometax.gov.in' },
                  { name: 'GST Portal', url: 'https://www.gst.gov.in' },
                  { name: 'MCA', url: 'https://www.mca.gov.in' },
                  { name: 'Startup India', url: 'https://www.startupindia.gov.in' }
                ].map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-sm transition-colors duration-300" 
                    style={{color: 'var(--text-secondary)'}} 
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} 
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] uppercase mb-6" style={{color: 'var(--text-tertiary)'}}>Address</div>
              <div className="text-sm space-y-2 mb-6" style={{color: 'var(--text-secondary)'}}>
                <p className="font-semibold" style={{color: 'var(--text-secondary)'}}>HQ:</p>
                <p>1212B, Tower-A, Phase-I</p>
                <p>Spectrum @Metro Mall</p>
                <p>Sector-75, Noida, UP-201301</p>
              </div>
              <div className="text-sm space-y-2" style={{color: 'var(--text-secondary)'}}>
                <p className="font-semibold" style={{color: 'var(--text-secondary)'}}>Contact:</p>
                <p>Email: <a href="mailto:info@anytax.in" className="hover:underline" style={{color: 'var(--gradient-start)'}}>info@anytax.in</a></p>
                <p>Phone: <a href="tel:+918877777345" className="hover:underline" style={{color: 'var(--gradient-start)'}}>+91 88777 77345</a></p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{borderColor: 'var(--border-color)'}}>
            <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>Copyright @ANYTAX All rights Reserved</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs tracking-wider transition-colors duration-300 flex items-center gap-2"
              style={{color: 'var(--text-secondary)'}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              TOP <span>↑</span>
            </button>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
