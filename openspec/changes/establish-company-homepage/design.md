## Context

Koderea is in a rapid-prototyping phase for a real company. The homepage must launch quickly while
remaining credible enough for enterprise, public-sector, vendor, speaker, and learner audiences.
Branding is being developed in parallel. Detailed service and platform functionality has not been
fully designed, and no public evidence inventory has been confirmed.

The Company Profile and Homepage PRD agree that the website is a company storefront with four
business lines, lead generation, speaker conversion, and future Academy integration. They differ in
emphasis: the Company Profile makes AI Assurance & Validation the main differentiator, while the PRD
currently makes Academy the primary hero action. The product discussion resolves that conflict in
favor of a company-first hero while keeping Academy prominent as the near-term commercial path.

The intended experience must also demonstrate meaningful frontend craft. Motion.dev is required to
explain component state or relationships, GSAP is required for a signature scroll-based explanation,
icons must come from a professional library, and no part of the result may rely on generic AI-design
patterns.

## Goals / Non-Goals

**Goals:**

- Create one coherent, implementation-ready homepage concept and requirement baseline.
- Explain Koderea before presenting a class or conversion offer.
- Make AI Assurance & Validation the strongest brand narrative without claiming a finished product.
- Provide a visible, honest commercial path to Academy classes.
- Make motion clarify hierarchy, state, causality, or process.
- Enable fast visual iteration while branding and content mature.
- Protect credibility through explicit evidence, maturity, and asset rules.
- Preserve modular boundaries for events, Academy, inquiries, and future authentication.
- Deliver a responsive, accessible, reduced-motion-safe, and performance-bounded experience.

**Non-Goals:**

- Building the Academy learning portal, authentication, checkout, certificates, or paid recordings.
- Designing detailed AI Assurance platform functionality or fabricating a product dashboard.
- Selecting production CMS, database, email, analytics, CAPTCHA, or hosting vendors.
- Publishing unapproved client/partner logos, government names, metrics, case studies, or testimonials.
- Creating a full permanent design system before the parallel branding work is approved.
- Copying complete marketing sections, assets, or claims from `faiz-ui-app` or reference websites.
- Adding smooth-scroll hijacking, custom cursors, horizontal scrolling, multiple pinned scenes, or
  decorative WebGL experiences.

## Decisions

### D-001: Treat the latest explicit product decision as authoritative

Decision precedence is: explicit discussion decisions, Company Profile positioning, Homepage PRD
functional/NFR requirements, then references. This keeps the PRD useful without preserving its
Academy-first hero decision after that decision was explicitly revised.

All website copy is English. `AI Assurance & Validation` and `V&V` are canonical terms. `V2V` is not
used unless stakeholders later establish it as a distinct approved term.

### D-002: Use a company-first conversion architecture

The default page flow is:

1. Optional live-cohort notice, shown only when real class data exists.
2. Sticky header.
3. Company hero.
4. Conditional credibility strip.
5. Who We Are.
6. What We Do capability explanation.
7. From Claim to Evidence assurance narrative.
8. Who We Work With.
9. Work, partnerships, or methodology fallback.
10. Speaking & Authority.
11. Koderea Academy.
12. Start a Conversation.
13. Footer.

Academy appears after company identity and authority are established. It remains reachable from the
navigation, secondary hero CTA, and an optional live-cohort notice so commercial discovery is not
buried.

### D-003: Keep capability maturity honest

The four capabilities are not presented as equally mature products:

| Capability | Strategic role | Safe default until approved |
|---|---|---|
| AI Assurance & Validation | Flagship differentiator | Describe the approach and invite a conversation; do not claim production readiness. |
| AI Consulting & Strategy | Active supporting service | Describe only confirmed readiness/advisory services. |
| Koderea Academy | Near-term commercial focus | Show a real class if complete metadata exists; otherwise show a waitlist. |
| AI Software Solutions | Long-term direction | Present as selective or future capability, never as a mature product catalogue. |

The Company Profile says the V&V platform is ready and waiting for clients, but the latest discussion
states that features are not yet developed in detail. The public site therefore defaults to the more
conservative language above until management approves an exact availability label.

### D-004: Use the selected company-first hero

Working copy role:

```text
Koderea helps organizations adopt AI with evidence,
clarity, and local context.

We combine AI assurance, strategic advisory, selective software,
and practitioner-led learning for responsible adoption in Indonesia.
```

Primary action: `Explore our capabilities`.

Secondary action: `View Academy`.

Header action: `Start a conversation`.

The wording remains editable through content configuration, but its company-first hierarchy is a
locked requirement.

### D-005: Keep the visual direction reference-led and explicitly unselected

Every generated Koderea concept produced before this decision is rejected as an implementation
baseline. The current visual target is derived from the supplied SocialX and Dribbble references:
light mode, modern sans-serif typography, large whitespace, one clear message, and at most one focal
asset or interaction per viewport. Modernity must come from proportion, scale, typography, and
pacing—not from layered technical panels, metadata, or visible requirement density.

