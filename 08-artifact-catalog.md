---
id: artifact-catalog
---

# Artifact and Naming Catalog

Conventions for IDs, files, and folders across AI-DLC [context repos](glossary.md#context-repo). An **artifact** here just means a named document the process produces — a spec, a decision record, an index. This is a lookup page: skim it once, then return when you need a pattern. Unfamiliar terms are defined in the [glossary](glossary.md).

All `docs/...` and `.ai/...` paths on this page are files inside your context repo, created from the template — not pages on this site. See [11.01 — Create a context repo](guides/11.01-create-context-repo.md).

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

Note: folder number prefixes do **not** always equal phase numbers — `docs/04-reference/` is populated in Phase 5, and `docs/03-architecture/` keeps growing from Phase 3 onward ("3+"). The phases themselves are explained in [The six-phase lifecycle](05-six-phase-lifecycle.md).

---

## ID patterns

FR = functional requirement; QA = quality assurance; ADR = [Architecture Decision Record](glossary.md#architecture-decision-record-adr); PDR = [Pending Decision Record](glossary.md#pending-decision-record-pdr). "Stable once published" means the ID is never renamed or reused once other documents, [tickets](glossary.md#ticket), or tests refer to it — see [FR IDs](glossary.md#fr-ids).

| Pattern | Example | Used for | Rules |
|---------|---------|----------|-------|
| `FR-{NNN}` | `FR-001` | Simple spec IDs | Stable once published |
| `FR-{MODULE}-{NNN}` | `FR-HOME-003` | Module-scoped requirements | Preferred for multi-module projects |
| `{MODULE}-{NNN}` | `HOME-003`, `AUTH-008` | Implementation tickets | Prefix = [module](glossary.md#module) name |
| `{MODULE}-QA-{NNN}` | `HOME-QA-001` | QA test cases | User-perspective acceptance tests; one requirement can map to several QA tests ("1-to-N"), listed in `TEST-CONTEXT-{MODULE}.md` |
| `api:{domain}:{slug}` | `api:auth:otp-send` | [API registry](glossary.md#api-registry-ids) | **Never rename** once in module docs |
| `ADR-{NNN}` | `ADR-001` | Architecture decisions | Use ADR-TEMPLATE (see [Template sources](#template-sources) below) |
| `PDR-{NNN}` | `PDR-001` | Pending decisions | Until resolved → ADR |

---

## API registry status vocabulary

`BACKEND-INDEX.md` is the [API registry](glossary.md#backend-index) — the table listing every API (application programming interface) endpoint and how ready it is to build against. Use these statuses **only** there:

| Status | Meaning |
|--------|---------|
| `verified` | Tested in target environment; safe to integrate |
| `pending` | Contract known; not yet verified |
| `not_deployed` | Documented for future; do not implement |
| `deprecated` | Replaced; link to successor `api:*` ID |

---

## Module breakdown structure

Standard sections of a [module breakdown](glossary.md#breakdown) doc (from template). The three "layer" rows come from layered software architecture — in one line each: the **Data layer** is the code that fetches and stores data, the **Domain layer** is the business logic (the rules of what the app does), and the **UI / Presentation layer** is what users see and interact with.

| Section | Content |
|---------|---------|
| Metadata table | [Sprint](glossary.md#sprint), spec refs, dependencies, milestone |
| Data layer | Repository, API client, cache tickets |
| Domain layer | Use cases, business logic tickets |
| UI / Presentation | Screens, components |
| QA | Test cases from [acceptance criteria](glossary.md#acceptance-criteria) |
| Backend dependencies | List of `api:*` IDs only |

Careful with one word collision: **"Repository" in the Data layer row is the repository code pattern** (a class that wraps data access) — it is *not* a git [repository](glossary.md#repository-repo) like the context repo or code repo.

Platform column values: `Both` | `iOS` | `Android` | `Web` | `Backend` | `QA` — the vocabulary comes from the mobile template, where `Both` means "both iOS and Android". Web or backend-only projects just use the values that apply.

---

## Root hot files

The [Tier-1 hot files](glossary.md#tier-1-hot-files) loaded into every AI session — keep them current:

| File | Update when |
|------|-------------|
| `PROJECT-INDEX.md` | Phase change, milestone, module add, status change |
| `.ai/context/project-overview.md` | Major scope, stack, or integration change |
| `.ai/AI-ASSISTANT-RULES.md` | New ADR constraints or coding standards |

---

## Template sources

Templates live in two places: the playbook's own `templates/` folder, and the bundled `AI-Driven-Project-Template/` (the folder you copy when [bootstrapping](glossary.md#bootstrap) a new context repo). The table links each template where it actually lives:

| Need | Source |
|------|--------|
| New context repo index | [templates/PROJECT-INDEX-template.md](templates/PROJECT-INDEX-template.md) (playbook) |
| AI overview | [templates/project-overview-template.md](templates/project-overview-template.md) (playbook) |
| Module breakdown | [AI-Driven-Project-Template/templates/mobile-module-breakdown.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/templates/mobile-module-breakdown.md) (bundled template) |
| Sprint tickets | [AI-Driven-Project-Template/templates/sprint-ticket-template.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/templates/sprint-ticket-template.md) (bundled template) |
| API reference | [AI-Driven-Project-Template/templates/api-reference-template.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/templates/api-reference-template.md) (bundled template) |
| ADR | [AI-Driven-Project-Template/docs/03-architecture/decisions/ADR-TEMPLATE.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/docs/03-architecture/decisions/ADR-TEMPLATE.md) (bundled template); after bootstrapping it sits at `docs/03-architecture/decisions/ADR-TEMPLATE.md` in your context repo |
| Test context | [templates/TEST-CONTEXT-template.md](templates/TEST-CONTEXT-template.md) (playbook) |

---

## File naming rules

- Lowercase kebab-case (all lowercase, words joined by hyphens) for doc files: `02-home.md`, `pricing-and-discount-resolution.md`
- Module number prefix aligns across spec, breakdown, reference: `05-product-catalog`
- ADRs: `ADR-001-platform-strategy.md` — the part after the number is the "slug", a short hyphenated summary of the decision
- No spaces in filenames

---

[← Quality](07-quality-and-maintenance.md) | [FAQ →](09-faq.md) | [Playbook home](README.md)
