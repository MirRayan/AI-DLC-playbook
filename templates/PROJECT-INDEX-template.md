# {Project Name} - Project Index

> **How to use this template:** Copy this file to `PROJECT-INDEX.md` at the root of your [context repo](../glossary.md#context-repo) (created from the template). Create it during [Phase 0 — Project Context](../guides/11.04-phase-0-project-context.md) and update it in every later phase (see [Phases 0 to 6](../glossary.md#phases-0-to-6)). The whole team reads it; the Doc [DRI](../glossary.md#directly-responsible-individual-dri) (directly responsible individual) keeps it accurate. Every path listed below refers to a file inside your context repo — the starter versions come from the [bundled project template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md). Replace every `{placeholder}`, then **delete this block in your copy**.

**Last Updated:** YYYY-MM-DD
**Template Version:** AI-Driven Project Template v1.x.x
**Current Phase:** 0 — Project Context

---

## Quick Facts

| Aspect | Detail |
|--------|--------|
| Project Name | {Project Name} |
| Type | {Web Application / API / Mobile App / etc.} |
| Architecture | {e.g. Microservices / Monolith / Native Mobile + API} |
| Tech Stack | {Primary languages and frameworks} |
| Backend | {Existing / Greenfield (new build) / Hybrid} |
| Current Phase | Phase 0 — Project Context |
| Status | {One-line current state} |

---

## Project Vision

{2–3 sentences: what the project is and why it exists.}

---

## Essential Documents

### Documentation policy (all agents)

| Document | Path | Purpose |
|----------|------|---------|
| Agent instructions | `AGENTS.md` | Doc sync policy for all AI tools |
| Backend API registry | `docs/05-breakdown/backend/BACKEND-INDEX.md` | Stable `api:*` endpoint IDs and readiness status (if the project has APIs) |
| Documentation sync | `docs/process/DOCUMENTATION-SYNC.md` | Light vs deep review cadence |
| PR checklist | `docs/process/PR-CHECKLIST.md` | Docs + API PR requirements |

### For Architects

| Document | Path |
|----------|------|
| Project Overview | `.ai/context/project-overview.md` |
| Business + Tech Context | `docs/03-context/BUSINESS-TECH-CONTEXT.md` |
| ADR index | `docs/03-architecture/decisions/README.md` |

### For Developers

| Document | Path |
|----------|------|
| AI Rules | `.ai/AI-ASSISTANT-RULES.md` |
| Session Guide | `AI-SESSION-GUIDE.md` |
| Context Recovery | `CONTEXT-RECOVERY.md` |

### For Stakeholders

| Document | Path |
|----------|------|
| Concept Note | `docs/01-concept/CONCEPT-NOTE.md` |
| Specification | `docs/02-specification/SPECIFICATION.md` |
| Project Context | `docs/00-project-context/PROJECT-CONTEXT.md` |

---

## Documentation cadence

- **Every pull request (PR)** that changes Markdown: light pass per `docs/process/DOCUMENTATION-SYNC.md`
- **Quarterly** (or pre-release): deep pass with assigned Doc DRI (directly responsible individual)
- **Source of truth:** this file for curated current state; git history for audit trail

---

## Architecture Summary

{High-level architecture in 1 paragraph — update after ADR-002.}

---

## Modules Overview

| # | Module | Spec refs | Sprint | Status |
|---|--------|-----------|--------|--------|
| 01 | {Module name} | FR-XXX | S1 | Not started |

---

## Key Decisions (ADR Summary)

| ADR | Title | Status |
|-----|-------|--------|
| ADR-001 | Platform and stack strategy | Proposed |
| ADR-002 | Architecture pattern | Proposed |

Full ADRs: `docs/03-architecture/decisions/`

---

## Pending Decisions

| ID | Question | Options | Owner | Target date |
|----|----------|---------|-------|-------------|
| PDR-001 | — | — | — | — |

IDs use the [PDR (Pending Decision Record)](../glossary.md#pending-decision-record-pdr) scheme; same columns as the pending-decisions table in `BUSINESS-TECH-CONTEXT.md`, so rows copy across without translation.

---

## Current Work Status

**Last updated:** YYYY-MM-DD

### In progress
- {Item}

### Completed
- {Item}

### Blocked
- {Item} — {reason}

---

## Repository Layout

```
parent-folder/
├── {project}-architecture/    # this repo — docs + .ai
├── {project}-api/               # optional code repo
└── {project}-web/               # optional code repo
```

---

## Onboarding

New team members: see [AI-DLC Playbook](../../AI-DLC_Playbook/README.md)
