import { Button } from "@/components/ui/Button";
import { ContentImage } from "@/components/ui/ContentImage";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">#1 Smart Digital Lock Experts</p>
          <h1>Digital Door Lock Installation Perth</h1>
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
          <ContentImage
            src="/assets/images/digital-lock-hero.webp"
            alt="Lionhead smart digital door lock installed on a Perth home entrance"
            width={800}
            height={600}
            priority
            className="hero__image"
            sizes="(min-width: 900px) 44vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
