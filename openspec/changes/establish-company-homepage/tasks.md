## 1. OpenSpec Baseline and Stakeholder Inputs

- [x] 1.1 Initialize the standard `spec-driven` OpenSpec directory structure.
- [x] 1.2 Review the Company Profile and Homepage PRD, including their rendered page layouts.
- [x] 1.3 Record source precedence, terminology, company-first positioning, and known document conflicts.
- [x] 1.4 Define delta specs for homepage experience, brand integrity, motion, Academy, conversion, and quality.
- [ ] 1.5 Confirm the public AI Assurance availability label with Koderea management.
- [ ] 1.6 Inventory publishable partner, client, project, team, event, and speaker assets with approval owners.
- [ ] 1.7 Confirm the first Academy offer metadata or explicitly approve the waitlist state.
- [ ] 1.8 Approve final hero copy, CTA labels, and service descriptions in English.
- [ ] 1.9 Approve a new visual exploration, logo direction, accent color, and sans-serif type system.
- [ ] 1.10 Confirm official contact, legal, social, Privacy Policy, and registration destinations.

## 2. Repository and Application Foundation

- [ ] 2.1 Initialize or identify the intended Git repository and configure the remote.
- [ ] 2.2 Create or reuse the implementation issue, create a non-main branch, and link it to this change.
- [ ] 2.3 Scaffold the React/Next.js TypeScript application with the agreed package manager and Tailwind CSS.
- [ ] 2.4 Establish lint, type-check, build, and browser-test commands before feature work expands.
- [ ] 2.5 Define replaceable semantic color, typography, spacing, radius, and motion roles from the approved visual exploration.
- [ ] 2.6 Port only approved accessible primitives from `faiz-ui-app` with provenance and dependency review.
- [ ] 2.7 Create separate `ui`, `koderea`, `motion`, `content`, and integration boundaries.
- [ ] 2.8 Install Motion, GSAP with `@gsap/react`, and only the selected Lucide Animated icons.
- [ ] 2.9 Configure a copy-owned registry workflow only if the selected implementation needs an audited source recipe.
- [ ] 2.10 Document reusable architecture and project commands in the repository-local `AGENTS.md` or docs.

## 3. Content Model and Static Homepage

- [ ] 3.1 Define typed models for navigation, capabilities, maturity-safe descriptions, CTAs, proof, speaking topics, Academy offers, and social links.
- [ ] 3.2 Add stable action, offer, intent, and source identifiers without integrating an analytics provider.
- [ ] 3.3 Build the sticky desktop and accessible mobile navigation.
- [ ] 3.4 Build the typography-first company hero with configurable English copy, primary/secondary action hierarchy, and a static no-motion state.
- [ ] 3.5 Build the conditional credibility strip with an omit-when-unverified rule.
- [ ] 3.6 Build the Who We Are section and local-context positioning content.
- [ ] 3.7 Build the approved focused or editorial capability presentation with complete static content.
- [ ] 3.8 Build the readable static Define, Test, Validate, and Evidence assurance stages.
- [ ] 3.9 Build target-audience content that distinguishes intended audiences from existing clients.
- [ ] 3.10 Build verified Work/Partnerships content or the approved methodology fallback.
- [ ] 3.11 Build the Speaking & Authority section with prefilled speaker action.
- [ ] 3.12 Build the Academy section with featured-offer and honest waitlist variants.
- [ ] 3.13 Build the company inquiry section and distinct Academy registration path.
- [ ] 3.14 Build the footer using only verified legal, contact, social, and privacy destinations.

## 4. Motion.dev and Icon Interactions

- [ ] 4.1 Add the global reduced-motion policy through Motion configuration and shared helpers.
- [ ] 4.2 If capability selection is approved, implement its active cue and interruptible detail transitions.
- [ ] 4.3 Implement the mobile capability disclosure with keyboard and touch parity.
- [ ] 4.4 Implement mobile-navigation presence, exit, focus restoration, and reduced-motion behavior.
- [ ] 4.5 Implement Academy detail or drawer transitions only if the approved content requires them.
- [ ] 4.6 Implement form submitting, validation, success, and failure transitions without motion-only meaning.
- [ ] 4.7 Install and map the approved Lucide Animated icons without adding another icon family.
- [ ] 4.8 Limit icon animation to hover, focus, tap, or active state and provide static reduced-motion behavior.
- [ ] 4.9 Verify rapid state changes do not leave stale layout, focus, or animation state.
- [ ] 4.10 Implement the approved finite hero entrance and verify its immediate static reduced-motion state.

