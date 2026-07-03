---
id: what-is-ai-dlc
title: What is AI-DLC?
---

# What is AI-DLC?

This page explains AI-DLC from zero. You need no prior experience with AI coding tools, and no technical background. If you can read a document and hold a conversation, you can follow this.

---

## The problem: AI without project knowledge

AI assistants (e.g. Claude, ChatGPT, Cursor, GitHub Copilot) are remarkably good at writing code and documents. But they only know what you tell them. If you ask for a feature without giving the project's background, the AI does not say "I don't know your project." It **guesses** — and its guesses sound confident.

Guessing leads to a failure mode this playbook calls **drift**: the code and documents slowly stop matching what the team actually agreed.

Here is drift in four lines:

> Monday, your teammate and an AI agree the app will store dates in UTC (Coordinated Universal Time) and writes it in a chat. Wednesday, you open a *fresh* chat and ask the AI to build the booking screen. The new chat knows nothing about Monday, so the AI stores dates in local time. Both changes ship. A month later, bookings made from another time zone appear on the wrong day — and nobody can point to a document that says which behavior was ever the "right" one.

No one was careless. The knowledge simply lived in one person's chat history, where the next session could not see it.

---

## What AI-DLC is

**AI-DLC** stands for **AI-Driven Development Lifecycle**. It is a way of working with two core ideas:

1. **The team writes project knowledge down** — goals, requirements, decisions, constraints — in one shared place called the [context repo](glossary.md): a versioned folder of documents that is the project's single source of truth. Every AI work session starts by loading these documents, so the AI begins fully informed instead of guessing.
2. **AI does the typing; humans do the thinking.** In this playbook's model, AI writes 95–100% of the code. Humans direct the work, make the decisions, and verify the results. Your value shifts from typing code to asking the right questions, catching wrong answers, and deciding what "done" means.

That second point is why AI-DLC matters to non-programmers too. Project managers and business people write and approve most of the early documents — and those documents literally become the AI's instructions.

For the full vocabulary, see [Core Concepts](02-core-concepts.md).

---

## Why documents come first: AI has no memory

This is the single most important idea in AI-DLC. Internalize it and everything else follows.

**Every new AI chat starts completely blank.** The assistant that helped you yesterday remembers nothing today. It does not remember your project name, your requirements, the bug you fixed, or the decision your team debated for an hour. Each session is a brilliant new contractor showing up on day one — every single day.

You cannot fix that by talking more. You fix it by **writing things down where every session can reload them**:

- The context repo is the team's **shared memory**.
- At the start of each session, you (or your tool) load a small set of key files — the [Tier-1 hot files](glossary.md) — so the "new contractor" reads the briefing pack before touching anything.
- When a decision changes, the documents change **with it**, so the next session loads the truth, not last month's truth.

This works with any AI tool. "Agentic" tools that can read files from a folder (e.g. Cursor, Claude Code, GitHub Copilot) load the documents directly. Plain chat tools (e.g. a ChatGPT or Claude browser window) work too — you paste the file contents into the chat instead. The documents are the point; the tool is interchangeable.

If a document is wrong or missing, every future AI session inherits that gap. That is why AI-DLC treats documentation not as an afterthought, but as the first deliverable.

### What a working session looks like

Once the documents exist, a typical AI-DLC session has a simple shape:

1. **Load** — start a fresh chat and give the AI the hot files (the tool reads them from the folder, or you paste them in).
2. **Verify** — ask the AI to summarize the project and today's task; correct any misunderstanding *before* work starts.
3. **Work** — the AI drafts the code or document; you review, question, and steer.
4. **Sync** — anything you decided or changed goes back into the documents, so the next session starts from the new truth.

The [Hands-On Walkthrough](00-hands-on-walkthrough.md) lets you experience this loop yourself on a toy project.

---

## The six phases at a glance

The reference lifecycle moves a project from "idea" to "shipping software" through numbered phases. Each phase produces a document that later phases — and every AI session — build on. First-time note: paths like `PROJECT-CONTEXT.md` below live in your context repo, created from the template — they are files you will create, not pages on this site.

| Phase | Plain-English purpose | Document produced |
|-------|----------------------|-------------------|
| **0 — Project Context** | Write down what the project *is*: the tech stack, systems it touches, and constraints. | `PROJECT-CONTEXT.md` + the hot files |
| **1 — Concept Note** | Agree on the vision: what we are building, for whom, and what is explicitly out of scope. | `CONCEPT-NOTE.md` |
| **2 — Specification** | Turn the vision into numbered requirements, each with a permanent ID and a testable "done" condition. | `SPECIFICATION.md` |
| **3 — Business + Tech Context** | Record how the business works and the big technical decisions, each as an Architecture Decision Record (ADR). | `BUSINESS-TECH-CONTEXT.md` + ADRs |
| **4 — Context Directories** *(optional)* | For large systems, slice the context into per-domain files the AI can load selectively. | Domain context files |
| **5 — Breakdown** | Split the specification into modules, sprints, and tickets small enough to implement. | Module docs + sprint plan |
| **6 — Development** | Build the software in context-loaded AI sessions, keeping documents in sync as code ships. | Working software + updated docs |

Depth, entry/exit gates, and variants for existing codebases: [Six-Phase Lifecycle](05-six-phase-lifecycle.md).

---

## The spine: what is non-negotiable

Teams adapt most of this playbook to their own needs. Five commitments — [the spine](ai-dlc-spine.md) — are not adaptable. A project is "doing AI-DLC" when it keeps all five:

- **One context repo.** A single versioned source of truth, separate from the code, that serves humans and AI alike.
- **Stable requirement IDs.** Every requirement gets an ID that is never renamed or reused, so requirements, tickets, and tests stay traceable.
- **Context-loaded AI sessions.** Every session loads the hot files first, and a human confirms the AI's understanding before any code is written.
- **Impact analysis before risky changes.** Changes to schemas, APIs (Application Programming Interfaces), or shared interfaces get a blast-radius review and an approved plan before editing.
- **Docs sync with code.** When a decision or contract changes, the documents update in the same pull request (PR) as the code.

Everything else — phase names, folder layout, templates, tools, cadence — you may adapt. Details: [The AI-DLC Spine](ai-dlc-spine.md).

---

## Who does what

Roles are hats, not headcount — on a small team one person wears several.

| Role | In one line | Onboarding page |
|------|-------------|-----------------|
| **Developer** | Runs context-loaded AI sessions to implement tickets, verifies the AI's output, and ships doc updates with the code. | [Developer role guide](04-role-developer.md) |
| **Project Manager (PM)** | Owns the concept and specification documents, keeps requirement IDs and the project index honest, and tracks progress. | [PM role guide](04-role-pm.md) |
| **Business Architect** | Owns the project context, technical decisions (ADRs), and impact analysis for risky changes. | [Business architect role guide](04-role-architect.md) |

---

## Where next

Follow the Learn track in order — each page builds on the last:

1. **[AI Assistant Basics](00-ai-assistant-basics.md)** — how AI assistants actually work: sessions, context, prompts, and their limits.
2. **[Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md)** — the minimum technical footing, written for non-developers too.
3. **[Hands-On Walkthrough: Your First AI-DLC Project](00-hands-on-walkthrough.md)** — do a tiny end-to-end project yourself.
4. Then continue to [Start Here](01-start-here.md) to pick your role path.

---

[← Playbook home](README.md) | [AI Assistant Basics →](00-ai-assistant-basics.md)
