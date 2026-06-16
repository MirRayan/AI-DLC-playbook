# Business + Technical Context — {Project Name}

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

| ID | Decision | Options | Target |
|----|----------|---------|--------|
| PDR-001 | {Question} | {Options} | YYYY-MM-DD |

→ Track in `PROJECT-INDEX.md` pending section until resolved.

---

## Related Documents

- ADRs: `docs/03-architecture/decisions/`
- Specification: `docs/02-specification/SPECIFICATION.md`
- Project context: `docs/00-project-context/PROJECT-CONTEXT.md`

---

## Next Steps

→ Phase 5: [Breakdown](../05-breakdown/)  
→ Optional Phase 4: [Context directories](../04-context-directories/)
