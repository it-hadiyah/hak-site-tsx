<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1yJcY5Jd77cjQPUGK5G2jK5tCW1BT1rBs

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

Static build
------------
I converted the React/TypeScript app into a static HTML/CSS/JS version inside the same folder. Files added:

- `index.html` — the static single-page site (Arabic, RTL).
- `styles.css` — site styles extracted from the original design.
- `script.js` — client JS that loads `data.json` and wires navigation and interactions.
- `data.json` — content (nav, services, news, contact) extracted from the React components.

To try the static site locally:

1. Open `index.html` in your browser (double-click) or run a quick static server, e.g. with Python:

```bash
# from project root (macOS / zsh)
python3 -m http.server 5173
# then open http://localhost:5173 in your browser
```

Notes:
- This is a minimal static conversion intended for review; images remain external URLs.
- If you want, I can remove the React source files or move the static build into a `dist/` folder and add a small build script.
