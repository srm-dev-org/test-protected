# Sample Vulnerable Node.js Repository

This is a sample Node.js repository created for testing purposes. It includes dependencies with known security vulnerabilities and some code that may trigger CodeQL alerts.

## Dependencies with Known Vulnerabilities

- **express**: 4.16.0 (has known CVEs)
- **lodash**: 4.17.4 (has CVE-2019-10744)
- **minimist**: 1.2.0 (has CVE-2020-7598)

## Code Vulnerabilities

- Command injection in `/exec` route
- Code injection via `eval` in `/eval` route

## Usage

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Visit `http://localhost:3000/exec?cmd=ls` (dangerous!)
4. Visit `http://localhost:3000/eval?code=1+1`

**Warning**: This code is intentionally vulnerable. Do not use in production.
# test-46-1


---
## Release Notes — v1.0.0-test-protected-20261006-110803-r1

> Auto-generated on 2026-10-06 11:08:03 UTC (release 1/25 for repo test-protected)

- **Tag**: `v1.0.0-test-protected-20261006-110803-r1`
- **Branch**: `main`


---
## Release Notes — v1.0.0-test-protected-20261006-110908-r2

> Auto-generated on 2026-10-06 11:09:08 UTC (release 2/25 for repo test-protected)

- **Tag**: `v1.0.0-test-protected-20261006-110908-r2`
- **Branch**: `main`


---
## Release Notes — v1.0.0-test-protected-20261006-111014-r3

> Auto-generated on 2026-10-06 11:10:14 UTC (release 3/25 for repo test-protected)

- **Tag**: `v1.0.0-test-protected-20261006-111014-r3`
- **Branch**: `main`
