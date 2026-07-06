---
id: cheat-sheet
title: Cheat Sheet
---

# AI-DLC Cheat Sheet

One-page quick reference for daily work. Print it (your browser's **Print → Save as PDF** hides the site chrome) or keep it open in a tab. New here? Start with [What is AI-DLC?](00-what-is-ai-dlc.md) instead — this page assumes you know the basics.

---

## The daily session loop

```
New chat  →  Load Tier-1 hot files  →  Verify understanding  →
Load task context  →  State intent  →  (Impact analysis if risky)  →
Approve plan  →  Work in the right repo  →  Sync docs
```

One task per chat. If the AI's summary is wrong, **stop and reload** — never build on a bad summary. Full steps: [11.03 — Run an AI session](guides/11.03-run-ai-session.md).

---

## The four Tier-1 hot files

Loaded at the **start of every session**, no exceptions. All live in your [context repo](glossary.md#context-repo):

| File | Holds |
|------|-------|
| `AGENTS.md` | Doc-sync + plan-before-act rules for any AI tool |
| `PROJECT-INDEX.md` | Curated "what's true now" — phase, status, decisions |
| `.ai/context/project-overview.md` | Condensed whole-project context |
| `.ai/AI-ASSISTANT-RULES.md` | Project-specific ALWAYS / NEVER rules |

"Load" = an [agentic tool](glossary.md#agentic-tool) reads them by path, or you paste their contents into a plain chat. More: [AI Assistant Basics](00-ai-assistant-basics.md).

---

## The six phases

| # | Phase | Produces |
|---|-------|----------|
| 0 | Project context | `PROJECT-CONTEXT.md` + hot files |
| 1 | Concept note | `CONCEPT-NOTE.md` |
| 2 | Specification | `SPECIFICATION.md` (FR IDs) |
| 3 | Business + tech context | `BUSINESS-TECH-CONTEXT.md` + ADRs |
| 4 | Context directories *(optional)* | Domain slices — skip for small projects |
| 5 | Breakdown | Modules, sprints, tickets |
| 6 | Development | Working software + synced docs |

Detail: [Six-Phase Lifecycle](05-six-phase-lifecycle.md).

---

## ID schemes (never rename once published)

| Pattern | Example | For |
|---------|---------|-----|
| `FR-{MODULE}-{NNN}` | `FR-HOME-003` | Requirements |
| `{MODULE}-{NNN}` | `HOME-003` | Implementation tickets |
| `{MODULE}-QA-{NNN}` | `HOME-QA-001` | QA test cases |
| `api:{domain}:{slug}` | `api:auth:otp-send` | API registry entries |
| `ADR-{NNN}` | `ADR-001` | Architecture decisions |
| `PDR-{NNN}` | `PDR-001` | Pending decisions |

By convention **ADR-001** = platform/stack, **ADR-002** = architecture pattern. Full catalog: [Artifact catalog](08-artifact-catalog.md).

---

## Impact analysis — required before you touch…

- Database **schema** (columns, tables, types, constraints)
- **API contracts** (paths, payloads, status codes, auth)
- **Shared** libraries or public interfaces
- **Cross-cutting** config or feature flags

…**even if the prompt sounds small.** Rule of thumb: if it could break something not named in the prompt, analyze first.

**Execution order:** `migration → backend → API → clients → tests → docs`

Full method + copy-paste prompt: [Impact analysis before change](11-impact-analysis-before-change.md).

---

## Review gates

```
Impact analysis → Plan approval → Implementation review →
AI self-review → Human PR review → Doc sync
```

The AI does **not** self-approve plans, and its self-review is a first pass — never the verdict. Detail: [Review process](11-review-process.md).

---

## When to start a new chat vs. keep going

| New chat | Keep the same chat |
|----------|--------------------|
| New ticket, feature, or module | Same ticket, same day |
| Switched code repo | Short continuation with a recap |
| Prior task done | — |
| AI context is polluted / confused | — |

---

## Context recovery tiers (how much to reload)

| Tier | Load |
|------|------|
| Emergency (~1 min) | Index + AI rules |
| Standard (~3 min) | + project overview + AGENTS.md |
| Task (5–10 min) | + module / API / ADR for current work |
| Full (~30 min) | Phase docs 0–3 |

("Tier-1 hot files" is the always-first file set — not one of these tiers.) Detail: [Daily workflows](06-daily-workflows.md).

---

[← Playbook home](README.md) | [Glossary](glossary.md) | [Daily workflows](06-daily-workflows.md)
