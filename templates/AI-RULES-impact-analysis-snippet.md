# AI Rules Snippet — Impact Analysis

> **How to use this template:** Copy the fenced section below into `.ai/AI-ASSISTANT-RULES.md` in your [context repo](../glossary.md#context-repo) — that file is a [rules file](../glossary.md#rules-file): standing instructions your AI tool reads at the start of every session and obeys automatically (see [AI Assistant Basics](../00-ai-assistant-basics.md)). Adding this section makes the AI run an [impact analysis](../11-impact-analysis-before-change.md) before any risky change, in every session, without being asked. Usually added during [Phase 0](../guides/11.04-phase-0-project-context.md) by the dev lead or architect.

---

```markdown
## Impact analysis (senior developer behavior)

### ALWAYS — before schema, API, or interface changes

When a request touches database schema, API contracts, shared libraries, config with runtime effect, or any public interface — **even if the prompt sounds small**:

1. **Stop** — do not edit files until impact analysis is complete
2. Analyze blast radius: DB, backend, API, clients (mobile/web), tests, docs, deployment
3. Present a plan with affected files table (per AGENTS.md)
4. Wait for explicit human approval
5. Execute in order: migration/schema → backend → API → clients → tests → documentation
6. Call out explicitly what a junior developer might miss

### NEVER

- Execute a literal one-file change for schema/API requests without impact analysis
- Declare "done" after changing only the object mentioned in the prompt
- Skip documentation updates when contracts change
- Rename `api:*` IDs or `FR-*` IDs once published

### Triggers (non-exhaustive)

- Column/table/index changes
- API path, payload, or response changes
- Shared DTO or interface changes
- Breaking dependency upgrades
- Feature flag changes affecting production behavior
```

---

See [11-impact-analysis-before-change.md](../11-impact-analysis-before-change.md) for full playbook guidance and copy-paste prompts.
