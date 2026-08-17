# Koderea Web Design Foundation

## Register and purpose

Koderea's homepage is a brand-led company profile with commercial paths into enterprise conversations and the Academy. It should feel technically credible, calm, and contemporary without becoming a dashboard or a dense brochure.

## Visual principles

- Light mode is the default reading environment; dark surfaces are reserved for high-contrast calls to action and the footer.
- Use generous whitespace and short, concrete copy. Avoid repeated card grids and decorative UI that does not explain the company.
- Rethink Sans is the sole brand typeface. Large headings use compact leading and negative tracking; paragraphs use approximately 130% leading.
- Use the approved neutral scale: Carbon `#0C0F12`, Slate 900 `#111418`, Slate 700 `#1E2530`, Slate 500 `#3A4455`, Slate 300 `#7A8699`, and Slate 100 `#E2E7EF`.
- Official logo artwork lives in `public/brand`. Do not recreate the wordmark as text.
- Assurance process artwork lives in `public/assurance` and is sourced from the approved Figma design.
- The assurance bridge diagram lives in `public/bridging` as an exact local SVG export. Preserve its complete input → assurance layer → output story; mobile presents it as a horizontally scrollable diagram rather than shrinking its labels below legibility.

## Component vocabulary

- Navigation: a 69px paper surface with the official gradient mark and compact 14px labels. Product, Academy, and Event are direct page links; Solutions and Resource use compact dropdown panels. Dropdowns support hover, focus, click, and mobile disclosure states.
- Hero buttons: 12px radius, Rethink Sans Medium, 120% leading, -2% tracking, and the approved monochrome radial fill with an inset highlight. Large campaign buttons may use the 37px pill variant from Figma node `81:144`.
- Cards: paper or soft surface fills, restrained shadows, and moderate radii. Borders are optional framing, not a hover treatment; prefer elevation and small transforms for interactive emphasis.
- Forms: light surfaces, explicit labels, native validation, and clear success/disclosure copy.

## Motion

- The hero uses a lightweight monochrome radial signal field above the approved horizon artwork; the assurance horizontal scroll remains the second signature motion moment.
- Hero signals are deterministic 2D CSS transforms. Do not replace them with Three.js, WebGL, or invented 3D assets.
- The hero uses one short sticky GSAP ScrollTrigger beat on tablet/desktop: content recedes, the horizon rises, and signals expand outward with smoothed scrub. Use CSS sticky rather than ScrollTrigger pinning so the following section retains normal flow.
- After the hero exit reaches 90% while scrolling forward, a short GSAP ScrollTo transition closes the remaining sticky spacer and lands directly on the V&V Assurance Process. It must not trigger while scrolling upward, on mobile, or with reduced motion.
- GSAP horizontal sections pin a dedicated viewport, animate a single track, and calculate travel from actual scroll width.
- Mobile and reduced-motion modes expose all content vertically without pinning.
- Ordinary hover and state feedback stays within 150–350ms and favors transform/opacity.

## Anti-patterns

- No purple/cyan gradient identity, 3D objects, fake metrics, fake client logos, glass-card collages, emoji icons, or invented visual proof.
- Do not add new dark sections merely for drama.
- Do not hide essential content behind motion or pointer-only interactions.

## Source of truth

- Brand palette and type guide supplied by Koderea Brand Design.
- Assurance composition: [Figma node 71:5087](https://www.figma.com/design/NrnqOcTW9IWpMh7zn8bpSC/Design-for-Koderea?node-id=71-5087).
- Hero composition: [Figma node 126:775](https://www.figma.com/design/NrnqOcTW9IWpMh7zn8bpSC/Design-for-Koderea?node-id=126-775).
- Hero CTA: [Figma node 126:797](https://www.figma.com/design/NrnqOcTW9IWpMh7zn8bpSC/Design-for-Koderea?node-id=126-797).
- Global navigation: [Figma node 204:1170](https://www.figma.com/design/NrnqOcTW9IWpMh7zn8bpSC/Design-for-Koderea?node-id=204-1170).
- Assurance bridge: [Figma node 204:1943](https://www.figma.com/design/NrnqOcTW9IWpMh7zn8bpSC/Design-for-Koderea?node-id=204-1943).
