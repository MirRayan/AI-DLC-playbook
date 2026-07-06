# Playbook Improvement Backlog

Maintainers' list of agreed-but-not-yet-built improvements, in rough priority order. (This folder is excluded from the published site.)

## Deferred — quick wins (config-level)

1. **Search** — add `@easyops-cn/docusaurus-search-local` (no external service needed). Biggest remaining usability win for a reference site.
2. **Navbar links** — add **Glossary** and **Hands-On Walkthrough** as permanent navbar items in `site/docusaurus.config.ts` (`themeConfig.navbar.items`). The playbook tells readers to "keep the glossary open" — make it one click from anywhere.
3. **Announcement bar** — `themeConfig.announcementBar` with "New to AI-DLC? Start with the Learn track →" so people landing mid-site from shared links find the on-ramp.
4. **"Edit this page" links** — set `editUrl` in the docs preset options (point at `https://github.com/MirRayan/AI-DLC-playbook/edit/main/`) so the team can fix docs from the browser. Note: docs `path` is `'..'`, so verify the generated edit paths resolve correctly.

## Deferred — medium

5. **Feedback channel** — a "Report a confusing page" footer link (GitHub issue template or a form). Collects fresher feedback continuously, not just during onboarding tests.

## Deferred — larger

6. **Video walkthrough** — a 10–15 min screen recording of someone doing the Lunchbox exercise. Needs a human presenter.

## In progress / planned by the team

- **Fresher field test** — give a new joiner only the site URL, ask them to complete the Hands-On Walkthrough, note where they stall. Owner: Mir.

## Done (for context)

- Learn track (4 pages) + fully standalone rewrite of all pages
- Glossary rebuild with per-term anchors, linked everywhere
- Mermaid diagrams on the flow-heavy pages
- Lunchbox reference answer key (`examples/lunchbox/`)
- Generic module-breakdown template; QA engineer role page
- Bundled-template fresher pass (incl. AGENTS.md added to Tier-1 load lists)
- Sidebar sections (Learn / Understand / Operate / Reference), cheat sheet page, card-based landing
