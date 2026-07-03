---
sidebar_position: 5
sidebar_label: SPECIFICATION
---

# Specification — Lunchbox

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 2 checkpoint. In a real project this file lives at `docs/02-specification/SPECIFICATION.md` in your context repo. Compare against your own version; don't just copy.

**Phase:** 2 — Specification
**Last Updated:** 2026-07-01
**Author:** Dana (reviewed by Sam)
**Status:** Approved

---

## ID Scheme

Requirements use stable IDs: `FR-LUNCH-NNN`. **IDs are never renamed or reused once assigned** — tickets and tests reference them.

---

### FR-LUNCH-001: Post the day's options

**Priority:** Must have

**Description:** Each workday morning, Dana posts 2–4 lunch options (restaurant names) for the day.

**Acceptance criteria:**
- [ ] Dana can enter between 2 and 4 option names; fewer than 2 or more than 4 is rejected
- [ ] Posted options appear on the page immediately
- [ ] Posting a new day's options clears the previous day's options and votes

### FR-LUNCH-002: Cast a vote

**Priority:** Must have

**Description:** A team member votes for exactly one of today's options, identifying themselves by picking their name from the fixed list of 5 team members.

**Acceptance criteria:**
- [ ] The voter list shows exactly the 5 team members' names — no free-text names
- [ ] A voter selects exactly one option; selecting a second option replaces the selection, never adds a second vote
- [ ] After voting, the page confirms which option the voter chose
- [ ] One name can have at most one active vote at any time

### FR-LUNCH-003: Change a vote

**Priority:** Must have

**Description:** A voter can change their vote at any time before voting closes.

**Acceptance criteria:**
- [ ] Voting again before 11:00 replaces the voter's earlier vote
- [ ] The total number of votes never exceeds the number of people who voted

### FR-LUNCH-004: Close voting at 11:00

**Priority:** Must have

**Description:** Voting closes at 11:00 sharp. Votes attempted after 11:00 are rejected.

**Acceptance criteria:**
- [ ] A vote submitted at or after 11:00 is rejected with a clear "voting closed" message
- [ ] The page visibly switches from "voting open" to "voting closed" at 11:00

### FR-LUNCH-005: Show the result

**Priority:** Must have

**Description:** After 11:00 the page shows the winning option and the per-option vote counts.

**Acceptance criteria:**
- [ ] After 11:00 the page shows the winning option prominently
- [ ] Every posted option is shown with its vote count, including zero-vote options
- [ ] Before 11:00, no running tally is shown to voters

### FR-LUNCH-006: Break ties

**Priority:** Must have

**Description:** If two or more options tie for the most votes at 11:00, the option that was posted first wins.

**Acceptance criteria:**
- [ ] On a tie, the winner is the tied option Dana posted earliest
- [ ] The result page indicates the win was by tie-break

---

## Explicitly Out of Scope

Copied from the concept note: food ordering, payments, user accounts / login, a mobile app, and vote history / statistics.
