# Business + Technical Context — {Project Name}

> **How to use this template:** Copy this file to `docs/03-context/BUSINESS-TECH-CONTEXT.md` in your [context repo](../glossary.md#context-repo). The **business architect** fills it in during [Phase 3 — Business + Tech Context](../guides/11.07-phase-3-business-tech-context.md). Replace every `{placeholder}`, then **delete this block in your copy**.

**Phase:** 3 — Business + Tech Context
**Last Updated:** YYYY-MM-DD
**Owner:** {Business architect}

---

## Business Goals

| Goal | Success metric | Priority |
|------|----------------|----------|
| {Goal} | {Metric} | {H/M/L} |

---

## Stakeholders

| Stakeholder | Role | Technical interest |
|-------------|------|-------------------|
| {Name/team} | {Role} | {What they need from architecture} |

---

## Business Rules (Cross-Cutting)

| Rule | Implication for tech |
|------|---------------------|
| {Rule} | {How architecture must support it} |

---

## Technical Strategy

ADR = [Architecture Decision Record](../glossary.md#architecture-decision-record-adr) — you write these during Phase 3 using the [bundled ADR template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/docs/03-architecture/decisions/ADR-TEMPLATE.md) (it also sits at `docs/03-architecture/decisions/ADR-TEMPLATE.md` in your context repo).

### Platform decisions
See **ADR-001** — platform and stack.

### Architecture pattern
See **ADR-002** — architecture pattern.

### Integration landscape

| System | Direction | Protocol | Owner |
|--------|-----------|----------|-------|
| {System} | Inbound / Outbound | REST / event / batch | {Team} |

---

## Non-Functional Requirements

| NFR | Target | ADR / note |
|-----|--------|------------|
| Performance | {e.g. p95 < 200ms} | |
| Availability | {e.g. 99.9%} | |
| Security | {e.g. OWASP, PCI} | |
| Scalability | {e.g. 10k concurrent users} | |
| i18n / accessibility | {requirements} | |

---

## Business ↔ Technical Mapping

| Business capability | Modules | Key integrations | FR refs |
|--------------------|---------|------------------|---------|
| {Capability} | {Modules} | {Systems} | FR-XXX |

---

## Metrics and Observability

| Metric | Tool | Dashboard / alert |
|--------|------|-------------------|
| {Metric} | {Tool} | {Where} |

---

## Compliance and Regulatory

| Requirement | Impact |
|-------------|--------|
| {Requirement} | {Architectural impact} |

---

## Pending Technical Decisions

| ID | Question | Options | Owner | Target date |
|----|----------|---------|-------|-------------|
| PDR-001 | {Question} | {Options} | {Owner} | YYYY-MM-DD |

→ Track in the `PROJECT-INDEX.md` pending section until resolved (same columns there — rows copy across as-is).

---

## Related Documents

All in your context repo: ADRs in `docs/03-architecture/decisions/`, the specification at `docs/02-specification/SPECIFICATION.md`, and the project context at `docs/00-project-context/PROJECT-CONTEXT.md`.

---

## Next Steps

→ Optional Phase 4 — context directories: guide [11.08 — Phase 4](../guides/11.08-phase-4-context-directories.md) (output: `docs/04-context-directories/` in your context repo)  
→ Phase 5 — breakdown: guide [11.09 — Phase 5](../guides/11.09-phase-5-breakdown.md) (output: `docs/05-breakdown/` in your context repo)
