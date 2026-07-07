# davidpmcmillan.com

Independent strategy execution consulting site for David McMillan, built from his
LinkedIn background (strategy design, execution governance, transformation delivery;
20 years with Palladium, now David McMillan Consulting).

## Setup status

- [x] Local repo scaffolded
- [x] GitHub repo created under the `DaveMcMill` account
- [x] Domain `davidpmcmillan.com` purchased on Cloudflare
- [x] Domain connected to hosting (Cloudflare Worker, auto-deploys from GitHub on push to `main`)
- [x] Live at https://davidpmcmillan.com
- [x] Full site content built: hero, stats, pain points, services, selected results,
      process, insights/publications, about, final CTA, footer with contact info
- [x] Color palette matched to the David McMillan Consulting logo (navy, forest
      green, slate blue-gray, warm tan/gold, charcoal text) — see `css/style.css`
      `:root` variables
- [x] Logo assets added: `images/logo-full.png` (full lockup) and
      `images/logo-icon-source.png` (icon-only source), with generated sizes
      `images/logo-icon.png` (header, 40px, `mix-blend-mode: multiply` to drop
      the white background on the light header), `images/favicon-32.png`, and
      `images/apple-touch-icon.png`. Logo PNGs have opaque white backgrounds (no
      alpha), so the icon is only used on light backgrounds (header) — the navy
      footer still uses the text wordmark to avoid a visible white box.
- [x] Real headshot added: `images/David-McMillan_Headshot.jpg` in the About section
      (gradient kept as a CSS fallback background, not visible under the photo)
- [ ] Testimonials (none provided yet — no section added; add one when available)
- [ ] Wire up "Start a Conversation" CTAs to a scheduling link (e.g. Calendly) if
      desired, instead of just anchoring to the footer contact info

## Notes

This project uses a separate GitHub account (`DaveMcMill`) and a separate Cloudflare
account (`David McMillan Account`) from Jarom Brown's other sites (jb-site,
the-applied-stage). Keep credentials and deployments isolated accordingly.

Repo: https://github.com/DaveMcMill/davidpmcmillan.com

Deployment: Cloudflare Workers & Pages project `davidpmcmillan`, connected directly
to the GitHub repo (not GitHub Pages). Worker URL:
https://davidpmcmillan.david-p-mcmillan.workers.dev — custom domain
`davidpmcmillan.com` is connected via the project's Domains tab ("Add Domain"),
not a `CNAME` file (that mechanism is GitHub Pages-specific and unused here).
