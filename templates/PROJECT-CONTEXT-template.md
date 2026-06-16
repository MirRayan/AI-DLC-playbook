# Project Context — {Project Name}

**Phase:** 0 — Project Context
**Last Updated:** YYYY-MM-DD
**Owner:** {Architect / Tech lead}

---

## Problem Domain

{What problem does this project solve? Who is affected?}

---

## Project Type

- [ ] Greenfield — new system
- [ ] Brownfield — extending or replacing existing system
- [ ] Hybrid — new frontend on existing backend

---

## Existing Systems (Brownfield)

| System | Role | Integration approach |
|--------|------|---------------------|
| {System} | {Role} | {API / shared DB / event bus} |

---

## Technology Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| {Component} | {Technology} | {Why} |

---

## Integrations

| Integration | Provider | Purpose | Documented in |
|-------------|----------|---------|---------------|
| {Name} | {Vendor} | {Purpose} | ADR-XXX / spec |

---

## Team and Repositories

| Repo | Purpose | Location |
|------|---------|----------|
| `{project}-architecture` | Context repo (this repo) | {URL} |
| `{project}-api` | Backend code | {URL} |
| `{project}-web` | Frontend code | {URL} |

---

## Constraints

### Technical
- {Constraint}

### Business
- {Constraint}

### Timeline
- {Constraint}

---

## Known Technical Debt

| Area | Description | Plan |
|------|-------------|------|
| {Area} | {Description} | {Address in Phase X / defer} |

---

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| {Risk} | {High/Medium/Low} | {Mitigation} |

---

## Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | {Question} | {Name} | Open |

---

## References

- External docs: {links}
- Related ADRs: {links after Phase 3}
