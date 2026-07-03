---
title: AI-DLC Playbook
sidebar_label: Home
slug: /
---

# AI-DLC Onboarding Playbook

**AI-DLC** (AI-Driven Development Lifecycle) is a way of building software where an [AI assistant](glossary.md#ai-assistant) (e.g. Claude, ChatGPT, Cursor, GitHub Copilot) writes most of the code and documents, while humans direct the work, make the decisions, and verify the results. The team keeps its project knowledge in one shared, versioned folder of documents — the [context repo](glossary.md#context-repo) — and every AI work session loads those documents first, so the AI starts informed instead of guessing.

**Audience:** everyone. This playbook is fully self-contained — no training course, no AI-tool experience, and no programming background required. It serves developers, project managers, and business people alike.

**Purpose:** show you, step by step, how to set up ([bootstrap](glossary.md#bootstrap)) and operate a context repo for an AI-DLC project.

---

## New to AI-DLC? Start with the Learn track

Four short pages take you from zero to running your first AI-DLC project. Read them in order:

1. [What is AI-DLC?](00-what-is-ai-dlc.md) — the problem it solves and the model, explained from zero
2. [AI Assistant Basics](00-ai-assistant-basics.md) — sessions, prompts, and context, for people who have never used an AI tool
3. [Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md) — the minimum technical footing, written for non-developers too
4. [Hands-On Walkthrough: Your First AI-DLC Project](00-hands-on-walkthrough.md) — a tiny end-to-end project you complete yourself

Then continue with [Start Here](01-start-here.md) to pick your role path. Stuck on a word at any point? The [glossary](glossary.md) defines every term in plain language.

---

**Company standard:** teams may run their own flow, but every AI-DLC project keeps [the spine](ai-dlc-spine.md) — the non-negotiable core.

**Source template:** [AI-Driven-Project-Template/README.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md) — a complete example context repo bundled with this playbook. You copy it to start a new project.

---

## Find a page by task

| I want to… | Go to |
|------------|-------|
| Understand what this playbook covers | [01-start-here.md](01-start-here.md) |
| Learn core concepts and vocabulary | [02-core-concepts.md](02-core-concepts.md) |
| Know what's non-negotiable vs. adaptable | [ai-dlc-spine.md](ai-dlc-spine.md) |
| Look up a term | [glossary.md](glossary.md) |
| See the context repo folder layout | [03-bootstrap-overview.md](03-bootstrap-overview.md) |
| Follow a step-by-step procedure | [guides/README.md](guides/README.md) |
| Onboard as a developer | [04-role-developer.md](04-role-developer.md) |
| Onboard as a project manager (PM) | [04-role-pm.md](04-role-pm.md) |
| Onboard as a business architect | [04-role-architect.md](04-role-architect.md) |
| Understand the six-phase lifecycle | [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md) |
| Run daily [AI sessions](glossary.md#ai-session) | [06-daily-workflows.md](06-daily-workflows.md) |
| Check readiness before starting work | [11-prerequisites.md](11-prerequisites.md) |
| Follow best practices | [11-best-practices.md](11-best-practices.md) |
| Quick dos and don'ts | [11-dos-and-donts.md](11-dos-and-donts.md) |
| Review work before [merging](glossary.md#merge) it | [11-review-process.md](11-review-process.md) |
| Run an [impact analysis](glossary.md#impact-analysis) before a risky change | [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) |
| Keep docs and code in sync ([doc sync](glossary.md#doc-sync)) | [07-quality-and-maintenance.md](07-quality-and-maintenance.md) |
| Look up naming conventions | [08-artifact-catalog.md](08-artifact-catalog.md) |
| Troubleshoot common issues | [09-faq.md](09-faq.md) |

---

## Quick paths

### New project ([Day 0](glossary.md#day-0))

1. [11.01 — Create a context repo](guides/11.01-create-context-repo.md)
2. [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md)
3. [11.03 — Run an AI session](guides/11.03-run-ai-session.md) — verify that [context loading](glossary.md#context-loading) works

### Join an existing project

1. [11.02 — Join an existing project](guides/11.02-join-existing-project.md)
2. Your role page: [04-role-developer.md](04-role-developer.md) | [04-role-pm.md](04-role-pm.md) | [04-role-architect.md](04-role-architect.md)

### Implement a feature (daily developer path)

1. [11-prerequisites.md](11-prerequisites.md) — confirm task readiness (checklist level [L3](glossary.md#prerequisite-levels-l1-to-l4))
2. [11.03 — Run an AI session](guides/11.03-run-ai-session.md) — start a **fresh chat** and load the [Tier-1 hot files](glossary.md#tier-1-hot-files)
3. [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) — only if you change a database schema or an API (application programming interface) (checklist level [L4](glossary.md#prerequisite-levels-l1-to-l4))
4. [11.10 — Phase 6: development](guides/11.10-phase-6-development.md) — implement
5. [11-review-process.md](11-review-process.md) — AI self-review, then human review of the [pull request (PR)](glossary.md#pull-request-pr)
6. [11.13 — PRs, docs, and APIs](guides/11.13-pr-docs-and-apis.md) — if docs or APIs changed

---

## Playbook structure

```
AI-DLC_Playbook/
├── README.md                    ← you are here
├── 00-what-is-ai-dlc.md         # Learn track 1: the model, from zero
├── 00-ai-assistant-basics.md    # Learn track 2: sessions, prompts, context
├── 00-repo-basics.md            # Learn track 3: repos, Git, terminals
├── 00-hands-on-walkthrough.md   # Learn track 4: tiny end-to-end project
├── 01-start-here.md             # Orientation + canonical reading order
├── 02-core-concepts.md          # Vocabulary, diagrams
├── ai-dlc-spine.md              # Non-negotiable core vs. adaptable
├── glossary.md                  # Every term, defined in plain language
├── 03-bootstrap-overview.md     # Context repo folder map
├── 04-role-*.md                 # Per-role onboarding (developer, PM, architect)
├── 05-six-phase-lifecycle.md    # Phases 0–6 overview
├── 06-daily-workflows.md        # Day-to-day operating rhythm
├── 07-quality-and-maintenance.md
├── 08-artifact-catalog.md       # Naming conventions
├── 09-faq.md
├── 11-prerequisites.md          # Readiness checklists (levels L1–L4)
├── 11-best-practices.md
├── 11-dos-and-donts.md
├── 11-review-process.md
├── 11-impact-analysis-before-change.md
├── guides/
│   └── README.md                # Index of step-by-step guides 11.01–11.15
├── templates/
│   └── README.md                # Index of copy-paste document starters
├── AI-Driven-Project-Template/
│   └── README.md                # Complete example context repo to copy
└── meta/
    └── CONFLUENCE-IMPORT-NOTES.md   # Maintainers only
```

Two numbering quirks, so nothing looks broken: there is no `10-*` page — the top-level numbering simply skips from 09 to 11. And the top-level `11-*` pages (operating-practice references) are a different family from the step-by-step guides numbered `11.01`–`11.15` inside `guides/`.

---

## Templates for new projects

Copy these into your context repo when bootstrapping. The files they become (for example `PROJECT-INDEX.md`) live in your context repo, created from the template — not on this site. Phases are explained in [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md).

| Template | Use for |
|----------|---------|
| [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) | `PROJECT-INDEX.md` — the master index of project state ([PROJECT-INDEX](glossary.md#project-index)) |
| [templates/project-overview-template.md](templates/project-overview-template.md) | `.ai/context/project-overview.md` — one of the four Tier-1 hot files loaded into every AI session |
| [templates/PROJECT-CONTEXT-template.md](templates/PROJECT-CONTEXT-template.md) | Phase 0 — project context |
| [templates/CONCEPT-NOTE-template.md](templates/CONCEPT-NOTE-template.md) | Phase 1 — concept note |
| [templates/SPECIFICATION-template.md](templates/SPECIFICATION-template.md) | Phase 2 — specification |
| [templates/BUSINESS-TECH-CONTEXT-template.md](templates/BUSINESS-TECH-CONTEXT-template.md) | Phase 3 — business + tech context |
| [templates/AI-RULES-impact-analysis-snippet.md](templates/AI-RULES-impact-analysis-snippet.md) | ALWAYS/NEVER [rules](glossary.md#rules-file) that force an impact analysis before risky changes |
| [templates/TEST-CONTEXT-template.md](templates/TEST-CONTEXT-template.md) | Phase 6 — test context for [Playwright](glossary.md#playwright) browser tests |

For a fully populated reference, see the bundled example: [AI-Driven-Project-Template/README.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md).

---

*Maintainers' note:* to publish this playbook to the company wiki (Confluence), see `meta/CONFLUENCE-IMPORT-NOTES.md` in the playbook repo. Readers can ignore this.
