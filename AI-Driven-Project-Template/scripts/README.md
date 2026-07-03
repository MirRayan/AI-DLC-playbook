# Documentation scripts

Run from the **repository root** of your project.

| Script | Purpose |
|--------|---------|
| [`check-doc-links.sh`](check-doc-links.sh) | Internal Markdown links only (`lychee --offline`). Requires [lychee](https://github.com/lycheeverse/lychee). |
| [`verify-project-docs.sh`](verify-project-docs.sh) | **Full mechanical sweep**: links, ADR index (if present), `docs/04-reference/` spot-check, PROJECT-INDEX pointer, TODO counts, diagram reminder. **Customize** section 3 of the script (its project-specific checks — not lifecycle Phase 3) for required files (see comments in script). |

**Recommended before a big docs merge or quarterly review:**

```bash
./scripts/verify-project-docs.sh
# Without lychee:
SKIP_LYCHEE=1 ./scripts/verify-project-docs.sh
```

Never run a terminal script before? Ask your agentic AI tool (e.g. Claude Code, Cursor) to run these and report the results — or see the terminal primer at https://mirrayan.github.io/AI-DLC-playbook/repo-basics

Scripts do not prove that documentation matches production code — run a human or AI review after a green pass.

See also [docs/process/DOCUMENTATION-SYNC.md](../docs/process/DOCUMENTATION-SYNC.md), [AGENTS.md](../AGENTS.md), and [docs/process/AGENT-RULES-BACKEND-API.md](../docs/process/AGENT-RULES-BACKEND-API.md) (when maintaining API contracts).
