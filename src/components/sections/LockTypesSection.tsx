import { ContentImage } from "@/components/ui/ContentImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const lockTypes = [
  {
    title: "Front Entry Doors",
    image: "/assets/images/digital-lock-round.webp",
    alt: "Lionhead digital door lock on a front entry door",
    body: "Digital locks on front entry doors provide a secure and convenient keyless entry solution, enhancing both home security and everyday ease of access. With features like PIN codes, fingerprint access, or smartphone control, they offer modern, reliable protection for your main entry point. Many different models for timber & aluminium doors. Pictured is the Lionhead Nicholson Digital Door Lock.",
  },
  {
    title: "Security Screen",
    image: "/assets/images/digital-lock-handle.webp",
    alt: "Digital door lock with keypad and fingerprint on a security screen door",
    body: "Digital locks on security screen doors provide an added layer of convenience and protection, allowing keyless entry without compromising the strength and security of your door. They integrate seamlessly with security screens, offering reliable access control while maintaining airflow and visibility. Pictured is the Titan Air Digital Security Screen Lock.",
  },
  {
    title: "Pedestrian Gates",
    image: "/assets/images/outdoor-lock.webp",
    alt: "Digital keypad lock on a pedestrian gate in Perth",
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

        <div className="editorial-stack">
          {lockTypes.map((item, index) => (
            <article
              className={`editorial-block${index % 2 === 1 ? " editorial-block--reverse" : ""}`}
              key={item.title}
            >
              <div className="editorial-block__media">
                <ContentImage src={item.image} alt={item.alt} width={640} height={480} />
              </div>
              <div className="editorial-block__content">
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
