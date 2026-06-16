---
id: faq
---

# FAQ and Troubleshooting

Common questions from AI-DLC onboarding sessions.

---

## General

### Do I put application code in the context repo?

**No.** The context repo holds documentation, specs, ADRs, and `.ai/` rules. Application source code lives in separate sibling repo(s).

### Which files does AI load every session?

Tier-1 hot files:
1. `AGENTS.md`
2. `PROJECT-INDEX.md`
3. `.ai/context/project-overview.md`
4. `.ai/AI-ASSISTANT-RULES.md`

See [11.03](guides/11.03-run-ai-session.md).

### How is this different from Jira or Confluence?

| Tool | Role |
|------|------|
| Jira / Linear | Sprint tracking, assignees, workflow states |
| Confluence | Stakeholder docs, process wiki, this playbook |
| **Context repo** | AI-optimized, versioned, phase-structured, tied to code PRs |

They complement each other. The context repo is what AI loads every session.

### Who updates PROJECT-INDEX.md?

The **doc DRI**, plus whoever ships milestone-level or API readiness changes. Not every developer on every PR — but status must stay honest.

---

## Bootstrap and template

### Template README describes files that don't exist in my new repo

The init script creates **empty directories** but does not ship `PROJECT-INDEX.md` or `project-overview.md`. Create them using [templates/](templates/) and [11.04](guides/11.04-phase-0-project-context.md).

### init-project.sh failed — what now?

See [INIT-GUIDE.md](AI-Driven-Project-Template/INIT-GUIDE.md) in the bundled template. Manual fallback: copy template folder, run placeholder replacement, `git init`.

### Can I rename the context repo?

Yes — kebab-case recommended. Update remote URL and any cross-repo references in docs.

---

## Documentation

### A folder exists but is empty — is that a problem?

**No.** Empty placeholder folders from the template are fine. Do **not** load them in AI sessions. Populate only when the phase requires it.

### We don't have HTTP APIs — do we need BACKEND-INDEX?

**No.** Ignore or remove `docs/05-breakdown/backend/` if no API surface. Skip [11.12](guides/11.12-document-api-endpoint.md).

### Can I rename an FR-* or api:* ID?

**FR-*:** Avoid renaming once referenced in breakdown.  
**api:*:** **Never rename** once published in module docs. Add new ID; deprecate old.

### Docs drifted from code — how to recover?

1. Assign DRI for deep pass ([07-quality-and-maintenance.md](07-quality-and-maintenance.md))
2. Run verify script
3. Update `PROJECT-INDEX.md` and `project-overview.md` to current truth
4. Fix registry and spec gaps before next sprint

---

## AI sessions

### Should I start a new chat for each feature or ticket?

**Yes** — when switching to a different task, module, feature, or code repo. Start a fresh chat with Tier-1 load + only the new task's context.

You may **continue** the same chat only when working the same ticket same-day with a handoff summary.

See [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature) and [06-daily-workflows.md](06-daily-workflows.md).

### When is impact analysis required?

Before any change that touches database schema, API contracts, shared interfaces, or cross-cutting config — **even if the prompt sounds small** (e.g. "rename this column").

See triggers and prompt: [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md).

### AI only changed the column — is that enough?

**No.** A junior-style literal fix often misses migrations, API serializers, mobile clients, tests, and docs. Require full impact analysis and coordinated plan before merge.

See [11-impact-analysis-before-change.md](11-impact-analysis-before-change.md) and [11-review-process.md](11-review-process.md).

### What's the difference between new chat and context refresh?

| | New chat | Context refresh |
|---|----------|-----------------|
| **When** | New ticket or feature | Same ticket, long session, AI lost |
| **Action** | Fresh conversation | Reload hot files in current chat |

See [06-daily-workflows.md](06-daily-workflows.md).

### AI gives wrong project facts after Tier-1 load

**Stop.** Fix `project-overview.md` or `AI-ASSISTANT-RULES.md` — do not proceed with coding on bad context.

### AI wants to edit the wrong repo

Remind it: code changes in application repo; doc changes in context repo. State repo paths in your intent.

### Session context too large

Use [context recovery tiers](06-daily-workflows.md) — load only module + relevant API, not entire `docs/` tree.

---

## Roles

### PM: do I need to understand ADRs?

Read the summary in `PROJECT-INDEX.md`. Full ADRs when reviewing spec feasibility or scope impact.

### Developer: do I write specification?

Usually no — PM owns `FR-*`. You may propose spec changes via PR with PM review.

### Architect: do I write module breakdown tickets?

Dev lead writes breakdown; architect reviews for ADR alignment and API registry accuracy.

---

## Still stuck?

1. Check [guides/README.md](guides/README.md) for the right procedure
2. Ask doc DRI for project-specific conventions
3. Review the bundled [AI-Driven-Project-Template](AI-Driven-Project-Template) for a populated reference

---

[← Artifact catalog](08-artifact-catalog.md) | [Playbook home](README.md)
