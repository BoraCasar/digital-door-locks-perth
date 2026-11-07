# Digital Door Locks Perth

Next.js website for [digitaldoorlocksperth.com.au](https://digitaldoorlocksperth.com.au) — Clean & Minimal design with migrated homepage content and SEO.

## Stack

- **Next.js 15** (App Router, static export)
- **React 19**
- **TypeScript**
- Component-based layout (`Header`, `Footer`, section components, shared `Button` / `SectionHeading`)

## Prerequisites

Node.js is installed at `~/.local/node` (see `~/.zshrc`). GitHub CLI is at `~/.local/bin/gh`.

```bash
node -v
npm -v
gh --version
```

## Development

```bash
cd ~/Projects/digital-door-locks-perth
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

Static files are written to `out/` (suitable for any static host):

```bash
npm run build
```

Upload the contents of `out/` to your web host, or deploy the repo to Vercel/Netlify/Cloudflare Pages.

## Project layout

```
src/
  app/           layout.tsx, page.tsx, globals.css
  components/    layout, sections, ui
  data/          navigation, testimonials, site constants
  styles/        design tokens + CSS from the approved design system
public/assets/   images and brand logos
```

See `MIGRATION.md` for URL and SEO notes when replacing the WordPress site.
