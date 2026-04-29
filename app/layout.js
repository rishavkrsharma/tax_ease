import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "./components/WhatsAppWidget";
import JsonLd from "./components/JsonLd";
import { SITE_URL } from "../lib/page-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AnyTax.in",
  url: SITE_URL,
  description:
    "CA-led tax filing, business registration, GST, compliance, litigation, and advisory services online across India.",
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1212B, Tower-A, Phase-I, Spectrum @Metro Mall, Sector-75",
    addressLocality: "Noida",
    addressRegion: "UP",
    postalCode: "201301",
    addressCountry: "IN",
  },
  email: "askanytax@gmail.com",
  telephone: "+91-8877777345",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AnyTax.in — CA-Led Tax Filing & Business Registration India",
  description:
    "Online CA services for income tax return filing, GST registration and returns, company & LLP registration, ROC compliance, disputes, and advisory — transparent and affordable.",
  icons: {
    icon: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <JsonLd data={organizationJsonLd} />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
