---
sidebar_position: 8
sidebar_label: MODULE-01-vote
---

# Module 01 — Vote

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 5 checkpoint. In a real project this file lives at `docs/05-breakdown/modules/01-vote.md` in your context repo. Compare against your own version; don't just copy.

| Field | Value |
|-------|-------|
| Module | Vote |
| Spec refs | FR-LUNCH-001, FR-LUNCH-002, FR-LUNCH-003, FR-LUNCH-004 |
| Depends on | ADR-001 (plain HTML + small JavaScript) |

---

## Tickets

### LUNCH-001: Page skeleton showing today's options

**FR references:** FR-LUNCH-001

Build the single page with Dana's posting flow: enter 2–4 option names, post them, and see them listed for the day. Posting a new day clears yesterday's options and votes.

**Done when:**
- [ ] 2–4 options can be posted; 1 or 5+ is rejected
- [ ] Posted options appear on the page immediately
- [ ] Posting a new day's options clears the previous day's options and votes

### LUNCH-002: Cast and change a vote

**FR references:** FR-LUNCH-002, FR-LUNCH-003

The voting flow: pick your name from the fixed list of 5, pick exactly one option, get confirmation. Voting again before 11:00 replaces the earlier vote.

**Done when:**
- [ ] Voter list shows exactly the 5 team members — no free-text entry
- [ ] One name has at most one active vote; re-voting replaces, never adds
- [ ] The page confirms which option the voter chose
- [ ] A vote changed before 11:00 counts only once, for the new option

### LUNCH-003: Close voting at 11:00

**FR references:** FR-LUNCH-004

Enforce the cutoff: at 11:00 the page switches to its closed state and rejects any further votes with a clear message.

**Done when:**
- [ ] A vote at or after 11:00 is rejected with a "voting closed" message
- [ ] The page visibly shows "voting open" vs "voting closed"
