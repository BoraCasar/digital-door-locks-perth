#!/usr/bin/env bash
set -euo pipefail

export PATH="$HOME/.local/bin:$HOME/.local/node/bin:$PATH"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not signed in. Run: gh auth login"
  exit 1
fi

GIT_BIN="$ROOT/node_modules/dugite/git/bin/git"
if [[ -x "$GIT_BIN" ]]; then
  export GIT_EXEC_PATH="$ROOT/node_modules/dugite/git/libexec/git-core"
  export GIT_TEMPLATE_DIR="$ROOT/node_modules/dugite/git/share/git-core/templates"
  GIT() { "$GIT_BIN" "$@"; }
elif command -v git >/dev/null 2>&1; then
  GIT() { git "$@"; }
else
  echo "Git is not available. Install Xcode Command Line Tools (xcode-select --install) or run: npm install"
  exit 1
fi

if ! GIT rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  GIT init -b main
fi

if ! GIT remote get-url origin >/dev/null 2>&1; then
  gh repo create digital-door-locks-perth --public --source=. --remote=origin --description "Next.js website for Digital Door Locks Perth"
fi

GIT push -u origin main

echo "Repository published. Open with: gh repo view --web"
