# مصطفى أنور — Personal Portfolio

Arabic-first bilingual portfolio focused on software development, enterprise systems, operations, and a learning path toward Google Cloud and DevOps.

**Live site:** https://mustafaportfolio-rose.vercel.app/

## Local preview

Buildless HTML, CSS and JavaScript. No packages, secrets or build command are needed.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Clipboard copying requires HTTPS or localhost and has a readable fallback.

## Files

- `index.html`: bilingual content, ten original project links and high-level case studies.
- `style.css`: responsive layout, design tokens, focus and reduced-motion styles.
- `script.js`: language preference, project filtering, tabs, mobile navigation, dialogs and email copying.
- `assets/fonts/`: self-hosted IBM Plex Sans Arabic and its OFL license.
- `profile.jpg` and `Mustafa_CV_Updated_*.pdf`: the original photo and CVs, preserved unchanged.

The existing portfolio supplies the portrait, education, employment history, contact details and public repositories. Current work is summarized without internal infrastructure or credentials. The workflow graphic is explicitly conceptual. Cloud is an active learning direction, not a certification claim.

The design keeps the original light canvas and portrait, adopts the owner's green preference, and follows Refero's bundled typography and anti-generic-design craft guidance. Live Refero references were unavailable. The primary design choices are a white canvas, forest-green actions, IBM Plex Arabic, thin dividers, restrained motion and keyboard-accessible interactions.

## Deployment

The existing Vercel integration deploys `main`. Keep the **Other** framework preset, no build command, and the repository root as output. `vercel.json` preserves URL behavior.

## Verification

Check both languages and saved preference, mobile navigation, project filters and expansion, expertise tabs (including arrow keys), case study close/Escape/focus return, both CV files, email/phone links, and narrow-screen overflow.

No trackers, analytics, forms, server dependencies or external font requests.
