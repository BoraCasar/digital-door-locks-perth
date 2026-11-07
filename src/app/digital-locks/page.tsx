import type { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { DigitalLocksProductGrid } from "@/components/sections/DigitalLocksProductGrid";
import { SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Digital Door Locks Perth | Smart & Electronic Door Locks",
  description:
    "Digital Door Locks Perth provide expert sales, installation, repair and support for smart locks, keyless entry, and digital door lock solutions across Perth.",
  alternates: {
    canonical: "/digital-locks/",
  },
  openGraph: {
    title: "Digital Door Locks Perth | Smart & Electronic Door Locks",
    description:
      "Browse our full range of smart and electronic door locks available for supply and professional installation across Perth.",
    url: `${SITE_URL}/digital-locks/`,
    type: "website",
    images: ["https://digitaldoorlocksperth.com.au/wp-content/uploads/2025/11/IMG_0693-300x300.webp"],
  },
};

export default function DigitalLocksPage() {
  return (
    <main id="main-content">
      <PageBanner title="Digital Locks" />
      <section className="section">
        <div className="container">
          <DigitalLocksProductGrid />
        </div>
      </section>
    </main>
  );
}
