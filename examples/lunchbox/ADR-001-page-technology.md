---
sidebar_position: 7
sidebar_label: ADR-001
---

# ADR-001: Page Technology

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 3 checkpoint. In a real project this file lives at `docs/03-architecture/decisions/ADR-001-page-technology.md` in your context repo. Your decision may legitimately differ — what must match is the *shape*: both options considered honestly, an explicit decision, and consequences including a real negative.

**Status:** Accepted
**Date:** 2026-07-01
**Deciders:** Dana (product owner), Sam (developer)

---

## Context

Lunchbox is one web page for 5 known users: post 2–4 options, collect one vote per person until 11:00, then show the winner. It will be built by one part-time developer in 2 weeks, hosted for free, and must need zero maintenance after launch.

## Options Considered

**Option A — plain HTML page with a small amount of JavaScript.**
No build step, no dependencies, hostable anywhere as a static file. Everything Sam needs he already knows. The page logic (options, votes, 11:00 cutoff, tally) fits comfortably in one small script.

**Option B — a web framework (React, Vue, or similar).**
Better fit if the page ever grows into a real product: components, state management, a large ecosystem. But it adds a build toolchain, dependency updates to chase, and learning/setup time — real costs against a 2-week, part-time, zero-maintenance budget, for a page with one screen and six requirements.

## Decision

**Option A: plain HTML + small JavaScript.** For one page, five users, one part-time developer, and a no-maintenance goal, the framework's benefits never materialize while its costs are immediate.

## Consequences

**Positive**
- No build step, no dependencies, nothing to update after launch
- Sam can start immediately; any future maintainer can read one file
- Free static hosting works as-is

**Negative**
- If Lunchbox ever grows (multiple pages, real accounts, history), the plain-page approach won't stretch — a rewrite on a framework would be the honest path
- No framework conveniences: Sam hand-writes the small amount of page-update logic
