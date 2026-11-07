#!/usr/bin/env bash
set -euo pipefail

export PATH="$(cd "$(dirname "$0")/.." && pwd)/node_modules/dugite/git/bin:$HOME/.local/bin:$HOME/.local/node/bin:$PATH"
export GIT_EXEC_PATH="$(cd "$(dirname "$0")/.." && pwd)/node_modules/dugite/git/libexec/git-core"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> Vercel project (local link)"
if [[ -f .vercel/project.json ]]; then
  cat .vercel/project.json
else
  echo "No .vercel/project.json — run: vercel link --scope digital-door-locls"
  exit 1
fi

echo ""
echo "==> Git remote"
git remote -v 2>/dev/null || echo "No git remote yet — run ./scripts/publish-to-github.sh"

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI not signed in. Run: gh auth login"
  exit 1
fi

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo ""
  echo "Add a Vercel token for GitHub Actions (one-time):"
  echo "  1. Create a token: https://vercel.com/account/settings/tokens"
  echo "     (scope: Full Account, or at least deploy access for team 'digital-door-locls')"
  echo "  2. Store it on GitHub:"
  echo "       gh secret set VERCEL_TOKEN"
  echo "     (paste the token when prompted)"
  echo ""
  echo "After VERCEL_TOKEN is set, every push to main runs .github/workflows/deploy-production.yml"
  echo "and updates https://digital-door-locks-perth.vercel.app"
else
  gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" -R BoraCasar/digital-door-locks-perth
  echo "VERCEL_TOKEN secret updated on GitHub."
fi

echo ""
echo "Optional (native Vercel Git integration — previews + dashboard builds):"
echo "  1. Connect GitHub: https://vercel.com/account/login-connections"
echo "  2. Then run: vercel git connect --scope digital-door-locls -y"
