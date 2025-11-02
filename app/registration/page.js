'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function RegistrationPage() {
  const registrationServices = [
    {
      title: "Company Registration",
      icon: "🏢",
      description: "Register your Private Limited or Public Limited Company with complete legal compliance. Get expert guidance on documentation, director appointments, and MCA filing.",
      price: "Starting from ₹999/-",
      link: "/company-registration",
      features: [
        "Name availability check",
        "Digital Signature Certificate (DSC)",
        "Director Identification Number (DIN)",
        "MCA approval and filing",
        "Certificate of Incorporation",
        "PAN & TAN registration"
      ]
    },
    {
      title: "LLP Registration",
      icon: "🤝",
      description: "Limited Liability Partnership registration offering flexibility of partnership with benefits of limited liability. Ideal for professionals and small businesses.",
      price: "Starting from ₹999/-",
      link: "/llp-registration",
      features: [
        "LLP name reservation",
        "DPIN for designated partners",
        "LLP Agreement drafting",
        "MCA filing and approval",
        "Certificate of Incorporation",
        "PAN & TAN for LLP"
      ]
    },
    {
      title: "Partnership Registration",
      icon: "👥",
      description: "Register your partnership firm with proper legal documentation. Partnership deed preparation and registration services for traditional business partnerships.",
      price: "Starting from ₹999/-",
      link: "/partnership-registration",
      features: [
        "Partnership deed drafting",
        "Deed registration",
        "PAN application",
        "Bank account setup assistance",
        "Legal compliance guidance",
        "Partner agreement formalization"
      ]
    },
    {
      title: "Proprietor Registration",
      icon: "👤",
      description: "Start your sole proprietorship business with minimal compliance. Perfect for individual entrepreneurs looking to start their business journey.",
      price: "Starting from ₹499/-",
      link: "/proprietor-registration",
      features: [
        "PAN card application",
        "Shop & Establishment license",
        "MSME/Udyam registration",
        "GST registration (if required)",
        "Bank account guidance",
        "Business setup consultation"
      ]
    },
    {
      title: "GST Registration",
      icon: "📋",
      description: "Complete GST registration services for all business types. Get your GSTIN within 3-7 working days with expert assistance on documentation.",
      price: "Starting from ₹499/-",
      link: "/gst-registration",
      features: [
        "GST number application",
        "Document verification",
        "Online application filing",
        "GSTIN certificate",
        "GST compliance guidance",
        "Regular & Composition scheme"
      ]
    },
    {
      title: "NGO Registration",
      icon: "🤲",
      description: "Register your Trust, Society, or Section 8 Company for non-profit activities. Complete documentation and legal compliance for charitable organizations.",
      price: "Starting from ₹999/-",
      link: "/ngo-registration",
      features: [
        "Trust deed preparation",
        "Society registration",
        "Section 8 Company setup",
        "12A & 80G registration",
        "FCRA registration support",
        "CSR compliance"
      ]
    },
    {
      title: "MSME Registration",
      icon: "🏭",
      description: "Udyam Registration for Micro, Small and Medium Enterprises. Avail government benefits, subsidies, and easier access to credit facilities.",
      price: "Starting from ₹499/-",
      link: "/msme-registration",
      features: [
        "Udyam registration certificate",
        "Aadhaar-based registration",
        "Government benefits access",
        "Credit facility benefits",
        "Subsidy scheme eligibility",
        "Priority sector lending"
      ]
    },
    {
      title: "Trade Mark Registration",
      icon: "™️",
      description: "Protect your brand identity with trademark registration. Complete trademark search, application, and registration services with legal protection.",
      price: "Starting from ₹999/-",
      link: "/trademark-registration",
      features: [
        "Trademark search & analysis",
        "Application filing",
        "Objection handling",
        "Registration certificate",
        "10-year validity",
        "Renewal services"
      ]
    },
    {
      title: "FSSAI Registration",
      icon: "🍽️",
      description: "Food license registration for manufacturers, traders, and restaurants. Get Basic, State, or Central FSSAI license based on your business requirements.",
      price: "Starting from ₹999/-",
      link: "/fssai-registration",
      features: [
        "Basic FSSAI license",
        "State license",
        "Central license",
        "Documentation support",
        "Annual renewal",
        "Compliance guidance"
      ]
    },
    {
      title: "Import-Export Code (IEC)",
      icon: "🌍",
      description: "IEC registration for businesses engaged in import-export activities. Mandatory 10-digit code for international trade operations.",
      price: "Starting from ₹999/-",
      link: "/import-export-code",
      features: [
        "IEC code application",
        "DGFT portal registration",
        "Lifetime validity",
        "No renewal required",
        "Digital certificate",
        "International trade enablement"
      ]
    },
    {
      title: "Professional Tax Registration",
      icon: "💼",
      description: "Professional Tax registration as per state regulations. Compliance with state tax authorities for businesses and professionals.",
      price: "Starting from ₹499/-",
      link: "/professional-tax-registration",
      features: [
        "PT registration certificate",
        "State-specific compliance",
        "Employer registration",
        "Monthly/Annual filing setup",
        "Challan generation support",
        "Penalty avoidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--text-primary)'}}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12" style={{backgroundImage: 'var(--gradient-bg-medium)'}}>
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{color: 'var(--gradient-start)'}}>Services</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            <span className="gradient-text">
              Registration
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Start your business with complete legal compliance. We provide comprehensive registration services for all types of business entities across India.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationServices.map((service, index) => (
              <div key={index} className="group border transition-colors duration-300 p-8 transition-all duration-500" style={{borderColor: 'var(--border-color)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gradient-start)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-2xl font-light tracking-wide mb-4 group-hover:gradient-text transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-sm" style={{color: 'var(--text-tertiary)'}}>
                  {service.description}
                </p>
                <div className="mb-6 p-4 border transition-colors duration-300" style={{borderColor: 'var(--border-color)'}}>
                  <p className="font-light tracking-wide" style={{color: 'var(--gradient-start)'}}>{service.price}</p>
                </div>
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span style={{color: 'var(--gradient-start)'}}>✓</span>
                      <span className="text-sm" style={{color: 'var(--text-tertiary)'}}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href={service.link}
                  className="block w-full text-center px-6 py-4 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 border-t transition-colors duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--surface)'}}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8">
            Ready to <span className="gradient-text">register?</span>
          </h2>
          <p className="text-lg mb-12" style={{color: 'var(--text-secondary)'}}>
            Get expert assistance with complete documentation and hassle-free registration process
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 transition-all duration-500 text-sm tracking-wider uppercase hover:opacity-90 gradient-bg">
            Contact Us Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t transition-colors duration-300 px-6 lg:px-12 py-12" style={{borderColor: 'var(--border-color)'}}>
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-wider" style={{color: 'var(--text-tertiary)'}}>© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
