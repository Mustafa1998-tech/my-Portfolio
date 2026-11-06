# Video 2026 portfolio direction

User target: update Mustafa’s existing GitHub portfolio to resemble the lower 2026 portfolio in the attached video.

Primary reference: attached video, 12-second frame. Preserve the near-black canvas, orange photographic hero, oversized white name, compact navigation and high-contrast project presentation. Use Mustafa’s existing portrait and real projects, retaining Arabic/English, CV links, filters, tabs and dialogs. The video does not reveal all pages or motion, so unseen details are adaptations rather than exact reproductions.

Secondary reference: Refero bundled typography guidance: one self-hosted family, consistent hierarchy, readable dark text contrast and responsive type. No live Refero tools available.

| Decision | Source | Role |
| --- | --- | --- |
| Charcoal #101010, white #f5f4ef | Video 2026 | page canvas / primary text |
| Orange #f18442 | Video hero | photo treatment and small active accents |
| Oversized name over real portrait | Video hero | primary visual signature |
| Wide desktop layout, thin dividers | Video screen | navigation and project presentation |
| Existing IBM Plex Arabic | repository + typography reference | bilingual body and display |

Implementation uses static HTML/CSS with existing JavaScript. No dependencies, invented projects or external images. A dedicated branch provides a reviewable change without triggering main’s production deployment.
