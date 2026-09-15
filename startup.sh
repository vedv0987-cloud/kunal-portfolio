#!/bin/sh
set -eu
# Works both in the App Builder snapshot and a local Git checkout.
cd "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
nohup npm run dev >>"${TMPDIR:-/tmp}/portfolio-startup.log" 2>&1 </dev/null &
