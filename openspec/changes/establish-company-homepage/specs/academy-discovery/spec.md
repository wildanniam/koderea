## ADDED Requirements

### Requirement: Academy has bounded homepage touchpoints

Academy SHALL appear as a navigation destination, a secondary hero path, a capability in the ecosystem,
and a dedicated lower-page section. A live-cohort notice MAY appear above the header only when it has
complete and verified offer data. Academy MUST NOT become the H1, primary company identity, or a
pricing catalogue above the fold.

#### Scenario: Visitor interested in a class

- **WHEN** a learner enters the homepage
- **THEN** the learner can reach Academy from the header or secondary hero action without the company
  story being replaced by a course-first layout

#### Scenario: No live class exists

- **WHEN** no class has approved launch data
- **THEN** no live-cohort notice is rendered and the Academy section presents an honest waitlist or
  future-program introduction

### Requirement: Featured offer uses editorial hierarchy

The Academy section SHALL prioritize one real featured offer and MAY show up to two secondary offers.
It SHALL use an editorial program or event composition rather than three equal SaaS pricing cards.

#### Scenario: One class is available

- **WHEN** exactly one class has complete approved data
- **THEN** it is presented as one focused offer with clear details and action rather than duplicated or
  padded with fictional alternatives

#### Scenario: Several classes are available

- **WHEN** more than three classes are active
- **THEN** the homepage presents the approved featured subset and directs visitors to the future
  Academy destination for the complete catalogue

### Requirement: Complete class and event metadata

Every active Academy offer SHALL have a stable identifier, title, concise learning proposition,
instructor, date and time with timezone, delivery format, category, level when applicable, price or
access option, availability status, and registration or detail destination. Optional seat counts MUST
be shown only when sourced from a real system.

#### Scenario: Offer metadata is incomplete

- **WHEN** any required field is missing or unapproved
- **THEN** the offer is not presented as open for registration
- **AND** the section falls back to a waitlist or removes the incomplete item

#### Scenario: Free event is shown

- **WHEN** an approved event has no fee
- **THEN** its access option is explicitly labeled `Free` rather than leaving price ambiguous

### Requirement: Registration is separate from company inquiries

Academy registration SHALL use the offer's dedicated registration or detail destination. It MUST NOT
submit into the B2B or speaker lead form. During the MVP, the destination MAY be an approved Typeform,
Google Form, WhatsApp flow, or other external registration service.

#### Scenario: Learner activates registration

- **WHEN** the learner selects `Register` or `View class`
- **THEN** the action preserves the offer identifier and source context and opens the configured
  Academy registration path rather than a company inquiry form

### Requirement: Waitlist is an honest zero-state

When no active offer exists, the Academy section SHALL state that programs are being prepared and MAY
provide a waitlist or notification action. It MUST NOT display a fictional title, instructor, date,
price, urgency message, or countdown.

#### Scenario: Academy is in zero-state

- **GIVEN** class details have not been finalized
- **WHEN** a visitor reaches the Academy section
- **THEN** the visitor sees an honest program direction and waitlist action without interpreting a
  placeholder as a purchasable class

### Requirement: Academy is connected to the company narrative

Academy copy SHALL explain its role in practitioner learning and the broader Koderea capability or
talent ecosystem. It MUST NOT position Koderea primarily as a generic education marketplace.

#### Scenario: Academy copy is reviewed in isolation

- **WHEN** a reviewer reads the Academy heading and introduction
- **THEN** the relationship to Koderea's practical AI, assurance, advisory, or organizational context
  remains explicit

### Requirement: Offer data is configuration-driven

The homepage SHALL consume Academy offer data through a typed content boundary. The first
implementation MAY use local configuration, but the component SHALL be compatible with the future
`GET /api/v1/events/featured` boundary and SHALL not hard-code CTA destinations inside presentation
markup.

#### Scenario: Local data is replaced by an API

- **WHEN** the featured-events API becomes available
- **THEN** the homepage can replace the data adapter without redesigning the event cards, metadata,
  empty state, or action behavior

### Requirement: Academy action states are complete

Academy actions SHALL provide default, hover, focus, active, disabled, loading when applicable, and
external-destination behavior. Motion MAY clarify expansion or selection but MUST NOT hide metadata
behind hover.

#### Scenario: External registration destination is unavailable

- **WHEN** an offer is visible but its approved registration destination is temporarily unavailable
- **THEN** the registration action is disabled or replaced with a clear waitlist/contact fallback and
  does not lead to a broken link

### Requirement: Commercial measurement can be added later

Academy links SHALL expose stable offer and source identifiers suitable for later click-through
measurement. No analytics provider SHALL be required by this change because analytics integration is
explicitly deferred.

#### Scenario: Analytics is introduced later

- **WHEN** a future analytics change subscribes to Academy actions
- **THEN** it can distinguish header, hero, notice, capability, and dedicated-section sources without
  modifying the user-visible layout

### Requirement: Future Academy portal remains out of the MVP

The homepage SHALL preserve routes and component boundaries for a future Academy subdomain, account
state, checkout, paid video courses, recordings, certificates, and certificate verification. None of
those systems SHALL be simulated or presented as live in the homepage MVP.

#### Scenario: Visitor sees an Academy offer before the portal exists

- **WHEN** the current external registration flow is used
- **THEN** the homepage does not expose inactive Login, Checkout, Course Library, or Certificate UI
