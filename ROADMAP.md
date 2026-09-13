# KUNAL Portfolio — Upgrade Roadmap (Claude Code)

Use this file as the source of truth. Work **one phase at a time**. Do not skip ahead. Do not rebuild the site. Do not add a second backend (no Express, Firebase, WordPress, custom Node API).

**Repo:** https://github.com/vedv0987-cloud/kunal-portfolio  
**Brand:** red `#E11D2E` · ink black · white · Plus Jakarta Sans  
**Tagline:** Ideas to Intelligent Solutions · Build · Automate · Grow

---

## How to run this in Claude Code

```text
1. Clone vedv0987-cloud/kunal-portfolio
2. Open the repo in Claude Code
3. Say: "Read ROADMAP.md. Execute Phase 0, then stop and show me the checklist."
4. After you approve a phase, say: "Execute Phase N. Follow ROADMAP.md. Do not skip acceptance checks."
```

Paste this at the start of a new Claude Code session:

```text
You are upgrading the KUNAL portfolio. Read ROADMAP.md fully before editing.
Rules:
- Keep the existing red/black/white design. Do not restyle from scratch.
- Keep TanStack Start + Vercel. No Express / Firebase / WordPress.
- Auth stays OFF unless a phase explicitly turns it on.
- Tokens live in src/styles.css. No raw hex in JSX.
- Do not delete public/__grok, server/, scripts/grok-pwa-*, src/lib/auth, src/lib/db.
- After each phase: npm run typecheck must pass, and the UI must still work on mobile (~390px).
- Commit after each phase with the message format in this file.
```

---

## Current state (do not regress)

| Area | Today |
|---|---|
| Framework | React 19 + TanStack Start + Tailwind v4 |
| Deploy target | Vercel (`vite.config.ts` nitro preset) |
| Pages | `/` `/about` `/services` `/projects` `/projects/$slug` `/tools` `/testimonials` `/contact` |
| Content | Hardcoded in `src/data/content.ts` |
| Contact | Client-only `localStorage` (`kunal-inquiries`) via `src/lib/storage.ts` + `src/components/contact-form.tsx` |
| Theme | Light/dark, stored in `localStorage` (`kunal-theme`) |
| Auth / DB | Wired in `src/lib` but **unused**. Keep unused. Do not import `authMiddleware` unless Phase 6. |
| Look | Strong desktop hero, service cards, project case studies, testimonial carousel |

**Pain:** briefs never leave the visitor’s browser. No booking. No analytics. Copy is placeholder. Motion is light. SEO is thin.

---

## Target (award-winning, smooth, powerful)

A studio-grade personal site that:

1. Sends a real email when someone submits a brief
2. Lets a serious lead book a call in 2 clicks
3. Feels instant (no layout jump, no jank, no spam CAPTCHA wall)
4. Tracks which projects convert
5. Is easy to update (content in one file, or a thin CMS later)
6. Looks like the current design — just tighter, faster, more real

**North-star stack (final):**

```text
TanStack Start  →  Vercel
Resend          →  email you the brief
Cal.com         →  book a call
Turnstile       →  invisible spam filter
Neon            →  durable inquiry store (optional until Phase 5)
PostHog or Vercel Analytics → what people click
```

---

## File map (edit these, not random new trees)

```text
src/data/content.ts                         all copy, projects, services, socials
src/lib/storage.ts                          local drafts + theme
src/components/contact-form.tsx             form UI
src/routes/contact.tsx                      contact page
src/components/sections/hero.tsx            home hero
src/components/sections/cta-testimonials.tsx
src/components/layout/site-header.tsx
src/components/layout/site-footer.tsx
src/styles.css                              tokens + motion
src/routes/__root.tsx                       head, fonts, toaster
```

New files only when a phase names them.

---

## Non-negotiables

