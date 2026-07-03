---
id: glossary
title: Glossary
---

# Glossary

Every term the playbook uses, defined in plain language for people who are new to all of this — this page is the single lookup point. **Tip:** press Ctrl-F (Windows/Linux) or Cmd-F (Mac) and type the word you are looking for. For fuller explanations see [Core concepts](02-core-concepts.md); for what is non-negotiable see [the AI-DLC spine](ai-dlc-spine.md); to see the terms in action, do the [Hands-On Walkthrough](00-hands-on-walkthrough.md).

---

## AI collaboration

### AI-DLC

AI-Driven Development Lifecycle — the way of working this playbook teaches: an [AI assistant](#ai-assistant) does most of the coding, while humans provide direction, requirements, decisions, and validation. More: [What is AI-DLC?](00-what-is-ai-dlc.md)

### AI assistant

An artificial intelligence (AI) tool that responds to your written instructions with text or code — for example Claude, ChatGPT, Cursor, or GitHub Copilot. This playbook works with any of them: some can read files from your project folder on their own ([agentic tools](#agentic-tool)); with plain chat tools you paste file contents into the conversation instead. More: [AI Assistant Basics](00-ai-assistant-basics.md)

### Agentic tool

An [AI assistant](#ai-assistant) that can act on your computer directly — read and edit files in a folder, run commands, browse code (for example Claude Code or Cursor). Plain chat tools (for example ChatGPT or Claude in the browser) cannot reach your files, so you copy and paste content into the chat instead. Everything in this playbook works both ways.

### AI session

One conversation with an [AI assistant](#ai-assistant), from the moment you open a new chat until you close or clear it. The assistant remembers nothing from earlier sessions, so every session starts by [loading context](#context-loading) — beginning with the [Tier-1 hot files](#tier-1-hot-files) — and you start a fresh session whenever you switch to a different task. More: [11.03 — Run an AI session](guides/11.03-run-ai-session.md)

### Prompt

Any message you type to an [AI assistant](#ai-assistant) — a question, an instruction, or pasted file content. Good prompts state the goal, the constraints, and where the relevant information lives. More: [AI Assistant Basics](00-ai-assistant-basics.md)

### Context window

The limited "working memory" of an [AI session](#ai-session): everything you type and every file you load has to fit inside it. When it fills up, the assistant starts forgetting the oldest parts of the conversation — one reason to start a new session for each task and load only what the task needs.

### Context loading

Giving the [AI assistant](#ai-assistant) the project files it needs at the start of a session — either by letting an [agentic tool](#agentic-tool) read them from the folder, or by pasting their contents into a plain chat. AI-DLC standardizes this: load the [Tier-1 hot files](#tier-1-hot-files) first, then add whatever the specific task needs. More: [11.03 — Run an AI session](guides/11.03-run-ai-session.md)

### Hot file

Any file loaded into every [AI session](#ai-session). In this playbook "hot file" and "Tier-1 file" mean the same thing — see [Tier-1 hot files](#tier-1-hot-files).

### Tier-1 hot files

The four files loaded into **every** [AI session](#ai-session): `AGENTS.md`, `PROJECT-INDEX.md`, `.ai/context/project-overview.md`, and `.ai/AI-ASSISTANT-RULES.md` (in your context repo, created from the template). Note that "Tier-1" is the name of this file set — it is **not** one of the [context recovery tiers](#context-recovery-tiers) (Emergency / Standard / Task / Full), which describe how much total context to load.

### Context recovery tiers

Four named levels of how much context to load into a session, depending on the situation: **Emergency** (about 60 seconds — quick fix, or the AI seems lost: load `PROJECT-INDEX.md` and `.ai/AI-ASSISTANT-RULES.md` only), **Standard** (about 3 minutes — normal session start: all four [Tier-1 hot files](#tier-1-hot-files)), **Task** (5–10 minutes — feature or API work: Standard plus the [module](#module) doc, the relevant API (application programming interface) reference, and related [Architecture Decision Records (ADRs)](#architecture-decision-record-adr)), and **Full** (about 30 minutes — onboarding a new team member: phase docs plus your role page). These tier names describe session loads and are distinct from "[Tier-1 hot files](#tier-1-hot-files)", which is the separate name for the four always-loaded files. More: [Daily workflows](06-daily-workflows.md)

### Rules file

A file of standing instructions the [AI assistant](#ai-assistant) must follow on every task, usually written as ALWAYS/NEVER lists — for example "ALWAYS write tests for new code" or "NEVER change the database schema without an [impact analysis](#impact-analysis)". In AI-DLC the project's rules live in `.ai/AI-ASSISTANT-RULES.md` — see [AI-ASSISTANT-RULES](#ai-assistant-rules).

### Plan-before-act

The rule that the AI must first present a plan — what it will change and which files it will touch — and wait for your explicit approval ("go", "proceed") before editing anything. The policy is defined for all tools in `AGENTS.md` — see [AGENTS](#agents).

### Drift

When two things that should match slowly grow apart — most often documentation versus code (the docs say one thing, the code now does another), or the AI's output versus project conventions. AI-DLC fights drift with [doc sync](#doc-sync) and by loading current docs into every session.

---

## AI-DLC artifacts & documents

### Context repo

The centralized, versioned [repository](#repository-repo) holding the project's docs, [specifications](#specification-spec), [Architecture Decision Records (ADRs)](#architecture-decision-record-adr), and AI [rules files](#rules-file). It is the source of truth the AI reads from, and it lives separately from (as a sibling of) the [code repos](#code-repo). More: [Bootstrap overview](03-bootstrap-overview.md)

### Code repo

A [repository](#repository-repo) holding application source code, tests, and [continuous integration (CI)](#continuous-integration-ci) configuration. A sibling of the [context repo](#context-repo): code changes go here, documentation changes go there.

### PROJECT-INDEX

`PROJECT-INDEX.md` is the curated current-state index of the project — its phase, status, [modules](#module), and key decisions. It is the first file to read (and load) each session, and the Doc [DRI](#directly-responsible-individual-dri) keeps it accurate.

### AGENTS

`AGENTS.md` is the tool-agnostic policy file that applies to **any** [AI assistant](#ai-assistant) used on the project. It defines the [plan-before-act](#plan-before-act) rule and the [doc sync](#doc-sync) policy.

### AI-ASSISTANT-RULES

`.ai/AI-ASSISTANT-RULES.md` is the project's [rules file](#rules-file): project-specific ALWAYS/NEVER coding rules, kept in the `.ai/` folder of the [context repo](#context-repo) and aligned with accepted [ADRs](#architecture-decision-record-adr).

### BACKEND-INDEX

`BACKEND-INDEX.md` is the API registry: a table listing every API endpoint's [`api:*` ID](#api-registry-ids) and its readiness status ([verified / pending / not_deployed](#api-registry-status-values)). An API (application programming interface) is how one piece of software talks to another — for example, an app requesting data from a server. More: [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md)

### Concept note

The Phase 1 document (`CONCEPT-NOTE.md`) that captures what you are building and why — the problem, the users, and the rough shape of the solution — before any detailed [specification](#specification-spec) is written. More: [11.05 — Phase 1: concept note](guides/11.05-phase-1-concept-note.md)

### Specification (spec)

The document (`SPECIFICATION.md`, written in Phase 2) that describes what the software must do, as a numbered list of functional requirements ([FR IDs](#fr-ids)) with [acceptance criteria](#acceptance-criteria). Everything built later traces back to it. More: [11.06 — Phase 2: specification](guides/11.06-phase-2-specification.md)

### Architecture Decision Record (ADR)

A short numbered document (`ADR-{NNN}`) that records one accepted technical decision — what was decided, why, and what alternatives were rejected. An ADR moves through statuses (Proposed → Accepted); see the [ADR-001 and ADR-002 convention](#adr-001-and-adr-002-convention) for the two decisions every project records first.

### Pending Decision Record (PDR)

An open decision that has not been made yet, numbered `PDR-{NNN}`. Once resolved, it is promoted to an [ADR](#architecture-decision-record-adr); blocker PDRs must be resolved before the [breakdown](#breakdown) starts.

### Breakdown

The Phase 5 step — and the resulting documents — that decomposes the [spec](#specification-spec) into [modules](#module), [sprints](#sprint), and [tickets](#ticket) the team (and the AI) can implement one at a time. More: [11.09 — Phase 5: breakdown](guides/11.09-phase-5-breakdown.md)

### Module

A bounded feature area — for example checkout, authentication, or home screen — with its own breakdown doc and [tickets](#ticket).

---

## Lifecycle & process

### The spine

The five non-negotiable AI-DLC commitments that every team keeps, no matter how much else they adapt. More: [The AI-DLC spine](ai-dlc-spine.md)

### Phases 0 to 6

The reference lifecycle stages: Phase 0 (project context) → 1 ([concept note](#concept-note)) → 2 ([specification](#specification-spec)) → 3 (business + tech context and [ADRs](#architecture-decision-record-adr)) → 4 (context directories) → 5 ([breakdown](#breakdown)) → 6 (ongoing development). Each phase produces documents the next phase builds on. More: [The six-phase lifecycle](05-six-phase-lifecycle.md)

### Day 0

The very first day of a new project, before any code exists — when you [bootstrap](#bootstrap) the [context repo](#context-repo) and fill in the Phase 0 basics so AI sessions have something to load from the start.

### Bootstrap

Setting up a new project's [context repo](#context-repo) from the bundled template ([AI-Driven-Project-Template/README.md](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/README.md)) — copying the folder structure, replacing placeholders, and populating the first files. More: [Bootstrap overview](03-bootstrap-overview.md) and [11.01 — Create a context repo](guides/11.01-create-context-repo.md)

### Exit gate

A checklist a phase must pass before the next phase may start — for example, Phase 3's exit gate requires ADR-001 and ADR-002 to be Accepted. Gates stop later work from being built on missing decisions. More: [The six-phase lifecycle](05-six-phase-lifecycle.md)

### Sprint

A short, fixed block of work — often one or two weeks — with an agreed set of [tickets](#ticket) to finish. The term comes from agile project management; in AI-DLC, sprint plans live in the [breakdown](#breakdown) folder.

### Ticket

One small, implementable unit of work with its own [ID](#ticket-ids) (for example `HOME-003`), traced back to a requirement and carrying its own [acceptance criteria](#acceptance-criteria). Tickets are what a developer picks up for an implementation [session](#ai-session).

### Acceptance criteria

The "done when…" conditions attached to a requirement or [ticket](#ticket) — the concrete checks that tell you the work is complete. Before starting a task, you should be able to state them in one sentence.

### Impact analysis

A [blast-radius](#blast-radius) assessment done **before** changing a database schema, API contract, or shared interface: list everything the change touches, plan the rollout, then edit. An experienced developer usually leads it, but anyone can (and should) ask for one. More: [Impact analysis before change](11-impact-analysis-before-change.md)

### Blast radius

The full set of systems, files, and consumers a change can affect — including the ones nobody named in the [prompt](#prompt). Mapping it is the heart of an [impact analysis](#impact-analysis).

### Doc sync

The rule that documentation updates ship in the **same** [pull request (PR)](#pull-request-pr) as the code change that made them necessary — index, API registry, and [ADRs](#architecture-decision-record-adr) included. This is the main defense against [drift](#drift). More: [Quality and maintenance](07-quality-and-maintenance.md)

### Prerequisite levels (L1 to L4)

Four layered readiness checklists, checked before different kinds of work: **L1 — AI-DLC literacy** (everyone: you understand the model and know your role path), **L2 — Project readiness** (the [context repo](#context-repo) is [bootstrapped](#bootstrap) and populated, a Doc [DRI](#directly-responsible-individual-dri) is assigned, and the context-load test passes), **L3 — Task readiness** (before an implementation [session](#ai-session): fresh chat, [ticket](#ticket) exists, [acceptance criteria](#acceptance-criteria) understood, [Tier-1 hot files](#tier-1-hot-files) loaded), and **L4 — Change-type readiness** (before schema, API, architecture, or cross-cutting changes: [impact analysis](#impact-analysis) done and explicit human approval given). More: [Prerequisites](11-prerequisites.md)

### Directly responsible individual (DRI)

The one named person who owns an artifact or activity — for example, the "Doc DRI" owns the accuracy of `PROJECT-INDEX.md`. If everyone owns something, nobody does; the DRI makes ownership explicit.

### Greenfield

A brand-new project starting from nothing — no existing code, no existing docs. The full lifecycle applies from [Day 0](#day-0).

### Brownfield

An existing codebase adopting AI-DLC. The early phases focus on capturing the current state (code analysis, known debt, integrations) rather than inventing from scratch.

### Proof of concept (PoC)

A small, often throwaway build made to test whether an idea works at all. PoCs run a lightweight version of the lifecycle — abbreviated [spec](#specification-spec), minimal [breakdown](#breakdown).

---

## Git & tooling

### Repository (repo)

A project folder whose entire change history is tracked by Git, the industry-standard version control tool. A repo can live on your computer and on a shared server (for example GitHub) at the same time. More: [Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md)

### Clone

To download a complete copy of a [repository](#repository-repo) — files plus history — from a shared server to your own computer, so you can work on it locally.

### Branch

A parallel line of work inside a [repository](#repository-repo). You make changes on a branch so the main version stays untouched until your work is reviewed and [merged](#merge).

### Commit

A saved snapshot of your changes with a short message describing them. The chain of commits is the repo's permanent history — an audit trail of who changed what, when, and why.

### Push

To upload your local [commits](#commit) to the shared server so teammates — and [CI](#continuous-integration-ci) — can see them.

### Pull request (PR)

A request to [merge](#merge) the changes on your [branch](#branch) into the main branch, giving teammates a place to review the changes first. In AI-DLC, the PR is also where [doc sync](#doc-sync) happens: docs and code land together. More: [11.13 — PRs, docs, and APIs](guides/11.13-pr-docs-and-apis.md)

### Merge

To combine one [branch's](#branch) changes into another — usually into the main branch after a [pull request](#pull-request-pr) is approved.

### Continuous integration (CI)

An automated system that runs the project's tests and checks every time someone [pushes](#push) or opens a [PR](#pull-request-pr), catching breakage before it reaches the main branch.

### Playwright

A free tool that tests a website by driving a real browser the way a user would — clicking buttons, typing into forms, and checking what appears. AI-DLC projects use it for end-to-end tests written from the [QA tickets](#qa-ticket-ids). More: [11.15 — Playwright testing](guides/11.15-playwright-testing.md)

### Verify script

`scripts/verify-project-docs.sh` (in your context repo, created from the template) — a script that sweeps the docs for leftover placeholders, broken cross-links, and inconsistencies. Run it before large doc [merges](#merge). More: [Quality and maintenance](07-quality-and-maintenance.md)

---

## IDs & naming schemes

### FR IDs

Functional requirement (FR) IDs, written `FR-{MODULE}-{NNN}` (for example `FR-CHECKOUT-004`). Each names one requirement in the [spec](#specification-spec) and is **stable** — never renamed once published — so [tickets](#ticket) and tests can trace back to it forever.

### Ticket IDs

Implementation [ticket](#ticket) IDs, written `{MODULE}-{NNN}` (for example `HOME-003`). Defined in the [module](#module) [breakdown](#breakdown), each traces to one or more [FR IDs](#fr-ids).

### QA ticket IDs

Quality assurance (QA) test IDs, written `{MODULE}-QA-{NNN}` (for example `HOME-QA-001`). Each names one user-perspective acceptance test, mapping requirements to the checks that prove them.

### API registry IDs

Stable API endpoint names, written `api:{domain}:{slug}` (for example `api:auth:otp-send`), listed in [BACKEND-INDEX](#backend-index). Docs reference these IDs instead of raw URLs, and an ID is never renamed once module docs use it. More: [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md)

### API registry status values

The readiness vocabulary used in [BACKEND-INDEX](#backend-index) for each endpoint: **verified** (tested in the target environment — safe to build against), **pending** (the contract is agreed but not yet verified in the environment), **not_deployed** (documented for the future — do not build against it yet), and **deprecated** (replaced — the entry links to its successor ID). More: [11.12 — Document an API endpoint](guides/11.12-document-api-endpoint.md)

### ADR-001 and ADR-002 convention

By convention, the first two [Architecture Decision Records](#architecture-decision-record-adr) every project writes: **ADR-001** records the platform and stack choice, and **ADR-002** records the architecture pattern (for example MVVM, layered, or microservices). Both must reach Accepted status before the [breakdown](#breakdown) begins — it is Phase 3's [exit gate](#exit-gate). More: [11.07 — Phase 3: business and tech context](guides/11.07-phase-3-business-tech-context.md)

---

[← The AI-DLC spine](ai-dlc-spine.md) | [Core concepts →](02-core-concepts.md) | [Playbook home](README.md)