The hero defaults to a typography-first composition while no approved real asset exists. Later
sections may use one real photograph, actual screenshot, approved document artifact, or audited
ready-made component as a focal point. A signature visual is not approved until its implementation
source and mobile/reduced-motion behavior are known. There is no active visual baseline until the
user explicitly approves a new exploration.

### D-006: Keep design tokens semantic until a visual direction is approved

Locked token roles are limited to light base surface, near-black primary text, muted text, divider,
one accent, and optional pale accent tint. Exact hex values, font family, radius scale, shadow scale,
and grid measurements remain open. The visual references favor a geometric or humanist modern sans,
short body copy, flat surfaces, subtle dividers, and sparse shadow.

Desktop sections should generally give one scene enough vertical space to dominate the viewport.
Cards are not a default layout primitive. Media may use generous radius when the media is real and
the reference direction supports it. Branding can replace every provisional token without changing
semantic markup or behavior.

### D-007: Explain capabilities without showing four competing promotional cards

`What We Do` presents one dominant capability explanation at a time or uses an editorial sequence
with equivalent visual focus. It must not render four equal promotional cards that compete in one
viewport. The exact desktop composition remains open until visual approval. Mobile preserves the
same information through a simple accessible sequence, accordion, or disclosure pattern.

### D-008: Assign animation ownership before implementation

| Layer | Owner | Responsibility |
|---|---|---|
| CSS | Browser/CSS | Color, underline, focus ring, and simple press feedback. |
| React state | Motion.dev | Navigation, capability selection, layout transitions, drawers, accordions, form state, and local entrance/exit. |
| Scroll narrative | GSAP + ScrollTrigger | One signature `From Claim to Evidence` timeline. |
| Optional focal recipe | Audited source component | Isolated component whose source, license, performance, and fallback are known. |
| Icon paths | Lucide Animated / Motion | Hover, focus, tap, or active-state icon feedback. |

One DOM node must not be controlled by more than one animation engine for the same property. When an
element needs both scroll entry and local interaction, ownership is separated through nested wrappers.

### D-009: Make Motion.dev clarify local state and hierarchy

If capabilities use selectable states, Motion.dev may coordinate the active cue and the outgoing and
incoming explanation. The exact component and animation are selected only after visual approval.
Transitions use restrained ease-out timing without bounce, elastic behavior, or repeated ambient
motion.

Motion also owns the mobile navigation, Academy detail transition, optional class drawer, and form
success/error state. It is not used to apply the same fade-up effect to every section.

### D-010: Reserve GSAP for one signature assurance scene

The `From Claim to Evidence` scene communicates a conceptual approach, not a live product UI:

1. `Define`: context, need, and AI claim enter the frame.
2. `Test`: evaluation criteria and scenarios become visible.
3. `Validate`: outcomes, anomalies, risk, and guardrail signals are inspected.
4. `Evidence`: the result becomes an inspectable decision artifact.

Desktop may use one pinned, scrubbed timeline. Tablet uses a non-pinned triggered sequence. Mobile
and reduced-motion modes show four readable static or lightly revealed snapshots. Native scrolling is
preserved; no Lenis or other scroll-smoothing layer is introduced.

### D-011: Gate every focal asset and ready-made component by feasibility

Custom 3D, WebGL, shader, or asset engineering from scratch is outside the rapid-prototype scope. A
ready-made React Bits or other source component remains allowed when it directly supports the
approved composition, requires only bounded configuration, has an acceptable license and dependency
graph, and preserves mobile and reduced-motion behavior. No library component is mandatory, and no
component may become the concept merely because it is easy to install.

### D-012: Use one professional icon language

Lucide and Lucide Animated are the only general-purpose icon family. Initial semantic mapping is
provisional:

| Meaning | Icon |
|---|---|
| Assurance | `ShieldCheck` |
| Consulting | `Compass` |
| Software | `Blocks` |
| Academy | `GraduationCap` |
| Event date | `CalendarDays` |
| Speaking | `Mic` |
| Contact submit | `Send` |
| Text link | `ArrowRight` |
| Mobile navigation | `Menu` and `X` |

Icons animate once on hover, focus, tap, or state activation. They do not autoplay or loop. Emoji,
mixed icon families, generic brain icons, and decorative icon tiles are prohibited.

### D-013: Use `faiz-ui-app` as a primitive foundation, not a visual template

Reusable candidates include Button, Field, Input, Textarea, Sheet, Tabs, Accordion, Dialog, Toast,
focus behavior, responsive behavior, and motion helpers. The floating header and layered-card hero are
not defaults for Koderea. Koderea must not copy Faiz marketing composition, copy, dashboard artwork,
remote assets, fake metrics, logo clouds, claims, Hugeicons, or unverified third-party assets.

