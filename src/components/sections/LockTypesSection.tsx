import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const lockTypes = [
  {
    title: "Front Entry Doors",
    image: "/assets/images/front-entry.webp",
    alt: "Lionhead Nicholson digital door lock on a front entry door",
    body: "Digital locks on front entry doors provide a secure and convenient keyless entry solution, enhancing both home security and everyday ease of access. With features like PIN codes, fingerprint access, or smartphone control, they offer modern, reliable protection for your main entry point. Many different models for timber & aluminium doors. Pictured is the Lionhead Nicholson Digital Door Lock.",
  },
  {
    title: "Security Screen",
    image: "/assets/images/security-screen.webp",
    alt: "Titan Air digital security screen lock installation",
    body: "Digital locks on security screen doors provide an added layer of convenience and protection, allowing keyless entry without compromising the strength and security of your door. They integrate seamlessly with security screens, offering reliable access control while maintaining airflow and visibility. Pictured is the Titan Air Digital Security Screen Lock.",
  },
  {
    title: "Pedestrian Gates",
    image: "/assets/images/pedestrian-gate.webp",
    alt: "Titan Razor digital gate pedestrian lock on an outdoor gate",
    body: "Digital locks on pedestrian gates offer secure, keyless entry for outdoor access points, making them ideal for residential, commercial, or strata properties. This makes it very convenient for accessing a property through a gate without the need for a bulky keychain. Pictured is the Titan Razor Digital Gate Pedestrian Lock.",
  },
] as const;

export function LockTypesSection() {
  return (
    <section className="section" id="lock-types">
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="Types of Digital Locks"
          lead="Digital locks provide secure and convenient keyless entry, enhancing both security and everyday ease of access across front doors, security screens and pedestrian gates."
        />

        <div className="card-grid card-grid--2">
          {lockTypes.map((item) => (
            <article className="lock-type-card" key={item.title}>
              <Image className="lock-type-card__image" src={item.image} alt={item.alt} width={640} height={400} />
              <div className="lock-type-card__body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
