# TEST-CONTEXT-{MODULE}

> **How to use this template:** Copy this file to `docs/06-development/TEST-CONTEXT-{MODULE}.md` in your [context repo](../glossary.md#context-repo) — one copy per module. The **developer or QA engineer** fills it in during Phase 6, each sprint, following [11.15 — Playwright testing](../guides/11.15-playwright-testing.md) (Step 1 there generates most of it with AI help). Replace every `{placeholder}`, then **delete this block in your copy**.

| Field | Value |
|-------|-------|
| Phase | 6 — Development |
| Module | `{MODULE}` |
| Sprint | S{N} |
| Last Updated | YYYY-MM-DD |
| Status | Draft / Ready / Archived |
| Related spec | `FR-{MODULE}-*` in `docs/02-specification/SPECIFICATION.md` |
| Module breakdown | `docs/05-breakdown/modules/{NN}-{module-name}.md` |

---

## Test scenarios

Each row maps one `{MODULE}-QA-{NNN}` ticket to a testable scenario.

| QA ID | Scenario title | User flow (step by step) | UI elements / endpoints | Expected outcome | Priority |
|-------|---------------|--------------------------|------------------------|------------------|----------|
| `{MODULE}-QA-001` | _e.g. Successful login_ | 1. Navigate to /login<br>2. Enter valid credentials<br>3. Tap Sign In | `[data-testid="email-input"]`, `[data-testid="password-input"]`, `[data-testid="sign-in-btn"]` | User lands on home screen; auth token set | High |
| `{MODULE}-QA-002` | _e.g. Login with wrong password_ | 1. Navigate to /login<br>2. Enter invalid password<br>3. Tap Sign In | `[data-testid="sign-in-btn"]`, `[data-testid="error-message"]` | Error message shown; user stays on login screen | High |

_Add one row per QA ticket in this sprint module._

---

## Test environment

| Setting | Value |
|---------|-------|
| Base URL | `https://{env}.example.com` |
| Auth method | _e.g. email + password / OAuth / magic link_ |
| Seed data | _e.g. test user: test@example.com / password123_ |
| API stubs | _None / MSW / Playwright network mock_ |
| Browser | Chromium (default); add Firefox/WebKit if cross-browser required |

---

## Setup and teardown notes

_Describe any `beforeAll` / `beforeEach` / `afterEach` logic needed:_

- _e.g. Log in before each test using `storageState` or a shared helper_
- _e.g. Reset DB state via API call before suite_
- _e.g. No teardown needed — tests use isolated accounts_

---

## Out of scope / manual only

Tests listed here are **not** automated in this sprint. Document the reason.

| QA ID | Reason for manual-only |
|-------|------------------------|
| `{MODULE}-QA-00X` | _e.g. Requires physical device / third-party OAuth flow / captcha_ |

---

## Related documents

- Module breakdown: `docs/05-breakdown/modules/{NN}-{module-name}.md`
- Specification: `docs/02-specification/SPECIFICATION.md` — `FR-{MODULE}-*` entries
- Playwright guide: [guides/11.15-playwright-testing.md](../guides/11.15-playwright-testing.md)
- Code repo spec file: `tests/e2e/{module}.spec.ts`
