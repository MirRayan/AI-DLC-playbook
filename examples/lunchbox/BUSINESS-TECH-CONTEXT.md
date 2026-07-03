---
sidebar_position: 6
sidebar_label: BUSINESS-TECH-CONTEXT
---

# Business + Technical Context — Lunchbox

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 3 checkpoint. In a real project this file lives at `docs/03-context/BUSINESS-TECH-CONTEXT.md` in your context repo. Compare against your own version; don't just copy.

**Phase:** 3 — Business + Tech Context
**Last Updated:** 2026-07-01
**Owner:** Dana + Sam

---

## Business Goal

Reclaim the twenty minutes the team loses every morning debating lunch. Lunchbox succeeds if the decision reliably happens by 11:05 with no discussion — one page, one vote each, one winner.

## Who Benefits

- **The team (5 people):** decision made without a meeting.
- **Dana:** posts options once and stops moderating the debate.

## What Success Looks Like After 2 Weeks

A page the team actually uses daily: options posted each morning, all five votes in by 11:00, winner displayed — with zero maintenance work for Sam after launch.

## Technical Constraints from the Business Reality

| Business fact | Technical consequence |
|---------------|----------------------|
| One part-time developer (Sam), 2-week timeline | The simplest technology that works; nothing that needs learning time |
| No budget | Free static hosting; no servers, no paid services |
| 5 known users, one office | No login, no accounts, no scaling concerns — a fixed name list |
| Must be zero-maintenance after launch | No database to administer, no framework upgrades to chase |
| Voting closes 11:00 sharp | The page itself must enforce the cutoff — see FR-LUNCH-004 |

## Decisions

Platform and page technology: see **ADR-001 — Page technology** ([ADR-001-page-technology.md](ADR-001-page-technology.md)).

## Pending Technical Decisions

| ID | Question | Options | Owner | Target date |
|----|----------|---------|-------|-------------|
| — | none open | — | — | — |
