## ADDED Requirements

### Requirement: Motion clarifies meaning

Every non-trivial animation SHALL clarify state, hierarchy, causality, progress, or process. Motion
MUST NOT be added solely to make a static layout appear more complex, and the homepage SHALL have one
recognizable signature motion idea rather than unrelated effects in every section.

#### Scenario: Animation proposal review

- **WHEN** a new animation is proposed
- **THEN** its owner can identify the user-visible state, relationship, cause, or process it clarifies
- **AND** the animation is rejected if its only purpose is decoration

### Requirement: Animation ownership is exclusive

CSS SHALL own simple visual feedback, Motion.dev SHALL own React state and
local component transitions, GSAP ScrollTrigger SHALL own the signature scroll timeline, any optional
source recipe SHALL remain isolated inside its own boundary, and Lucide Animated SHALL own
icon-internal path motion. One DOM node MUST NOT have the same transform or opacity property
controlled by multiple engines.

#### Scenario: Interactive element also enters on scroll

- **WHEN** an element needs both page-level entry and local hover or state feedback
- **THEN** separate nested wrappers assign each animation engine a distinct node and property scope

#### Scenario: Ownership conflict is found

- **WHEN** Motion and GSAP both target the same node and transform property
- **THEN** implementation approval is blocked until the ownership conflict is removed

### Requirement: Motion.dev clarifies capability state when selection is used

If the approved capability composition uses selectable states, Motion.dev SHALL coordinate the
active cue and transition the related explanation without making several capabilities compete at
once. The same information SHALL be activatable with pointer, keyboard, and touch. A static or
editorial capability sequence MAY be selected instead and SHALL not be forced to add interaction.

#### Scenario: Capability changes

- **WHEN** a visitor activates a different capability
- **THEN** the active cue moves or updates to the selected capability
- **AND** the outgoing explanation exits before or alongside the incoming explanation without
  obscuring content or shifting focus unexpectedly
- **AND** the semantic icon animates at most once for that activation

#### Scenario: Visitor changes selection rapidly

- **WHEN** several capability selections occur before prior transitions complete
- **THEN** the motion remains interruptible, state stays synchronized with the selected content, and
  no stale panel remains visible

### Requirement: Hero motion remains finite and subordinate

The typography-first hero SHALL remain fully readable before motion initializes. If the approved
direction uses entrance motion, it SHALL run once, use restrained opacity and short translation, and
settle into a static state. An approved real asset or audited ready-made component MAY have one
bounded reveal, but motion SHALL NOT add a focal asset that the static design does not need.

#### Scenario: Hero loads with motion enabled

- **WHEN** the company hero enters the initial viewport
- **THEN** the company headline, explanation, and actions settle quickly into the final readable
  composition
- **AND** the primary company copy and actions do not wait for the entrance to complete

#### Scenario: Hero loads with reduced motion

- **WHEN** reduced motion is requested or client animation does not initialize
- **THEN** the complete hero renders immediately in its final state without losing copy, actions, or
  hierarchy

### Requirement: Motion.dev owns local interface state

Motion.dev SHALL own the mobile navigation, accordion or disclosure transitions, Academy detail or
class drawer, and inquiry success/error transitions. Local motion SHOULD use restrained ease-out
timing and MUST avoid playful bounce or elastic behavior unless a future approved brand direction
explicitly calls for it.

#### Scenario: Local overlay closes

- **WHEN** a drawer, sheet, or menu is dismissed
- **THEN** its exit transition completes without delaying focus restoration or leaving the page in an
  inert state

### Requirement: One GSAP assurance timeline

The MVP SHALL contain at most one pinned or scrubbed GSAP ScrollTrigger timeline. It SHALL implement
the `From Claim to Evidence` assurance narrative and SHALL sequence Define, Test, Validate, and
Evidence in that order.

#### Scenario: Desktop scroll narrative

- **GIVEN** a desktop viewport, motion permission, and successful client-side initialization
- **WHEN** the assurance section reaches its trigger position
- **THEN** one scoped timeline advances the four narrative stages using native scroll progress
- **AND** text remains readable at every stage

#### Scenario: Additional pinned effect is proposed

- **WHEN** a second pinned or scrubbed scene is proposed for the MVP
- **THEN** it is rejected or introduced through a separate approved change with performance evidence

