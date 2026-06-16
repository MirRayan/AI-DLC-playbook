# AI Rules Snippet — Impact Analysis

Copy the section below into `.ai/AI-ASSISTANT-RULES.md` in your context repo.

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
