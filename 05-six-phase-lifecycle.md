---
id: six-phase-lifecycle
---

# Six-Phase AI-DLC Lifecycle

Overview of the documentation pipeline: the ordered sequence of documents a project produces, where each phase's output becomes the input the AI loads in the next. Why documents drive AI development at all is explained in [What is AI-DLC?](00-what-is-ai-dlc.md). **For step-by-step execution, use the phase guides** — this page does not duplicate those steps.

---

## Flow

```
Phase 0: Project Context
    │
    ▼
Phase 1: Concept Note
    │
    ▼
Phase 2: Specification
    │
    ▼
Phase 3: Business + Tech Context (+ ADRs)
    │
    ▼
Phase 4: Context Directories (optional)
    │
    ▼
Phase 5: Breakdown
    │
    ▼
Phase 6: Development (ongoing)
```

What each named artifact is, in one line:

- **Project Context** — what the project *is*: tech stack, systems it touches, constraints.
- **[Concept Note](glossary.md#concept-note)** — what you are building, for whom, and what is out of scope.
- **[Specification](glossary.md#specification-spec)** — numbered requirements, each with a permanent ID and a testable "done" condition.
- **Business + Tech Context** — how the business works plus the big technical decisions.
- **[ADRs](glossary.md#architecture-decision-record-adr)** — Architecture Decision Records: one short numbered document per accepted technical decision.
- **Context Directories** — for large systems only: per-domain context files ("domain slices") the AI can load selectively.
- **[Breakdown](glossary.md#breakdown)** — the spec split into [modules](glossary.md#module), [sprints](glossary.md#sprint), and [tickets](glossary.md#ticket) small enough to implement.

---

## Phase summary

Folder paths below live in your context repo, created from the template.

| Phase | Folder | Owner | Output | Guide |
|-------|--------|-------|--------|-------|
| 0 | `docs/00-project-context/` | Architect + leads | `PROJECT-CONTEXT.md`, [hot files](glossary.md#hot-file) | [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md) |
| 1 | `docs/01-concept/` | Project manager (PM) | `CONCEPT-NOTE.md` | [11.05 — Phase 1: concept note](guides/11.05-phase-1-concept-note.md) |
| 2 | `docs/02-specification/` | PM + architect review | `SPECIFICATION.md` with [`FR-*` IDs](glossary.md#fr-ids) | [11.06 — Phase 2: specification](guides/11.06-phase-2-specification.md) |
| 3 | `docs/03-context/` + ADRs | Architect | `BUSINESS-TECH-CONTEXT.md`, [ADR-001 onwards](glossary.md#adr-001-and-adr-002-convention) | [11.07 — Phase 3: business and tech context](guides/11.07-phase-3-business-tech-context.md) |
| 4 | `docs/04-context-directories/` | Architect (optional) | Domain context files | [11.08 — Phase 4: context directories](guides/11.08-phase-4-context-directories.md) |
| 5 | `docs/05-breakdown/` | Dev lead + PM | Module docs, sprint plan | [11.09 — Phase 5: breakdown](guides/11.09-phase-5-breakdown.md) |
| 6 | Code repos | Developers | Software + index updates + [Playwright](glossary.md#playwright) browser tests | [11.10 — Phase 6: development](guides/11.10-phase-6-development.md) · [11.15 — Playwright testing](guides/11.15-playwright-testing.md) |

---

## Entry and exit gates

| Phase | Enter when | Exit when |
|-------|------------|-----------|
| 0 | Project chartered (formally approved to start) | Stack, integrations, constraints documented; hot files populated |
| 1 | Phase 0 done | Vision, scope, out-of-scope agreed |
| 2 | Concept approved | Every requirement has stable ID + [acceptance criteria](glossary.md#acceptance-criteria) |
| 3 | Spec baseline — the specification is complete enough to build decisions on, even if details still evolve | [ADR-001 + ADR-002](glossary.md#adr-001-and-adr-002-convention) accepted; no blocker [pending decisions (PDRs)](glossary.md#pending-decision-record-pdr) |
| 4 | Phase 3 done | Domain slices AI-loadable — each file small and self-contained enough to load into one AI session (or the phase is skipped) |
| 5 | Spec + ADRs stable | First sprint has implementable tickets |
| 6 | Breakdown ready | Features shipping; docs synced with code |

---

## Variants

### [Greenfield](glossary.md#greenfield) (new project)

Full sequence: **0 → 1 → 2 → 3 → (4) → 5 → 6**

Recommended week 1: [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

### [Brownfield](glossary.md#brownfield) (existing codebase)

- **Heavy Phase 0** — analyze the existing code, known technical debt, and a map of what it integrates with
- **Abbreviated Phase 1–2** — spec only what is changing (the delta), not the whole existing system
- **Fast Phase 5** — breakdown for change areas first
- Skip Phase 4 unless large multi-domain system

### [PoC](glossary.md#proof-of-concept-poc) / spike (a small throwaway build or research experiment)

- Lightweight Phases 0–2
- Minimal Phase 5 (one module)
- Defer Phase 4
- Promote to full lifecycle if the proof of concept (PoC) succeeds

---

## Common mistakes

| Mistake | Consequence | Fix |
|---------|-------------|-----|
| Jump to Phase 5 without stable FR IDs | Tickets untraceable to requirements | Complete Phase 2 first |
| Skip ADRs | AI and devs guess architecture | ADR-001 + ADR-002 before breakdown |
| Populate empty template folders | AI loads useless empty context | Only populate folders in use |
| Code before breakdown | Unstructured AI sessions | At least first sprint module docs |

---

## AI conversation openers (by phase)

Paste these into a new AI session after loading the hot files. "Load X" means: let an agentic tool read the file by path, or paste the file's contents into a plain chat — see [AI Assistant Basics](00-ai-assistant-basics.md) for the mechanics.

**Phase 0:**
```markdown
Help me complete docs/00-project-context/PROJECT-CONTEXT.md for [project].
Load any existing materials I provide. Output structured markdown per template.
```

**Phase 2:**
```markdown
Load CONCEPT-NOTE.md. Draft specification entries with FR-{MODULE}-{NNN} IDs
and testable acceptance criteria for all in-scope features.
```

**Phase 5:**
```markdown
Load SPECIFICATION.md for [module]. Produce module breakdown with
implementable tickets using the module template.
```

More prompts in each phase guide.

---

[← Bootstrap overview](03-bootstrap-overview.md) | [Phase 0 →](guides/11.04-phase-0-project-context.md) | [Playbook home](README.md)
