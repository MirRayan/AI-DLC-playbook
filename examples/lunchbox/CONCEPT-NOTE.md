---
sidebar_position: 4
sidebar_label: CONCEPT-NOTE
---

# Concept Note — Lunchbox

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 1 checkpoint. In a real project this file lives at `docs/01-concept/CONCEPT-NOTE.md` in your context repo. Compare against your own version; don't just copy.

**Phase:** 1 — Concept
**Last Updated:** 2026-07-01
**Author:** Dana
**Status:** Approved

---

## Vision

Every workday, our 5-person team loses about twenty minutes deciding where to order lunch. Lunchbox turns that debate into a two-minute vote: each morning Dana posts 2–4 restaurant options on one simple web page, everyone picks one, and votes can change freely until they close at 11:00.

After 11:00 the page shows the winning option and the vote counts — decision made, lunch ordered, meeting over before it starts.

## Target Users

| User | Who | Needs |
|------|-----|-------|
| Dana | Office manager | Post the day's 2–4 options in under a minute |
| Team members (5) | The voters | Pick their name, vote once, change their mind before 11:00 |

## In Scope

**Must have**
- Dana posts 2–4 lunch options each morning
- Each team member casts exactly one vote (name from the fixed list of 5)
- A voter can change their vote until 11:00
- After 11:00: winning option and per-option counts shown

**Should have**
- Clear "voting closed" state so late votes are rejected, not just ignored

**Could have**
- A friendly message when nobody has voted yet

## Out of Scope

| Not building | Why |
|--------------|-----|
| Food ordering | The team orders by phone as always — Lunchbox only decides *where* |
| Payments | No money moves through this page |
| User accounts / login | Five known people; a fixed name list is enough |
| Mobile app | The web page works on a phone browser already |
| Vote history / statistics | Yesterday's lunch doesn't matter; only today's does |

## Success Metrics

- Lunch decided by 11:05 on at least 9 of 10 workdays
- All 5 team members have voted at least once by end of week 1

## Top Risks

1. Ties at 11:00 leave no decision — needs an explicit tie-break rule in the spec.
2. Sam's part-time availability slips the 2-week timeline — cut "could have" items first.
3. Votes cast after 11:00 cause disputes — the page must reject them outright.
