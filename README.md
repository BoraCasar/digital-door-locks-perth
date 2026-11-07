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

## Publish to GitHub

`gh` is installed at `~/.local/bin/gh`. Sign in once, then run the publish script:

```bash
gh auth login
./scripts/publish-to-github.sh
```

This creates a public repo named `digital-door-locks-perth` under your GitHub account and pushes `main`. The script uses the bundled Git from `dugite`, so Xcode Command Line Tools are optional.

## Auto-deploy to Vercel on push to `main`

The project is linked locally to Vercel (`digital-door-locks-perth` on team **digital-door-locls**).

1. **Publish the repo** (once): `./scripts/publish-to-github.sh`  
   Remote: [github.com/BoraCasar/digital-door-locks-perth](https://github.com/BoraCasar/digital-door-locks-perth)

2. **Enable GitHub Actions deploy** (once):
   ```bash
   ./scripts/setup-vercel-deploy.sh
   ```
   Create a token at [Vercel → Account → Tokens](https://vercel.com/account/settings/tokens), then run `gh secret set VERCEL_TOKEN` when prompted.

3. **Day to day**: commit and push to `main` — the workflow `.github/workflows/deploy-production.yml` builds and deploys to production ([digital-door-locks-perth.vercel.app](https://digital-door-locks-perth.vercel.app)).

**Optional:** For Vercel’s built-in Git integration (PR previews, deploy logs on commits), connect GitHub under [Vercel login connections](https://vercel.com/account/login-connections), then run:

```bash
vercel git connect --scope digital-door-locls -y
```
