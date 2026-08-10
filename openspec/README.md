# Koderea OpenSpec

This directory is the source of truth for planning and delivering Koderea's digital products.
The current project is greenfield: no website application exists yet, and the repository currently
contains only the two source documents listed below.

## Source Documents

- [Koderea Company Profile Draft](../Koderea_Company_Profile_Draft.docx.pdf)
- [Koderea Dedicated Homepage PRD](../PRD%20Koderea%20Dedicated%20Homepage.pdf)

## Decision Precedence

When sources conflict, use this order:

1. Explicit decisions from the current product discussion.
2. The Company Profile for positioning, service maturity, independence, and target clients.
3. The Homepage PRD for functional requirements, integrations, quality targets, and future hooks.
4. Reference websites and component libraries as inspiration only.

This precedence resolves the known conflict between the Academy-first CTA in the draft PRD and the
approved company-first homepage direction. Koderea is positioned as an AI advisory and assurance
company. Academy remains a visible commercial offering, but it is not the primary company identity.

## Terminology

- Use `AI Assurance & Validation` for the flagship capability.
- Use `V&V` when an abbreviation is necessary.
- Do not use `V2V`; it appears to be an inconsistent term in the draft appendix.
- Public website copy is English. Internal OpenSpec artifacts are also maintained in English.

## Current Change

The active change is [`establish-company-homepage`](changes/establish-company-homepage/).
It captures the approved concept, unresolved inputs, implementation design, and delivery tasks for
the first Koderea company homepage.

Main specs under `openspec/specs/` remain empty until the change is implemented and archived. This
preserves OpenSpec semantics: main specs describe current behavior, while change specs describe
proposed behavior.

## Workflow

```bash
openspec list
openspec status --change establish-company-homepage
openspec show establish-company-homepage
openspec validate establish-company-homepage --strict
openspec validate --all --strict
```

After implementation and approval:

```bash
openspec archive establish-company-homepage
```

Archiving promotes the delta specs into `openspec/specs/` as the canonical current-state
requirements. Do not archive the change until the homepage implementation and all required
verification tasks are complete.

## Repository State

This folder is not yet a Git repository, so issue, branch, commit, and pull-request workflow cannot
start yet. Initialize the repository and configure its remote before implementation begins.

OpenSpec CLI initialization created the standard directory structure and project-local Codex skills
under `.codex/skills/`. Restart Codex after checkout or setup changes so `/opsx:*` commands are
discovered. The installed core workflow includes propose, explore, apply-change, and archive-change.
