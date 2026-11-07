export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Key benefits">
      <div className="container">
        <div className="trust-strip__grid">
          <article className="trust-item">
            <div className="trust-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="trust-item__title">Trade Qualified Locksmiths</h3>
            <p className="trust-item__text">
              Supplied and installed by trade qualified locksmiths — we do everything in-house, no subcontracting.
            </p>
          </article>
          <article className="trust-item">
            <div className="trust-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="10" width="16" height="10" rx="1.5" />
                <path d="M8 10V7a4 4 0 1 1 8 0v3" />
              </svg>
            </div>
            <h3 className="trust-item__title">Widest Range in Perth</h3>
            <p className="trust-item__text">
              Perth&apos;s premier digital lock supplier with the biggest range in stock for entry doors, security screens and
              gates.
            </p>
          </article>
          <article className="trust-item">
            <div className="trust-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12.5 10.5 15 16 9" />
              </svg>
            </div>
            <h3 className="trust-item__title">100% Satisfaction Guarantee</h3>
            <p className="trust-item__text">
              Every installation is performed with precision and care, backed by our commitment to reliable, honest service.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
