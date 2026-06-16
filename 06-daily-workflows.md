---
id: daily-workflows
---

# Daily and Weekly Workflows

How to run AI sessions, recover context, and maintain rhythm across the team.

**Step-by-step session guide:** [11.03 — Run AI session](guides/11.03-run-ai-session.md)

---

## Every AI session (no exceptions)

1. **New chat?** If new task/feature → start fresh ([11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature))
2. Load Tier-1 hot files (`AGENTS.md`, `PROJECT-INDEX.md`, `project-overview.md`, `AI-ASSISTANT-RULES.md`)
3. Verify AI understanding — stop if wrong
4. Load task context (module, API, ADR) — **this task only**
5. State intent and constraints
6. Impact analysis if schema/API change ([11-impact-analysis](11-impact-analysis-before-change.md))
7. Plan before substantive edits; approve plan
8. Work in correct repo (code vs context)
9. Sync docs if contracts or decisions changed

---

## When to start a new chat

| Start new chat | Continue same chat |
|----------------|-------------------|
| New ticket or feature | Same ticket, same day |
| Different module | Mid-ticket with handoff summary |
| Different code repo | — |
| Prior task completed | — |
| AI context polluted | — |
| 100+ messages (prefer fresh) | Short continuation with recap |

**Ritual:** Task complete → handoff note → **new chat** for next ticket.

Full steps: [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature)

---

## New chat vs context refresh

| | New chat | Context refresh |
|---|----------|-----------------|
| **Purpose** | Isolate new task; prevent pollution | Recover same-task context in long session |
| **When** | Switching work items | Same ticket, AI seems lost, 100+ messages |
| **How** | Close chat; Tier-1 + single module load | Reload hot files in current chat |
| **Loads** | No prior task files | Re-verify; optional module reload |

---

## Context recovery tiers

| Tier | Time | When to use | Load |
|------|------|-------------|------|
| **Emergency** | ~60 sec | Quick fix; AI seems lost | `PROJECT-INDEX.md` + `.ai/AI-ASSISTANT-RULES.md` |
| **Standard** | ~3 min | Normal session start | + `.ai/context/project-overview.md` + `AGENTS.md` |
| **Task** | 5–10 min | Feature or API work | + module doc + API ref + relevant ADR |
| **Full onboarding** | ~30 min | New team member | Phase docs 0–3 + role path |

Do **not** load empty placeholder folders (e.g. unused `.ai/prompts/`).

---

## Session types

| Type | Owner | Extra context |
|------|-------|---------------|
| Planning | Any | Spec, module breakdown, pending decisions |
| Implementation | Developer | Module doc, API ref, AI rules |
| Review | Architect / lead | ADRs, changed files, PR checklist |
| Research / spike | Architect | Project context, external docs |
| Doc sync | Any | PR-CHECKLIST, changed docs |
| Testing | Developer / QA | TEST-CONTEXT-{MODULE}.md, module breakdown, QA tickets — see [11.15](guides/11.15-playwright-testing.md) |

See `.ai/SESSION-PROTOCOL.md` in your context repo for full protocol.

---

## Recurring rituals

| Cadence | Activity | Owner |
|---------|----------|-------|
| Every AI session | Tier-1 load | All technical roles |
| Every PR | Light doc sync pass | PR author |
| Every sprint | Index status + API registry check | Dev lead + DRI |
| On API change | Registry + reference + module refs | API owner |
| Quarterly / pre-release | Deep architecture review | Architect (DRI) |

---

## Optional workflows (in context repo)

Link to template workflows — do not duplicate here:

| Workflow | Use when |
|----------|----------|
| `.ai/workflows/task-breakdown-guide.md` | Splitting work across parallel AI sessions |
| `.ai/workflows/backend-api-mapping-workflow.md` | Discovering backend → API docs |
| `.ai/workflows/figma-review-workflow.md` | Design → module spec updates |
| `.ai/workflows/decision-making-protocol.md` | New ADR needed |
| `.ai/workflows/pending-decision-workflow.md` | Blocker decisions |

---

## Planning and approval

For substantive changes, output a short plan (goal, steps, files, risks) and get explicit approval before editing. See `AGENTS.md` in your context repo.

Single obvious micro-fixes (typo, one-line link fix) may proceed without a full plan.

---

## Handoff between sessions

Before ending a session, ask AI to summarize:

```markdown
Summarize what we completed, what's in progress, and recommended next steps.
List any doc files that need updating before the next session.
```

Paste summary when **continuing the same ticket** on another day or tool.

For a **new ticket**, start a new chat with Tier-1 + new module context — do not paste the full prior session.

---

## Daily developer essentials

```
Prerequisites (L3) → New chat → Tier-1 load → Task context →
Impact analysis (if L4) → Plan approval → Implement →
AI self-review → Human PR review → Doc sync (if needed)
```

→ [11-prerequisites.md](11-prerequisites.md) | [11-review-process.md](11-review-process.md)

---

[← Phase 6 guide](guides/11.10-phase-6-development.md) | [Quality →](07-quality-and-maintenance.md) | [Playbook home](README.md)
