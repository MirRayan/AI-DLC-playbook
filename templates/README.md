---
title: Templates — Index
---

# Templates — Index

Copy-paste starters for the core AI-DLC documents. Each template becomes a real file in your [context repo](../glossary.md#context-repo); the table shows who fills it in, when, and where the filled copy lives.

## How to use any template here

1. **Copy** the template's contents into a new file at the destination path in your context repo.
2. **Fill in** every `{placeholder}` — an AI session can draft most of the content for you (see the matching guide).
3. **Delete the "How to use this template" block** at the top of your copy.

| Template | Who fills it | Phase | Destination in your context repo | Guide |
|----------|--------------|-------|----------------------------------|-------|
| [Project index](PROJECT-INDEX-template.md) | Doc [DRI](../glossary.md#directly-responsible-individual-dri) + team | 0, updated always | `PROJECT-INDEX.md` (repo root) | [11.04 — Phase 0](../guides/11.04-phase-0-project-context.md) |
| [Project overview](project-overview-template.md) | Architect / tech lead | 0 | `.ai/context/project-overview.md` | [11.04 — Phase 0](../guides/11.04-phase-0-project-context.md) |
| [Project context](PROJECT-CONTEXT-template.md) | Architect / tech lead | 0 | `docs/00-project-context/PROJECT-CONTEXT.md` | [11.04 — Phase 0](../guides/11.04-phase-0-project-context.md) |
| [Concept note](CONCEPT-NOTE-template.md) | Project manager (PM) | 1 | `docs/01-concept/CONCEPT-NOTE.md` | [11.05 — Phase 1](../guides/11.05-phase-1-concept-note.md) |
| [Specification](SPECIFICATION-template.md) | PM (architect reviews) | 2 | `docs/02-specification/SPECIFICATION.md` | [11.06 — Phase 2](../guides/11.06-phase-2-specification.md) |
| [Business + tech context](BUSINESS-TECH-CONTEXT-template.md) | Business architect | 3 | `docs/03-context/BUSINESS-TECH-CONTEXT.md` | [11.07 — Phase 3](../guides/11.07-phase-3-business-tech-context.md) |
| [Module breakdown](module-breakdown-template.md) | Dev lead | 5 | `docs/05-breakdown/modules/{NN}-{module-name}.md` | [11.09 — Phase 5](../guides/11.09-phase-5-breakdown.md) |
| [AI rules: impact analysis](AI-RULES-impact-analysis-snippet.md) | Dev lead / architect | 0 | Section pasted into `.ai/AI-ASSISTANT-RULES.md` | [Impact analysis](../11-impact-analysis-before-change.md) |
| [Test context](TEST-CONTEXT-template.md) | Developer / QA engineer | 6, per sprint | `docs/06-development/TEST-CONTEXT-{MODULE}.md` | [11.15 — Playwright testing](../guides/11.15-playwright-testing.md) |

More templates (module breakdown, sprint tickets, API reference, ADR) ship inside the bundled [AI-Driven-Project-Template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md) — the full catalog is in the [artifact catalog](../08-artifact-catalog.md#template-sources).

---

[← Playbook home](../README.md)