## 5. GSAP Assurance Scene and Source-Recipe Audit

- [ ] 5.1 Implement the assurance scene as a scoped client component with static content as its baseline.
- [ ] 5.2 Build one GSAP parent timeline for Define, Test, Validate, and Evidence.
- [ ] 5.3 Attach one ScrollTrigger to the parent timeline and preserve native vertical scrolling.
- [ ] 5.4 Use `useGSAP()` scope and automatic cleanup; verify React Strict Mode remount behavior.
- [ ] 5.5 Add desktop pinned behavior, tablet non-pinned behavior, and mobile static/once-reveal behavior through responsive contexts.
- [ ] 5.6 Prevent GSAP initialization for reduced motion and confirm all stages render in final readable state.
- [ ] 5.7 Build the approved light-mode Define, Test, Validate, and Evidence presentation with semantic DOM and optional simple SVG.
- [ ] 5.8 Audit any optional copied recipe for license, dependencies, render loop, cleanup, and motion ownership.
- [ ] 5.9 Implement and verify the static sequence for mobile, reduced motion, and initialization failure.
- [ ] 5.10 Remove markers, debug code, persistent `will-change`, and unused graphics dependencies.

## 6. Academy and Inquiry Integrations

- [ ] 6.1 Implement a local typed Academy data adapter with complete metadata validation.
- [ ] 6.2 Implement offer eligibility rules so incomplete offers become waitlist content rather than live classes.
- [ ] 6.3 Preserve the future `GET /api/v1/events/featured` adapter boundary and define normalized loading, empty, and failure states.
- [ ] 6.4 Configure approved external registration destinations per offer without hard-coding them in UI components.
- [ ] 6.5 Implement inquiry intent and source prefill from capability, assurance, speaker, and training CTAs.
- [ ] 6.6 Implement accessible base fields and conditional Speaker Request context fields.
- [ ] 6.7 Select and implement the lead persistence boundary with server-side validation and duplicate protection.
- [ ] 6.8 Select and implement internal notification to `info@koderea.id` with independent failure handling.
- [ ] 6.9 Implement the approved anti-spam provider, HTTPS production requirement, and privacy notice.
- [ ] 6.10 Provide a verified fallback contact path for recoverable integration failure.

## 7. SEO, Accessibility, and Performance Verification

- [ ] 7.1 Add the approved title, meta description, canonical URL, Open Graph data, and social preview asset.
- [ ] 7.2 Verify one H1, semantic landmarks, heading order, link/button semantics, labels, and alternative text.
- [ ] 7.3 Complete keyboard-only testing for navigation, capabilities, Academy, speaker, and inquiry paths.
- [ ] 7.4 Complete screen-reader smoke testing for active capability, form errors, submission state, and dynamic disclosures.
- [ ] 7.5 Verify target size, contrast, focus visibility, and non-color state cues.
- [ ] 7.6 Verify the entire journey under reduced motion and with the optional decorative layer disabled.
- [ ] 7.7 Verify layouts at representative mobile, tablet, laptop, desktop, and 1920px viewports.
- [ ] 7.8 Verify Safari iOS and representative Android scrolling around the assurance section.
- [ ] 7.9 Audit images, fonts, client-component boundaries, dynamic imports, and third-party scripts.
- [ ] 7.10 Measure PageSpeed targets and FCP using the agreed environment; simplify motion if budgets fail.
- [ ] 7.11 Inspect the production bundle for unused dependencies, exposed secrets, and unexpected continuous work.
- [ ] 7.12 Run lint, type checks, focused tests, production build, and browser smoke tests and record the results.

## 8. Review, Release, and OpenSpec Promotion

- [ ] 8.1 Run the anti-AI-slop checklist against the complete desktop and mobile page.
- [ ] 8.2 Obtain content approval for every public claim, logo, photo, project, metric, and maturity label.
- [ ] 8.3 Review the implementation against every scenario in all six delta specs.
- [ ] 8.4 Run `openspec validate establish-company-homepage --strict` and resolve all findings.
- [ ] 8.5 Open the implementation pull request with summary, verification evidence, risks, and issue linkage.
- [ ] 8.6 Complete stakeholder review without merging until explicit approval is provided.
- [ ] 8.7 Archive `establish-company-homepage` only after implementation and required verification are complete.
- [ ] 8.8 Capture deferred provider, analytics, Academy portal, and branding follow-ups as separate OpenSpec changes.
