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

## Component vocabulary

- Navigation: transparent over the hero, then a lightly blurred paper surface after scroll.
- Buttons: pill-shaped with Carbon/Slate fills or a Slate 100 border; preserve visible keyboard focus.
- Cards: paper or soft surface fills, Slate 100 borders, restrained shadows, and moderate radii.
- Forms: light surfaces, explicit labels, native validation, and clear success/disclosure copy.

## Motion

- The hero LightRays interaction and the assurance horizontal scroll are the two signature motion moments.
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
