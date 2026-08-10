## ADDED Requirements

### Requirement: Reference-led minimal light-mode language

The homepage SHALL use a modern, minimal, light-mode language with large whitespace, strong
sans-serif hierarchy, one accent color, and no more than one dominant focal asset or interaction per
viewport. No generated Koderea concept SHALL become an implementation baseline without explicit user
approval.

#### Scenario: Section density is reviewed

- **WHEN** a reviewer inspects a desktop or mobile viewport
- **THEN** one message has clear visual priority
- **AND** secondary content does not compete through multiple panels, badges, diagrams, and CTA groups

#### Scenario: No approved hero asset exists

- **WHEN** no approved real asset or audited ready-made component supports the company story
- **THEN** the hero remains typography-first rather than inventing a decorative focal asset

### Requirement: Modern content-led art direction

The homepage SHALL use modern sans-serif typography, generous whitespace, short copy blocks, flat
light surfaces, and restrained geometry. Section rhythm SHALL come from scale, alignment, spacing,
and one real or source-feasible focal point rather than technical-document panels, institutional
brochure styling, or generic futuristic effects.

#### Scenario: Visual direction review

- **WHEN** the complete page is compared with generic AI SaaS and generic course templates
- **THEN** its identity is grounded in evidence, assurance, local context, and editorial clarity rather
  than neon spectacle or course-pricing conventions

### Requirement: Replaceable provisional design tokens

Until parallel branding work and a new visual exploration are approved, the homepage SHALL define
only semantic roles for light surface, primary text, muted text, divider, one accent, and optional
accent tint. Exact color values, typography, radius, spacing, and shadow scales SHALL remain
replaceable without rewriting section behavior.

#### Scenario: Final brand palette arrives

- **WHEN** approved brand colors and typefaces replace the provisional direction
- **THEN** semantic token updates propagate through the homepage without changing component markup or
  animation ownership

### Requirement: Purposeful typography

The provisional type system SHALL use one modern geometric or humanist sans family for display, body,
and interface content. A second technical or mono family SHALL NOT be introduced unless real content
needs it. Line length, scale, weight, and wrapping SHALL preserve clarity on mobile and desktop.
Hard-coded line breaks MUST NOT be required for content correctness.

#### Scenario: Hero copy is revised

- **WHEN** the hero headline length changes during copy iteration
- **THEN** the layout wraps intentionally without clipping, orphaning a single decorative word, or
  depending on desktop-only line breaks

### Requirement: Evidence-backed public content

Public content SHALL be evidence-backed. Every public client name, partner name, logo, metric, result,
testimonial, certification, project,
speaker appearance, and availability claim SHALL have an identified owner and publication approval
before rendering. Missing proof SHALL result in omission or an honest zero-state, never synthetic or
placeholder evidence.

#### Scenario: A partner logo is proposed

- **GIVEN** a logo or organization name appears in a source document
- **WHEN** no explicit publication approval can be confirmed
- **THEN** the asset is excluded from public content configuration

#### Scenario: A performance metric lacks evidence

- **WHEN** a marketing metric has no source, timeframe, unit, or approver
- **THEN** the metric is not displayed

### Requirement: Service maturity claims are conservative

Public descriptions SHALL distinguish strategic positioning, active services, pilot conversations,
near-term offerings, and future direction. The site MUST NOT describe undeveloped service details or
a conceptual assurance narrative as live product functionality.

#### Scenario: Availability label is unresolved

- **WHEN** management has not approved a capability availability label
- **THEN** the page describes the capability's role and offers a conversation without showing a
  readiness badge or launch claim

### Requirement: Specific and restrained English copy

Marketing copy SHALL explain who Koderea helps, what kind of work it approaches, and why evidence or
local context matters. Copy MUST avoid unsupported superlatives and generic phrases such as
`revolutionary`, `seamless`, `next-generation`, `cutting-edge`, `unlock the future`, or `empowering`
unless an approved, concrete claim gives the term meaning.

#### Scenario: Copy review

- **WHEN** a reviewer replaces the Koderea name with an unrelated AI company name
- **THEN** the core copy no longer reads correctly because it contains Koderea-specific positioning,
  capability relationships, or evidence language

### Requirement: Single icon language without emoji

The homepage SHALL use Lucide and Lucide Animated as the only general-purpose icon family. Icons SHALL
be selected for semantic meaning, SHALL have accessible labels when they carry meaning, and SHALL not
replace visible text for primary actions. Emoji MUST NOT be used as interface or decorative icons.

#### Scenario: Capability icons are displayed

- **WHEN** the four capability labels render
- **THEN** Assurance uses `ShieldCheck`, Consulting uses `Compass`, Software uses `Blocks`, and
  Academy uses `GraduationCap`, unless a later approved icon change preserves the same single-family
  policy

#### Scenario: Icon animation is unavailable

- **WHEN** animation is disabled or unsupported
- **THEN** every icon remains legible as a static Lucide icon and no action loses its meaning

### Requirement: Explicit anti-AI-slop constraints

The homepage MUST NOT use generic purple/cyan neon gradients, floating blobs, decorative glowing
orbs, gratuitous glassmorphism, gradient text, AI brains or robots, repeated bento layouts, repeated
three-card grids, fake dashboards, typewriter or glitch loops, cursor trails, custom cursors,
autoplaying carousels, decorative metric tiles, or the same fade-up animation on every section.

#### Scenario: A library component is considered

- **WHEN** a candidate component introduces a prohibited visual pattern without improving
  comprehension or conversion
- **THEN** it is rejected even if it is fast to install or visually impressive in isolation

### Requirement: Real assets take priority over generated atmosphere

The visual system SHALL prioritize approved team, event, project, partner, document, or process assets. When
real assets do not exist, the system SHALL prefer typography, diagrams, layout, and methodology over
generic stock photography or atmospheric AI imagery.

#### Scenario: No hero photograph exists

- **WHEN** no approved real photograph supports the hero story
- **THEN** the hero remains typography-first rather than sourcing a generic AI stock image or
  inventing a verification-frame asset

### Requirement: Restrained component geometry

The layout SHALL use a responsive content grid, generous section spacing, thin dividers, and sparse
shadow. Cards SHALL be introduced only when the content is genuinely an object such as a class,
document, case study, or media item. Cards MUST NOT become the default container for company copy or
capabilities.

#### Scenario: Section composition review

- **WHEN** multiple consecutive sections are inspected
- **THEN** hierarchy varies through editorial composition, lists, diagrams, media, and whitespace
rather than repeating identical rounded containers

### Requirement: Faiz UI is a primitive foundation, not a visual template

Reuse from `faiz-ui-app` SHALL be limited to reviewed primitives and behavior patterns. The
implementation MAY adapt accessible Button, Field, Input, Textarea, Sheet, Tabs, Accordion, Dialog,
Toast, focus-state, and motion helpers. Its floating header and layered-card hero MUST NOT be treated
as Koderea defaults. The implementation MUST NOT copy Faiz public copy, dashboards, remote assets,
logo cloud, claims, Hugeicons, or unverified third-party premium assets.

#### Scenario: A Faiz component is proposed for reuse

- **WHEN** an engineer selects a source pattern from `faiz-ui-app`
- **THEN** its accessibility, dependencies, provenance, and Koderea-specific restyling are reviewed
before it is introduced
