---
id: ai-dlc-spine
title: The AI-DLC Spine
---

# The AI-DLC Spine — What's Non-Negotiable vs. What You Adapt

AI-DLC is a **company standard**, not a single rigid process. Teams may run their own flow — different phases, tools, cadences — **as long as they keep the spine.** This page defines that spine: the handful of commitments that make a project "AI-DLC." Everything else on this site is a *reference implementation* you can adopt, trim, or replace.

> **Rule:** Follow the spine. Adapt the rest.

---

## The spine (5 non-negotiables)

| # | Commitment | Why it exists | Minimum bar |
|---|-----------|---------------|-------------|
| 1 | **A centralized context repo** | One versioned source of truth that outlives refactors and serves humans + AI across sessions and repos | A Git repo, separate from code, holding docs/specs/decisions and AI hot files |
| 2 | **Stable requirement IDs** | Traceability from requirement → ticket → test; AI and humans refer to the same anchors | Every requirement has an ID that is never reused or renamed once published (e.g. `FR-*`) |
| 3 | **Context-loaded AI sessions** | Prevents AI from guessing architecture and producing drift | Every AI session loads the project's hot files first; the human verifies AI understanding before code |
| 4 | **Impact analysis before risky changes** | Stops "literal" changes that break unlisted consumers | Schema / API / shared-interface changes get a blast-radius analysis + approved plan before any edit |
| 5 | **Docs sync with code** | Keeps the source of truth honest | Contract or decision changes update the relevant docs in the **same PR**; the index reflects current state |

If a team does these five, they are doing AI-DLC — regardless of how they organize the rest.

---

## What's adaptable (the reference implementation)

Everything below is *recommended*, not required. Swap freely to fit your project:

| Area | This playbook's default | You may instead… |
|------|-------------------------|------------------|
| Lifecycle | [Six phases (0–6)](05-six-phase-lifecycle.md) | Collapse phases, rename them, or run them iteratively |
| Folder layout | [`docs/00`…`06`](03-bootstrap-overview.md) | Use your own structure — keep it AI-loadable |
| Templates | [Playbook templates](README.md) + the bundled template repo | Your own templates, as long as IDs stay stable |
| AI tool | Any conversational AI (Claude, etc.) | Cursor, Copilot, ChatGPT — any tool that can load context |
| Cadence | Sprints + quarterly review | Kanban, continuous, or your team's rhythm |
| ID scheme | `FR-{MODULE}-{NNN}`, `api:*` | Your own scheme — just keep IDs stable and traceable |

When in doubt, start from the reference implementation and trim what you don't need.

---

## Adapt to your team size

Roles in this playbook (PM, architect, dev lead, developer, Doc DRI) are **hats, not headcount.** One person can wear several.

| Team | Suggested mapping |
|------|-------------------|
| Solo / 1–2 people | One person is architect + dev lead + Doc DRI; keep the spine, skip formal role hand-offs |
| 3–5 people | One architect/lead hat, one PM/Doc-DRI hat, rest developers |
| 6+ people | Full role separation as written in the [role guides](04-role-developer.md) |

The spine does not change with team size. The ceremony around it does.

---

## Self-assessment — "Are we doing AI-DLC?"

Run this checklist per project. Each box maps to a spine commitment.

- [ ] **(1)** A context repo exists, separate from code, and is the source of truth
- [ ] **(1)** Tier-1 hot files are populated and loaded every session
- [ ] **(2)** Requirements have stable IDs, traceable to tickets and tests
- [ ] **(3)** Sessions start by loading context; AI understanding is verified before coding
- [ ] **(4)** Schema/API/interface changes trigger impact analysis + an approved plan
- [ ] **(5)** Contract/decision changes ship doc updates in the same PR
- [ ] **(5)** `PROJECT-INDEX.md` reflects the current phase, status, and decisions

### Maturity levels

| Level | Name | You are here when… |
|-------|------|--------------------|
| 0 | Ad hoc | No context repo; AI used without structured context |
| 1 | Foundational | Context repo + hot files exist and are loaded every session (spine 1, 3) |
| 2 | Practicing | Stable IDs, impact analysis, and same-PR doc sync are routine (spine 2, 4, 5) |
| 3 | Mature | Quarterly architecture review, API registry discipline, and adoption metrics tracked |

**Aim for Level 2 within the first project.** Level 3 is for teams running multiple AI-DLC projects.

### Suggested adoption metrics (Level 3)

- % of schema/API changes with a recorded impact analysis
- % of contract-changing PRs that include doc updates
- Index freshness — days since `PROJECT-INDEX.md` last reflected reality

---

## Related

- [02-core-concepts.md](02-core-concepts.md) — vocabulary behind the spine
- [Glossary](glossary.md) — term definitions
- [11-prerequisites.md](11-prerequisites.md) — readiness gates (L1–L4)
- [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md) — the adaptable reference lifecycle

---

[← Core concepts](02-core-concepts.md) | [Glossary →](glossary.md) | [Playbook home](README.md)
