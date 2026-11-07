import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandPageLinks } from "@/data/site";

const brands = [
  { src: "/assets/images/brands/yale.webp", alt: "Yale digital locks" },
  { src: "/assets/images/brands/samsung.webp", alt: "Samsung digital locks" },
  { src: "/assets/images/brands/philips.webp", alt: "Philips digital locks" },
  { src: "/assets/images/brands/eufy.webp", alt: "Eufy digital locks" },
  { src: "/assets/images/brands/lionhead.webp", alt: "Lionhead digital locks" },
  { src: "/assets/images/brands/lockwood.webp", alt: "Lockwood digital locks" },
  { src: "/assets/images/brands/aqara.webp", alt: "Aqara digital locks" },
  { src: "/assets/images/brands/mcgrath.webp", alt: "McGrath digital locks" },
] as const;

export function BrandsSection() {
  return (
    <section className="section section--alt" id="brands">
      <div className="container">
        <SectionHeading
          centered
          eyebrow="Brands we install"
          title="Trusted Digital Lock Brands"
          lead="We install almost every major digital lock brand including Samsung, Phillips, Titan, Aqara, McGrath, Lionhead, Yale, Lockwood & Eufy."
        />

        <div className="brand-grid">
          {brands.map((brand) => (
            <div className="brand-logo" key={brand.alt}>
              <Image src={brand.src} alt={brand.alt} width={120} height={40} />
            </div>
          ))}
        </div>

        <div className="service-links" aria-label="Brand service pages">
          {brandPageLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
