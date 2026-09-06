# ABOUT — Editorial Website

A single-page editorial/personal-brand landing page recreated from the supplied visual reference.

## Files
- `index.html` — semantic page structure
- `style.css` — responsive layout, typography, color system, image treatment, animation
- `script.js` — reveal-on-scroll, subtle parallax and cursor glow
- `assets/ASSETS.md` — image asset sources

## Run
No build step is required.

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes
The photography uses remote Unsplash image URLs so the package stays lightweight. Replace the URLs in `index.html` and `style.css` with your own licensed/local images whenever needed.

The design uses Google Fonts:
- Cormorant Garamond
- DM Sans

If the site must work fully offline, download the fonts and photographs and change the references to local files.
