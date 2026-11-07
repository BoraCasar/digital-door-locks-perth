import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, primaryNav } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Link className="site-logo" href="/" aria-label="Digital Door Locks Perth — Home">
            <Image src="/assets/images/logo.png" alt="" width={305} height={80} />
          </Link>
          <p>Trade qualified locksmiths supplying and installing digital door locks across Perth, 24 hours a day, 7 days a week.</p>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="site-footer__list">
            {primaryNav
              .filter((item) => item.href !== "/contact-us/")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="site-footer__list">
            <li>
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Link href="/contact-us/">Contact Us</Link>
            </li>
            <li>PO Box 7628 Cloisters Square WA 6000</li>
            <li>Opening Hours: 24 Hours, 7 Days a Week</li>
          </ul>
        </div>

        <div>
          <h3>Service Areas</h3>
          <ul className="site-footer__list">
            <li>Malaga</li>
            <li>Rivervale</li>
            <li>Perth CBD</li>
            <li>Servicing all suburbs</li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} Digital Door Locks Perth. All rights reserved.</p>
      </div>
    </footer>
  );
}