The new application should use layers similar to:

```text
app/                         route composition and metadata
components/ui/               accessible primitives
components/koderea/          brand-specific sections and diagrams
components/motion/           scoped Motion/GSAP scenes and policy
content/                     config-driven copy, services, classes, and links
lib/                         integrations, validation, and shared utilities
```

The exact scaffold and package versions are confirmed when the application repository is initialized.

### D-014: Separate content data from presentation

Hero copy, navigation, service maturity, CTA URLs, class data, social links, and contact categories are
configuration-driven. The initial implementation may use typed local data. The component APIs must
remain compatible with a future CMS or API source.

The featured events boundary remains `GET /api/v1/events/featured`, but the prototype may use local
data or an external registration destination. B2B and speaker inquiries use a separate flow from
Academy registration.

### D-015: Preserve readability without animation or proof assets

All information and actions remain complete with JavaScript animation disabled. Reduced motion skips
pinning, scrubbing, parallax, continuous effects, and icon path animation. Hover is never the only way
to discover information.

If no publishable proof exists, the credibility strip is removed and the work section becomes a
methodology or engagement-model section. It must never be filled with placeholder logos, invented
results, or generic stock imagery.

### D-016: Keep analytics implementation deferred but make actions trackable

The user explicitly deferred analytics work. The MVP therefore does not select or integrate an
analytics provider, but interactive elements use stable action identifiers and preserve source intent
so a later analytics change can be added without redesigning the UI.

### D-017: Use OpenSpec as the change boundary

This change contains all currently approved homepage behavior. New branding, revised service status,
confirmed class data, backend provider selection, or material IA changes are introduced as separate
OpenSpec changes or explicit updates to this change before implementation.

## Visual Reference Status

There is currently no approved Koderea visual baseline. All generated concept boards under
`design/` were historical rejected exploration and have been removed from the production repository.
They must not guide implementation.

The active implementation establishes the current taste constraints: light surfaces, large
whitespace, modern sans-serif typography, one accent, simple navigation, and one focal idea per
viewport. A future Koderea exploration must include a source map for every focal asset or ready-made
component and must receive explicit user approval before it becomes a baseline.

## Locked, Provisional, and Open Inputs

### Locked

- Company-first hero and English public copy.
- Assurance-led positioning with Academy as a visible commercial offering.
- Light-mode, modern, minimal, spacious, content-led presentation.
- One dominant message and at most one focal asset or interaction per viewport.
- Motion ownership split and one signature GSAP scene.
- Lucide Animated icon policy and no emoji.
- No fabricated proof or generic AI visual language.
- No custom 3D/WebGL/asset engineering from scratch for the rapid prototype.

### Provisional

- Exact hero wording.
- Header composition, capability composition, palette, typography, geometry, and Assurance styling.
- React/Next.js/Tailwind package versions.
- Exact optional source recipes after dependency, license, and performance audit.
- Exact CTA labels and inquiry taxonomy.

### Open inputs with safe defaults

1. Public Assurance availability label.
   - Default: describe the strategic approach and invite discussion without a readiness label.
2. Publishable partner, project, event, and team assets.
   - Default: omit proof modules and use methodology content.
3. First Academy offer metadata.
   - Default: show an Academy waitlist, not a fictional class.
4. Final branding direction and logo option.
   - Default: keep semantic token roles open and do not infer a finished brand palette.
5. Contact, event, CMS, email, database, CAPTCHA, hosting, and analytics providers.
   - Default: preserve typed interfaces and avoid provider-specific coupling.

## Risks / Trade-offs

- **Broad audience creates hierarchy risk.** Enterprise and government visitors need credibility while
  learners need a fast class path. Company-first ordering plus persistent Academy touchpoints balances
  both without splitting the homepage identity.
- **Assurance positioning may outrun product maturity.** Conservative public wording and an explicit
  approval gate prevent the concept from becoming an unsupported platform claim.
- **Multiple animation tools can conflict.** Strict DOM/property ownership, one GSAP scene, nested
  wrappers, and reduced-motion fallbacks limit runtime conflict and maintenance cost.
- **Source libraries may add hidden weight.** No optional recipe is accepted unless it improves
  comprehension and survives dependency, license, performance, and reduced-motion review.
- **Parallel branding may cause rework.** Semantic tokens and brand-specific components isolate likely
  visual changes from behavior and page structure.
- **Missing real assets may weaken credibility.** Methodology and precise copy are preferable to fake
  social proof; asset collection remains a blocking content task, not a reason to fabricate.
- **Strict PRD performance targets may conflict with signature motion.** The scene is below the fold,
  loaded selectively, simplified on mobile, and measured before approval.
- **The current folder is not a Git repository.** Implementation must not begin as untracked ad hoc
  work; repository initialization and delivery workflow are explicit tasks.
