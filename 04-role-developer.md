---
id: role-developer
---

# Developer Onboarding Path

For software developers joining or starting an AI-DLC project. New to AI-DLC? Do the [Learn track](00-what-is-ai-dlc.md) first — especially [AI Assistant Basics](00-ai-assistant-basics.md) if you have not worked with an AI assistant before.

---

## Week 1 goals

- [ ] [Context repo](glossary.md#context-repo) + [code repo(s)](glossary.md#code-repo) [cloned](glossary.md#clone) (how: [repo primer](00-repo-basics.md))
- [ ] Context-load test passes ([11.03 — Run an AI session](guides/11.03-run-ai-session.md))
- [ ] Assigned [module breakdown](glossary.md#breakdown) read
- [ ] First [ticket](glossary.md#ticket) in progress or merged
- [ ] Know where the [API registry](glossary.md#backend-index) (`BACKEND-INDEX.md`) and the PR checklist (`docs/process/PR-CHECKLIST.md`) live — both in your context repo, created from the template

**Schedule:** [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

---

## Documents you read

All of these live in the context repo, created from the template when the project was bootstrapped ([11.01 — Create a context repo](guides/11.01-create-context-repo.md)):

| Priority | Document | Why |
|----------|----------|-----|
| 1 | `PROJECT-INDEX.md` | Current phase and work status |
| 2 | `AI-SESSION-GUIDE.md` | AI session discipline |
| 3 | `CONTEXT-RECOVERY.md` | What to load when |
| 4 | `.ai/AI-ASSISTANT-RULES.md` | Code rules |
| 5 | Your module in `docs/05-breakdown/modules/` | What to build |
| 6 | `BACKEND-INDEX.md` + `docs/04-reference/` | API readiness (if applicable) |
| 7 | Relevant ADRs in `docs/03-architecture/decisions/` | Architecture constraints |

---

## Documents you update

| When | Document |
|------|----------|
| Ticket complete | Module breakdown (ticket status) |
| API integration verified | [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md) — registry + reference |
| Architecture impact | Flag architect — new ADR may be needed |
| Milestone shipped | `PROJECT-INDEX.md` Current Work Status (with DRI) |

You typically do **not** own: specification (`FR-*`), concept note, or ADRs.

---

## Daily rhythm

1. **Prerequisites** — [11-prerequisites.md](11-prerequisites.md) L3 checklist
2. **New chat** — if new ticket; [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature)
3. **Start session** — load the [Tier-1 hot files](glossary.md#tier-1-hot-files) → task context → state intent (loading mechanics: [AI Assistant Basics](00-ai-assistant-basics.md))
4. **Impact analysis** — if schema/API change; [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md)
5. **Pick ticket** — from module breakdown; [ticket IDs](glossary.md#ticket-ids) look like `HOME-003` (module prefix + number)
6. **Check APIs** — `BACKEND-INDEX.md` status before integrating
7. **Implement** — in **code repo**, not context repo
8. **Review** — [11-review-process.md](11-review-process.md) before PR
9. **PR** — code [pull request](glossary.md#pull-request-pr); if docs/APIs changed, [11.13 — PR docs and APIs](guides/11.13-pr-docs-and-apis.md)

Ongoing: [11.10 — Phase 6: development](guides/11.10-phase-6-development.md)

---

## API integration pattern

```
Module doc lists api:product:list
        │
        ▼
BACKEND-INDEX.md → status verified?
        │
        ▼
docs/04-reference/05-product-api.md → contract
        │
        ▼
Implement in code repo
        │
        ▼
If contract changed → update registry + reference in same PR
```

---

## Session types

| Type | Load extra | Guide |
|------|------------|-------|
| Feature | Module doc + API ref | [11.03 — Run an AI session](guides/11.03-run-ai-session.md) |
| Bug fix | Module doc + error context | [11.03 — Run an AI session](guides/11.03-run-ai-session.md) |
| Doc/API sync | `docs/process/PR-CHECKLIST.md` | [11.13 — PR docs and APIs](guides/11.13-pr-docs-and-apis.md) |

---

## Typical mistakes

| Mistake | Fix |
|---------|-----|
| Code in context repo | Application code lives in code repo |
| Skip Tier-1 load | Every session — no exceptions |
| Integrate `pending` API without team agreement | Check registry status first |
| Change API without updating docs | Registry + reference in same PR |

---

[← Start here](01-start-here.md) | [Week 1 schedule](guides/11.14-week-1-schedules.md) | [Playbook home](README.md)
