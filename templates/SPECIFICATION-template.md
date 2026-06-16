# Specification — {Project Name}

**Phase:** 2 — Specification
**Last Updated:** YYYY-MM-DD
**Author:** {PM name}
**Status:** Draft | Under review | Approved

---

## ID Scheme

Requirements use IDs: **`FR-{MODULE}-{NNN}`** (e.g. `FR-AUTH-001`, `FR-HOME-003`)

- IDs are **stable** — never rename once referenced in breakdown
- Module prefix matches breakdown module numbering
- Version history tracked in git

---

## Priority Legend

| Priority | Meaning |
|----------|---------|
| Must have | Required for MVP / first release |
| Should have | Important; may defer one sprint |
| Could have | Nice to have |
| Won't have | Explicitly deferred — see Out of Scope |

---

## Module: {Module Name}

### FR-{MODULE}-001: {Requirement title}

**Priority:** Must have
**Module:** {Module name}

**Description:**
{What the system shall do.}

**Acceptance criteria:**
- [ ] {Testable criterion}
- [ ] {Testable criterion}
- [ ] {Edge case criterion}

**Dependencies:** {Other FR IDs or external systems}

**Out of scope:** {If partially deferred}

---

### FR-{MODULE}-002: {Requirement title}

**Priority:** Should have

**Description:**
{...}

**Acceptance criteria:**
- [ ] {...}

---

## Module: {Next Module}

{Repeat per module.}

---

## Explicitly Out of Scope

| Item | Reason | Tracked in concept note |
|------|--------|-------------------------|
| {Item} | {Reason} | Yes |

---

## Traceability (Optional)

| Concept note item | FR IDs |
|-------------------|--------|
| {Feature from concept} | FR-XXX-001, FR-XXX-002 |

---

## Change Log

| Date | Author | Change |
|------|--------|--------|
| YYYY-MM-DD | {Name} | Initial draft |

---

## Next Steps

→ Phase 3: [BUSINESS-TECH-CONTEXT.md](../03-context/BUSINESS-TECH-CONTEXT.md)  
→ Phase 5: Module breakdown in `docs/05-breakdown/modules/`
