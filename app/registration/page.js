'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function RegistrationPage() {
  const registrationServices = [
    {
      title: "Company Registration",
      icon: "🏢",
      description: "Register your Private Limited or Public Limited Company with complete legal compliance.",
      price: "Starting from ₹999/-",
      link: "/registration/company-registration",
      features: ["Name availability check", "Digital Signature Certificate", "Director ID Number (DIN)", "MCA approval and filing", "Certificate of Incorporation", "PAN & TAN registration"]
    },
    {
      title: "LLP Registration",
      icon: "🤝",
      description: "Limited Liability Partnership offering flexibility of partnership with benefits of limited liability.",
      price: "Starting from ₹999/-",
      link: "/registration/llp-registration",
      features: ["LLP name reservation", "DPIN for partners", "LLP Agreement drafting", "MCA filing and approval", "Certificate of Incorporation", "PAN & TAN for LLP"]
    },
    {
      title: "Partnership Registration",
      icon: "👥",
      description: "Register your partnership firm with proper legal documentation and deed preparation.",
      price: "Starting from ₹999/-",
      link: "/registration/partnership-registration",
      features: ["Partnership deed drafting", "Deed registration", "PAN application", "Bank account setup", "Legal compliance", "Partner agreement"]
    },
    {
      title: "Proprietor Registration",
      icon: "👤",
      description: "Start your sole proprietorship business with minimal compliance. Perfect for individuals.",
      price: "Starting from ₹499/-",
      link: "/registration/proprietor-registration",
      features: ["PAN card application", "Shop & Establishment license", "MSME/Udyam registration", "GST registration", "Bank account guidance", "Business consultation"]
    },
    {
      title: "GST Registration",
      icon: "📋",
      description: "Complete GST registration services for all business types. Get your GSTIN within 3-7 days.",
      price: "Starting from ₹499/-",
      link: "/registration/gst-registration",
      features: ["GST number application", "Document verification", "Online application filing", "GSTIN certificate", "GST compliance guidance", "Regular & Composition scheme"]
    },
    {
      title: "NGO Registration",
      icon: "🤲",
      description: "Register your Trust, Society, or Section 8 Company for non-profit charitable activities.",
      price: "Starting from ₹999/-",
      link: "/registration/ngo-registration",
      features: ["Trust deed preparation", "Society registration", "Section 8 Company setup", "12A & 80G registration", "FCRA registration", "CSR compliance"]
    },
    {
      title: "MSME Registration",
      icon: "🏭",
      description: "Udyam Registration for MSMEs. Avail government benefits, subsidies, and credit facilities.",
      price: "Starting from ₹499/-",
      link: "/registration/msme-registration",
      features: ["Udyam registration certificate", "Aadhaar-based registration", "Government benefits access", "Credit facility benefits", "Subsidy scheme eligibility", "Priority sector lending"]
    },
    {
      title: "Trade Mark Registration",
      icon: "™️",
      description: "Protect your brand identity with trademark registration. Complete search and filing services.",
      price: "Starting from ₹999/-",
      link: "/registration/trademark-registration",
      features: ["Trademark search", "Application filing", "Objection handling", "Registration certificate", "10-year validity", "Renewal services"]
    },
    {
      title: "FSSAI Registration",
      icon: "🍽️",
      description: "Food license registration for manufacturers, traders, and restaurants. Basic, State, or Central.",
      price: "Starting from ₹999/-",
      link: "/registration/fssai-registration",
      features: ["Basic FSSAI license", "State license", "Central license", "Documentation support", "Annual renewal", "Compliance guidance"]
    },
    {
      title: "Import-Export Code (IEC)",
      icon: "🌍",
      description: "IEC registration for international trade. Mandatory 10-digit code with lifetime validity.",
      price: "Starting from ₹999/-",
      link: "/registration/import-export-code",
      features: ["IEC code application", "DGFT portal registration", "Lifetime validity", "No renewal required", "Digital certificate", "Trade enablement"]
    },
    {
      title: "Professional Tax Registration",
      icon: "💼",
      description: "Professional Tax registration as per state regulations for businesses and professionals.",
      price: "Starting from ₹499/-",
      link: "/registration/professional-tax-registration",
      features: ["PT registration certificate", "State-specific compliance", "Employer registration", "Monthly/Annual filing", "Challan generation", "Penalty avoidance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ═══ HERO — Gold ═══ */}
      <section className="relative bg-[#C9A84C] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-[#0B1F3A]/[0.06] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-32 lg:pb-40 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8 border border-white/25">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#0B1F3A]/80 font-semibold">Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-[#0B1F3A]">Registration</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#0B1F3A]/60 font-light">
            CA-led incorporation and licences — from Pvt Ltd and LLP to GST, MSME, FSSAI, IEC and professional tax — with clear timelines, document checklists, and filings handled end to end.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,60 C240,120 480,20 720,80 C960,140 1200,20 1440,60 L1440,120 L0,120 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ═══ SERVICES GRID — White ═══ */}
      <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationServices.map((service, index) => (
              <div key={index} className="group bg-[#FDFBF6] rounded-[32px] p-8 border border-[#E2DFD6] hover:border-[#C9A84C]/40 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] tracking-wide mb-3">{service.title}</h3>
                <p className="text-sm text-[#3D5A80] leading-relaxed mb-5">{service.description}</p>
                <div className="mb-5 px-4 py-3 rounded-2xl bg-[#C9A84C]/[0.08] border border-[#C9A84C]/20">
                  <p className="text-sm font-semibold text-[#C9A84C]">{service.price}</p>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-sm text-[#3D5A80]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.link} className="pill-btn block w-full text-center bg-[#0B1F3A] text-white px-6 py-3.5 text-sm tracking-wider uppercase">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px] block">
            <path d="M0,80 C360,10 720,120 1080,40 C1260,0 1380,60 1440,80 L1440,120 L0,120 Z" fill="#C9A84C" />
          </svg>
        </div>
      </section>

      {/* ═══ CTA — Gold ═══ */}
      <section className="relative bg-[#C9A84C] py-28 lg:py-36 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.08] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0B1F3A] mb-6 leading-tight">
            Ready to <span className="text-white">register?</span>
          </h2>
          <p className="text-lg text-[#0B1F3A]/55 font-light mb-12 max-w-2xl mx-auto">
            Get expert assistance with complete documentation and hassle-free registration process.
          </p>
          <Link href="/contact" className="pill-btn bg-[#0B1F3A] text-white px-12 py-5 text-sm uppercase inline-flex items-center gap-3 shadow-2xl">
            Contact Us Now <span className="text-lg leading-none">→</span>
          </Link>
        </div>
        <div className="absolute -bottom-px left-0 right-0 leading-[0]">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] block">
            <path d="M0,30 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#0B1F3A" />
          </svg>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] px-6 lg:px-10 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-xs tracking-wider text-[#7A8FA6]">© ANYTAX.IN - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
