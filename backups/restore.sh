#!/usr/bin/env bash
# Restore a weekly backup (backups/backup-YYYY-MM-DD.json) back into Firebase.
#
# This is a manual, human-run tool — it is not wired into any GitHub Action,
# so a restore can only happen if someone deliberately runs it with their own
# Firebase login. Requires an owner or editor account (the "service" account
# used by the site's own workflows cannot write holdings/loans/conversions/
# loanFacilities/certificates — only an owner/editor can).
#
# Usage:
#   FIREBASE_EMAIL=you@portfolio.local FIREBASE_PASSWORD=... \
#     ./restore.sh backups/backup-2026-09-06.json           # writes to Firebase
#   ./restore.sh backups/backup-2026-09-06.json --dry-run   # prints what would
#                                                            # be sent, no network
#                                                            # calls, no credentials
#                                                            # needed
#
# Restores holdings, loans, conversions, daily, loanFacilities, and
# certificates — every collection the weekly backup workflow exports.

set -euo pipefail

FILE="${1:-}"
DRY_RUN="${2:-}"

if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
  echo "Usage: $0 <backups/backup-YYYY-MM-DD.json> [--dry-run]" >&2
  exit 1
fi

COLLECTIONS="holdings loans conversions daily loanFacilities certificates"

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

read -r -p "This OVERWRITES live data at every path above with the contents of $FILE. Type RESTORE to continue: " CONFIRM
if [ "$CONFIRM" != "RESTORE" ]; then
  echo "Not confirmed, aborting."
  exit 1
fi

: "${FIREBASE_EMAIL:?Set FIREBASE_EMAIL to an owner or editor account}"
: "${FIREBASE_PASSWORD:?Set FIREBASE_PASSWORD}"

FIREBASE_API_KEY="AIzaSyCTbnNaSbxN57izkccidiiPh2WLInyc-hI"
DB="https://portfolio-8ac1d-default-rtdb.firebaseio.com"

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
