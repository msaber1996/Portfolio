# Portfolio Readiness — static site

This is a self-contained, working version of the dashboard: two files
(`index.html` and `bundle.js`), no build step, no server, no Claude account
needed to view it. It loads React and Tailwind from public CDNs at runtime, so
it needs a live internet connection to open — same as any normal website.

## Put it on GitHub Pages (no command line needed)

1. Go to **github.com** → **New repository**. Name it anything (e.g.
   `portfolio-readiness`). Keep it **Public** (Pages needs that on a free
   account). Create it.
2. On the new repo's page, click **Add file → Upload files**.
3. Drag in `index.html` and `bundle.js` from this folder. Commit.
4. Go to the repo's **Settings → Pages**.
5. Under "Build and deployment", set **Source: Deploy from a branch**,
   **Branch: main**, folder **/ (root)**. Save.
6. Wait about a minute, then refresh that Settings → Pages screen — it'll show
   a link like `https://yourusername.github.io/portfolio-readiness/`.
   That's the live, shareable link. Anyone can open it, no sign-in required.

## What persists and what doesn't

- Every holding, loan, conversion, and daily entry you add is saved in your
  own browser's storage (`localStorage`) — tied to that specific browser on
  that specific device. It will **not** sync between your phone and laptop,
  and a different visitor to the link sees the *seed* data, not your edits,
  until they add their own.
- If you want one shared dataset everyone sees, that needs a real backend —
  worth asking for separately if you get there.

## Updating it later

If you want changes to the layout or logic itself, make them in the `.jsx`
source and hand it back — regenerating `bundle.js` is a five-minute rebuild,
not something you'd do by hand.
