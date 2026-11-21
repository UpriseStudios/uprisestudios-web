# Uprise Studios V2 — Milestone A release audit

Status: In progress. Build confirmed by developer on 2026-11-21; live-browser and compliance checks not yet completed.

## Source inspection findings
- Main Lumen and Tally page source and global stylesheet show no direct AdSense/gtag/tracking-pixel/script integration in a targeted string scan. This is **not** a network-level audit.
- Next.js Google-hosted font integration uses `next/font/google`, which is built into the application during compilation; verify actual network requests in the deployed build.
- Early-access registration submits an email to `/api/early-access`; server code encrypts the normalised address and stores a one-way hash for deduplication in Supabase. Confirm retention/deletion workflow and all published claims before release.
- Marketplace and checkout are disabled unless `MARKETPLACE_ENABLED=true`; verify both GET and POST behaviour on the deployment.
- The previously referenced `/og-image.png` asset is absent. Metadata reference removed pending a real branded image.
- Public `app-ads.txt` exists. Inspect its contents and confirm the publisher account and product context before enabling advertising.
- No claim of AdSense approval is made. Approval is Google's decision.

## Browser and deployment checks — must be verified
1. In a clean/incognito browser profile, open the production candidate and inspect DevTools → Application → Cookies, Local Storage, Session Storage and IndexedDB. Record names, purpose, provider and lifespan.
2. DevTools → Network → Preserve log; reload the homepage, Lumen, Tally, journal and contact pages. Record third-party requests and whether any cookies or identifiers are set.
3. Test the early-access form using a test address and verify consent wording, success/error states, database handling and deletion process.
4. Test the navigation on desktop and mobile, keyboard focus, screenshots, contrast and broken links.
5. Confirm `/marketplace`, `/marketplace/success` and `/api/checkout` are unavailable by default. Ensure no payment can be initiated without explicit configuration.
6. Inspect `/robots.txt`, `/sitemap.xml` and page metadata on the deployed candidate. Ensure only intended, substantive pages are indexed.
7. Verify all product availability labels, links, legal statements and claims against actual releases.
8. Verify company/contact details and any required UK privacy information. Review controller identity, lawful bases, retention, processors, international transfers, individual rights and complaints route.
9. If introducing AdSense: review current Google publisher policies and UK consent requirements, configure an appropriate consent-management solution before non-essential advertising storage/access, and update privacy/cookie disclosures to match observed behaviour.
10. Publish the approved V2 to the main domain, crawl and manually inspect it, then consider requesting AdSense re-review. A passing build or attractive redesign alone is insufficient.

## Launch blockers
- Network/cookie audit has not been executed.
- Privacy and early-access retention claims have not been fully verified against production configuration.
- Product availability, all links and mobile accessibility require testing.
- Live deployment and AdSense re-review have not occurred.

## Notes
Do not activate ad scripts or declare cookie compliance based only on static source inspection. Avoid adding a generic cookie banner until the actual technologies and consent obligations are known.
