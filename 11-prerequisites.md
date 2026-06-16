---
id: prerequisites
title: Prerequisites
---

# Prerequisites

Layered checklists before you use the playbook, join a project, start a task, or execute a change.

---

## Overview

```
Level 1 — AI-DLC literacy (everyone)
    │
    ▼
Level 2 — Project readiness (new project / new member)
    │
    ▼
Level 3 — Task readiness (developer starting work)
    │
    ▼
Level 4 — Change-type readiness (non-trivial changes)
```

---

## Level 1 — AI-DLC literacy

**Who:** Everyone using this playbook  
**Check before:** Relying on playbook procedures

| # | Prerequisite | Verification |
|---|--------------|--------------|
| 1 | Attended AI-DLC intro session (or equivalent briefing) | You understand centralized context repo purpose |
| 2 | Read [01-start-here.md](01-start-here.md) and [02-core-concepts.md](02-core-concepts.md) | Can explain context repo vs code repo |
| 3 | Know your role path | [04-role-developer.md](04-role-developer.md) \| [04-role-pm.md](04-role-pm.md) \| [04-role-architect.md](04-role-architect.md) |

---

## Level 2 — Project readiness

**Who:** Tech lead, architect, new team member  
**Check before:** Starting Phase 0+ or joining existing project

| # | Prerequisite | Verification |
|---|--------------|--------------|
| 1 | Context repo exists (bootstrapped from template) | [11.01](guides/11.01-create-context-repo.md) complete |
| 2 | `PROJECT-INDEX.md` populated — no placeholders | Quick Facts table is real |
| 3 | `.ai/context/project-overview.md` populated | AI load test passes |
| 4 | `.ai/AI-ASSISTANT-RULES.md` customized | Project-specific ALWAYS/NEVER rules exist |
| 5 | Code repo(s) cloned as siblings | Not nested inside context repo |
| 6 | Doc DRI assigned | Name in team channel or index |
| 7 | Context-load test passes | [11.03](guides/11.03-run-ai-session.md) Step 1–2 |

**New member shortcut:** [11.02 — Join existing project](guides/11.02-join-existing-project.md)

---

## Level 3 — Task readiness

**Who:** Developer (or anyone implementing a ticket)  
**Check before:** Starting an AI implementation session

| # | Prerequisite | Verification |
|---|--------------|--------------|
| 1 | **New chat started** if switching task/feature | See [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature) |
| 2 | Ticket ID exists in module breakdown | e.g. `HOME-003` in `docs/05-breakdown/modules/` |
| 3 | Acceptance criteria understood | Can state "done when" in one sentence |
| 4 | Correct repo identified | Code change in app repo; docs in context repo |
| 5 | Module doc + spec refs loaded | AI references correct `FR-*` IDs |
| 6 | API dependencies checked (if applicable) | `BACKEND-INDEX.md` status is `verified` or risk accepted |
| 7 | Tier-1 hot files loaded | [11.03](guides/11.03-run-ai-session.md) Tier-1 prompt |

---

## Level 4 — Change-type readiness

**Who:** Anyone requesting schema, API, architecture, or cross-cutting changes  
**Check before:** Approving AI to edit files

| # | Prerequisite | Verification |
|---|--------------|--------------|
| 1 | Change classified — does it touch persistence or public interfaces? | If yes → impact analysis required |
| 2 | Impact analysis completed | [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) |
| 3 | Blast radius documented | All consumers listed |
| 4 | Plan + affected files table presented | Per `AGENTS.md` in context repo |
| 5 | Human explicit approval received | "go" / "proceed" / "approved" |
| 6 | ADR needed? | Architect consulted if architecture impact |
| 7 | Doc updates identified | Registry, reference, module breakdown in plan |

**Skip Level 4 only for:** genuine micro-fixes (typo, comment, private helper with no consumers) — still use one-line plan.

---

## Pre-flight checklist prompt (copy-paste)

Run at the start of any implementation session:

```markdown
Before we write any code, verify prerequisites:

1. Project: confirm name, phase, architecture from hot files
2. Task: ticket ID [XXX], module doc loaded, acceptance criteria stated
3. Repo: we are editing [code repo path] — not context repo unless docs change
4. APIs: list api:* dependencies and BACKEND-INDEX status for each
5. Change type: does this touch schema, API contracts, or shared interfaces?
   - If YES: stop and run full impact analysis first (do not edit files)
   - If NO: present a short plan and wait for my approval

Report any missing prerequisite before proceeding.
```

---

## Quick reference by situation

| Situation | Minimum level required |
|-----------|------------------------|
| Read playbook | L1 |
| Bootstrap new project | L1 + L2 |
| Join existing project | L1 + L2 |
| Implement a ticket | L1 + L2 + L3 |
| Rename DB column / change API | L1 + L2 + L3 + L4 |
| Fix typo in private function | L1 + L2 + L3 (L4 optional) |

---

[← Playbook home](README.md) | [Impact analysis →](11-impact-analysis-before-change.md)
