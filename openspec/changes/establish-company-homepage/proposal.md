## Why

Koderea is a new company without an official digital presence. Prospective enterprise, government,
global-vendor, learner, and event-organizer audiences do not yet have a trustworthy place to
understand the company, evaluate its direction, discover its commercial offerings, or initiate a
conversation.

The two source documents provide a useful foundation but do not yet form one implementation-ready
decision set. The Company Profile makes AI Assurance & Validation the flagship, while the Homepage
PRD gives Academy the primary hero CTA. Branding is still being developed, service details are not
fully designed, publishable proof is unknown, and animation requirements now include both
Motion.dev and GSAP. Without an explicit baseline, rapid prototyping would turn these unresolved
points into accidental product decisions.

This change establishes a company-first, evidence-led homepage specification that can be prototyped
quickly, reviewed honestly, and evolved through future OpenSpec changes.

## What Changes

- Establish an English-language company homepage whose primary job is to explain Koderea, build
  credibility, present its capability ecosystem, and capture relevant inquiries.
- Position AI Assurance & Validation as the strategic flagship without presenting an undeveloped
  product interface or unsupported readiness claim.
- Keep Academy commercially visible through navigation, a secondary hero path, an optional live
  cohort notice, and a dedicated lower-page section without turning the hero into a course landing
  page.
- Define the homepage information architecture, responsive reading order, conversion paths, empty
  states, and future modular hooks.
- Establish the current visual constraints: a modern, minimal, light-mode system with large
  whitespace, one dominant message per viewport, one accent color, and no unsupported focal asset.
- Define a deliberate animation architecture: Motion.dev for React state, GSAP ScrollTrigger for one
  signature assurance narrative, optional audited source components, and Lucide Animated for
  icon-level feedback.
- Establish strict content-integrity and anti-AI-slop rules, including a ban on fabricated proof,
  generic AI imagery, gratuitous effects, and unsupported product claims.
- Define Academy discovery, class metadata, registration/waitlist behavior, and the future event API
  boundary.
- Define B2B, speaker, and in-house-training inquiry behavior with intent and source preservation.
- Preserve the PRD quality goals for performance, semantic SEO, responsive design, and anti-spam,
  while adding accessibility and reduced-motion acceptance criteria.
- Use selected accessible primitive and behavior patterns from `faiz-ui-app`; all Koderea composition,
  copy, capability content, icons, and public proof remain original.

## Capabilities

### New Capabilities

- `homepage-experience`: Company-first navigation, hero, information architecture, capability
  explanation, assurance narrative, proof handling, speaking authority, and responsive reading order.
- `brand-content-integrity`: Reference-led minimal visual constraints, provisional design roles, content
  truthfulness, icon policy, asset rules, and explicit anti-AI-slop constraints.
- `motion-system`: Ownership and behavior for Motion.dev, GSAP ScrollTrigger, optional source recipes, CSS, and
  Lucide Animated, including reduced-motion and mobile fallbacks.
- `academy-discovery`: Academy touchpoints, featured class/event metadata, honest empty states,
  registration paths, and future Academy integration hooks.
- `lead-speaker-conversion`: Intent-aware B2B, speaker, and training inquiry flows, validation,
  persistence, notifications, and fallback states.
- `quality-delivery`: Configuration, performance, accessibility, responsive behavior, semantic SEO,
  security, observability hooks, and verification gates.

### Modified Capabilities

None. The project has no existing canonical OpenSpec capabilities or website implementation.

## Impact

- A new frontend application will be introduced after repository and delivery decisions are made.
- Expected frontend dependencies include React/Next.js, TypeScript, Tailwind CSS, Motion,
  `gsap`, `@gsap/react`, Lucide Animated, and only source-owned components that survive dependency
  and performance review.
- Selected primitive patterns may be adapted from
  `/Users/wildanniam/Development/project/faiz-ui-app`; its homepage, remote assets, claims, and
  unverified third-party templates are explicitly out of scope.
- Future integrations include a config or CMS source, `GET /api/v1/events/featured`, a lead storage
  service, email notification to `info@koderea.id`, anti-spam verification, and a future Academy
  subdomain. Provider selection is not part of this change.
- The existing PDF files remain historical source documents. This change records the approved
  interpretation when those sources conflict.
- No database migration, production deployment, payment flow, Academy learning portal, or complete
  design system is introduced by the concept baseline itself.
