---
sidebar_position: 3
sidebar_label: PROJECT-INDEX
---

# Lunchbox — Project Index

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — created in Phase 0 and updated at the end of every phase. This shows the **final state** (end of Phase 6); during earlier phases yours will list fewer documents. In a real project this file lives at `PROJECT-INDEX.md`, the root of your context repo.

**Last Updated:** 2026-07-02
**Current Phase:** 6 — Development (in progress)

---

## Quick Facts

| Aspect | Detail |
|--------|--------|
| Project | Lunchbox |
| Type | Single-page web app (greenfield) |
| Tech | Plain HTML + small JavaScript (per ADR-001) |
| Team | Dana (product owner), Sam (part-time developer), 5 voters |
| Timeline | 2 weeks |
| Status | LUNCH-002 done (mockup); LUNCH-001, 003–006 not started |

## Vision

One simple web page that ends the daily twenty-minute lunch debate: Dana posts 2–4 options each morning, everyone votes once by 11:00, and the page shows the winner.

## Documents

| Document | Purpose |
|----------|---------|
| PROJECT-CONTEXT.md | What the project is: problem, constraints, risks |
| CONCEPT-NOTE.md | Vision, users, in-scope and out-of-scope |
| SPECIFICATION.md | Six requirements, FR-LUNCH-001 … FR-LUNCH-006 |
| BUSINESS-TECH-CONTEXT.md | Business goal → technical constraints |
| ADR-001-page-technology.md | Decision: plain HTML page, not a framework |
| MODULE-01-vote.md | Vote module — tickets LUNCH-001 … LUNCH-003 |
| MODULE-02-results.md | Results module — tickets LUNCH-004 … LUNCH-006 |

## Key Decisions

| ADR | Title | Status |
|-----|-------|--------|
| ADR-001 | Page technology — plain HTML + small JavaScript | Accepted |

## Modules

| Module | Tickets | Status |
|--------|---------|--------|
| 01 — Vote | LUNCH-001 … LUNCH-003 | LUNCH-002 done (mockup) |
| 02 — Results | LUNCH-004 … LUNCH-006 | Not started |

## Phase Log

- Phase 0 (project context): complete
- Phase 1 (concept note): complete
- Phase 2 (specification): complete
- Phase 3 (business/tech context + ADR-001): complete
- Phase 4 (context directories): **skipped — single-domain project, hot files sufficient**
- Phase 5 (breakdown): complete
- Phase 6 (development): in progress — LUNCH-002 done (mockup)
