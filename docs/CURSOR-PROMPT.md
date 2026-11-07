# Cursor Implementation Instructions

## Objective
Build a complete, production-ready redesign for Digital Door Locks Perth.

The visual target is the approved **Clean & Minimal** style included in `assets/approved-style-reference.png`. This is not a generic locksmith website. The design must feel like a premium modern access/security company: calm, precise, spacious, editorial and trustworthy.

## Source files
Read these files before coding:
1. `STYLE-GUIDE.md`
2. `CONTENT-SOURCE.md`
3. `DESIGN-TOKENS.css`
4. `assets/approved-style-reference.png`

## Non-negotiable visual rules
- White background and generous whitespace.
- Deep navy is the dominant brand colour.
- No gradients.
- No bright trade-style red/yellow/orange colour schemes.
- No oversized rounded cards everywhere.
- No generic hero with text over a dark image.
- Avoid excessive shadows and animation.
- Headings should be bold, compact and highly legible.
- Use a modern sans-serif such as Inter.
- Use subtle blue-grey section backgrounds and hairline borders.
- Desktop content width should be approximately 1200–1240px.
- Mobile must be intentionally redesigned, not simply scaled down.

## Homepage composition
1. Minimal white header with logo, navigation and dark navy quote button.
2. Two-column hero: text on the left, large clean digital-lock/door photograph on the right.
3. Three-column trust strip directly beneath hero.
4. Welcome/content section with editorial two-column layout.
5. Services section using clean cards or structured columns.
6. Digital lock solution sections using alternating editorial image/text blocks.
7. Door versatility grid.
8. Access methods strip with simple line icons.
9. Scarborough installation case study.
10. Reviews section.
11. Brands section.
12. Closing satisfaction guarantee and quote CTA.
13. Minimal multi-column footer.

## Content and SEO
`CONTENT-SOURCE.md` is the source copy. Preserve the text and SEO meaning. Do not casually shorten useful copy just because the new design is minimal. Keep one clear H1 and logical H2/H3 hierarchy.

## Images
The images in the `assets` folder are visual references only unless the project owner explicitly approves them for production. Build an image abstraction so real licensed photography can be swapped in later without changing layout.

## Technical quality
- Use the existing repository framework. If starting fresh, prefer Next.js + TypeScript.
- Use reusable components.
- Semantic HTML and accessible navigation.
- Responsive images.
- Good Lighthouse/Core Web Vitals.
- Keyboard-visible focus states.
- No horizontal scrolling.
- Keep dependencies minimal.

## Required final checks
- Compare desktop implementation side-by-side with the approved reference.
- Check mobile at approximately 375px wide.
- Check tablet around 768px.
- Run lint/type checks/build.
- Report changed files and any content/image placeholders.
- Do not deploy or publish without explicit owner approval.
