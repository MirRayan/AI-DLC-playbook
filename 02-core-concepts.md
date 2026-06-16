---
id: core-concepts
---

# Core Concepts

Shared vocabulary for all roles. Assumes you have attended AI-DLC intro sessions.

---

## Centralized context repo

A **single Git repository** that holds documentation, specifications, architecture decisions, and AI-optimized context files. It is the source of truth for **humans and AI agents** across sessions and across multiple code repositories.

**Why separate from code?**
- Specs and ADRs outlive refactors
- Multiple code repos (iOS, Android, API) share one context
- AI loads structured docs without parsing entire codebases every session

---

## AI-first development model

In AI-DLC projects:

- **AI does 95–100% of coding**
- **Humans** provide direction, requirements, decisions, and validation
- Success depends on **efficient context loading** and **documentation sync**

Your context repo ships guides for this: `AI-SESSION-GUIDE.md`, `CONTEXT-RECOVERY.md`, `.ai/SESSION-PROTOCOL.md`.

---

## Tier-1 "hot files"

Load these **every AI session** without exception:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Doc sync policy (all AI tools) |
| `PROJECT-INDEX.md` | Curated current state — start here |
| `.ai/context/project-overview.md` | Condensed full project context |
| `.ai/AI-ASSISTANT-RULES.md` | ALWAYS/NEVER rules for code |

See [11.03 — Run AI session](guides/11.03-run-ai-session.md) for the copy-paste load prompt.

---

## Phased documentation pipeline

Numbered folders map to lifecycle phases:

| Phase | Folder | Primary artifact |
|-------|--------|----------------|
| 0 | `docs/00-project-context/` | `PROJECT-CONTEXT.md` |
| 1 | `docs/01-concept/` | `CONCEPT-NOTE.md` |
| 2 | `docs/02-specification/` | `SPECIFICATION.md` (`FR-*` IDs) |
| 3 | `docs/03-context/` + `docs/03-architecture/` | `BUSINESS-TECH-CONTEXT.md`, ADRs |
| 4 | `docs/04-context-directories/` | Domain context slices (optional) |
| 5 | `docs/05-breakdown/` | Module docs, sprint plan, tickets |
| 6 | Code repos + `docs/06-development/` | Working software + index updates |

Full lifecycle: [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md)

---

## Index vs git history

| Source | Role |
|--------|------|
| `PROJECT-INDEX.md` | Curated **current state** — phase, status, modules, decisions |
| Git log | Immutable **audit trail** — who changed what when |

Do not maintain a parallel changelog unless the team explicitly commits to one.

---

## Agent-agnostic policy

`AGENTS.md` and `docs/process/*` apply to **any AI tool** — Cursor, Copilot, Claude, ChatGPT, etc. Project-specific coding rules live in `.ai/AI-ASSISTANT-RULES.md`.

---

## Context flow diagram

```
Human intent (requirements, decisions)
        │
        ▼
Centralized context repo (specs, ADRs, .ai rules)
        │
        ▼
AI session (load hot files + task context)
        │
        ▼
Code repo(s) (implementation)
        │
        ▼
Doc sync back (PR updates index, registry, ADRs)
```

---

## API documentation pattern (when applicable)

Three layers — keep in sync:

| Layer | File | Contains |
|-------|------|----------|
| Registry | `BACKEND-INDEX.md` | `api:*` IDs, readiness status |
| Contract | `docs/04-reference/*.md` | Paths, payloads for implementers |
| Deep context | `docs/05-breakdown/backend/` | Backend internals, edge cases |

Module breakdowns reference **`api:*` IDs only**, not raw URLs.

---

## Context recovery tiers

| Tier | Time | Load |
|------|------|------|
| Emergency | ~60 sec | Index + AI rules |
| Standard | ~3 min | + project overview |
| Task | 5–10 min | + module / API / ADR for current work |
| Full onboarding | ~30 min | Phase docs 0–3 |

Details: [06-daily-workflows.md](06-daily-workflows.md)

---

## Next steps

→ [03-bootstrap-overview.md](03-bootstrap-overview.md) — folder layout  
→ [guides/11.01-create-context-repo.md](guides/11.01-create-context-repo.md) — create your repo

[← Playbook home](README.md)
