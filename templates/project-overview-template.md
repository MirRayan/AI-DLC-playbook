# {Project Name} - Complete Project Context

> **How to use this template:** Copy this file to `.ai/context/project-overview.md` in your [context repo](../glossary.md#context-repo). The **architect or tech lead** fills it in during [Phase 0 — Project Context](../guides/11.04-phase-0-project-context.md). This is one of the four [Tier-1 hot files](../glossary.md#tier-1-hot-files) — a compact summary written for the **AI to read every session**, unlike `PROJECT-CONTEXT.md` (from [PROJECT-CONTEXT-template](PROJECT-CONTEXT-template.md)), which is the fuller human-oriented Phase 0 document. Keep this one short and current. Replace every `{placeholder}`, then **delete this block in your copy**.

**Project:** {Project Name}
**Type:** {Project Type}
**Status:** Phase 0 — Project Context
**Last Updated:** YYYY-MM-DD

---

## Project Vision

{What the project is and why it exists — 2–3 paragraphs.}

**Mission:** {One sentence mission statement.}

---

## Target Users

| User Type | Description | Primary Needs |
|-----------|-------------|---------------|
| {User type 1} | {Description} | {Needs} |
| {User type 2} | {Description} | {Needs} |

---

## Core Features (By Module)

### 1. {Module Name}
- {Feature}
- {Feature}

### 2. {Module Name}
- {Feature}

{Add modules as identified in concept/spec phases.}

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | {e.g. React, Swift/SwiftUI, Kotlin/Compose} |
| Backend | {e.g. Node.js, Java/Spring, existing API} |
| Database | {e.g. PostgreSQL, SQLite, Room} |
| Auth | {e.g. JWT, OAuth, OTP} |
| Deployment | {e.g. AWS, Azure, on-prem} |

---

## Integrations

| System | Purpose | Status |
|--------|---------|--------|
| {System name} | {Purpose} | Planned / Active |

---

## Architecture

{Summary aligned with ADR-002 — update after Phase 3.}

**Pattern:** {e.g. MVVM + Clean Architecture, layered monolith, microservices}

**Layers:**
- Presentation: {description}
- Domain: {description}
- Data: {description}

---

## Constraints

### Technical
- {Constraint — e.g. must integrate with existing backend}
- {Constraint — e.g. offline support required}

### Business
- {Constraint — e.g. launch date, regulatory requirement}

---

## Out of Scope (Current Release)

- {Item} — {reason}
- {Item} — {reason}

---

## Success Criteria

| Metric | Target |
|--------|--------|
| {Metric} | {Target} |

---

## Known Technical Debt

| Area | Description | Impact |
|------|-------------|--------|
| {Area} | {Description} | {High/Medium/Low} |

---

## Related Documents

- `PROJECT-INDEX.md` — master index
- `docs/00-project-context/PROJECT-CONTEXT.md` — detailed project context
- `docs/02-specification/SPECIFICATION.md` — requirements
- `.ai/AI-ASSISTANT-RULES.md` — development rules
