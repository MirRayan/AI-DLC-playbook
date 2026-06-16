---
id: role-architect
---

# Business Architect Onboarding Path

For architects owning technical strategy, ADRs, integrations, and documentation integrity.

---

## Week 1 goals

- [ ] Phase 0 context complete or reviewed
- [ ] ADR-001 and ADR-002 accepted
- [ ] Business-tech context document published
- [ ] Doc DRI assigned (may be you)
- [ ] API registry pattern established (if HTTP APIs)

**Schedule:** [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

---

## Documents you own

| Document | Phase | Guide |
|----------|-------|-------|
| `docs/00-project-context/PROJECT-CONTEXT.md` | 0 | [11.04](guides/11.04-phase-0-project-context.md) |
| `docs/03-context/BUSINESS-TECH-CONTEXT.md` | 3 | [11.07](guides/11.07-phase-3-business-tech-context.md) |
| `docs/03-architecture/decisions/` | 3+ | ADR-001, ADR-002, ... |
| `PROJECT-INDEX.md` (architecture sections) | Ongoing | ADR table, pending decisions, architecture summary |
| `BACKEND-INDEX.md` (accuracy) | 5+ | [11.12](guides/11.12-document-api-endpoint.md) |
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

Use workflows from your context repo (shipped in template):

| Workflow | When |
|----------|------|
| `decision-making-protocol.md` | New architectural decision |
| `pending-decision-workflow.md` | Blocker decisions |
| `architecture-review-checklist.md` | Quarterly / pre-release deep pass |

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
