import { ContentImage } from "@/components/ui/ContentImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudySection() {
  return (
    <section className="section" id="case-study">
      <div className="container editorial-block case-study">
        <div className="editorial-block__media">
          <ContentImage
            src="/assets/images/digital-lock-round.webp"
            alt="Digital door lock installation at a strata complex in Scarborough"
            width={800}
            height={600}
          />
        </div>
        <div className="editorial-block__content">
          <SectionHeading eyebrow="Recent installation" title="Digital Lock Installation in Scarborough" />
          <p>
            One of our most recent strata jobs completed in Scarborough. There were 15 units in the strata complex, we supplied
            and installed 16 Yale Assure SL Digital Deadbolt locks. Each unit having its own digital lock access with PIN code.
          </p>
          <p>
            These digital Yale deadbolts were set to automatically lock when the door is shut. Residents now have peace of mind
            that the door is always locked and secure with their specific PIN code.
          </p>
        </div>
      </div>
    </section>
  );
}
