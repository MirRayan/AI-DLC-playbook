---
id: dos-and-donts
title: "Dos and Don'ts"
---

# Dos and Don'ts

Quick reference card for AI-DLC daily work. For explanations, see linked pages.

---

## AI sessions

| DO | DON'T |
|----|-------|
| Load [Tier-1 hot files](glossary.md#tier-1-hot-files) **every** session | Skip context load because "the AI remembers yesterday" |
| **Start a new chat** when switching task or feature | Carry prior task context into unrelated work |
| Load only docs for **this** ticket | Load entire `docs/` tree or empty placeholder folders |
| Verify AI facts match `PROJECT-INDEX.md` before coding | Proceed when AI states wrong phase or architecture |
| State intent and "done when" clearly | Vague prompts like "work on the project" |
| End session with handoff note for next ticket | Abandon session mid-task with no record |

→ [11.03 — Run an AI session](guides/11.03-run-ai-session.md) | [06-daily-workflows.md](06-daily-workflows.md)

---

## Changes and impact

| DO | DON'T |
|----|-------|
| Run **impact analysis** before schema/API/interface changes | Execute literal prompt on "rename one column" and say done |
| Present plan + file table; wait for approval | Let AI silently edit files |
| Execute in dependency order: migration → backend → API → clients → tests → docs | Change production DB without migration plan |
| Call out what a junior might miss | Assume the prompt lists all affected systems |
| Use one-line plan for genuine micro-fixes only | Skip all planning because change "looks small" |

→ [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) | [11-prerequisites.md](11-prerequisites.md) (L4)

---

## Code and repos

| DO | DON'T |
|----|-------|
| Write application code in **code repo** | Put source code in context repo |
| Match patterns in `AI-ASSISTANT-RULES.md` and ADRs | Invent new architecture per session |
| Write tests with or immediately after code | Merge without tests for new behavior |
| Check `BACKEND-INDEX.md` before integrating APIs | Integrate `pending` or `not_deployed` APIs without team agreement |

→ [04-role-developer.md](04-role-developer.md)

---

## Documentation and APIs

| DO | DON'T |
|----|-------|
| Update `BACKEND-INDEX.md` + reference doc **together** | Change API path without registry update |
| Reference `api:*` IDs in module breakdown | Paste raw URLs that drift when backend changes |
| Light doc pass on every docs PR | Let index dates and status go stale |
| Keep `FR-*` and `api:*` IDs stable once published | Rename IDs after breakdown references them |
| Pair code PR with docs PR when contracts change | Merge code first and "fix docs later" |

→ [11.13 — PR docs and APIs](guides/11.13-pr-docs-and-apis.md) | [07-quality-and-maintenance.md](07-quality-and-maintenance.md)

---

## Review and merge

| DO | DON'T |
|----|-------|
| Run AI self-review before opening PR | Open PR immediately after last AI edit |
| Request human PR review before merge | Self-merge without peer review |
| Escalate to architect for cross-cutting impact | Guess on migration or breaking API changes |
| Resolve blockers from review before merge | Ignore "what a junior might miss" findings |

→ [11-review-process.md](11-review-process.md)

---

## Roles

**PM** owns the spec (`FR-*`), **architect** owns ADRs, **dev lead** owns the breakdown, **Doc DRI** owns index accuracy. Don't edit another role's artifact without coordination, and don't assume "someone else" updates the index.

→ Canonical ownership table: [Best practices — Role clarity](11-best-practices.md#role-clarity) · [04-role-pm.md](04-role-pm.md) | [04-role-architect.md](04-role-architect.md)

---

## Project setup

| DO | DON'T |
|----|-------|
| [Bootstrap](glossary.md#bootstrap) from the bundled [AI-Driven-Project-Template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md) | Invent folder structure from scratch |
| Populate [hot files](glossary.md#hot-file) in Phase 0 | Leave `{placeholder}` text in index |
| Clone code repos as siblings of context repo | Nest application repos inside context repo |
| Run context-load test before major development | Skip Phase 0 and jump to coding |

→ [11.01 — Create a context repo](guides/11.01-create-context-repo.md) | [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md)

---

[← Best practices](11-best-practices.md) | [Review process →](11-review-process.md) | [FAQ →](09-faq.md) | [Playbook home](README.md)
