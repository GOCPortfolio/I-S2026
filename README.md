# Irene & Shams: Wedding Invitation Website

Plain HTML, CSS and JavaScript. No build step. Live address (after publishing): https://gocportfolio.github.io/I-S2026/

## Files
- `index.html` page structure and link-preview tags
- `styles.css` design. Colours are at the very top
- `script.js` **all wording and settings are in the CONFIG block at the top**. Edit only that
- `google-apps-script.gs` receives RSVPs into a Google Sheet
- `assets/` photos, floral corners (cut from the printed card), icons, `music.mp3`, `og-image-2.jpg`

## Things still to confirm (search for `TODO` in script.js)
1. **Start time**: the brief said 10:15 AM, the printed card says 10:00 AM. Change `date.iso` in CONFIG (e.g. `2026-12-30T10:00:00+01:00`). Countdown, calendar and text all follow.
2. **Venue**: the brief says Anjatom Football Field; the printed card says ERCC Church, Gwantu Dakaci. Edit `venue.ceremony` and `venue.reception` (name, address, `mapQuery`). Paste the address exactly as Google Maps shows it so the pin lands correctly.
3. Parking answer (`faq`): the question stays hidden until you write one.
4. Contact person name, vendors list (hidden while empty), RSVP endpoint, music file.
5. Story, toast and gift message are drafts written for you. Edit freely.

## Photos
Gallery photos are `assets/g1.webp` ... `g9.webp` with small `-sm` versions for thumbnails. To swap one, replace both files (full ~1000px wide, small ~520px) and update `w`/`h` in CONFIG.gallery. `hero.webp` is the top photo, `envelope-card.webp` slides out of the envelope.

## RSVP into Google Sheets
1. Create a Google Sheet. Extensions > Apps Script. Paste `google-apps-script.gs`.
2. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the Web App URL.
3. Paste it into `rsvp.endpoint` in CONFIG. Submit a real test RSVP and check the sheet.
4. After any script change, Deploy > Manage deployments > New version.
Until the URL is set, the form tells guests to use the WhatsApp or Call buttons.

## Link preview (WhatsApp / Facebook)
Uses `assets/og-image-2.jpg` with absolute URLs in `index.html` (4 places: canonical, og:url, og:image, twitter:image) plus `siteUrl` in CONFIG. To bust a cached preview: rename the image (e.g. og-image-3.jpg) and update the two image tags, or share with `?v=2`, then use Facebook Sharing Debugger > Scrape Again.

## Music
`assets/music.mp3` is a short generated placeholder. Replace it with your own **licensed** track (keep under ~1.5 MB):
`ffmpeg -i song.mp3 -b:a 96k -ac 2 assets/music.mp3`

## Publish on GitHub Pages
```
cd wedding-site
git init && git add . && git commit -m "Wedding site"
git branch -M main
git remote add origin https://github.com/GOCPortfolio/I-S2026.git
git push -u origin main
```
Then on GitHub: Settings > Pages > Source: Deploy from a branch > main / (root). Netlify (drag the folder in) and Vercel also work. For a custom domain add the A / CNAME records your host shows, then update the 4 absolute URLs and `siteUrl`.

## Personal guest links
Add `?guest=Name` (spaces as `%20`, & as `%26`), e.g. `.../I-S2026/?guest=Mama%20Joy`. It greets them on the envelope and card and pre-fills the RSVP. `?nointro` skips the envelope (for testing).
