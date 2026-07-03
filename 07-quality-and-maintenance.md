---
id: quality-and-maintenance
---

# Quality Gates and Maintenance

Keep the [context repo](glossary.md#context-repo) accurate as the project evolves. File paths on this page like `docs/process/PR-CHECKLIST.md` live in your context repo, created from the template — not in this playbook.

---

## Success criteria — project is "onboarded"

- [ ] Context-load test passes ([11.03 — Run an AI session](guides/11.03-run-ai-session.md))
- [ ] `PROJECT-INDEX.md` has no placeholder text; reflects real status
- [ ] ADR-001 (platform/stack) exists and is Accepted
- [ ] Phase 2 spec has stable requirement IDs
- [ ] First module in `docs/05-breakdown/` exists OR explicit note why not yet
- [ ] Doc DRI assigned for maintenance
- [ ] Team knows link to this playbook

---

## Quality gates

| Gate | Mechanism | When |
|------|-----------|------|
| Doc drift prevention | `docs/process/DOCUMENTATION-SYNC.md` | Every PR |
| PR readiness | `docs/process/PR-CHECKLIST.md` | Every docs/API PR |
| Mechanical checks | `scripts/check-doc-links.sh`, `verify-project-docs.sh` | Before large merges |
| Architecture integrity | ADR index + quarterly checklist | Quarterly / pre-release |
| API contract integrity | Rule A/B in `docs/process/AGENT-RULES-BACKEND-API.md` | On API change |

Rule A and Rule B are the two standing API rules the template ships: **Rule A** — before implementing or changing any API client code, check the API registry first; **Rule B** — when a change adds, removes, or renames an endpoint, update the registry and contract docs in the same PR.

**PR procedure:** [11.13 — PR docs and APIs](guides/11.13-pr-docs-and-apis.md)

---

## Light pass vs deep pass

### Light pass (every docs PR, ~15–30 min)

- Update `PROJECT-INDEX.md` if status changed
- Fix cross-links in changed files
- Update ADR README if ADR added/changed
- Remove placeholder text from edited files
- Verify module docs still reference valid `api:*` IDs

### Deep pass (quarterly or pre-release, half day)

Assign DRI. Use `.ai/workflows/architecture-review-checklist.md`:

- Spec ↔ breakdown ↔ ADR alignment
- `project-overview.md` matches production reality
- API registry complete for release scope
- Pending decisions resolved or explicitly deferred
- Run the full [verify script](glossary.md#verify-script) + link check

Use `git log` (Git's built-in change history — see the [repo primer](00-repo-basics.md)) since the last deep pass to catch [drift](glossary.md#drift). Not comfortable with a terminal? Ask a developer to run these, or ask an [agentic AI tool](glossary.md#agentic-tool) to run them for you.

---

## Source of truth hierarchy

| Question | Source |
|----------|--------|
| What is true **now**? | `PROJECT-INDEX.md` |
| What was decided **when**? | Git history + ADRs |
| What must the product **do**? | `SPECIFICATION.md` (`FR-*`) |
| What should devs **build next**? | Module breakdown + sprint plan |
| Is this API **safe to use**? | `BACKEND-INDEX.md` status |

---

## API sync rule

When any endpoint changes:

1. `BACKEND-INDEX.md` — row updated
2. `docs/04-reference/` — contract updated
3. Module breakdown — still references correct `api:*` ID

All three in the **same PR** when possible.

Guide: [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md)

---

## Extending verify scripts

Template ships `scripts/verify-project-docs.sh`. Extend **section 3 of the script** (its project-specific checks section — not lifecycle Phase 3) for your project:

- Expected API reference files exist
- ADR index matches files on disk
- Module count matches PROJECT-INDEX table
- No unresolved `{placeholder}` markers

See `scripts/README.md` in your context repo.

---

## When to create a new ADR

- Platform or stack change
- New architecture pattern or layer boundary
- New integration with architectural impact
- Decision that future team members will question

Use `docs/03-architecture/decisions/ADR-TEMPLATE.md`.

---

[← Daily workflows](06-daily-workflows.md) | [Artifact catalog →](08-artifact-catalog.md) | [Playbook home](README.md)
