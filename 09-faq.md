---
id: faq
---

# FAQ and Troubleshooting

Common questions teams hit when adopting AI-DLC. If a term here is new to you, the [glossary](glossary.md) defines every one; if AI assistants themselves are new to you, start with [AI Assistant Basics](00-ai-assistant-basics.md).

---

## General

### Do I put application code in the context repo?

**No.** The [context repo](glossary.md#context-repo) holds documentation, specs, [Architecture Decision Records (ADRs)](glossary.md#architecture-decision-record-adr), and `.ai/` rules files. Application source code lives in separate sibling repo(s) — [code repos](glossary.md#code-repo) that sit next to the context repo in the same parent folder.

### Which files does AI load every session?

The [Tier-1 hot files](glossary.md#tier-1-hot-files) (in your context repo, created from the template):
1. `AGENTS.md`
2. `PROJECT-INDEX.md`
3. `.ai/context/project-overview.md`
4. `.ai/AI-ASSISTANT-RULES.md`

See [11.03 — Run an AI session](guides/11.03-run-ai-session.md).

### How is this different from Jira or Confluence?

| Tool | Role |
|------|------|
| Jira / Linear | Sprint tracking, assignees, workflow states |
| Confluence | Stakeholder docs, process wiki, this playbook |
| **Context repo** | AI-optimized, versioned, phase-structured, tied to code PRs |

They complement each other. The context repo is what AI loads every session.

### Who updates PROJECT-INDEX.md?

The **doc DRI** ([directly responsible individual](glossary.md#directly-responsible-individual-dri) for documentation), plus whoever ships milestone-level or API readiness changes. Not every developer on every [pull request (PR)](glossary.md#pull-request-pr) — but status must stay honest.

---

## Bootstrap and template

### Template README describes files that don't exist in my new repo

The init script creates **empty directories** but does not ship `PROJECT-INDEX.md` or `project-overview.md`. Create them from [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) and [templates/project-overview-template.md](templates/project-overview-template.md), following [11.04 — Phase 0: project context](guides/11.04-phase-0-project-context.md).

### init-project.sh failed — what now?

First see [INIT-GUIDE.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/INIT-GUIDE.md) in the bundled template. If the script still fails, do the setup by hand — it is only three steps:

1. **Copy the template folder.** Copy the whole `AI-Driven-Project-Template` folder and rename the copy after your project (e.g. `my-shop-architecture`).
2. **Replace the placeholder tokens.** The template files contain placeholders that the script would normally fill in: `${PROJECT_NAME}`, `${PROJECT_NAME_KEBAB}`, `${PROJECT_NAME_SNAKE}`, `${PROJECT_NAME_PASCAL}`, and the older forms `{Project Name}`, `{project-name}`, `{project_name}`. Use your editor's search-and-replace across the copied folder (VS Code: the magnifying-glass Search panel replaces across all files) to swap each token for your project's name in the matching style — e.g. for a project called My Shop: `My Shop`, `my-shop`, `my_shop`, `MyShop`.
3. **Turn the folder into a git repo** by running `git init` inside it — or skip git for now and add it later; the documents work either way. (Never used git? See [Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md).)

**Or let the AI do it:** if you use an [agentic tool](glossary.md#agentic-tool) (e.g. Claude Code or Cursor), paste the three steps above and ask it to perform them — "copy the template folder to `my-shop-architecture`, replace these placeholder tokens with these values, then run `git init`" — and review what it did.

### Can I rename the context repo?

Yes — kebab-case (all lowercase, words joined by hyphens, e.g. `my-shop-architecture`) recommended. If the repo is hosted (GitHub, GitLab, Azure DevOps), rename it there too so the hosted address (the "remote URL") matches, and update any docs in other repos that reference the old name.

---

## Documentation

### A folder exists but is empty — is that a problem?

**No.** Empty placeholder folders from the template are fine. Do **not** load them in AI sessions. Populate only when the phase requires it.

### We don't have HTTP APIs — do we need BACKEND-INDEX?

**No.** `BACKEND-INDEX.md` is the [API registry](glossary.md#backend-index) — if your project exposes no API surface, ignore or remove `docs/05-breakdown/backend/` and skip [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md).

### Can I rename an FR-* or api:* ID?

Both ID schemes are defined in the [Artifact and naming catalog](08-artifact-catalog.md).

**FR-\*** ([functional requirement IDs](glossary.md#fr-ids)): avoid renaming once referenced in the [breakdown](glossary.md#breakdown).  
**api:\*** ([API registry IDs](glossary.md#api-registry-ids)): **never rename** once published in module docs. Add a new ID and mark the old one deprecated (kept in the registry, pointing at its successor).

### Docs drifted from code — how to recover?

1. Assign a [DRI](glossary.md#directly-responsible-individual-dri) for a deep pass ([Quality and maintenance](07-quality-and-maintenance.md))
2. Run the [verify script](glossary.md#verify-script)
3. Update `PROJECT-INDEX.md` and `project-overview.md` to current truth
4. Fix API registry and spec gaps before the next [sprint](glossary.md#sprint)

---

## AI sessions

### Should I start a new chat for each feature or ticket?

**Yes** — when switching to a different task, module, feature, or code repo. Start a fresh chat, load the [Tier-1 hot files](glossary.md#tier-1-hot-files), and add only the new task's context. (Why fresh chats matter: [AI Assistant Basics](00-ai-assistant-basics.md).)

You may **continue** the same chat only when working the same ticket same-day with a handoff summary (a short AI-written recap of where the work stands).

See [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature) and [Daily workflows](06-daily-workflows.md).

### When is impact analysis required?

Before any change that touches how data is stored (the database schema), how systems talk to each other (API contracts), code that several features share (shared interfaces), or settings used across the whole system (cross-cutting config) — **even if the prompt sounds small** (e.g. "rename this column"). In short: if other parts of the system rely on the thing you are changing, do an [impact analysis](glossary.md#impact-analysis) first.

See triggers and prompt: [Impact analysis before change](11-impact-analysis-before-change.md).

### AI only changed the column — is that enough?

**No.** A junior-style literal fix often misses everything else that depends on the column: database migrations (scripts that update existing stored data), API serializers (code that formats that data for other systems), mobile apps that read it, tests, and docs. Require a full impact analysis and coordinated plan before merge.

See [Impact analysis before change](11-impact-analysis-before-change.md) and [Review process](11-review-process.md).

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
3. Review the bundled [AI-Driven-Project-Template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md) for a populated reference

---

[← Artifact catalog](08-artifact-catalog.md) | [Playbook home](README.md)