- Do **not** change the visual language (red pills, black bars, rounded-2xl/3xl cards).
- Do **not** add purple, gold, mesh gradients, emoji-as-icons, or Inter-everything restyles.
- Do **not** enable auth for “saving contact forms.” localStorage drafts + email is enough until Phase 6.
- Do **not** create `.env` in git. Use `.env.local` (gitignored). Document keys in this file.
- Do **not** put secrets in `VITE_*` except public keys (Turnstile site key, PostHog project key).
- Icons: `lucide-react` only (`src/components/icons.tsx`).
- Mobile: 390×844, no horizontal overflow, tap targets ≥ 44px.

---

## Phase 0 — Inventory and safety (30 min)

**Goal:** Claude Code understands the repo and nothing is broken.

### Tasks

1. Read `README.md`, `package.json`, `src/data/content.ts`, `src/components/contact-form.tsx`, `src/styles.css`.
2. Run `npm install` then `npm run typecheck`.
3. Confirm routes render: Home, About, Services, Projects, a project slug, Tools, Testimonials, Contact.
4. List env keys that will be needed later (do not add them yet):

```text
RESEND_API_KEY
CONTACT_TO_EMAIL
CALCOM_URL
TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
POSTHOG_KEY            (or Vercel Analytics — pick one in Phase 4)
DATABASE_URL            (Phase 5 only)
```

### Acceptance

- [ ] Typecheck passes
- [ ] No new files
- [ ] Short report: “what exists / what Phase 1 will touch”

### Commit

```text
chore: inventory current kunal portfolio before upgrades
```

---

## Phase 1 — Real contact (Resend)  ★ highest leverage

**Goal:** Submitting “Save brief” emails Kunal and still keeps a local draft.

### Product

- Form still captures: name, email, service, budget, message.
- On submit:
  1. Validate on the client (existing checks).
  2. Call a **server function** `submitInquiry`.
  3. Server sends email via Resend to `CONTACT_TO_EMAIL` (default `hello@kunal.build`).
  4. Reply-To = the visitor’s email.
  5. On success: keep saving to `localStorage` as a personal copy + toast “Brief sent.”
  6. On failure: toast the error, still save local draft so nothing is lost.

### Implement

1. Add `resend` package.
2. Create `src/lib/email.ts` (server-only) — `sendInquiryEmail(inquiry)`.
3. Create `src/lib/inquiries.server.ts` — TanStack Start server function `submitInquiry`.
   - Rate-limit: max 5 posts / IP / hour (in-memory is fine).
   - Reject empty/too-long fields (name 2–80, message 20–2000).
   - Never trust a client-sent “to” address.
4. Update `src/components/contact-form.tsx`:
   - Button label: **Send brief**
   - Disable while pending
   - Keep download/clear of local drafts
5. Document keys in README:

```text
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=hello@kunal.build
```

### Email template (plain + simple HTML)

```text
Subject: New brief — {service} — {name}
From: KUNAL site <noreply@your-verified-domain>
Reply-To: {email}

Name / Email / Service / Budget / Message / submittedAt
```

### Acceptance

- [ ] Submit from `/contact` sends an email
- [ ] Invalid email never hits Resend
- [ ] Failure still stores a local draft
- [ ] No API key in client bundle (`RESEND_API_KEY` must not start with `VITE_`)
- [ ] Typecheck passes

### Commit

```text
feat: send contact briefs through Resend
```

---

## Phase 2 — Book a call (Cal.com)

**Goal:** Serious leads can schedule without email tennis.

### Product

- Header **Let’s Talk** stays as `/contact`.
- On `/contact` and the home CTA card, add a second action: **Book a call** (outline button).
- Opens Cal.com in a new tab **or** an embed in a dialog. Prefer embed if it stays fast; otherwise a clean new-tab is better than a slow iframe.

### Implement

