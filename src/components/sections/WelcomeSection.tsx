import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export function WelcomeSection() {
  return (
    <section className="section" id="welcome">
      <div className="container intro-block">
        <div className="intro-block__content">
          <SectionHeading
            eyebrow="Welcome"
            title="Welcome to Digital Door Locks Perth"
            lead="Digital Door Locks Perth is your trusted local supplier and installer of advanced, secure, and stylish keyless entry door lock solutions. We specialise in offering a wide range of digital and smart door locks designed to enhance the safety and convenience of your home or business. We install digital door locks with Fingerprint, PIN Code, Swipe Card Access, Phone Unlock App & key override."
          />
          <p>
            Call or text Digital Door Locks Perth for a <strong>FREE Quote: {PHONE_DISPLAY}</strong>
          </p>
          <p>
            Digital Door Locks Perth have been supplying and installing smart door locks for almost 10 years now. We are the #1
            Digital Lock installer in Perth, having installed almost every brand including Samsung, Phillips, Titan, Aqara, McGrath,
            Lionhead, Yale, Lockwood &amp; Eufy. With professional service, you can have peace of mind knowing your digital lock
            is secure, compliant with safety standards, and backed by expert support.
          </p>
        </div>
        <div className="quote-panel">
          <h3>Free, No Obligation Quotes</h3>
          <p>
            At Digital Door Locks Perth, we believe in transparent pricing and great service from the start. That&apos;s why we offer
            free, no obligation quotes on all our digital door lock installations and locksmith services.
          </p>
          <Button href={PHONE_HREF}>Request Your Free Quote</Button>
        </div>
      </div>
    </section>
  );
}
