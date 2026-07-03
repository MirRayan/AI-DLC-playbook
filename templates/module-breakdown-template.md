# Module {NN} — {Module Name}

> **How to use this template:** Copy this file to `docs/05-breakdown/modules/{NN}-{module-name}.md` in your [context repo](../glossary.md#context-repo) — one copy per [module](../glossary.md#module). The **dev lead** fills it in during [Phase 5 — Breakdown](../guides/11.09-phase-5-breakdown.md), with the PM checking spec coverage. This is the platform-neutral version; mobile teams may prefer the mobile variant bundled in the project template. Replace every `{placeholder}`, delete the layer rows that don't apply to your stack, then **delete this block in your copy**.

| | |
|---|---|
| **Sprint** | S{N} (Weeks {X}–{Y}) |
| **Spec Ref** | {FR-XXX, FR-YYY} |
| **Dependencies** | {Modules or systems this module needs first} |
| **Milestone** | {Alpha / Beta / RC / GA} |
| **Platform** | {Both / iOS / Android / Web / Backend — use the values that apply; single-platform projects can drop this row} |

> **Out of Scope:** {What is explicitly NOT included in this module and why.}

[Ticket IDs](../glossary.md#ticket-ids) use `{MOD}-{NNN}`; QA tickets use [`{MOD}-QA-{NNN}`](../glossary.md#qa-ticket-ids). Every ticket references the [FR IDs](../glossary.md#fr-ids) it satisfies — that traceability is what makes an AI session productive: one ticket, one session, clear finish line.

---

## Data Layer

*Code that fetches and stores data. Backend-only projects may rename these layers (e.g. API / Service / Data) — keep the layered split, adapt the names.*

| ID | Title | FR refs |
|----|-------|---------|
| {MOD}-001 | {Data access for `{Entity}` — operations: get, create, update, delete} | {FR-XXX} |
| {MOD}-002 | {External API / SDK integration} | {FR-XXX} |
| {MOD}-003 | {Caching / persistence for `{entity}`} | {FR-XXX} |

---

## Domain / Business Logic

*The rules of what the app does.*

| ID | Title | FR refs |
|----|-------|---------|
| {MOD}-004 | {`{Feature}` logic: what it does} | {FR-XXX} |
| {MOD}-005 | {`{Feature}` logic: what it does} | {FR-XXX} |

---

## UI / Presentation

*What users see and interact with. Skip for backend-only modules.*

| ID | Title | FR refs | Design status |
|----|-------|---------|---------------|
| {MOD}-006 | {Screen or view name (brief description)} | {FR-XXX} | {Designed / Pending / In review} |

---

## QA

Each row is a self-contained test case written from the user's perspective, derived from the [acceptance criteria](../glossary.md#acceptance-criteria) of this module's FRs.

| ID | Title | FR refs |
|----|-------|---------|
| {MOD}-QA-001 | {Testable acceptance criterion — what the user sees/does} | {FR-XXX} |
| {MOD}-QA-002 | {Edge case — what happens when X is empty/missing/fails} | {FR-XXX} |
| {MOD}-QA-003 | {Negative test — Y is NOT possible when Z} | {FR-XXX} |

---

## Backend Dependencies (if the project has APIs)

List [`api:*` registry IDs](../glossary.md#api-registry-ids) **only** — never raw URLs. Paths and payloads live in the contract docs (`docs/04-reference/`); readiness lives in the [API registry](../glossary.md#backend-index) (`BACKEND-INDEX.md`).

| api:* ID | Needed by | Registry status |
|----------|-----------|-----------------|
| `api:{domain}:{slug}` | {MOD}-00{N} | {verified / pending / not_deployed} |

---

## Notes

- {Implementation notes for developers}
- {What must be built first}
