# systemized.github.io

Static site for the Computer Networking course at GSU. Hosted on GitHub Pages
at https://systemized.github.io.

## Project 2: Secure, Optimize, and Monitor Your Website

Pages:

- `index.html` — home
- `networks.html` — DNS, IP, HTTP/HTTPS (Project 1)
- `security.html` — HTTPS, CSP, response-header hardening
- `performance.html` — CDN, minified CSS, lazy loading, resource hints
- `monitoring.html` — client-side visit counter and analytics notes

The technical report is in `REPORT.md`.

## Running locally

The site is plain static HTML, CSS, and one JavaScript file. Any static
server works:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

The visit counter on the monitoring page uses `localStorage`, which only
works when the site is served over HTTP(S), not when files are opened with
`file://`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the
repository as a Pages artifact and publishes it to the `github-pages`
environment. The workflow can also be run manually from the Actions tab.