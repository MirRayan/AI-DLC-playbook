---
id: bootstrap-overview
---

# Bootstrap Overview — Context Repo Layout

What each folder in a bootstrapped AI-DLC context repo is for, and when to populate it.

**Bootstrap from:** [AI-Driven-Project-Template](AI-Driven-Project-Template) (bundled in this repo) via [11.01](guides/11.01-create-context-repo.md)

---

## Root files

| File | Required | Purpose |
|------|----------|---------|
| `PROJECT-INDEX.md` | **Yes** | Master index — current phase, status, navigation |
| `AGENTS.md` | Yes (keep generic) | Doc sync policy for all AI tools |
| `QUICK-START.md` | Auto-generated | Post-init checklist |
| `AI-SESSION-GUIDE.md` | Yes | How humans work with AI |
| `CONTEXT-RECOVERY.md` | Yes | Context loading tiers |
| `CONVERSATION-FLOW.md` | Recommended | Six-phase conversation model (from the bundled template) |

---

## `.ai/` — AI-optimized context

| Path | When to populate |
|------|------------------|
| `AI-ASSISTANT-RULES.md` | Phase 0 — customize ALWAYS/NEVER rules |
| `SESSION-PROTOCOL.md` | Keep from template |
| `context/project-overview.md` | Phase 0 — mandatory hot file |
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
| `02-specification/` | 2 | Requirements with stable `FR-*` IDs |
| `03-context/` | 3 | Business ↔ tech bridge |
| `03-architecture/decisions/` | 3 | ADR-001+ |
| `03-architecture/diagrams/` | 3+ | Architecture diagrams |
| `04-reference/` | 5 | API contracts (if HTTP APIs) |
| `04-context-directories/` | 4 | Optional domain slices |
| `05-breakdown/modules/` | 5 | Per-module implementation tickets |
| `05-breakdown/sprints/` | 5 | Sprint-scoped work lists |
| `05-breakdown/backend/` | 5 | API registry + deep backend context |
| `06-development/` | 6 | Active implementation notes |
| `process/` | Keep from template | PR checklist, doc sync, agent rules |

---

## `templates/` — reusable scaffolds

Shipped from AI-Driven-Project-Template. Copy into `docs/` when creating phase artifacts.

Also use templates from this playbook: [templates/](templates/)

---

## `scripts/` — mechanical verification

| Script | Purpose |
|--------|---------|
| `check-doc-links.sh` | Internal Markdown link check |
| `verify-project-docs.sh` | Orchestrated doc sweep — extend Phase 3 per project |

Run before large doc merges. Extend verify script for project-specific checks (expected API files, module count, etc.).

---

## Optional vs required

| Skip if… | Folder / file |
|----------|---------------|
| No HTTP APIs | `docs/05-breakdown/backend/`, most of `docs/04-reference/` |
| Small single-domain project | `docs/04-context-directories/` |
| Not mobile | Use generic module template; ignore mobile-specific naming |
| Folder exists but empty | **Do not load in AI sessions** — empty placeholders are fine |

---

## Mandatory first-hour checklist

After [11.01](guides/11.01-create-context-repo.md), complete in [11.04](guides/11.04-phase-0-project-context.md):

| Step | Artifact | Template |
|------|----------|----------|
| Master index | `PROJECT-INDEX.md` | [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) |
| AI context | `.ai/context/project-overview.md` | [templates/project-overview-template.md](templates/project-overview-template.md) |
| AI rules | `.ai/AI-ASSISTANT-RULES.md` | Customize template copy |
| Project context | `docs/00-project-context/PROJECT-CONTEXT.md` | [templates/PROJECT-CONTEXT-template.md](templates/PROJECT-CONTEXT-template.md) |
| Context load test | — | [11.03](guides/11.03-run-ai-session.md) |

---

## Multi-repo layout

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
