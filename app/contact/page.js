'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function ContactPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Get in Touch</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">Contact</span> Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Have a question? Don't hesitate to reach out. We're here to help!
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
          <h2 className="text-4xl font-light mb-8 tracking-tight">
            We would love to{' '}
            <span className="gradient-text">hear from you</span>
          </h2>
                <p className="leading-relaxed text-lg" style={{color: 'var(--text-secondary)'}}>
                  Feel free to reach out if you want to work with us, or simply have a chat about your tax needs.
                </p>
              </div>

              <div className="space-y-8">
            <div 
              className="p-8 border transition-all duration-500" 
              style={{borderColor: 'var(--border-color)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{color: 'var(--gradient-start)'}}>Headquarters</div>
                  <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                    1212B, Tower-A, Phase-I<br />
                    Spectrum @Metro Mall<br />
                    Sector-75, Noida<br />
                    Uttar Pradesh - 201301
                  </p>
                </div>

                <div 
                  className="p-8 border transition-all duration-500" 
                  style={{borderColor: 'var(--border-color)'}}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{color: 'var(--gradient-start)'}}>Branch Office</div>
                  <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                    1508, RG Trade Tower<br />
                    Near D-Mall, Netaji Subhash Place<br />
                    Pitampura<br />
                    Delhi - 110034
                  </p>
                </div>

                <div 
                  className="p-8 border transition-all duration-500" 
                  style={{borderColor: 'var(--border-color)'}}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} 
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{color: 'var(--gradient-start)'}}>Contact Information</div>
                  <div className="space-y-3" style={{color: 'var(--text-secondary)'}}>
                    <p>
                      <span className="block mb-1 text-sm" style={{color: 'var(--text-tertiary)'}}>Email:</span>
                      <a href="mailto:info@anytax.in" className="hover:underline" style={{color: 'var(--gradient-start)'}}>info@anytax.in</a><br />
                      <a href="mailto:askanytax@gmail.com" className="hover:underline" style={{color: 'var(--gradient-start)'}}>askanytax@gmail.com</a>
                    </p>
                    <p>
                      <span className="block mb-1 text-sm" style={{color: 'var(--text-tertiary)'}}>Phone:</span>
                      <a href="tel:+918877777345" className="hover:underline text-xl" style={{color: 'var(--gradient-start)'}}>+91 88777 77345</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 border transition-colors duration-300" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)'}}>
              <h3 className="text-3xl font-light mb-8 tracking-tight">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm tracking-wider mb-3 uppercase" style={{color: 'var(--text-secondary)'}}>Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 border outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gradient-end)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-wider mb-3 uppercase" style={{color: 'var(--text-secondary)'}}>Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 border outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gradient-end)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-wider mb-3 uppercase" style={{color: 'var(--text-secondary)'}}>Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 border outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gradient-end)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="+91 "
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-wider mb-3 uppercase" style={{color: 'var(--text-secondary)'}}>Service Required</label>
                  <select 
                    className="w-full px-6 py-4 border outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gradient-end)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <option>Select a service</option>
                    <option>Company Registration</option>
                    <option>GST Registration</option>
                    <option>Income Tax Filing</option>
                    <option>GST Return Filing</option>
                    <option>Tax Planning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm tracking-wider mb-3 uppercase" style={{color: 'var(--text-secondary)'}}>Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-6 py-4 border outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--gradient-end)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
            <button
              type="submit"
              className="w-full py-5 transition-all duration-500 text-sm tracking-wider uppercase group flex items-center justify-center gap-3 hover:opacity-90 gradient-bg text-white"
            >
              Send Message
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Looking for <span className="gradient-text">something specific?</span>
          </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Registration", link: "/registration", icon: "📋" },
              { name: "Compliance", link: "/compliance", icon: "✅" },
              { name: "Litigation", link: "/litigation", icon: "⚖️" },
              { name: "Advisory", link: "/advisory", icon: "💡" }
            ].map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              className="p-8 border transition-all duration-500 text-center group"
              style={{borderColor: 'var(--border-color)'}}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <div className="text-lg tracking-wider group-hover:gradient-text transition-colors duration-300">{service.name}</div>
            </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t px-6 lg:px-12 py-12 transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