1. Add `calcomUrl` to `src/data/content.ts` (placeholder `https://cal.com/kunal` until the real username exists).
2. `src/components/book-call-button.tsx` — reused on contact + CTA.
3. Optional: `@calcom/embed-react` only if the embed does not tank LCP. If it does, link out.
4. Footer already has socials — leave them.

### Acceptance

- [ ] Book a call is visible on home CTA and `/contact`
- [ ] Works on mobile
- [ ] Contact form still works
- [ ] No Cal.com script on pages that don’t need it

### Commit

```text
feat: add Cal.com booking on contact and CTA
```

---

## Phase 3 — Spam + polish the form (Turnstile)

**Goal:** Bots die, humans never notice.

### Implement

1. Cloudflare Turnstile (invisible / managed).
2. Site key in `VITE_TURNSTILE_SITE_KEY`. Secret in `TURNSTILE_SECRET_KEY`.
3. Verify token **on the server** inside `submitInquiry` before sending email.
4. If Turnstile env is missing in local dev, skip verify (log a warning) so the form still works offline.

### Acceptance

- [ ] Production rejects missing/invalid tokens
- [ ] Local dev still submit-able
- [ ] No Google reCAPTCHA, no puzzle UI

### Commit

```text
feat: protect inquiry form with Turnstile
```

---

## Phase 4 — Smoothness, motion, SEO (the “award” layer)

**Goal:** The site *feels* expensive. No new product surface.

Do these in order. Stop if you start restyling colors.

### 4A — Motion (CSS only, no new animation library)

In `src/styles.css` (tokens already exist):

