---
id: best-practices
title: Best Practices
---

# Best Practices

Consolidated AI-DLC operating practices. For step-by-step procedures, follow the [guides/](guides/README.md).

---

## Context discipline

- Load the **[Tier-1 hot files](glossary.md#tier-1-hot-files) every session** — `AGENTS.md`, `PROJECT-INDEX.md`, `project-overview.md`, `AI-ASSISTANT-RULES.md` (what "loading" means: [AI Assistant Basics](00-ai-assistant-basics.md))
- Load **only task-relevant docs** — one module + relevant API/ADR; not entire `docs/` tree
- Treat `PROJECT-INDEX.md` as **curated current truth**; use git log for history
- **Verify AI understanding** before coding — stop and fix hot files if wrong
- Do not load empty placeholder folders

→ [11.03 — Run an AI session](guides/11.03-run-ai-session.md) | [06-daily-workflows.md](06-daily-workflows.md)

---

## Session hygiene

- **Start a new chat** when switching task, module, feature, or code repo
- **One task per session** when possible — reduces context pollution
- Save **handoff note** when ending a session (ticket comment or module doc)
- Distinguish **new chat** (new task) from **context refresh** (same task, long session)
- Close polluted sessions — do not fight stale context

→ [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature)

---

## Change discipline

- **Impact analysis first** for schema, API, and interface changes — even when prompt sounds small
- **Plan before act** — goal, file table, risks; wait for approval (`AGENTS.md`)
- **Smallest correct diff** — only approved scope; no drive-by refactors
- **Execute in dependency order** — migration → backend → API → clients → tests → docs
- **Never rename** stable IDs (`api:*`, `FR-*`) once published

→ [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md)

---

## Documentation sync

- Update **docs in same PR** as contract or decision changes
- **BACKEND-INDEX + reference docs** always together on API change
- Module breakdown references **`api:*` IDs** — not raw URLs
- Light doc pass on **every docs PR**; deep pass **quarterly**
- Assign a **doc DRI** for index and registry accuracy

→ [07-quality-and-maintenance.md](07-quality-and-maintenance.md) | [11.13 — PR docs](guides/11.13-pr-docs-and-apis.md)

---

## Human in the loop

- **Humans** provide direction, requirements, decisions, and final validation
- **AI** implements, drafts docs, analyzes impact — does not self-approve plans
- **Architect** owns ADRs and cross-cutting technical decisions
- **PM** owns specification (`FR-*`) and scope boundaries
- **Sr dev / peer** reviews PRs before merge

→ [11-review-process.md](11-review-process.md)

---

## Role clarity

| Artifact | Owner |
|----------|-------|
| `PROJECT-INDEX.md` | Doc DRI + milestone owners |
| `SPECIFICATION.md` | PM |
| ADRs | Architect |
| `BACKEND-INDEX.md` + API reference | Dev / architect |
| Module breakdown tickets | Dev lead |
| Application code | Developer |
| `AI-ASSISTANT-RULES.md` | Dev lead + architect |

---

## Prerequisites before work

Satisfy the right readiness level before starting — **L1** literacy → **L2** project → **L3** task → **L4** change-type. The full layered checklists are canonical in [11-prerequisites.md](11-prerequisites.md).

---

## Quick daily path (developers)

```
Prerequisites (L3) → New chat → Tier-1 load → Task context →
Impact analysis (if L4) → Plan approval → Implement →
AI self-review → Human PR review → Doc sync (if needed)
```

---

[← Prerequisites](11-prerequisites.md) | [Dos and don'ts →](11-dos-and-donts.md) | [Playbook home](README.md)
