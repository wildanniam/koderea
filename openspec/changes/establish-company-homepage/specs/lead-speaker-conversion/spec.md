## ADDED Requirements

### Requirement: Company inquiry intents are explicit

The company inquiry flow SHALL require a need category. Initial categories SHALL include AI Readiness
Assessment, AI Assurance or V&V Partnership, Custom AI Build, Speaker Request, In-House Training, and
Other. Labels MAY be refined before launch, but Assurance, Speaker, Training, and Other intents MUST
remain distinguishable.

#### Scenario: Visitor opens the generic inquiry form

- **WHEN** the visitor reaches `Start a Conversation` without a prior service action
- **THEN** no unsupported intent is assumed and the visitor can choose the relevant category

#### Scenario: Visitor arrives from a capability action

- **WHEN** a visitor opens the inquiry flow from a specific capability
- **THEN** the matching category is preselected and remains editable

### Requirement: Source context is preserved

Every inquiry CTA SHALL preserve a stable source section, source action, and selected intent. The data
model SHOULD allow UTM and referrer values for later analytics or CRM integration without making an
analytics provider part of the MVP.

#### Scenario: Speaker CTA opens the form

- **WHEN** `Invite Koderea to Speak` is activated
- **THEN** the form receives `Speaker Request` intent and the speaking-section source identifier

#### Scenario: Assurance CTA opens the form

- **WHEN** an assurance discussion action is activated
- **THEN** the form receives the Assurance or V&V Partnership intent and the originating source
  identifier

### Requirement: Minimum company inquiry fields

The form SHALL collect full name, business or institutional email, need category, and request detail.
Organization name MAY remain optional until stakeholders approve a stricter qualification flow. Every
field SHALL have a visible label, accessible description when needed, and deterministic validation.

#### Scenario: Valid company inquiry

- **WHEN** a visitor submits all required fields with valid values
- **THEN** the request is accepted once, the visitor receives a clear success state, and the form does
  not silently discard the information

#### Scenario: Invalid inquiry

- **WHEN** required data is missing or invalid
- **THEN** submission is prevented, field-level errors identify the problem in text, focus can reach
  the errors, and previously entered valid data is preserved

### Requirement: Speaker requests collect relevant context

Speaker requests SHALL expose fields for relevant event context. When `Speaker Request` is selected,
the form SHOULD request event name, proposed date, location or
online format, expected audience, topic, and engagement format. Conditional fields MUST remain
accessible and MUST NOT discard already entered data when the category changes.

#### Scenario: Organizer selects Speaker Request

- **WHEN** the category changes to `Speaker Request`
- **THEN** speaker-specific context fields become available with clear optional or required status

### Requirement: Academy registration is not a lead category shortcut

The B2B and speaker form MUST NOT be used as the primary registration mechanism for a public Academy
class. In-house training MAY remain a company inquiry because it represents an organizational
engagement.

#### Scenario: Learner selects a public class

- **WHEN** a learner activates the class registration action
- **THEN** the learner follows the class-specific destination and does not enter the B2B inquiry form

### Requirement: Successful inquiries are persisted and notified

The production-ready homepage SHALL persist each accepted company inquiry to an approved backend and
SHALL notify the internal Koderea destination, initially `info@koderea.id`. Notification failure MUST
NOT erase a successfully persisted inquiry, and persistence failure MUST NOT show a false success.

#### Scenario: Persistence and email both succeed

- **WHEN** a valid request is accepted and stored
- **THEN** an internal notification is queued or sent and the visitor receives a success state

#### Scenario: Persistence succeeds but notification fails

- **WHEN** the backend stores the request but email notification fails
- **THEN** the request remains recoverable, the failure is logged for operators, and the visitor is not
  asked to resubmit a duplicate request

#### Scenario: Persistence fails

- **WHEN** the backend cannot store the request
- **THEN** the visitor receives a recoverable error state and a verified fallback contact path

### Requirement: Submission is idempotent from the visitor perspective

The form SHALL prevent accidental double submission while a request is in flight and SHOULD use an
idempotency or duplicate-detection strategy at the integration boundary.

#### Scenario: Submit is activated twice

- **WHEN** a visitor activates submit repeatedly before the first request completes
- **THEN** one logical inquiry is created and the UI communicates the pending state

### Requirement: Anti-spam and privacy are explicit

The production inquiry flow SHALL use server-side validation, HTTPS, an approved anti-spam mechanism,
and a privacy or consent notice that identifies the purpose of data collection. Google reCAPTCHA v3 is
the PRD default but MAY be replaced through an approved provider decision.

#### Scenario: Automated spam is detected

- **WHEN** the server classifies a submission as automated or abusive
- **THEN** it rejects or quarantines the request without exposing secrets or revealing scoring logic

#### Scenario: Visitor reviews data use

- **WHEN** the visitor reaches the form submission action
- **THEN** a clear privacy notice and Privacy Policy destination are available

### Requirement: Form states are complete without decorative dependence

The inquiry experience SHALL include idle, focused, validation error, submitting, success, recoverable
failure, and disabled states. State meaning SHALL be communicated in text and semantics, not only by
color, icon animation, or motion.

#### Scenario: Reduced motion is active during submission

- **WHEN** the form changes from submitting to success under reduced motion
- **THEN** the success message is announced and visible without layout animation or icon motion

### Requirement: Footer exposes verified company destinations

The footer SHALL contain approved legal identity, contact information, Privacy Policy, and official
social destinations. LinkedIn, YouTube, Instagram, or other channels MUST be omitted until the exact
official URL is confirmed.

#### Scenario: Social URL is unknown

- **WHEN** a social account has no approved destination
- **THEN** its icon and link are not rendered
