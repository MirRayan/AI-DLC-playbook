---
id: glossary
title: Glossary
---

# Glossary

Shorthand used across the playbook. See [02-core-concepts.md](02-core-concepts.md) for fuller explanations and [the AI-DLC spine](ai-dlc-spine.md) for what's non-negotiable.

| Term | Definition |
|------|-----------|
| **AI-DLC** | AI-Driven Development Lifecycle — the model where AI does most of the coding and humans provide direction, requirements, decisions, and validation. |
| **The spine** | The five non-negotiable AI-DLC commitments. See [the AI-DLC spine](ai-dlc-spine.md). |
| **Context repo** | The centralized, versioned repository of docs, specs, ADRs, and AI rules. The source of truth; separate from code repos. |
| **Code repo** | A repository holding application source, tests, and CI. A sibling of the context repo. |
| **Tier-1 hot files** | The files loaded into **every** AI session: `AGENTS.md`, `PROJECT-INDEX.md`, `.ai/context/project-overview.md`, `.ai/AI-ASSISTANT-RULES.md`. |
| **Hot file** | Any file loaded into every session (synonym for a Tier-1 file). |
| **PROJECT-INDEX.md** | The curated current-state index — phase, status, modules, decisions. Start here each session. |
| **AGENTS.md** | Agent-agnostic doc-sync and plan-before-act policy that applies to any AI tool. |
| **AI-ASSISTANT-RULES.md** | Project-specific ALWAYS/NEVER coding rules, kept in `.ai/`. |
| **DRI** | Directly Responsible Individual — the named owner of an artifact or review (e.g. the Doc DRI owns index accuracy). |
| **FR-\* / FR-{MODULE}-{NNN}** | Stable functional-requirement ID. Never renamed once published. |
| **{MODULE}-{NNN}** | Implementation ticket ID (e.g. `HOME-003`). |
| **{MODULE}-QA-{NNN}** | QA / acceptance-test ID (e.g. `HOME-QA-001`). |
| **api:{domain}:{slug}** | API registry ID (e.g. `api:auth:otp-send`). Never renamed once in module docs. |
| **ADR** | Architecture Decision Record — a numbered, accepted technical decision (`ADR-{NNN}`). |
| **PDR** | Pending Decision Record — an open decision (`PDR-{NNN}`), promoted to an ADR once resolved. |
| **Impact analysis** | Senior-level blast-radius assessment required before schema/API/interface changes. See [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md). |
| **Blast radius** | The full set of systems, files, and consumers a change can affect — including those not named in the prompt. |
| **Phase 0–6** | The reference lifecycle stages, from project context (0) to ongoing development (6). See [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md). |
| **Breakdown** | Phase-5 decomposition of a spec into modules, sprints, and tickets. |
| **Module** | A bounded feature area with its own breakdown doc and tickets. |
| **BACKEND-INDEX.md** | The API registry listing `api:*` IDs and their readiness status. |
| **Context recovery tiers** | Emergency / Standard / Task / Full — how much context to load for a given session. See [06-daily-workflows.md](06-daily-workflows.md). |
| **Greenfield / Brownfield** | A new project vs. an existing codebase adopting AI-DLC. |

---

[← The AI-DLC spine](ai-dlc-spine.md) | [Core concepts →](02-core-concepts.md) | [Playbook home](README.md)
