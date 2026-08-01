# Portfolio Readiness — static site (shared data via Firebase)

Two files, `index.html` and `bundle.js`. No build step. Now backed by a
**shared Firebase Realtime Database** (`portfolio-8ac1d`) — anything anyone
adds, edits, or deletes (holdings, loans, currency conversions, daily pricing
entries) is saved centrally and shows up for everyone who opens the link,
not just the browser that made the change.

## Updating the live site

1. Go to the GitHub repo you already created for this.
2. Delete the old `index.html` and `bundle.js` (or just re-upload with the
   same names to overwrite them).
3. Upload these two files instead.
4. Commit. GitHub Pages picks it up automatically within a minute or two —
   same URL as before, no settings need touching again.

## About the database

- Currently in **test mode**, which allows open read/write **until
  ~30 August 2026**. After that date it'll stop accepting reads/writes until
  the rules are updated. To make it permanent, in the Firebase console go to
  **Realtime Database → Rules** and set:
  ```json
  { "rules": { ".read": true, ".write": true } }
  ```
  then **Publish**. Worth doing before the expiry date — I can remind you
  again if it's easier to bring it up later.
- Anyone with the site link can currently read *and write* the data — there's
  no login. Fine for personal/shared use among people you trust with the
  link; not appropriate if this URL ever becomes truly public, since anyone
  could edit or clear the numbers.
- Data lives under a few top-level nodes: `holdings`, `loans`, `conversions`,
  and `daily/<date>` for each day's pricing entry. Visible directly in the
  Firebase console under Realtime Database → Data, if you ever want to
  inspect or hand-edit it there instead of through the site.

## If Firebase is ever unreachable

The site falls back to that browser's own local storage automatically (same
behaviour as before) — it won't break, it'll just stop syncing until
Firebase is reachable again.
