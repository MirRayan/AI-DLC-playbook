---
id: artifact-catalog
---

# Artifact and Naming Catalog

Conventions for IDs, files, and folders across AI-DLC context repos.

---

## Phase folders

| Folder | Phase | Primary artifact |
|--------|-------|------------------|
| `docs/00-project-context/` | 0 | `PROJECT-CONTEXT.md` |
| `docs/01-concept/` | 1 | `CONCEPT-NOTE.md` |
| `docs/02-specification/` | 2 | `SPECIFICATION.md` |
| `docs/03-context/` | 3 | `BUSINESS-TECH-CONTEXT.md` |
| `docs/03-architecture/decisions/` | 3+ | `ADR-{NNN}-{slug}.md` |
| `docs/04-reference/` | 5 | `{NN}-{module}-api.md` |
| `docs/04-context-directories/` | 4 | `{domain}-context.md` |
| `docs/05-breakdown/modules/` | 5 | `{NN}-{module-name}.md` |
| `docs/05-breakdown/sprints/` | 5 | `S{N}/` folders |
| `docs/05-breakdown/backend/` | 5 | `BACKEND-INDEX.md`, per-module folders |
| `docs/06-development/` | 6 | `TEST-CONTEXT-{MODULE}.md` |

---

## ID patterns

| Pattern | Example | Used for | Rules |
|---------|---------|----------|-------|
| `FR-{NNN}` | `FR-001` | Simple spec IDs | Stable once published |
| `FR-{MODULE}-{NNN}` | `FR-HOME-003` | Module-scoped requirements | Preferred for multi-module projects |
| `{MODULE}-{NNN}` | `HOME-003`, `AUTH-008` | Implementation tickets | Prefix = module name |
| `{MODULE}-QA-{NNN}` | `HOME-QA-001` | QA test cases | User-perspective acceptance tests; mapped 1-to-N in `TEST-CONTEXT-{MODULE}.md` |
| `api:{domain}:{slug}` | `api:auth:otp-send` | API registry | **Never rename** once in module docs |
| `ADR-{NNN}` | `ADR-001` | Architecture decisions | Use ADR-TEMPLATE |
| `PDR-{NNN}` | `PDR-001` | Pending decisions | Until resolved → ADR |

---

## API registry status vocabulary

Use **only** in `BACKEND-INDEX.md`:

| Status | Meaning |
|--------|---------|
| `verified` | Tested in target environment; safe to integrate |
| `pending` | Contract known; not yet verified |
| `not_deployed` | Documented for future; do not implement |
| `deprecated` | Replaced; link to successor `api:*` ID |

---

## Module breakdown structure

Standard sections (from template):

| Section | Content |
|---------|---------|
| Metadata table | Sprint, spec refs, dependencies, milestone |
| Data layer | Repository, API client, cache tickets |
| Domain layer | Use cases, business logic tickets |
| UI / Presentation | Screens, components |
| QA | Test cases from acceptance criteria |
| Backend dependencies | List of `api:*` IDs only |

Platform column values: `Both` | `iOS` | `Android` | `Web` | `Backend` | `QA`

---

## Root hot files

| File | Update when |
|------|-------------|
| `PROJECT-INDEX.md` | Phase change, milestone, module add, status change |
| `.ai/context/project-overview.md` | Major scope, stack, or integration change |
| `.ai/AI-ASSISTANT-RULES.md` | New ADR constraints or coding standards |

---

## Template sources

| Need | Source |
|------|--------|
| New context repo index | [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) |
| AI overview | [templates/project-overview-template.md](templates/project-overview-template.md) |
| Module breakdown | [AI-Driven-Project-Template/templates/mobile-module-breakdown.md](AI-Driven-Project-Template/templates/mobile-module-breakdown.md) |
| Sprint tickets | `templates/sprint-ticket-template.md` |
| API reference | `templates/api-reference-template.md` |
| ADR | `docs/03-architecture/decisions/ADR-TEMPLATE.md` |
| Test context | [templates/TEST-CONTEXT-template.md](templates/TEST-CONTEXT-template.md) |

---

## File naming rules

- Lowercase kebab-case for doc files: `02-home.md`, `pricing-and-discount-resolution.md`
- Module number prefix aligns across spec, breakdown, reference: `05-product-catalog`
- ADRs: `ADR-001-platform-strategy.md`
- No spaces in filenames

---

[← Quality](07-quality-and-maintenance.md) | [FAQ →](09-faq.md) | [Playbook home](README.md)
