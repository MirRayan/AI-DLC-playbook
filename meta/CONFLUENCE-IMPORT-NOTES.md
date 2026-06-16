# Confluence Import Notes

Notes for converting this Markdown playbook to Confluence later. **Not required for day-to-day use.**

---

## Recommended Confluence structure

```
AI-DLC Playbook (space home)
├── Start here
├── Core concepts
├── The AI-DLC spine
├── Glossary
├── Bootstrap overview
├── Role paths
│   ├── Developer
│   ├── Project manager
│   └── Business architect
├── Six-phase lifecycle
├── Daily workflows
├── Operating practices (parent)
│   ├── Prerequisites
│   ├── Best practices
│   ├── Dos and don'ts
│   ├── Review process
│   └── Impact analysis before change
├── Quality and maintenance
├── Artifact catalog
├── FAQ
└── Step-by-step guides (parent)
    ├── 11.01 Create context repo
    ├── 11.02 Join existing project
    ├── ... (all guides)
    └── 11.15 Playwright testing
```

---

## Markdown file → Confluence page mapping

| Markdown file | Confluence page title |
|---------------|----------------------|
| `README.md` | AI-DLC Playbook (home) |
| `01-start-here.md` | Start here |
| `02-core-concepts.md` | Core concepts |
| `ai-dlc-spine.md` | The AI-DLC spine |
| `glossary.md` | Glossary |
| `03-bootstrap-overview.md` | Bootstrap overview |
| `04-role-developer.md` | Developer path |
| `04-role-pm.md` | Project manager path |
| `04-role-architect.md` | Business architect path |
| `05-six-phase-lifecycle.md` | Six-phase lifecycle |
| `06-daily-workflows.md` | Daily workflows |
| `11-prerequisites.md` | Prerequisites |
| `11-best-practices.md` | Best practices |
| `11-dos-and-donts.md` | Dos and don'ts |
| `11-review-process.md` | Review process |
| `11-impact-analysis-before-change.md` | Impact analysis before change |
| `07-quality-and-maintenance.md` | Quality and maintenance |
| `08-artifact-catalog.md` | Artifact catalog |
| `09-faq.md` | FAQ |
| `guides/README.md` | Step-by-step guides (index) |
| `guides/11.*.md` | Use guide title from H1 (e.g. "11.01 Create context repo") |

Templates (`templates/*.md`) can live in an **Appendix: Templates** section or as attached files.

---

## Import options

| Method | Pros | Cons |
|--------|------|------|
| Confluence Markdown import | Fast bulk import | May need link fixes |
| Copy-paste per page | Best formatting control | Slow for ~40 pages |
| Pandoc batch conversion | Scriptable | Requires post-processing for Confluence macros |

---

## Formatting adjustments for Confluence

1. **Relative links** — update to Confluence page links after import (e.g. `[11.03](guides/11.03-run-ai-session.md)` → internal link)
2. **Code blocks** — use Confluence code macro for AI prompts
3. **Mermaid diagrams** — re-create with Confluence diagram tool or paste as image (if in 02-core-concepts)
4. **Tables** — generally import cleanly; verify wide step tables on mobile view
5. **Info panels** — convert `> **Time:** | **Owner:**` blocks to Confluence info/note macros

---

## Cross-links to bundled assets

After import, set these as absolute links to your Git host:

- `AI-Driven-Project-Template/` (bundled in this repo)
- Team's AI-DLC training Confluence space (if separate)

---

## Maintenance after import

- **Canonical source:** Decide whether the Markdown repo or Confluence is the source of truth
- **Recommended:** Keep Markdown in git as canonical; re-import or sync on playbook updates
- Add a Confluence link to `AI-Driven-Project-Template/` when published

---

[← Playbook home](../README.md)
