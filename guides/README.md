---
title: Step-by-Step Guides
---

# Step-by-Step Guides

Actionable, numbered procedures. Each guide includes prerequisites, time estimate, owner, verification per step, copy-paste AI prompts, and a **What's next** link.

> **Completely new?** If you have never used an AI assistant, or AI-DLC (AI-Driven Development Lifecycle) is new to you, read the Learn track before any guide: [What is AI-DLC?](../00-what-is-ai-dlc.md) → [AI Assistant Basics](../00-ai-assistant-basics.md) → [Repos, Git, and Terminals — a Primer for Everyone](../00-repo-basics.md) → [Hands-On Walkthrough: Your First AI-DLC Project](../00-hands-on-walkthrough.md). Whenever a word here is unfamiliar, look it up in the [glossary](../glossary.md).

**Operating practices:** [Prerequisites](../11-prerequisites.md) | [Best practices](../11-best-practices.md) | [Dos and don'ts](../11-dos-and-donts.md) | [Review process](../11-review-process.md) | [Impact analysis](../11-impact-analysis-before-change.md)

---

## Which guide do I need?

| I want to… | Guide |
|------------|-------|
| Create a new [context repo](../glossary.md#context-repo) from scratch | [11.01 — Create context repo](11.01-create-context-repo.md) |
| Join an existing AI-DLC project | [11.02 — Join existing project](11.02-join-existing-project.md) |
| Run my first (or any) [AI session](../glossary.md#ai-session) | [11.03 — Run AI session](11.03-run-ai-session.md) |
| Complete Phase 0: Project context | [11.04 — Phase 0](11.04-phase-0-project-context.md) |
| Complete Phase 1: Concept note | [11.05 — Phase 1](11.05-phase-1-concept-note.md) |
| Complete Phase 2: Specification | [11.06 — Phase 2](11.06-phase-2-specification.md) |
| Complete Phase 3: Business + tech context | [11.07 — Phase 3](11.07-phase-3-business-tech-context.md) |
| Complete Phase 4: Context directories (optional) | [11.08 — Phase 4](11.08-phase-4-context-directories.md) |
| Complete Phase 5: Breakdown | [11.09 — Phase 5](11.09-phase-5-breakdown.md) |
| Phase 6: Ongoing development | [11.10 — Phase 6](11.10-phase-6-development.md) |
| Add a new feature or [module](../glossary.md#module) mid-project | [11.11 — Add feature/module](11.11-add-feature-or-module.md) |
| Document a new API (application programming interface) endpoint | [11.12 — Document API](11.12-document-api-endpoint.md) |
| Open a [pull request (PR)](../glossary.md#pull-request-pr) that touches docs or APIs | [11.13 — PR docs and APIs](11.13-pr-docs-and-apis.md) |
| Week 1 schedule by role | [11.14 — Week 1 schedules](11.14-week-1-schedules.md) |
| Run [Playwright](../glossary.md#playwright) browser tests for a module | [11.15 — Playwright testing](11.15-playwright-testing.md) |

---

## Recommended order for a new [greenfield](../glossary.md#greenfield) project

```
11.01 → 11.04 → 11.03 (context-load test) → 11.05 → 11.06 → 11.07 → 11.09 → 11.10
         (optional: 11.08 between 11.07 and 11.09)
```

Run 11.03 right after Phase 0 to confirm the AI can load and understand your new hot files — then keep using it for every session.

## Recommended order for [brownfield](../glossary.md#brownfield) adoption

```
11.01 → 11.04 → 11.03 (context-load test) → 11.06 → 11.07 → 11.09 → 11.10
```

Same guides, different emphasis: spend extra effort in 11.04 documenting the existing system (code map, technical debt, integrations), and keep 11.06 lean — spec only what is changing, not the whole existing system.

---

## Guide index

| # | File | Time | Owner |
|---|------|------|-------|
| 11.01 | [create-context-repo](11.01-create-context-repo.md) | ~30 min | Tech lead / architect |
| 11.02 | [join-existing-project](11.02-join-existing-project.md) | ~45 min | New team member |
| 11.03 | [run-ai-session](11.03-run-ai-session.md) | ~10 min start | Any technical role |
| 11.04 | [phase-0-project-context](11.04-phase-0-project-context.md) | 2–4 hrs | Architect + tech lead |
| 11.05 | [phase-1-concept-note](11.05-phase-1-concept-note.md) | 2–3 hrs | PM |
| 11.06 | [phase-2-specification](11.06-phase-2-specification.md) | 1–3 days | PM + architect |
| 11.07 | [phase-3-business-tech-context](11.07-phase-3-business-tech-context.md) | 1–2 days | Business architect |
| 11.08 | [phase-4-context-directories](11.08-phase-4-context-directories.md) | 2–4 hrs | Architect (optional) |
| 11.09 | [phase-5-breakdown](11.09-phase-5-breakdown.md) | 2–5 days | Dev lead + PM |
| 11.10 | [phase-6-development](11.10-phase-6-development.md) | Ongoing | Developers |
| 11.11 | [add-feature-or-module](11.11-add-feature-or-module.md) | 2–4 hrs | PM + dev lead |
| 11.12 | [document-api-endpoint](11.12-document-api-endpoint.md) | 30–60 min | Dev / architect |
| 11.13 | [pr-docs-and-apis](11.13-pr-docs-and-apis.md) | 15–30 min | PR author |
| 11.14 | [week-1-schedules](11.14-week-1-schedules.md) | 1 week | All roles |
| 11.15 | [playwright-testing](11.15-playwright-testing.md) | 1–3 hrs | Developer / QA engineer |

---

[← Back to playbook home](../README.md)
