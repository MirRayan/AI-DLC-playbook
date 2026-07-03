---
sidebar_position: 9
sidebar_label: MODULE-02-results
---

# Module 02 — Results

> Reference solution for [the Hands-On Walkthrough](../../00-hands-on-walkthrough.md) — Phase 5 checkpoint. In a real project this file lives at `docs/05-breakdown/modules/02-results.md` in your context repo. Compare against your own version; don't just copy.

| Field | Value |
|-------|-------|
| Module | Results |
| Spec refs | FR-LUNCH-005, FR-LUNCH-006 |
| Depends on | Module 01 — Vote (votes must exist to tally) |

---

## Tickets

### LUNCH-004: Tally votes per option

**FR references:** FR-LUNCH-005

Count the active votes for each posted option at 11:00. Changed votes count once, for the final choice.

**Done when:**
- [ ] Every posted option gets a count, including zero
- [ ] Each voter contributes exactly one vote to the tally
- [ ] No running tally is visible to voters before 11:00

### LUNCH-005: Show winner and counts after 11:00

**FR references:** FR-LUNCH-005

After the cutoff, display the winning option prominently, with per-option vote counts below it.

**Done when:**
- [ ] After 11:00 the winner is shown prominently
- [ ] Every posted option is listed with its vote count
- [ ] Before 11:00, the results view is not shown

### LUNCH-006: Tie and no-votes handling

**FR references:** FR-LUNCH-006

Edge cases at close: on a tie, the tied option posted earliest wins, and the page says the win was by tie-break. If nobody voted, show a friendly "no votes today" message instead of a winner.

**Done when:**
- [ ] On a tie, the earliest-posted tied option wins
- [ ] The result page indicates a tie-break win
- [ ] Zero votes shows a "no votes today" state, not an error
