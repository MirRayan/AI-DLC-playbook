---
id: role-pm
---

# Project Manager Onboarding Path

For PMs owning requirements, scope, and release planning in an AI-DLC project. No coding background needed — if AI assistants or Git are new to you, do the [Learn track](00-what-is-ai-dlc.md) first, especially [AI Assistant Basics](00-ai-assistant-basics.md) and the [repo primer](00-repo-basics.md).

---

## Week 1 goals

- [ ] Read [concept note](glossary.md#concept-note) and [specification](glossary.md#specification-spec)
- [ ] Understand current phase and milestones from index
- [ ] [FR IDs](glossary.md#fr-ids) stable for first release scope — an FR ID (e.g. `FR-HOME-003`) is the permanent number of one requirement; "stable" means it is never renamed or reused once other documents refer to it
- [ ] Out-of-scope list explicit and agreed
- [ ] Sprint plan aligned with dev lead

**Schedule:** [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

---

## Documents you own

These are markdown files in the [context repo](glossary.md#context-repo) (created from the template). You can edit them without any developer tooling — through the repo host's web editor or by asking your AI assistant — see the [repo primer](00-repo-basics.md).

| Document | Phase | Guide |
|----------|-------|-------|
| `docs/01-concept/CONCEPT-NOTE.md` | 1 | [11.05 — Phase 1: concept note](guides/11.05-phase-1-concept-note.md) |
| `docs/02-specification/SPECIFICATION.md` | 2 | [11.06 — Phase 2: specification](guides/11.06-phase-2-specification.md) |
| `docs/05-breakdown/SPRINT-PLAN.md` | 5 | [11.09 — Phase 5: breakdown](guides/11.09-phase-5-breakdown.md) |
| Release milestones in `PROJECT-INDEX.md` | Ongoing | With [DRI](glossary.md#directly-responsible-individual-dri) |

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

Use [AI sessions](glossary.md#ai-session) for spec work — not code. Load the concept note + spec, not code repos. Never run an AI session before? [AI Assistant Basics](00-ai-assistant-basics.md) explains sessions and loading; [11.03 — Run an AI session](guides/11.03-run-ai-session.md) is the step-by-step checklist.

**Spec refinement prompt** — the `Load ...` lines work as-is in an [agentic tool](glossary.md#agentic-tool) that can read files; in a plain chat tool, paste the contents of both files instead of the `Load` line:

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

Follow [11.11 — Add a feature or module](guides/11.11-add-feature-or-module.md):

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
