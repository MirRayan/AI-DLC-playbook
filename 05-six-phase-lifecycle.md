---
id: six-phase-lifecycle
---

# Six-Phase AI-DLC Lifecycle

Overview of the documentation pipeline. **For step-by-step execution, use the phase guides** — this page does not duplicate those steps.

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

---

## Phase summary

| Phase | Folder | Owner | Output | Guide |
|-------|--------|-------|--------|-------|
| 0 | `docs/00-project-context/` | Architect + leads | `PROJECT-CONTEXT.md`, hot files | [11.04](guides/11.04-phase-0-project-context.md) |
| 1 | `docs/01-concept/` | PM | `CONCEPT-NOTE.md` | [11.05](guides/11.05-phase-1-concept-note.md) |
| 2 | `docs/02-specification/` | PM + architect review | `SPECIFICATION.md` with `FR-*` IDs | [11.06](guides/11.06-phase-2-specification.md) |
| 3 | `docs/03-context/` + ADRs | Architect | `BUSINESS-TECH-CONTEXT.md`, ADR-001+ | [11.07](guides/11.07-phase-3-business-tech-context.md) |
| 4 | `docs/04-context-directories/` | Architect (optional) | Domain context files | [11.08](guides/11.08-phase-4-context-directories.md) |
| 5 | `docs/05-breakdown/` | Dev lead + PM | Module docs, sprint plan | [11.09](guides/11.09-phase-5-breakdown.md) |
| 6 | Code repos | Developers | Software + index updates + Playwright tests | [11.10](guides/11.10-phase-6-development.md) · [11.15](guides/11.15-playwright-testing.md) |

---

## Entry and exit gates

| Phase | Enter when | Exit when |
|-------|------------|-----------|
| 0 | Project chartered | Stack, integrations, constraints documented; hot files populated |
| 1 | Phase 0 done | Vision, scope, out-of-scope agreed |
| 2 | Concept approved | Every requirement has stable ID + acceptance criteria |
| 3 | Spec baseline | ADR-001 + ADR-002 accepted; no blocker pending decisions |
| 4 | Phase 3 done | Domain slices AI-loadable (or skipped) |
| 5 | Spec + ADRs stable | First sprint has implementable tickets |
| 6 | Breakdown ready | Features shipping; docs synced with code |

---

## Variants

### Greenfield (new project)

Full sequence: **0 → 1 → 2 → 3 → (4) → 5 → 6**

Recommended week 1: [11.14](guides/11.14-week-1-schedules.md)

### Brownfield (existing codebase)

- **Heavy Phase 0** — codebase analysis, debt, integration map
- **Abbreviated Phase 1–2** — focus on delta, not full re-spec
- **Fast Phase 5** — breakdown for change areas first
- Skip Phase 4 unless large multi-domain system

### PoC / spike

- Lightweight Phases 0–2
- Minimal Phase 5 (one module)
- Defer Phase 4
- Promote to full lifecycle if PoC succeeds

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
