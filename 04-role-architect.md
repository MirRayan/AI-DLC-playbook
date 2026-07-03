---
id: role-architect
---

# Business Architect Onboarding Path

For architects owning technical strategy, [Architecture Decision Records (ADRs)](glossary.md#architecture-decision-record-adr), integrations, and documentation integrity. New to AI-DLC? Do the [Learn track](00-what-is-ai-dlc.md) first.

---

## Week 1 goals

- [ ] Phase 0 context complete or reviewed
- [ ] ADR-001 and ADR-002 accepted — [by convention](glossary.md#adr-001-and-adr-002-convention), ADR-001 records the platform/stack choice and ADR-002 the core architecture pattern; "Accepted" is the ADR status meaning the team has committed to the decision
- [ ] Business-tech context document published
- [ ] Doc DRI assigned (may be you)
- [ ] API registry pattern established (if HTTP APIs)

**Schedule:** [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

---

## Documents you own

All paths below are files in the [context repo](glossary.md#context-repo), created from the template ([11.01 — Create a context repo](guides/11.01-create-context-repo.md)):

| Document | Phase | Guide |
|----------|-------|-------|
| `docs/00-project-context/PROJECT-CONTEXT.md` | 0 | [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md) |
| `docs/03-context/BUSINESS-TECH-CONTEXT.md` | 3 | [11.07 — Phase 3: business + tech context](guides/11.07-phase-3-business-tech-context.md) |
| `docs/03-architecture/decisions/` | 3+ | ADR-001, ADR-002, ... |
| `PROJECT-INDEX.md` (architecture sections) | Ongoing | ADR table, pending decisions, architecture summary |
| `BACKEND-INDEX.md` (accuracy) | 5+ | [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md) |
| `.ai/context/project-overview.md` | 0+ | Keep aligned with reality |

---

## Documents you review (not always own)

| Document | Role |
|----------|------|
| `docs/02-specification/SPECIFICATION.md` | Feasibility review |
| `docs/05-breakdown/modules/` | Architecture alignment |
| `.ai/AI-ASSISTANT-RULES.md` | Reflect ADR constraints |

---

## Decision workflows

Use the workflow documents in `.ai/workflows/` of your context repo — short step-by-step protocols shipped with the template. In brief: the decision-making protocol walks a decision from problem to accepted ADR; the pending-decision workflow tracks decisions that block work ([PDRs](glossary.md#pending-decision-record-pdr)) until resolved; the review checklist drives the recurring deep pass.

| Workflow | When |
|----------|------|
| `.ai/workflows/decision-making-protocol.md` | New architectural decision |
| `.ai/workflows/pending-decision-workflow.md` | Blocker decisions |
| `.ai/workflows/architecture-review-checklist.md` | Quarterly / pre-release deep pass |

---

## Review cadence

| Cadence | Activity | Checklist |
|---------|----------|-----------|
| Every docs PR | Light pass | `docs/process/DOCUMENTATION-SYNC.md` |
| Every sprint | Index + API registry accuracy | With dev lead |
| Quarterly / pre-release | Deep architecture review | `.ai/workflows/architecture-review-checklist.md` |

Assign a **DRI** for quarterly reviews.

---

## Cross-repo responsibility

When backend contracts, integrations, or architecture change:

1. Update ADR if decision changed
2. Ensure `BACKEND-INDEX.md` + `docs/04-reference/` sync
3. Update `PROJECT-INDEX.md` architecture summary
4. Update `.ai/context/project-overview.md` if constraints changed
5. Notify dev lead if module breakdown impacts exist

---

## Cross-role reference

| Need | Architect goes to |
|------|-------------------|
| Business goals | `BUSINESS-TECH-CONTEXT.md` |
| Requirements | `SPECIFICATION.md` |
| Implementation status | `PROJECT-INDEX.md` + module breakdown |
| API landscape | `BACKEND-INDEX.md` |
| Coding rules | `.ai/AI-ASSISTANT-RULES.md` |

---

[← Start here](01-start-here.md) | [Phase 3 guide](guides/11.07-phase-3-business-tech-context.md) | [Playbook home](README.md)
