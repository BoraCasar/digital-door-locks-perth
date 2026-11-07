import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Residential",
    image: "/assets/images/residential.webp",
    alt: "Residential digital lock installation in Perth",
    bullets: ["Reliable Installation", "Wide Range Available", "Leading by Innovation!"],
    body: "Professionally installed smart locks for your home, ensuring the lock is fitted correctly for maximum security and seamless operation. We guarantee 100% satisfaction and the digital lock functions smoothly.",
  },
  {
    title: "Commercial",
    image: "/assets/images/commercial.webp",
    alt: "Commercial digital lock installation for Perth businesses",
    bullets: ["Expert Installation", "Extensive Selection", "Pioneering Smart Solutions"],
    body: "Professionally installed smart door locks for your business or shop front, ensuring the smart lock is fitted correctly for maximum security and ease of use. Our technician guarantees 100% satisfaction.",
  },
  {
    title: "Short-Stay & Airbnb",
    image: "/assets/images/airbnb.webp",
    alt: "Digital lock installation for short-stay and Airbnb properties",
    bullets: ["Dependable Installation", "Something for Everyone", "Redefining Security Through Innovation"],
    body: "Keyless access solutions ideal for short-stay accommodation — convenient guest access with secure, professionally installed digital locks for every entry point.",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <SectionHeading
          centered
          eyebrow="What we do"
          title="Digital Door Lock Installation Services in Perth"
          lead="Whether you're upgrading your home security or need a smart access solution for your business, our expert team is here to help you choose the right product and provide an accurate quote, free of charge, with no hidden fees."
        />

        <div className="card-grid card-grid--3">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <Image
                className="service-card__image"
                src={service.image}
                alt={service.alt}
                width={640}
                height={400}
              />
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <ul className="service-card__list">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
