---
id: start-here
---

# Start Here

Welcome to the **AI-DLC Onboarding Playbook**. AI-DLC is the **AI-Driven Development Lifecycle** — a way of working where an AI assistant (e.g. Claude, ChatGPT, Cursor, GitHub Copilot) does most of the writing and coding, guided by documents your team keeps in one shared place. Use this page to orient yourself and pick the right path.

---

## The recommended reading order

This is the single, canonical reading path for the whole playbook. If you are completely new — never used an AI assistant, never used Git — do **not** skip step 1: the Learn track teaches everything the rest of the playbook assumes.

1. **The Learn track (4 pages, in order):** [What is AI-DLC?](00-what-is-ai-dlc.md) → [AI Assistant Basics](00-ai-assistant-basics.md) → [Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md) → [Hands-On Walkthrough: Your First AI-DLC Project](00-hands-on-walkthrough.md)
2. **This page** — orientation and the decision trees below
3. [02-core-concepts.md](02-core-concepts.md) — the vocabulary everything else uses
4. [ai-dlc-spine.md](ai-dlc-spine.md) — what is non-negotiable vs. adaptable
5. **Your role page** — [developer](04-role-developer.md), [project manager](04-role-pm.md), [business architect](04-role-architect.md), or [QA engineer](04-role-qa.md)
6. **Your first guide** — usually [11.01 — Create a context repo](guides/11.01-create-context-repo.md) for a new project, or [11.02 — Join an existing project](guides/11.02-join-existing-project.md)

Keep the [glossary](glossary.md) open as you read — it defines every term in the playbook in plain language and is always available as a reference.

---

## What this playbook is

- A **how-to guide** for [bootstrapping](glossary.md#bootstrap) and operating a centralized [context repo](glossary.md#context-repo) for AI-DLC projects
- **Step-by-step procedures** for developers, project managers (PMs), and business architects
- **Copy-paste templates** for core project documents
- A companion to the bundled example context repo: [AI-Driven-Project-Template/README.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md)

## What this playbook is not

- Dependent on any training course — the [Learn track](00-what-is-ai-dlc.md) above teaches the basics from zero
- Application source code or a project template itself
- A duplicate of every file inside the AI-Driven-Project-Template

---

## Three questions before you start

Answer these before creating or joining a context repo:

1. **Project name** — What is the context repo called? (Usually `{project}-architecture`)
2. **Repo layout** — Single code repo or multiple (for example web + API + mobile)? API stands for application programming interface — how one piece of software talks to another.
3. **Doc DRI** — Who is the [directly responsible individual (DRI)](glossary.md#directly-responsible-individual-dri) who owns `PROJECT-INDEX.md` (in your context repo, created from the template) and the recurring doc reviews?

---

## What lives where

| Location | Contains | Does NOT contain |
|----------|----------|------------------|
| **Context repo** | Docs, `.ai/` [rules files](glossary.md#rules-file), [specs](glossary.md#specification-spec), [breakdowns](glossary.md#breakdown), [Architecture Decision Records (ADRs)](glossary.md#architecture-decision-record-adr) | Application source code |
| **Code repo(s)** | Source code, tests, [continuous integration (CI)](glossary.md#continuous-integration-ci) checks | Canonical requirements (those live in the context repo — link to them) |

Code repos are typically **siblings** of the context repo — folders sitting side by side:

```
parent-folder/
├── my-project-architecture/   ← context repo
├── my-project-api/            ← code repo
└── my-project-web/            ← code repo
```

New to repos, Git, or folder trees like this? Read [Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md) first.

---

## Quick decision tree

The rows below mention lifecycle **phases**. In one line each: Phase 0 records the project context, Phases 1–2 produce the concept note and the [specification (spec)](glossary.md#specification-spec), Phase 3 records decisions, Phase 4 (optional) slices context for large systems, Phase 5 breaks the spec down into tickets, and Phase 6 is ongoing development. Full detail: [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md).

| Situation | Start with |
|-----------|------------|
| Brand new project | [11.01 — Create a context repo](guides/11.01-create-context-repo.md) → Phases 0–5 |
| Existing codebase, adopting AI-DLC | [11.01 — Create a context repo](guides/11.01-create-context-repo.md) → heavy Phase 0 → abbreviated spec → Phase 5 |
| Joining an existing AI-DLC project | [11.02 — Join an existing project](guides/11.02-join-existing-project.md) |
| API-heavy project (many API endpoints) | Enable `BACKEND-INDEX.md` from Phase 5; see [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md) |
| Small [proof of concept (PoC)](glossary.md#proof-of-concept-poc) | Phases 0–2 lightweight; skip Phase 4; minimal Phase 5 |

---

## Which guide do I need?

| I want to… | Guide |
|------------|-------|
| Create a new context repo | [11.01 — Create a context repo](guides/11.01-create-context-repo.md) |
| Join an existing project | [11.02 — Join an existing project](guides/11.02-join-existing-project.md) |
| Run an [AI session](glossary.md#ai-session) | [11.03 — Run an AI session](guides/11.03-run-ai-session.md) |
| Complete Phases 0–6 | [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md) through [11.10 — Phase 6: development](guides/11.10-phase-6-development.md) |
| Add a feature mid-project | [11.11 — Add a feature or module](guides/11.11-add-feature-or-module.md) |
| Document an API | [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md) |
| Open a docs/API [pull request (PR)](glossary.md#pull-request-pr) | [11.13 — PRs, docs, and APIs](guides/11.13-pr-docs-and-apis.md) |

Full index: [guides/README.md](guides/README.md)

---

## Daily work (operating practices)

To keep the playbook from drifting into duplicate copies, the daily developer path and its supporting checklist pages live in one place: see [Quick paths on the playbook home](README.md#quick-paths) for the step list, and [06-daily-workflows.md](06-daily-workflows.md) for the full day-to-day rhythm.

---

## Role quick links

| Role | Path |
|------|------|
| Developer | [04-role-developer.md](04-role-developer.md) |
| Project manager (PM) | [04-role-pm.md](04-role-pm.md) |
| Business architect | [04-role-architect.md](04-role-architect.md) |
| QA engineer | [04-role-qa.md](04-role-qa.md) |
| Week 1 schedule (all roles) | [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md) |

---

[← Playbook home](README.md) | [Core concepts →](02-core-concepts.md)
