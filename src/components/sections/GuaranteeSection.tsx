import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export function GuaranteeSection() {
  return (
    <section className="section" id="guarantee">
      <div className="container">
        <div className="cta-banner">
          <h2>100% Satisfaction Guarantee</h2>
          <p>
            At Digital Door Locks Perth, we are committed to delivering exceptional service and innovative solutions tailored to
            your needs. Our team of experienced locksmiths specialise in digital door locks and keyless entry, ensuring every
            installation is performed with precision and care. Customer satisfaction is at the heart of everything we do. From your
            first enquiry to final installation, we strive to provide reliable, honest, and professional service you can trust.
          </p>
          <Button href={PHONE_HREF} size="large">
            Get Your Free Quote
          </Button>
          <a className="cta-banner__phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
