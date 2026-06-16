---
id: start-here
---

# Start Here

Welcome to the **AI-DLC Onboarding Playbook**. Use this page to orient yourself and pick the right path.

---

## What this playbook is

- A **how-to guide** for bootstrapping and operating a **centralized context repo** for AI-DLC projects
- **Step-by-step procedures** for developers, PMs, and business architects
- **Copy-paste templates** for core project documents
- A link to the bundled [AI-Driven-Project-Template](AI-Driven-Project-Template)

## What this playbook is not

- A replacement for AI-DLC training sessions (you should have attended those)
- Application source code or a project template itself
- A duplicate of every file inside the AI-Driven-Project-Template

---

## Three questions before you start

Answer these before creating or joining a context repo:

1. **Project name** — What is the context repo called? (Usually `{project}-architecture`)
2. **Repo layout** — Single code repo or multiple (web + API + mobile)?
3. **Doc DRI** — Who owns `PROJECT-INDEX.md` and quarterly doc reviews?

---

## What lives where

| Location | Contains | Does NOT contain |
|----------|----------|------------------|
| **Context repo** | Docs, `.ai/` rules, specs, breakdowns, ADRs | Application source code |
| **Code repo(s)** | Source code, tests, CI | Canonical requirements (link to context repo) |

Code repos are typically **siblings** of the context repo:

```
parent-folder/
├── my-project-architecture/   ← context repo
├── my-project-api/
└── my-project-web/
```

---

## Quick decision tree

| Situation | Start with |
|-----------|------------|
| Brand new project | [11.01 Create context repo](guides/11.01-create-context-repo.md) → Phases 0–5 |
| Existing codebase, adopting AI-DLC | [11.01](guides/11.01-create-context-repo.md) → heavy Phase 0 → abbreviated spec → Phase 5 |
| Joining existing AI-DLC project | [11.02 Join existing project](guides/11.02-join-existing-project.md) |
| API-heavy project | Enable `BACKEND-INDEX.md` from Phase 5; see [11.12](guides/11.12-document-api-endpoint.md) |
| Small PoC | Phases 0–2 lightweight; skip Phase 4; minimal Phase 5 |

---

## Which guide do I need?

| I want to… | Guide |
|------------|-------|
| Create a new context repo | [11.01](guides/11.01-create-context-repo.md) |
| Join an existing project | [11.02](guides/11.02-join-existing-project.md) |
| Run an AI session | [11.03](guides/11.03-run-ai-session.md) |
| Complete Phases 0–6 | [11.04](guides/11.04-phase-0-project-context.md) through [11.10](guides/11.10-phase-6-development.md) |
| Add a feature mid-project | [11.11](guides/11.11-add-feature-or-module.md) |
| Document an API | [11.12](guides/11.12-document-api-endpoint.md) |
| Open a docs/API PR | [11.13](guides/11.13-pr-docs-and-apis.md) |

Full index: [guides/README.md](guides/README.md)

---

## Operating practices (daily work)

| I want to… | Page |
|------------|------|
| Check prerequisites before starting | [11-prerequisites.md](11-prerequisites.md) |
| See best practices | [11-best-practices.md](11-best-practices.md) |
| Quick dos and don'ts | [11-dos-and-donts.md](11-dos-and-donts.md) |
| Understand review gates | [11-review-process.md](11-review-process.md) |
| Analyze impact before a "small" change | [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) |
| Clear session before new task | [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature) |

**Daily developer path:**

```
Prerequisites → New chat → Tier-1 load → Impact analysis (if needed) →
Implement → Review → PR
```

---

## Role quick links

| Role | Path |
|------|------|
| Developer | [04-role-developer.md](04-role-developer.md) |
| Project manager | [04-role-pm.md](04-role-pm.md) |
| Business architect | [04-role-architect.md](04-role-architect.md) |
| Week 1 schedule (all roles) | [11.14](guides/11.14-week-1-schedules.md) |

---

## Recommended reading order (15 min)

1. This page
2. [02-core-concepts.md](02-core-concepts.md)
3. [11-dos-and-donts.md](11-dos-and-donts.md) (developers — quick reference)
4. Your role path (04-role-*.md)
5. First actionable guide from [guides/README.md](guides/README.md)

---

[← Playbook home](README.md)
