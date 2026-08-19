# Homepage Sections 4–5 Handoff

Dokumen ini adalah handoff implementasi untuk dua section setelah `AssuranceBridge` pada homepage Koderea. Aset sudah diekspor dari Figma dan disimpan secara lokal agar implementasi berikutnya tidak bergantung pada URL MCP yang kedaluwarsa.

## Source of truth

- Figma file: `NrnqOcTW9IWpMh7zn8bpSC`
- Parent node: `204:1744` — `About [ BRIDGING ]`
- Section 4 node: `238:251`
- Section 5 node: `264:834`
- Full reference export: `/home/sections-4-5-figma-reference.png`
- Desktop reference width: `1440px`
- Typeface: Rethink Sans, sudah tersedia melalui konfigurasi font project.

Jangan memasang full reference export sebagai gambar section. Seluruh copy, layout, cards, borders, dan interaction harus dibuat sebagai HTML/CSS/React. Gunakan file lokal hanya untuk ikon, texture, noise, dan layer ilustrasi yang memang diekspor dari Figma.

## Posisi pada homepage

Urutan yang dituju:

1. `Hero`
2. `AssuranceNarrative`
3. `AssuranceBridge`
4. `CriticalAIAdoption` — section baru
5. `IndependentByDesign` — section baru
6. `Authority`
7. `AcademyWaitlist`
8. `ContactCTA`

Tambahkan dua component baru di `src/components/home/`, lalu mount setelah `<AssuranceBridge />` pada `src/app/page.tsx`.

## Shared visual rules

- Background kedua section: `#010101`.
- Primary text: `#FDFDFD`.
- Secondary text: `#E6E6E6`.
- Muted text: `#ADADAD`.
- Grid/border: `#333333`, 1px.
- Radius: 12px, hanya pada outer corners sesuai posisi tile.
- Desktop container section 4: `1145px`.
- Desktop container section 5: `1044px`.
- Jarak antara section 4 dan section 5 pada frame Figma: `200px`.
- Jangan menambah purple gradient pada typography atau background. Accent violet/cyan hanya berasal dari asset ilustrasi.

## Section 4 — Designed for Critical AI Adoption

### Copy

Heading:

> Designed for Critical AI Adoption

Description:

> Koderea applies independent AI assurance across regulated and high-stakes sectors, adapting evaluation to local data, domain risks, and institutional requirements

Cards:

1. `HEALTHCARE`
   - Evaluate AI systems against local clinical context, performance, fairness, and safety requirements before deployment.
2. `FINTECH`
   - Assess AI systems where reliability, fairness, risk, and compliance are critical to deployment decisions.
3. `GOVERNMENT`
   - Support accountable AI adoption across public-sector systems through structured evaluation, governance, and evidence.

### Desktop layout

- Section heading: 48px / 100%, weight 600, tracking `-2%`.
- Description: 20px / 150%, weight 400, tracking `-2%`, centered.
- Gap heading block → cards: 100px.
- Three columns distributed with `justify-between`.
- Column widths: 321px, 320px, 320px.
- Icon → copy gap: 40px.
- Card label: 20px / 130%, weight 500, tracking `4px`.
- Card body: 16px / 150%, color `#ADADAD`.

### Assets

Directory: `public/home/critical-ai-adoption/`

| Card | Local asset | Figma size |
|---|---|---|
| Healthcare | `healthcare-icon.svg` | 50.526 × 60 |
| Fintech | `fintech-icon.svg` | 54.5 × 58 |
| Government | `government-icon.svg` | 80.893 × 59 |

Use `next/image` or a standard `img` with explicit width and height. Do not normalize all three icons into the same width; their differing silhouettes are intentional.

### Responsive behavior

- Tablet: 3 columns may remain if each column is at least 240px; otherwise switch to 2 + 1.
- Mobile: single column, left aligned, 48–56px gap between sectors.
- Mobile heading: use `clamp(2.25rem, 10vw, 3rem)` and keep line height close to 1.05.
- Keep body line length below roughly 36 characters on mobile.

### Motion recommendation

- Section entry: one GSAP/ScrollTrigger timeline; heading and description move from `y: 24` to `0`, then sector items stagger by 90–120ms.
- Icons: Motion.dev hover/focus only, `y: -4`, `scale: 1.03`, duration 240–300ms.
- Do not loop floating animations. The page already has strong signature motion in the hero and assurance sections.
- Reduced motion: render final state immediately.

## Section 5 — Independent by Design

### Copy

Heading:

> Independent by Design

Description:

> Objective, locally grounded assurance for deployment decisions backed by evidence

Tiles:

1. `01` — `Independent Assessment`
   - Vendor-agnostic evaluation designed to preserve objectivity throughout the assurance process.
2. `02` — `Local Context, Global Standards`
   - AI systems are evaluated against local data and institutional requirements while aligned with recognized global frameworks.
3. `03` — `Evidence Before Deployment`
   - Transparent testing and traceable findings provide a defensible basis for AI deployment decisions.

### Desktop layout

- Section width: 1044px.
- Heading: 48px / 120%, weight 600, tracking `-2%`.
- Description: 20px / 150%, tracking `-2%`.
- Gap heading block → bento: 100px.
- Two equal columns: 522px each.
- Row heights: 306px, 330px, 306px.
- Row 1: text left, illustration right.
- Row 2: illustration left, text right.
- Row 3: text left, illustration right.
- Text tile padding: 40px.
- Number: 28px / 120%, weight 600.
- Number → content gap: 60px.
- Tile heading: 32px / 100%, weight 600, tracking `-2%`.
- Heading → body gap: 20px.
- Tile body: 16px / 150%, tracking `-2%`, color `#ADADAD`.

