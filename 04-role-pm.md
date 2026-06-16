---
id: role-pm
---

# Project Manager Onboarding Path

For PMs owning requirements, scope, and release planning in an AI-DLC project.

---

## Week 1 goals

- [ ] Read concept note and specification
- [ ] Understand current phase and milestones from index
- [ ] FR IDs stable for first release scope
- [ ] Out-of-scope list explicit and agreed
- [ ] Sprint plan aligned with dev lead

**Schedule:** [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

---

## Documents you own

| Document | Phase | Guide |
|----------|-------|-------|
| `docs/01-concept/CONCEPT-NOTE.md` | 1 | [11.05](guides/11.05-phase-1-concept-note.md) |
| `docs/02-specification/SPECIFICATION.md` | 2 | [11.06](guides/11.06-phase-2-specification.md) |
| `docs/05-breakdown/SPRINT-PLAN.md` | 5 | [11.09](guides/11.09-phase-5-breakdown.md) |
| Release milestones in `PROJECT-INDEX.md` | Ongoing | With DRI |

---

## Documents you read (not own)

| Document | Why |
|----------|-----|
| `PROJECT-INDEX.md` | Status, modules, blockers |
| `docs/03-context/BUSINESS-TECH-CONTEXT.md` | Business ↔ tech alignment |
| `docs/05-breakdown/modules/` | Implementation breakdown |
| `BACKEND-INDEX.md` | API readiness summary (don't edit registry) |
| ADRs (summary in index) | Architecture constraints on scope |

---

## Documents you do not own

- ADRs — architect
- `BACKEND-INDEX.md` / API reference — dev / architect
- `.ai/AI-ASSISTANT-RULES.md` — dev lead / architect
- Implementation ticket details in module breakdown — dev lead writes; PM reviews for spec coverage

---

## AI collaboration for PMs

Use AI sessions for spec work — not code. Load concept note + spec, not code repos.

**Spec refinement prompt:**

```markdown
Load docs/01-concept/CONCEPT-NOTE.md and docs/02-specification/SPECIFICATION.md.

For [feature area]:
1. Identify gaps between concept and spec
2. Propose FR entries with testable acceptance criteria
3. Flag items that need architect review
4. Mark explicit OUT OF SCOPE items

Do not write code. Output markdown for spec review only.
```

---

## Adding scope mid-project

Follow [11.11 — Add feature/module](guides/11.11-add-feature-or-module.md):

1. Add FR entries to specification (you)
2. Architect reviews architectural impact
3. Dev lead creates module breakdown
4. Update sprint plan and index

---

## Cross-role reference

| Need | PM goes to |
|------|------------|
| Current status | `PROJECT-INDEX.md` |
| Requirements | `docs/02-specification/` |
| What's being built | `docs/05-breakdown/modules/` + sprint plan |
| API ready? | Summary in index; detail in `BACKEND-INDEX.md` |
| Why this architecture? | ADR summary in index |

---

[← Start here](01-start-here.md) | [Phase 1 guide](guides/11.05-phase-1-concept-note.md) | [Playbook home](README.md)
