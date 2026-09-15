# Website upgrade progress

Tracking against `public/images/CLAUDE-CODE-WEBSITE-UPGRADE-ROADMAP.md`.

## Checkpoint 1 — Phase A (done, commit `9b35b98`)

- `scripts/build-visual-assets.mjs` + `src/data/visual-assets.ts`: dev-time
  registry of all 193 `generated`-status assets from `HANDOFF-ASSET-INVENTORY.csv`.
- `docs/asset-integration-ledger.csv`: starter ledger, all 193 assets
  `pending-integration` — updated as each phase wires assets in.
- `src/components/logo.tsx`: real angular V mark (`shared/brand/mark`, icon
  only, no text). Name stays **Vedprakash** (not the roadmap doc's own "Ved
  Vishwakarma" text — explicit owner override). `site.tagline` ->
  "Creative AI Specialist".
- Header/footer/mobile menu/theme toggle were already roadmap-compliant
  (keyboard-accessible, active-route underline, compact toggle) — no
  changes needed there.

## Checkpoint 2a — Phase B, Home (done, commit `37973f4`)

- Hero: `home/hero-montage` device composition replaces the old portrait;
  headline copy -> "Design. Automate. Scale."
- Featured strip: new `homeCategories` data (6 categories, not literal
  projects) + `home/thumb-*` assets — these are complete cards with baked
  text, used as-is (bug found + fixed: was duplicating the baked caption).
- What I Build: `home/service-artwork/*` (8 tiles); `websites-uiux` uses
  the Services-page thumbnail instead of the qa-redo-flagged home asset.
- CTA: `home/cta-banner` full-width mountain banner replaces the boxed
  robot-photo treatment (bug found + fixed: was duplicating the banner's
  own baked heading/button with a live overlay).
- Testimonials carousel kept, not itself a roadmap concern.

## Remaining (not started)

- **Phase C — Work `/projects`**: needs a real 9-project data model
  (Reliance Foundation Hospital, Blu Diamond, Claude AI, Custom AI Bots,
  OncoSphere, Realatte AI, Alfamed, Social Media Campaign, ESMO Asia) —
  current `projects` array only has the old 4 generic items. Category
  filters + search, Reliance featured campaign, 4 result stats, mountain CTA.
- **Phase D — Services `/services`**: laptop-hero, compact 10-tile grid,
  featured Claude AI panel, two feature panels, mountain CTA. Current page
  is the old long panel-stack.
- **Phase E — About `/about`**: daylight hero, dated journey, 7 expertise
  tiles (assets still pending — see below), 4 experience cards, 6 industry
  tiles, 3 testimonials, mountain CTA.
- **Phase F — Blu Diamond case study `/projects/blu-diamond`**: new project
  record + dedicated route content — hero, metadata, gallery, 5-step
  workflow, output mockups, results, next-project CTA.
- **Phase G — Contact `/contact`**: workspace hero, channel cards (2 flagged
  needs-review — linkedin/youtube channel-card art, rebuild in HTML),
  inquiry form field-by-field, real submission destination, global banner,
  collaboration steps.
- **Phase H — Tools**: no reference design exists for this page; keep
  current content with the shared visual system, no exact-match claim.

## Known asset gaps (57 pending, never referenced)

Full list in `HANDOFF-ASSET-INVENTORY.csv` rows with `status=pending`.
Notably: all `about/expertise/*` (7), all `contact/fields/*` except `name`,
`contact/service-selector`, `contact/quick-chat-card`, `contact/privacy-note`,
all `shared/footer-icons/*`, and every `*/page-sections/*` (those are
full-page comparison boards, not meant to be inserted as page content
anyway — see roadmap §2 "Both packages have index.html visual galleries...
not intended to be inserted as entire website pages").

## Known qa-redo defects to route around (not fixed at the source)

See `public/images/regenerated-assets-2026-09-14/qa-redo.json` for the
full list (17 items). Already routed around: `home/service-artwork/websites-uiux`.
Still to route around when their pages are built: `work/cards/blu-diamond`,
`work/cards/claude-ai`, `work/cards/realatte-ai` (build live card footers
instead, per roadmap), `home/promo-real-estate`, `contact/channel-cards/
linkedin` + `/youtube`, `contact/cta-banner` ("IDEASS" typo), several
`shared/icons/*` and `shared/filters/*` (rebuild in CSS per roadmap).

## Deliberately excluded

`public/images/reference-assets-2026-09-14/` — mockup-board crops, left
untracked. Includes `about/logos/*.png` (fabricated client logos) and
`shared/brand/wordmark.png` (has the wrong name — "Ved Vishwakarma" —
baked into the pixels). Owner confirmed: ignore entirely.
