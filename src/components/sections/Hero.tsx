import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export function Hero() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">#1 Smart Digital Lock Experts</p>
          <h1>
            <span>Digital Door Lock</span>
            <span>Installation Perth</span>
          </h1>
          <p className="hero__lead">
            Trade qualified locksmiths supplying and installing digital door locks to your Perth property. Smart door locks for
            homes, businesses &amp; Airbnbs.
          </p>
          <div className="hero__actions">
            <Button href={PHONE_HREF} size="large">
              Get a Free Quote
            </Button>
            <Button href="/digital-locks/" variant="secondary" size="large">
              View Digital Locks
            </Button>
          </div>
          <a className="hero__phone" href={PHONE_HREF}>
            Call or text: {PHONE_DISPLAY}
          </a>
        </div>
        <div className="hero__media">
          <Image
            className="hero__image"
            src="/assets/images/hero-lock.jpg"
            alt="Yale Assure digital door lock installed on a Perth home entrance"
            width={800}
            height={640}
            priority
          />
        </div>
      </div>
    </section>
  );
}
