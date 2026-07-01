# davidpmcmillan.com

Personal/portfolio site for David P. McMillan.

## Setup status

- [x] Local repo scaffolded
- [x] GitHub repo created under the `DaveMcMill` account
- [x] Domain `davidpmcmillan.com` purchased on Cloudflare
- [x] Domain connected to hosting (Cloudflare Worker, auto-deploys from GitHub on push to `main`)
- [x] Live at https://davidpmcmillan.com (placeholder "under construction" homepage)
- [ ] Content: bio, photo, work/portfolio, contact info

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
