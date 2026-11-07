import { SectionHeading } from "@/components/ui/SectionHeading";

const doorTypes = [
  {
    title: "Pedestrian Gates",
    body: "Digital locks can be installed on pedestrian gates in Perth, providing secure, keyless entry to outdoor areas. Designed to withstand the elements, these digital locks are ideal for residential, commercial, or strata properties offering simplified but smart access.",
  },
  {
    title: "Security Screens",
    body: "Digital locks can be installed on security screen doors in Perth, combining the strength of a security screen with the convenience of keyless entry. Designed for durability and ease of use, they offer enhanced protection while maintaining airflow and visibility, making them perfect for residential properties.",
  },
  {
    title: "Apartment Fire Doors",
    body: "Digital locks are an ideal solution for apartments in Perth, offering secure and convenient keyless entry for residents. They are Fire Certified & comply with egress standards, providing controlled access through PIN codes, fingerprints, or smartphone apps—perfect for modern apartment living.",
  },
  {
    title: "Commercial Shop Fronts",
    body: "Digital locks are a smart security solution for business shop front doors in Perth, providing keyless access for staff and secure entry management. With options like PIN codes, key cards, fingerprint or phone app, they offer convenience, enhance security, and reduce the need for traditional keys.",
  },
] as const;

export function DoorTypesSection() {
  return (
    <section className="section section--alt" id="door-types">
      <div className="container">
        <SectionHeading
          centered
          eyebrow="Versatility"
          title="What Type Of Door Can A Digital Lock Go On?"
          lead="We are Perth's premier digital door lock installation company! Digital Door Locks are extremely versatile — offering a wide range of access options including PIN codes, fingerprints, swipe cards, key fobs, Face ID, physical key backup, remote unlock and phone app control."
        />

        <div className="door-types-grid">
          {doorTypes.map((item) => (
            <article className="door-type" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
