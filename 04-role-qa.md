---
id: role-qa
---

# QA Engineer Onboarding Path

For QA (quality assurance) engineers who verify features against acceptance criteria and own browser test automation in an AI-DLC project. New to AI-DLC? Do the [Learn track](00-what-is-ai-dlc.md) first — especially [AI Assistant Basics](00-ai-assistant-basics.md) if you have not worked with an AI assistant before.

---

## Week 1 goals

- [ ] [Context repo](glossary.md#context-repo) + [code repo(s)](glossary.md#code-repo) [cloned](glossary.md#clone) (how: [repo primer](00-repo-basics.md))
- [ ] Context-load test passes ([11.03 — Run an AI session](guides/11.03-run-ai-session.md))
- [ ] Assigned module's [QA tickets](glossary.md#qa-ticket-ids) (`{MODULE}-QA-*`) read, traced to their FRs
- [ ] First `TEST-CONTEXT-{MODULE}.md` drafted ([11.15 — Playwright testing](guides/11.15-playwright-testing.md) Step 1)
- [ ] Know where [acceptance criteria](glossary.md#acceptance-criteria) live (`SPECIFICATION.md`) and where test context docs go (`docs/06-development/`)

**Schedule:** [11.14 — Week 1 schedules](guides/11.14-week-1-schedules.md)

---

## Documents you read

All of these live in the context repo, created from the template when the project was bootstrapped ([11.01 — Create a context repo](guides/11.01-create-context-repo.md)):

| Priority | Document | Why |
|----------|----------|-----|
| 1 | `PROJECT-INDEX.md` | Current phase and work status |
| 2 | Your module in `docs/05-breakdown/modules/` | QA tickets and their FR references |
| 3 | `docs/02-specification/SPECIFICATION.md` | The acceptance criteria you test against |
| 4 | `docs/06-development/TEST-CONTEXT-{MODULE}.md` | Existing test scenarios per module |
| 5 | `.ai/AI-ASSISTANT-RULES.md` | Project rules your AI sessions must follow |
| 6 | `BACKEND-INDEX.md` (if APIs) | Which endpoints are `verified` and testable |

---

## Documents you update

| When | Document |
|------|----------|
| Starting a module's test work | `TEST-CONTEXT-{MODULE}.md` — scenarios mapped from QA tickets ([11.15](guides/11.15-playwright-testing.md) Step 1) |
| Tests pass | QA ticket status in module doc / sprint board |
| Test finds a real bug | New `{MODULE}-QA-{NNN}` defect ticket in the module doc |
| Expected behavior was wrong in the test | Fix the test context doc, regenerate the test |

You typically do **not** own: the specification (`FR-*`), module implementation tickets, or ADRs — but your defect tickets feed all three.

---

## Daily rhythm

1. **Prerequisites** — [11-prerequisites.md](11-prerequisites.md) L3 checklist
2. **New chat** per module or task — [11.03 — Clear session](guides/11.03-run-ai-session.md#clear-session-before-a-new-task-or-feature)
3. **Start session** — load the [Tier-1 hot files](glossary.md#tier-1-hot-files) → module doc + `TEST-CONTEXT-{MODULE}.md` (loading mechanics: [AI Assistant Basics](00-ai-assistant-basics.md))
4. **Generate or update tests** — [Playwright](glossary.md#playwright) specs from the test context, per [11.15](guides/11.15-playwright-testing.md) Step 2
5. **Run and triage** — every failure is either a real bug (file a defect ticket), a wrong expectation (fix the test context), or a broken selector (fix the spec file) — the triage table is in [11.15](guides/11.15-playwright-testing.md) Step 3
6. **Sync docs** — test context and ticket statuses stay current in the same PR as test changes

---

## Typical mistakes

| Mistake | Fix |
|---------|-----|
| Generating tests without a test context doc | AI hallucinates selectors and flows — always do [11.15](guides/11.15-playwright-testing.md) Step 1 first |
| Testing before the feature is deployed | Confirm the implementation PR is merged and deployed first |
| Storing `*.spec.ts` files in the context repo | Test code lives in the **code repo** under `tests/e2e/`; test *context* lives in the context repo |
| Treating every timeout as a bug | Investigate the root cause before raising timeouts |
| Reusing one chat across modules | One module per session — start fresh, reload context |

---

[← Start here](01-start-here.md) | [Week 1 schedule](guides/11.14-week-1-schedules.md) | [Playbook home](README.md)