- Hero: keep `.rise-in` / `.float-y`, respect `prefers-reduced-motion`
- Cards: hover `-translate-y-0.5` already — keep duration 200ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`
- Buttons: existing `active:scale-[0.96]` — do not go below 0.95
- Testimonial swap: fade + 8px translateY, 200ms
- Page enter: optional 200ms fade on `<main>` children only — not the header

### 4B — Performance

- Give every `<img>` explicit `width`/`height` or `aspect-*` (hero already has aspect)
- `loading="lazy"` on below-fold images (projects, avatars, about desk). **Not** on the hero portrait
- `fetchPriority="high"` on hero portrait
- Preload `/images/hero-portrait.jpg` in `__root.tsx` head links
- Do not lazy-load fonts beyond the current Google Fonts link

### 4C — SEO / share

- Unique `<title>` + meta description per route (`__root` default, override in each `createFileRoute` `head`)
  - Home: `KUNAL — Ideas to Intelligent Solutions`
  - Project: `{project.title} — KUNAL`
- Keep `public/og.jpg` and `src/lib/og/site.json` as-is
- Add `public/robots.txt` allowing `/` (never `Disallow: /`)
- Add `public/sitemap.xml` with the 8 public routes

### 4D — Microcopy that feels real

Edit `src/data/content.ts` only if the user provided real copy. If not, tighten placeholders — do not invent fake clients with real company names.

### Acceptance

- [ ] Reduced-motion users see no float/blur
- [ ] Home LCP is the hero image, not a webfont flash
- [ ] Each route has its own title
- [ ] Mobile still has no horizontal overflow

### Commit

```text
feat: motion, image priority, and per-route SEO
```

---

## Phase 5 — Durable inquiries (Neon) — only if email is not enough

**Goal:** Briefs survive across devices. Skip this phase if Resend + mailbox is enough.

Auth stays **OFF**. Rows are unowned (no `user_id`). No delete-all endpoint.

### Implement

1. `migrations/0002_inquiries.sql`

```sql
create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service text not null,
  budget text not null,
  message text not null,
  created_at timestamptz not null default now()
);
```

2. Insert inside `submitInquiry` after email succeeds.
3. Do **not** expose a public list of inquiries.
4. Keep localStorage as the visitor’s own copy.

### Acceptance

- [ ] A submit writes one row
- [ ] No `authMiddleware` imported
- [ ] No admin UI yet

### Commit

```text
feat: persist inquiries to neon
```

---

## Phase 6 — Private inbox (auth ON, optional)

**Only if Kunal wants to read briefs on the site.** This is the first time auth is allowed.

### Product

- `/inbox` — list inquiries. No public link in the nav.
- Gated with existing Better Auth (`src/lib/auth`).
- Only `context.userId` that matches an allow-list email (`INBOX_ALLOW_EMAIL=hello@kunal.build`) can read.
- No public registration.

### Acceptance

- [ ] Logged-out visitors hitting `/inbox` see a sign-in wall, not data
- [ ] Queries filter by verified identity, never a client-sent id
- [ ] Nav/footer do not link to `/inbox`

### Commit

```text
feat: private inquiry inbox behind auth allow-list
```

---

## Phase 7 — Analytics

Pick **one**:

| Choice | When |
|---|---|
| **Vercel Analytics** | Simplest, page views only |
| **PostHog** | If you want “clicked Book a call” / “submitted brief” events |

Events to track (names frozen):

```text
brief_submitted
book_call_clicked
project_opened          { slug }
cta_start_project
```

Load analytics in `__root.tsx` after first paint. Never block LCP.

### Commit

```text
feat: add conversion analytics
```

---

## Phase 8 — Content that matches a real studio (needs Kunal)

Claude Code must **not** invent fake case studies as if they shipped. Replace placeholders only with copy the user provides.

Collect from Kunal:

- [ ] Real name / photo (or keep current generated hero)
- [ ] Real email + Cal.com username
- [ ] 4 real projects: problem, solution, result, stack, image
- [ ] 3–4 real testimonials (name, role, quote, permission)
- [ ] Real LinkedIn / Instagram / GitHub URLs in `socials`
- [ ] Location line if not “Available worldwide”

Edit **only** `src/data/content.ts` + `public/images/*`.

### Commit

```text
content: replace placeholder copy and project images
```

---

## Phase 9 — Launch checklist

- [ ] Custom domain on Vercel (e.g. `kunal.build`)
- [ ] Resend domain verified (SPF + DKIM) — else mail lands in spam
- [ ] Cal.com event type: 20-min intro, timezone Asia/Kolkata + auto-detect
- [ ] Favicon + OG card (`public/favicon.svg`, `public/og.jpg`) still valid
- [ ] `npm run build` and `npm run typecheck` pass
- [ ] Contact form tested from a real phone
- [ ] Dark mode: black CTA/services bar still black
- [ ] GitHub repo README updated with env vars (no secret values)

---

## Suggested order if time is short

```text
Must     Phase 1 Resend + Phase 2 Cal.com
Should   Phase 3 Turnstile + Phase 4 motion/SEO
Nice     Phase 7 analytics + Phase 8 real content
Later    Phase 5 Neon + Phase 6 inbox
```

If only one sitting: **Phase 1 + Phase 2**. That is what makes the site feel powerful.

---

## Env template (create `.env.local`, never commit)

```bash
# Phase 1
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@kunal.build

# Phase 2
# public URL only — put the real value in src/data/content.ts or:
VITE_CALCOM_URL=https://cal.com/kunal

# Phase 3
VITE_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

# Phase 5
DATABASE_URL=

# Phase 6
INBOX_ALLOW_EMAIL=hello@kunal.build

# Phase 7
VITE_POSTHOG_KEY=
VITE_POSTHOG_HOST=https://us.i.posthog.com
```

---

## Out of scope (refuse if asked mid-upgrade)

- Rewriting in Next.js / Framer / Webflow
- Adding a blog before Phases 1–2 exist
- Chatbot widget on the marketing site
- Crypto / token-gated pages
- Changing the red brand to purple “because AI”
- Exposing inquiries in a public JSON route

---

## Definition of done (whole upgrade)

A visitor can land on Home, understand the offer in 5 seconds, open a project, send a brief that hits email, or book a call — on a phone — without spam, jank, or a fake form.
