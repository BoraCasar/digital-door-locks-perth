import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "#1 Smart Digital Lock Experts | Digital Door Locks Perth",
  description:
    "Trade qualified locksmiths supplying and installing digital door locks to your Perth property. Smart door locks for homes, businesses and Airbnbs. Call 0413 320 222 for a free quote.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Door Locks Perth | Smart Lock Installation",
    description:
      "Perth's trusted supplier and installer of fingerprint, PIN, card and app-enabled digital door locks for homes, businesses and strata.",
    url: SITE_URL,
    type: "website",
    images: ["/assets/images/digital-lock-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/assets/images/logo.png",
  },
};

const locksmithJsonLd = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Digital Door Locks Perth",
  url: SITE_URL,
  telephone: "+61-413-320-222",
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO Box 7628",
    addressLocality: "Cloisters Square",
    addressRegion: "WA",
    postalCode: "6000",
    addressCountry: "AU",
  },
  areaServed: "Perth",
  openingHours: "Mo-Su 00:00-23:59",
  description: "Trade qualified locksmiths supplying and installing digital door locks across Perth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locksmithJsonLd) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
