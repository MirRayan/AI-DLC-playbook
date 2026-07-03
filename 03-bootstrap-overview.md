---
id: bootstrap-overview
---

# Bootstrap Overview — Context Repo Layout

What each folder in a bootstrapped AI-DLC context repo is for, and when to populate it.

Three terms this page uses throughout: a [context repo](glossary.md#context-repo) is the versioned folder of project documents that AI sessions read from (the "why" is explained in [What is AI-DLC?](00-what-is-ai-dlc.md)); to [bootstrap](glossary.md#bootstrap) is to create that repo from the bundled template; a [hot file](glossary.md#hot-file) is a file loaded into every AI session. The "When to populate" columns below refer to lifecycle Phases 0–6 — if you have not met the phases yet, skim the [six-phase lifecycle](05-six-phase-lifecycle.md) first.

**Bootstrap from:** [AI-Driven-Project-Template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md) (bundled in this repo) via [11.01 — Create a context repo](guides/11.01-create-context-repo.md)

---

## Root files

These files live at the top level of your context repo (created from the template):

| File | Required | Purpose |
|------|----------|---------|
| `PROJECT-INDEX.md` | **Yes** | Master index — current phase, status, navigation |
| `AGENTS.md` | Yes (keep generic) | [Doc sync](glossary.md#doc-sync) policy for all AI tools |
| `QUICK-START.md` | Auto-generated | Post-init checklist |
| `AI-SESSION-GUIDE.md` | Yes | How humans work with AI |
| `CONTEXT-RECOVERY.md` | Yes | [Context loading](glossary.md#context-loading) tiers |
| `CONVERSATION-FLOW.md` | Recommended | [Six-phase](05-six-phase-lifecycle.md) conversation model (from the bundled template) |

---

## `.ai/` — AI-optimized context

| Path | When to populate |
|------|------------------|
| `AI-ASSISTANT-RULES.md` | Phase 0 — customize the ALWAYS/NEVER [rules](glossary.md#rules-file) |
| `SESSION-PROTOCOL.md` | Keep from template |
| `context/project-overview.md` | Phase 0 — mandatory [hot file](glossary.md#hot-file) |
| `context/features/` | Phase 4 (optional) — per-feature slices |
| `context/services/` | When documenting service boundaries |
| `workflows/` | Keep from template; use as needed |
| `prompts/` | When team creates reusable prompts |

---

## `docs/` — phased documentation

| Folder | Phase | Populate when |
|--------|-------|---------------|
| `00-project-context/` | 0 | Day 1 — stack, integrations, constraints |
| `01-concept/` | 1 | Vision and scope agreed |
| `02-specification/` | 2 | Requirements with stable [`FR-*` IDs](glossary.md#fr-ids) |
| `03-context/` | 3 | Business ↔ tech bridge |
| `03-architecture/decisions/` | 3 | [ADR](glossary.md#architecture-decision-record-adr)-001 onwards ([Architecture Decision Records](glossary.md#architecture-decision-record-adr)) |
| `03-architecture/diagrams/` | 3+ | Architecture diagrams |
| `04-reference/` | 5 | API contracts — request/response details per endpoint (if the project has HTTP APIs) |
| `04-context-directories/` | 4 | Optional per-domain context files ("domain slices") |
| `05-breakdown/modules/` | 5 | Per-[module](glossary.md#module) implementation [tickets](glossary.md#ticket) |
| `05-breakdown/sprints/` | 5 | [Sprint](glossary.md#sprint)-scoped work lists |
| `05-breakdown/backend/` | 5 | API registry ([BACKEND-INDEX](glossary.md#backend-index)) + deep backend context |
| `06-development/` | 6 | Active implementation notes |
| `process/` | Keep from template | [Pull request (PR)](glossary.md#pull-request-pr) checklist, [doc sync](glossary.md#doc-sync), agent rules |

---

## `templates/` — reusable scaffolds

Shipped from AI-Driven-Project-Template. Copy into `docs/` when creating phase artifacts.

Also use templates from this playbook — for example [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md); the full list is in the [artifact catalog](08-artifact-catalog.md).

---

## `scripts/` — mechanical verification

| Script | Purpose |
|--------|---------|
| `check-doc-links.sh` | Internal Markdown link check |
| `verify-project-docs.sh` | Orchestrated doc sweep — extend section 3 of the script (not lifecycle Phase 3) per project |

Run before large doc [merges](glossary.md#merge). Extend the [verify script](glossary.md#verify-script) — specifically section 3 of `verify-project-docs.sh`, not lifecycle Phase 3 — with project-specific checks (expected API files, module count, etc.).

Never run a terminal command? See the [terminal primer](00-repo-basics.md) — or ask a developer to run it, or ask an [agentic AI tool](glossary.md#agentic-tool) to run it for you.

---

## Optional vs required

| Skip if… | Folder / file |
|----------|---------------|
| No HTTP APIs | `docs/05-breakdown/backend/`, most of `docs/04-reference/` |
| Small single-domain project | `docs/04-context-directories/` |
| Not mobile | Adapt [mobile-module-breakdown.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/templates/mobile-module-breakdown.md) — drop the mobile-specific sections and naming |
| Folder exists but empty | **Do not [load](00-ai-assistant-basics.md) in AI sessions** — empty placeholders are fine |

---

## Mandatory first-hour checklist

After [11.01 — Create a context repo](guides/11.01-create-context-repo.md), complete in [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md):

| Step | Artifact | Template |
|------|----------|----------|
| Master index | `PROJECT-INDEX.md` | [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) |
| AI context | `.ai/context/project-overview.md` | [templates/project-overview-template.md](templates/project-overview-template.md) |
| AI rules | `.ai/AI-ASSISTANT-RULES.md` | Customize template copy |
| Project context | `docs/00-project-context/PROJECT-CONTEXT.md` | [templates/PROJECT-CONTEXT-template.md](templates/PROJECT-CONTEXT-template.md) |
| Context load test — load the hot files into a fresh AI session and check the AI can summarize the project correctly | — | [11.03 — Run an AI session](guides/11.03-run-ai-session.md) |

---

## Multi-repo layout

The context repo lives as a sibling folder next to the [code repos](glossary.md#code-repo) — docs in one repository, code in others (new to repositories? see the [repo primer](00-repo-basics.md)):

```
parent-folder/
├── {project}-architecture/     # THIS repo
│   ├── .ai/
│   ├── docs/
│   ├── PROJECT-INDEX.md
│   └── ...
├── {project}-backend/          # code
├── {project}-frontend/         # code
└── {project}-mobile/           # code (optional)
```

---

[← Core concepts](02-core-concepts.md) | [Create repo →](guides/11.01-create-context-repo.md) | [Playbook home](README.md)
