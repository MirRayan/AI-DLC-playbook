---
title: AI-DLC Playbook
sidebar_label: Home
slug: /
---

# AI-DLC Onboarding Playbook

**Purpose:** Step-by-step guide for developers, project managers, and business architects to bootstrap and operate a **centralized context repo** for an AI-DLC (AI-Driven Development Lifecycle) project.

**Audience:** Team members who have already attended AI-DLC intro sessions. This playbook focuses on *how* — not re-teaching *why*.

**Company standard:** Teams may run their own flow, but every AI-DLC project keeps [the spine](ai-dlc-spine.md) — the non-negotiable core.

**Source template:** [AI-Driven-Project-Template](AI-Driven-Project-Template) — bundled in this repo.

---

## Start here

| I want to… | Go to |
|------------|-------|
| Understand what this playbook covers | [01-start-here.md](01-start-here.md) |
| Learn core concepts and vocabulary | [02-core-concepts.md](02-core-concepts.md) |
| Know what's non-negotiable vs. adaptable | [ai-dlc-spine.md](ai-dlc-spine.md) |
| Look up a term | [glossary.md](glossary.md) |
| See context repo folder layout | [03-bootstrap-overview.md](03-bootstrap-overview.md) |
| Follow a step-by-step procedure | [guides/README.md](guides/README.md) |
| Onboard as a developer | [04-role-developer.md](04-role-developer.md) |
| Onboard as a PM | [04-role-pm.md](04-role-pm.md) |
| Onboard as a business architect | [04-role-architect.md](04-role-architect.md) |
| Understand the six-phase lifecycle | [05-six-phase-lifecycle.md](05-six-phase-lifecycle.md) |
| Run daily AI sessions | [06-daily-workflows.md](06-daily-workflows.md) |
| Check prerequisites before work | [11-prerequisites.md](11-prerequisites.md) |
| Follow best practices | [11-best-practices.md](11-best-practices.md) |
| Quick dos and don'ts | [11-dos-and-donts.md](11-dos-and-donts.md) |
| Review before merge | [11-review-process.md](11-review-process.md) |
| Analyze impact before changes | [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) |
| Maintain quality and doc sync | [07-quality-and-maintenance.md](07-quality-and-maintenance.md) |
| Look up naming conventions | [08-artifact-catalog.md](08-artifact-catalog.md) |
| Troubleshoot common issues | [09-faq.md](09-faq.md) |

---

## Quick paths

### New project (Day 0)

1. [guides/11.01-create-context-repo.md](guides/11.01-create-context-repo.md)
2. [guides/11.04-phase-0-project-context.md](guides/11.04-phase-0-project-context.md)
3. [guides/11.03-run-ai-session.md](guides/11.03-run-ai-session.md) — verify context load

### Join existing project

1. [guides/11.02-join-existing-project.md](guides/11.02-join-existing-project.md)
2. Your role path: [04-role-developer.md](04-role-developer.md) | [04-role-pm.md](04-role-pm.md) | [04-role-architect.md](04-role-architect.md)

### Implement a feature (daily developer path)

1. [11-prerequisites.md](11-prerequisites.md) — task readiness (L3)
2. [guides/11.03-run-ai-session.md](guides/11.03-run-ai-session.md) — **new chat** + Tier-1 load
3. [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) — if schema/API change (L4)
4. [guides/11.10-phase-6-development.md](guides/11.10-phase-6-development.md) — implement
5. [11-review-process.md](11-review-process.md) — AI self-review + human PR review
6. [guides/11.13-pr-docs-and-apis.md](guides/11.13-pr-docs-and-apis.md) — if docs/APIs change

---

## Playbook structure

```
AI-DLC_Playbook/
├── README.md                    ← you are here
├── 01-start-here.md             # Hub + quick-picker
├── 02-core-concepts.md          # Vocabulary, diagrams
├── ai-dlc-spine.md              # Non-negotiable core vs. adaptable
├── glossary.md                  # Term definitions
├── 03-bootstrap-overview.md
├── 04-role-*.md                 # Per-role onboarding
├── 05-six-phase-lifecycle.md
├── 06-daily-workflows.md
├── 07-quality-and-maintenance.md
├── 08-artifact-catalog.md
├── 09-faq.md
├── 11-prerequisites.md          # Layered checklists (L1–L4)
├── 11-best-practices.md
├── 11-dos-and-donts.md
├── 11-review-process.md
├── 11-impact-analysis-before-change.md
├── guides/                      # Step-by-step how-to (15 guides)
├── templates/                   # Copy-paste starters for new repos
├── AI-Driven-Project-Template/  # Bundled source template to bootstrap from
└── meta/
    └── CONFLUENCE-IMPORT-NOTES.md
```

---

## Templates for new projects

Copy these into your context repo when bootstrapping:

| Template | Use for |
|----------|---------|
| [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) | Master index |
| [templates/project-overview-template.md](templates/project-overview-template.md) | AI hot file |
| [templates/PROJECT-CONTEXT-template.md](templates/PROJECT-CONTEXT-template.md) | Phase 0 |
| [templates/CONCEPT-NOTE-template.md](templates/CONCEPT-NOTE-template.md) | Phase 1 |
| [templates/SPECIFICATION-template.md](templates/SPECIFICATION-template.md) | Phase 2 |
| [templates/BUSINESS-TECH-CONTEXT-template.md](templates/BUSINESS-TECH-CONTEXT-template.md) | Phase 3 |
| [templates/AI-RULES-impact-analysis-snippet.md](templates/AI-RULES-impact-analysis-snippet.md) | Impact analysis ALWAYS rules |
| [templates/TEST-CONTEXT-template.md](templates/TEST-CONTEXT-template.md) | Playwright test context (Phase 6) |

For a full populated reference, see the bundled [AI-Driven-Project-Template](AI-Driven-Project-Template).

---

**Confluence import:** See [meta/CONFLUENCE-IMPORT-NOTES.md](meta/CONFLUENCE-IMPORT-NOTES.md) when ready to publish to wiki.