Build the bento as one CSS grid with a shared `#333` background gap of 1px. Avoid applying a full border to every nested element; only the six top-level tiles create the grid seams.

### Illustration asset map

Directory: `public/home/independent-by-design/`

Shared by all visual tiles:

- `texture.png` — monochrome pixel texture fill.
- `pixels.svg` — mask shape for the texture.
- `noise-effect-frame627340.png` — subtle noise overlay; Figma opacity is 5%.

Visual 01 — Independent Assessment:

- `ellipse47041.png`, `ellipse47042.png`, `ellipse47043.png`, `ellipse47044.svg` — concentric glow/rings.
- `vector1194233964.svg`, `vector1194233965.svg` — crosshair axes.
- `group.svg`, `group1.svg` — right-side validation/check control.
- `vector1194233966.svg`, `vector1194233967.svg`, `vector1194233968.svg` — incoming connector lines.
- `ellipse47045.svg` — incoming source dots; reused three times.

Visual 02 — Local Context, Global Standards:

- `vector1194233971.svg`, `vector1194233972.svg`, `vector1194233969.svg`, `vector1194233970.svg` — connector paths.
- `group2.svg`, `group3.svg`, `group4.svg`, `group5.svg`, `group6.svg`, `group7.svg` — small card glyphs.
- `reicon-danger.svg`, `mingcute-government-line.svg` — risk/government glyphs.
- `ellipse47028.svg`, `ellipse47032.svg` — connector endpoints.
- `icon-bare.svg` — Koderea mark inside the central assurance node.

Visual 03 — Evidence Before Deployment:

- `frame2147239519.svg` — bar chart.
- `icon-park-outline-check-one.svg`, `group8.svg`, `group9.svg`, `group10.svg` — check/status and report card glyphs.
- `vector.svg`, `vector1.svg`, `vector2.svg` — internal analytics/flask glyph layers.
- `vector1194233960.svg`, `vector1194233961.svg` — connector path from evidence cards to report.

Asset filenames that retain Figma layer identifiers are intentional. Do not rename them without updating this mapping.

### Building the illustrations

Do not flatten each visual into one PNG. Create three dedicated visual components with a fixed design coordinate system:

- `IndependentAssessmentVisual`
- `LocalStandardsVisual`
- `EvidenceDeploymentVisual`

Recommended implementation:

1. Outer visual tile uses `position: relative`, `overflow: hidden`, and a radial background from `#1A1A1A` at center to `#010101` at edges.
2. Reconstruct the Figma layers with absolutely positioned local assets inside a 522 × 306 or 522 × 330 coordinate system.
3. Scale the entire internal canvas with CSS, preserving aspect ratio. Do not independently stretch individual SVGs.
4. Apply `texture.png` through the `pixels.svg` mask and place `noise-effect-frame627340.png` above it at 5% opacity.
5. Keep important labels and UI cards as real HTML when text must remain readable. Decorative lines, rings, icons, and chart marks should use the exported assets.

### Interaction and motion concept

Motion should communicate the sequence `inputs → assurance → evidence`, not animate every object independently.

- Use one section-level GSAP ScrollTrigger timeline to reveal rows in order 01 → 02 → 03.
- Each row enters with `opacity: 0 → 1` and `y: 28 → 0`; duration 0.65–0.8s using `[0.22, 1, 0.36, 1]` or GSAP `power3.out`.
- Within the active visual, Motion.dev may animate the primary connector with `pathLength` or a moving dot. Keep one active path at a time.
- Visual 01: source dots pulse once, connector draws toward the center, center glow expands, check node confirms.
- Visual 02: left context cards stagger in, lines converge on the assurance node, right standards cards respond with a subtle border luminance.
- Visual 03: three evidence cards activate top-to-bottom, connectors draw into the report, chart bars rise once.
- Hover/focus on a row: lift the entire illustration tile by 2–3px and increase its border/shadow contrast. Do not add hover effects to every small item.
- No continuous orbit, spinning, or permanent glow loop.
- Reduced motion: all layers visible; no path drawing, pulsing, or transforms.

### Responsive behavior

- Desktop: preserve alternating two-column layout.
- Tablet and mobile: each numbered text tile must appear immediately before its matching illustration, producing six stacked tiles.
- Do not horizontally scroll this section.
- Illustration canvas should scale down proportionally; use `aspect-ratio` and hide purely decorative overflow.
- At widths below 640px: tile padding 24px, heading 26–28px, body 15–16px.

## Component structure

Suggested files:

```text
src/components/home/
├── CriticalAIAdoption.tsx
├── IndependentByDesign.tsx
└── independent-by-design/
    ├── IndependentAssessmentVisual.tsx
    ├── LocalStandardsVisual.tsx
    └── EvidenceDeploymentVisual.tsx
```

Keep section copy in data arrays so ordering and responsive alternation are not duplicated. Reuse the current project conventions:

- `motion/react` for component-level interaction.
- `gsap`, `ScrollTrigger`, and `@gsap/react` for scroll timelines.
- `useReducedMotion` or `gsap.matchMedia("(prefers-reduced-motion: reduce)")` for accessibility.
- Existing `bg-paper`, `text-carbon`, and Rethink Sans setup where applicable; these two sections intentionally override to the dark palette listed above.

## Acceptance checklist for the next agent

- Section 4 and 5 render after `AssuranceBridge` and before `Authority`.
- All visible text is HTML, not baked into an image.
- All Figma assets resolve from `/home/...`; there are no temporary `figma.com/api/mcp/asset` URLs.
- Desktop proportions match the reference export at 1440px.
- Mobile layout is intentionally stacked and has no page-level horizontal overflow.
- Keyboard focus produces visible feedback for interactive rows/cards.
- `prefers-reduced-motion` produces a stable static layout.
- Console has no warnings/errors.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

