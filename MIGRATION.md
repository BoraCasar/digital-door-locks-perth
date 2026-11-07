# URL Migration & SEO Plan

When replacing the WordPress site, preserve these primary URLs:

| URL | Status in this build |
|-----|----------------------|
| `/` | Implemented (`index.html`) |
| `/digital-locks/` | Linked; page not yet built |
| `/locksmith-services/` | Linked; page not yet built |
| `/service-areas/` | Linked; page not yet built |
| `/contact-us/` | Linked; page not yet built |
| `/faq/` | Linked; page not yet built |
| `/blog/` | Linked; page not yet built |

## Brand / service landing pages (linked from homepage)

- `/mcgrath-digital-locks-perth/`
- `/lionhead-digital-locks-perth/`
- `/eufy-digital-locks-perth/`
- `/samsung-digital-door-locks-perth/`
- `/yale-digital-door-locks-perth/`
- `/philips-digital-door-locks-perth/`
- `/aqara-digital-door-locks-perth/`

Until those pages exist, either:

1. Keep the old WordPress pages live at those paths, or
2. Add 302 redirects to `/` or `/digital-locks/` during transition, or
3. Build matching static pages before cutover.

## SEO checklist at cutover

- [ ] Keep homepage title: `#1 Smart Digital Lock Experts | Digital Door Locks Perth`
- [ ] Keep meta description aligned with trade-qualified locksmith + free quote messaging
- [ ] Set canonical to `https://digitaldoorlocksperth.com.au/`
- [ ] Submit updated sitemap after all pages are live
- [ ] Verify `tel:+61413320222` click-to-call on mobile
- [ ] Run Lighthouse for performance, accessibility, and SEO

## Suggested Apache redirects (example)

If WordPress permalinks change, add rules only for URLs that move:

```apache
RewriteEngine On
# Example: redirect old path to new path only if URL actually changes
# RewriteRule ^old-page/?$ /new-page/ [R=301,L]
```

Do not add blanket redirects until inner pages are published.

## Content source

Homepage copy, reviews, and service descriptions were migrated from the live site on 7 Nov 2026 without rewriting substantive claims.
