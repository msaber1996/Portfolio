#!/usr/bin/env bash
# Restore a weekly backup (backups/backup-YYYY-MM-DD.json) into Firebase — the
# *current* project by default, or a *different* Firebase project (e.g. if
# you're moving this app off its current Firebase project, or standing up a
# fresh copy on another server entirely — the frontend is a static site, so
# only the data needs moving).
#
# This is a manual, human-run tool — it is not wired into any GitHub Action,
# so a restore can only happen if someone deliberately runs it with their own
# Firebase login. Requires an owner or editor account on the TARGET project
# (the "service" account used by the site's own workflows cannot write
# holdings/loans/conversions/loanFacilities/certificates — only an
# owner/editor can). If the target is a brand-new Firebase project, create
# that account there first (sign up through the site once pointed at the new
# project, then promote it to owner in that project's /roles).
#
# Usage:
#   # Same project (default) — restores into the project this repo already uses.
#   FIREBASE_EMAIL=you@portfolio.local FIREBASE_PASSWORD=... \
#     ./restore.sh backups/backup-2026-09-06.json           # writes to Firebase
#   ./restore.sh backups/backup-2026-09-06.json --dry-run   # prints what would
#                                                            # be sent, no network
#                                                            # calls, no credentials
#                                                            # needed
#
#   # A DIFFERENT Firebase project — set these two first (from that project's
#   # Firebase console: Project settings > General > Web API Key, and
#   # Realtime Database > the "reference URL" shown at the top of the data tab):
#   FIREBASE_DB_URL=https://your-new-project-default-rtdb.firebaseio.com \
#   FIREBASE_API_KEY=AIza... \
#   FIREBASE_EMAIL=you@portfolio.local FIREBASE_PASSWORD=... \
#     ./restore.sh backups/backup-2026-09-06.json
#
# Restores holdings, loans, conversions, daily, loanFacilities,
# certificates, officeUnits, officeInstallments, officeInstallmentPayments,
# officeMaintenance, and officeMaintenancePayments — every collection the
# weekly backup workflow exports. Not restored (by design — see README note
# below): newsFeed, liveRates, marketHistory (auto-refresh on their own
# schedule within hours), roles/pushSubscriptions (tied to Firebase Auth
# accounts and browser push subscriptions specific to one project — on a new
# project these must be re-created, not copied).

set -euo pipefail

FILE="${1:-}"
DRY_RUN="${2:-}"

if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  echo "Usage: $0 <backups/backup-YYYY-MM-DD.json> [--dry-run]" >&2
  exit 1
fi

COLLECTIONS="holdings loans conversions daily loanFacilities certificates officeUnits officeInstallments officeInstallmentPayments officeMaintenance officeMaintenancePayments"

for key in $COLLECTIONS; do
  if ! jq -e "has(\"$key\")" "$FILE" > /dev/null; then
    echo "Warning: \"$key\" is missing from $FILE (an older backup, from before it was added) — skipping." >&2
  fi
done

if [ "$DRY_RUN" = "--dry-run" ]; then
  echo "Dry run — no network calls, nothing written. This is what would be restored from $FILE:"
  for key in $COLLECTIONS; do
    if jq -e "has(\"$key\")" "$FILE" > /dev/null; then
      COUNT=$(jq "if (.$key | type) == \"array\" then (.$key | length) elif .$key == null then 0 else (.$key | keys | length) end" "$FILE")
      echo "  PUT .../${key}.json  <-  $COUNT item(s) from \"$key\""
    fi
  done
  exit 0
fi

FIREBASE_API_KEY="${FIREBASE_API_KEY:-AIzaSyCTbnNaSbxN57izkccidiiPh2WLInyc-hI}"
DB="${FIREBASE_DB_URL:-https://portfolio-8ac1d-default-rtdb.firebaseio.com}"

read -r -p "This OVERWRITES live data at every path above in ${DB} with the contents of $FILE. Type RESTORE to continue: " CONFIRM
if [ "$CONFIRM" != "RESTORE" ]; then
  echo "Not confirmed, aborting."
  exit 1
fi

: "${FIREBASE_EMAIL:?Set FIREBASE_EMAIL to an owner or editor account}"
: "${FIREBASE_PASSWORD:?Set FIREBASE_PASSWORD}"

ID_TOKEN=$(curl -sf -X POST \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"${FIREBASE_EMAIL}\",\"password\":\"${FIREBASE_PASSWORD}\",\"returnSecureToken\":true}" \
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}" \
  | jq -r '.idToken')

if [ -z "$ID_TOKEN" ] || [ "$ID_TOKEN" = "null" ]; then
  echo "Could not sign in with FIREBASE_EMAIL/FIREBASE_PASSWORD, aborting." >&2
  exit 1
fi

for key in $COLLECTIONS; do
  if jq -e "has(\"$key\")" "$FILE" > /dev/null; then
    VALUE=$(jq -c ".$key" "$FILE")
    echo "Restoring $key..."
    curl -sf -X PUT -d "$VALUE" "${DB}/${key}.json?auth=${ID_TOKEN}" > /dev/null
    echo "  done."
  fi
done

echo "Restore complete."