### Requirement: GSAP lifecycle is React-safe

GSAP animation SHALL run only in client components, use `useGSAP()` with a component scope, register
required plugins once, and automatically revert animations and ScrollTriggers during unmount or
responsive context changes. A single ScrollTrigger SHALL control the parent timeline rather than one
trigger per child tween.

#### Scenario: Component remounts in React Strict Mode

- **WHEN** the assurance component mounts, unmounts, and mounts again during development
- **THEN** no duplicate timeline, event listener, pin spacer, or ScrollTrigger remains

#### Scenario: Layout-affecting content changes

- **WHEN** fonts, images, or asynchronous content materially change the assurance section layout
- **THEN** ScrollTrigger positions are refreshed after the layout settles and not on every render or
  scroll event

### Requirement: Responsive motion strategy

Desktop MAY use the pinned GSAP narrative. Tablet SHALL use a shorter non-pinned sequence. Mobile and
coarse-pointer contexts SHALL use static or once-triggered vertical stages without heavy parallax,
pinning, or continuous pointer effects.

#### Scenario: Viewport changes across a breakpoint

- **WHEN** the viewport changes from desktop to mobile
- **THEN** desktop ScrollTrigger state is reverted and the mobile representation initializes without
  duplicate content, stale transforms, or an unexpected scroll jump

### Requirement: Reduced-motion policy

The site SHALL respect the user's reduced-motion preference globally. Motion.dev transform and layout
animation SHALL be disabled or replaced with minimal opacity feedback. GSAP pinning, scrubbing,
parallax, and continuous effects SHALL not initialize. Any optional source recipe SHALL render a
static fallback, and Lucide Animated icons SHALL remain static.

#### Scenario: Reduced motion is enabled before load

- **GIVEN** the operating system requests reduced motion
- **WHEN** the homepage loads
- **THEN** all content appears in its meaningful final state without pinned scroll, lateral movement,
  looping effects, or missing information

#### Scenario: Reduced-motion preference changes at runtime

- **WHEN** the preference changes while the page is open
- **THEN** active motion contexts update or revert without requiring a page reload

### Requirement: Optional source recipes pass a feasibility gate

Custom visual-engineering from scratch SHALL NOT be required for the rapid prototype. An optional
copy-owned React Bits or other recipe MAY be introduced only when it supports the approved
composition, remains isolated, needs only bounded configuration, and provides an equivalent static
fallback. Its removal MUST NOT alter information, layout hierarchy, or a conversion path.

#### Scenario: Optional recipe audit fails

- **WHEN** a source recipe requires an unjustified dependency, continuous render loop, incompatible
  license, or conflicts with motion ownership or performance targets
- **THEN** it is rejected or replaced with a simpler CSS/SVG/DOM implementation while preserving the
  user-visible explanation

### Requirement: Icon motion is event-driven

Lucide Animated icons SHALL animate only on hover, focus, tap, or explicit state activation. They MUST
NOT autoplay indefinitely, animate offscreen, or become the only indication of state.

#### Scenario: Capability becomes active

- **WHEN** a capability is activated
- **THEN** its icon MAY run one short animation and its selected state is also conveyed through text,
  position, color, or another non-motion cue

### Requirement: Performance-safe properties

Animation SHOULD be limited to transform, opacity, and targeted SVG attributes. It MUST avoid routine
animation of width, height, top, left, margin, padding, large blur regions, and large-area shadow or
backdrop-filter. `will-change` SHALL be temporary and scoped.

#### Scenario: Performance inspection

- **WHEN** the homepage is profiled during hero, capability, and assurance interactions
- **THEN** animations do not produce avoidable layout thrashing, persistent offscreen work, or large
  cumulative layout shifts

### Requirement: Native scrolling remains intact

The MVP SHALL preserve browser-native vertical scrolling. It MUST NOT add Lenis, ScrollSmoother,
scroll-jacking, horizontal fake scrolling, or a custom cursor.

#### Scenario: User scrolls with keyboard or assistive input

- **WHEN** the page is navigated with Page Down, Space, arrow keys, or assistive scrolling
- **THEN** the document progresses predictably and the assurance scene does not trap or reverse the
  user's scroll intent
