"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, PHONE_HREF, primaryNav } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const media = window.matchMedia("(min-width: 1024px)");
    const onMediaChange = () => {
      if (media.matches) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onMediaChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onMediaChange);
    };
  }, [closeMenu]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-logo" href="/" aria-label="Digital Door Locks Perth — Home">
          <Image src="/assets/images/logo.png" alt="" width={305} height={80} priority />
          <span className="site-logo__text">Digital Door Locks Perth</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button href={PHONE_HREF}>Get a Quote</Button>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav container${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile"
        hidden={!menuOpen}
      >
        <ul className="mobile-nav__list">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={PHONE_HREF} onClick={closeMenu}>
              Call {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
