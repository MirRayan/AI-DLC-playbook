---
sidebar_position: 2
sidebar_label: PROJECT-CONTEXT
---

# Project Context — Lunchbox

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 0 checkpoint. In a real project this file lives at `docs/00-project-context/PROJECT-CONTEXT.md` in your context repo. Compare against your own version; don't just copy.

**Phase:** 0 — Project Context
**Last Updated:** 2026-07-01
**Owner:** Dana (office manager, acting product owner)

---

## Problem Domain

A 5-person office team orders lunch together every workday. Deciding *where* to order from takes about twenty minutes of debate each morning. Lunchbox replaces the debate with a simple vote: the office manager posts the day's options, everyone votes once, and at 11:00 the page shows the winner.

## Project Type

Greenfield — nothing exists yet. One simple web page, built from scratch.

## Proposed Technology Stack

*Proposed — final decision recorded in Phase 3 (ADR-001).*

| Layer | Proposal | Why |
|-------|----------|-----|
| Page | Plain HTML + a small amount of JavaScript | One page, 5 users, no budget; easiest for one part-time developer to build and host |
| Data | Browser storage or a single small data file | 5 voters and 2–4 options per day need no database |
| Hosting | Any static file host | Must be free and zero-maintenance |

## Constraints

- **Team:** one part-time developer (Sam) — no one else writes code.
- **Timeline:** 2 weeks to a usable page.
- **Budget:** none. Hosting and tools must be free.
- **Users:** exactly 5 known team members — no login; voters pick their name from a fixed list.
- **Business rule:** voting closes at **11:00** sharp; after that the page shows the winning option and vote counts.

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Two options tie at 11:00 | No clear lunch decision | Tie-break rule needed in the specification |
| Sam's part-time hours slip | Misses the 2-week window | Keep scope to one page; cut "could have" items first |
| Team votes after 11:00 anyway | Result disputed | The page must reject late votes, not just discourage them |

## Open Questions

- Should a team member who is out of office be removable from the voter list for the day? *(Owner: Dana — decide during Phase 1.)*

## Explicitly Not Building

Food ordering, payments, user accounts, a mobile app, vote history or statistics.
