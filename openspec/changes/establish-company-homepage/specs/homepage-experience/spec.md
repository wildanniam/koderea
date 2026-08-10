## ADDED Requirements

### Requirement: Company-first homepage purpose

The homepage SHALL identify Koderea as an AI advisory and solutions company before promoting any
class, event, or individual service. It SHALL establish AI Assurance & Validation as the strategic
flagship and SHALL present Academy as one commercial capability within the company ecosystem.

#### Scenario: First-time visitor opens the homepage

- **GIVEN** a visitor has no prior knowledge of Koderea
- **WHEN** the first viewport is rendered
- **THEN** the visitor can identify what Koderea is, the role of AI Assurance & Validation, and the
  primary company-level action without interpreting the page as a course landing page

#### Scenario: Academy remains discoverable

- **GIVEN** a visitor is interested in classes
- **WHEN** the visitor enters the homepage
- **THEN** Academy is reachable from navigation and a secondary hero path without replacing the
  company-level message or primary hierarchy

### Requirement: English public content

Public homepage content SHALL be written in English. This includes navigation, headings, descriptions,
calls to action, labels, validation messages, and metadata. Proper nouns and approved Indonesian legal terms
MAY remain unchanged.

#### Scenario: Website language review

- **WHEN** a reviewer inspects every public homepage state
- **THEN** all interface and marketing content is English, including mobile navigation, empty states,
  form messages, and metadata

### Requirement: Company hero hierarchy

The hero SHALL contain one company-level H1, a concise explanation of Koderea, a primary capability or
company inquiry path, and a secondary Academy discovery path. It MUST NOT lead with a class promise,
price, countdown, Academy catalogue, or unsupported platform claim.

#### Scenario: Hero renders with current working content

- **WHEN** hero content is loaded
- **THEN** the primary action directs the visitor toward Koderea's capabilities or a company
  conversation
- **AND** the Academy action is visually secondary

#### Scenario: Hero copy changes during branding iteration

- **WHEN** approved hero wording is updated in content configuration
- **THEN** the hierarchy remains company-first and no component rewrite is required

### Requirement: Stable information architecture

The homepage SHALL preserve the following semantic reading order: header, hero, optional verified
credibility, company explanation, capability ecosystem, assurance narrative, target audience, work or
methodology, speaking authority, Academy, contact, and footer. Sections with unavailable content MAY
be omitted only when their omission does not remove a required conversion path.

#### Scenario: Desktop and mobile order comparison

- **WHEN** the same homepage is rendered at desktop and mobile widths
- **THEN** the DOM and screen-reader order retain the company-first narrative
- **AND** responsive styling does not move Academy or conversion content ahead of company identity

#### Scenario: Credibility content is unavailable

- **GIVEN** no partner, client, case-study, or metric has publication approval
- **WHEN** the homepage is rendered
- **THEN** the credibility strip is omitted rather than populated with placeholders
- **AND** the page continues naturally into the company explanation

### Requirement: Sticky modular navigation

The header SHALL provide the Koderea identity, navigation to About, Capabilities, Assurance, Academy,
Speaking, and Contact, plus a company-level action. The mobile version SHALL expose the same actions
through an accessible disclosure or sheet. The action slot SHOULD remain replaceable by future
Academy authentication without rendering an auth placeholder in the MVP.

#### Scenario: Keyboard navigation

- **WHEN** a keyboard user traverses the header
- **THEN** every navigation item, menu trigger, close action, and company CTA is reachable in a logical
  order and has a visible focus state

#### Scenario: Mobile navigation

- **WHEN** a visitor opens and closes the mobile navigation
- **THEN** focus is managed correctly, background interaction is constrained while open, and the menu
  does not rely on icon shape alone for its accessible name

### Requirement: Four-capability explanation

The homepage SHALL explain AI Assurance & Validation, AI Consulting & Strategy, AI Software
Solutions, and Koderea Academy as related but differently mature capabilities. The approved desktop
composition SHALL give one capability clear focus at a time or use an editorial sequence; it MUST
NOT show four equal promotional cards competing in one viewport. Mobile SHALL preserve complete
information through a readable sequence, accordion, or disclosure pattern.

#### Scenario: Visitor selects a capability

- **WHEN** the visitor activates one capability by pointer, keyboard, or touch
- **THEN** its title, maturity-safe description, role in the ecosystem, semantic icon, and relevant
  action become available in the shared detail region
- **AND** no information is available only through hover

#### Scenario: Software capability is shown

- **WHEN** AI Software Solutions is selected before management approves an active product offering
- **THEN** it is described as a longer-term or selective direction and is not presented as a mature
  catalogue

### Requirement: Flagship assurance narrative

The homepage SHALL include a prominent `From Claim to Evidence` section that explains a conceptual
assurance approach using the stages Define, Test, Validate, and Evidence. The section SHALL be labeled
and written as an approach or operating model, not as proof of a production platform.

#### Scenario: Visitor reads the complete narrative

- **WHEN** the visitor moves through the assurance section with animation enabled
- **THEN** the four stages appear in causal order and explain how context and AI claims become
  inspectable evidence

#### Scenario: Animation is unavailable

- **WHEN** animation is disabled, reduced, unsupported, or fails to initialize
- **THEN** all four stages and their descriptions remain present and readable in document order

### Requirement: Target audiences are distinguished from clients

The homepage SHALL identify intended audiences such as enterprise or government representatives,
global AI vendors, event organizers, and learners without implying they are existing customers. It
MAY identify relevant sectors only as examples unless a relationship is verified.

#### Scenario: Target-sector content is reviewed

- **WHEN** a visitor reads a target-audience or sector label
- **THEN** the wording communicates who Koderea is prepared to work with rather than asserting an
  unverified engagement or outcome

### Requirement: Work section has an honest zero-state

The homepage SHALL show verified work, partnerships, or case studies only when publication approval
exists. Otherwise it SHALL use a methodology, principles, or proposed-engagement section and MUST NOT
display fake logos, placeholder metrics, invented results, or generic dashboard screenshots.

#### Scenario: No public case study exists

- **GIVEN** the project is still in a zero-state
- **WHEN** the work section content is assembled
- **THEN** the section explains a real method, principle, or engagement path without claiming a
  completed client result

### Requirement: Speaking authority path

The homepage SHALL provide a Speaking & Authority section with approved expertise topics and an
`Invite Koderea to Speak` path. Real event photography or credentials SHOULD be used when available;
the absence of such assets MUST NOT be concealed with fabricated event proof.

#### Scenario: Organizer requests a speaker

- **WHEN** an event organizer activates the speaking CTA
- **THEN** the inquiry experience opens with `Speaker Request` intent and source context already set

### Requirement: Final company contact path

The final pre-footer section SHALL invite an organization-level conversation and SHALL distinguish
company inquiries from Academy registration. The final CTA MUST remain understandable without motion,
icons, or decorative visuals.

#### Scenario: Visitor reaches the page end

- **WHEN** a visitor reaches the final conversion section
- **THEN** the visitor can choose an appropriate company inquiry path without being redirected into
  the Academy registration flow
