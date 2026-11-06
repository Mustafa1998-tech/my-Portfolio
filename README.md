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
- `assets/live/`: small WebP previews for the live-sites section (deployed Vercel projects).
- `assets/fonts/`: self-hosted IBM Plex Sans Arabic and its OFL license.
- `profile.jpg` and `Mustafa_CV_Updated_*.pdf`: the original photo and CVs, preserved unchanged.

The existing portfolio supplies the portrait, education, employment history, contact details and public repositories. Current work is summarized without internal infrastructure or credentials. The workflow graphic is explicitly conceptual. Cloud is an active learning direction, not a certification claim.

## 2026 visual redesign

The attached video’s lower 2026 portfolio is the visual reference: a near-black canvas, orange duotone portrait, oversized white name, compact navigation and wide project previews. Mustafa’s original photo is treated in CSS; the original asset is unchanged. Existing Arabic/English content, projects, contact details, CVs and JavaScript interactions are preserved.

The video does not expose the full site, so project layouts and unseen sections are adaptations. The design uses the existing local IBM Plex Arabic family and Refero’s bundled typography guidance; live Refero tools were unavailable.

Validation on this branch: Chromium browser checks in both languages at 320, 390, 540, 768, 801, 820, 1024, 1440, 1600 and 1920 px; no horizontal overflow. Verified navigation/Escape, filters, project expansion, keyboard tabs, dialogs/Escape, email copying, CV URLs, saved language preference, reduced motion and image loading. No page errors or failed asset requests. Production deployment is pending integration of the review branch.

## Deployment

The existing Vercel integration deploys `main`. Keep the **Other** framework preset, no build command, and the repository root as output. `vercel.json` preserves URL behavior.

## Verification

Check both languages and saved preference, mobile navigation, project filters and expansion, expertise tabs (including arrow keys), case study close/Escape/focus return, both CV files, email/phone links, and narrow-screen overflow.

No trackers, analytics, forms, server dependencies or external font requests.
