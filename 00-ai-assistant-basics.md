---
id: ai-assistant-basics
title: AI Assistant Basics
---

# AI Assistant Basics

How to work with an artificial intelligence (AI) assistant — starting from zero. This page assumes you have never used one seriously. It applies to any tool: Claude, ChatGPT, Cursor, GitHub Copilot, or whatever your team uses. Everything else in this playbook builds on the habits taught here.

New to AI-DLC itself? Read [What is AI-DLC?](00-what-is-ai-dlc.md) first.

---

## 1. What a session (chat) is

A **session** is one conversation with an AI assistant — the chat window you type into. You send a message, the assistant replies, and the back-and-forth continues until you close it.

Here is the single most important fact on this page:

> **The assistant remembers nothing from previous chats. Every new chat starts as a blank slate.**

Yesterday you may have spent an hour explaining your project. Open a new chat today and the assistant has no idea the project exists, what you decided, or who you are. It is not being difficult — that is simply how these tools work.

This is why AI-DLC is built around **loading context at the start of every session** (explained below). You never assume the assistant knows anything; you give it what it needs, every time.

---

## 2. What a prompt is — and how to write a clear one

A **prompt** is any message you send to the assistant. The quality of the answer depends heavily on the quality of the prompt. A clear prompt does three things:

1. **States the goal** — what you want done.
2. **Gives context** — the background the assistant needs.
3. **Says what output you want** — format, length, structure.

Compare these examples (all about project documents, not code):

| Weak prompt | Clear prompt |
|-------------|--------------|
| "Write a summary." | "Summarize the concept note I pasted above in five bullet points a business stakeholder can read in one minute. Plain language, no jargon." |
| "Is this spec okay?" | "Review the specification below for a food-delivery app. List anything ambiguous or missing as a numbered list, and suggest one clarifying question for each item." |
| "Make requirements for login." | "Using the project overview I loaded, draft three functional requirements for the login feature. One sentence each, written so a tester could verify them." |

The weak prompts force the assistant to guess. The clear ones leave nothing to guess: goal, context, output.

**Tip:** if you would not hand the request to a new colleague without more explanation, the prompt needs more explanation too.

---

## 3. The context window — why long chats go bad

Within one chat, the assistant does have a working memory. It is called the **context window**, and it is limited. Think of it as a desk of fixed size: everything you paste, every file it reads, and every reply it writes takes up desk space.

As a chat grows long, two things happen:

- **Old material falls off the desk.** The assistant starts forgetting or blurring things said early in the conversation.
- **The desk gets cluttered.** Details from an earlier task bleed into the current one, and answers get vaguer and less accurate.

This degradation is gradual and easy to miss — the assistant keeps answering confidently even when its grip on your project has slipped.

That is why AI-DLC has a hard rule: **one task per chat — start a new chat for each new task.** A fresh chat with the right files loaded beats a long chat full of leftovers, every time. The full decision table for when to start fresh is in [11.03 — Run an AI session](guides/11.03-run-ai-session.md).

---

## 4. What "loading files" actually means

Throughout this playbook you will see instructions like "Load `PROJECT-INDEX.md`" (a file in your [context repo](glossary.md), created from the template). **Loading** just means getting a file's contents into the current chat so the assistant can use them. Mechanically, it works one of two ways, depending on your tool:

**(a) Agentic tools** (e.g. Claude Code, Cursor, GitHub Copilot in your editor) run *inside* your project folder and can read files themselves. You simply ask:

```markdown
Please load PROJECT-INDEX.md and .ai/context/project-overview.md
```

The tool opens those files from disk and reads them into the chat.

**(b) Plain chat tools** (e.g. Claude or ChatGPT in a browser) cannot see your folders. There, "loading" means **you** do the work: attach the file using the paperclip/upload button, or open the file, copy its contents, and paste them into the chat — ideally with a line like "Here is the contents of `PROJECT-INDEX.md`:" above the paste.

Both routes end in the same place: the file's text is inside the context window. **Every "Load X" instruction in this playbook means one of these two actions.** Pick whichever matches your tool and carry on.

---

## 5. The Tier-1 hot files

AI-DLC projects keep a small set of files that get loaded at the start of **every** session, no exceptions — the [Tier-1 hot files](glossary.md). There are four, and they all live in your context repo: `AGENTS.md` (rules any AI tool must follow), `PROJECT-INDEX.md` (the curated current state of the project — always start here), `.ai/context/project-overview.md` (a condensed summary of the whole project), and `.ai/AI-ASSISTANT-RULES.md` (project-specific ALWAYS/NEVER rules). A **hot file** is exactly that: small enough to load in seconds, loaded every single session, and kept up to date so the assistant always starts from the truth. Together these four give a blank-slate assistant everything it needs to be useful in about a minute. The full list and rationale are in [Core Concepts](02-core-concepts.md).

---

## 6. Verify before work

Loading files is not enough — you must check the assistant actually absorbed them. After loading, ask it to play the summary back, and compare against what you know is true.

Copy-paste this after your files are loaded:

```markdown
Before we start: based only on the files loaded above, summarize
- the project name and what it does
- the current phase and what we are working on now
- the three most important constraints or rules

If any of this is not in the loaded files, say "not in loaded files"
instead of guessing.
```

If the answer is wrong or vague, **stop**. Do not proceed and hope for the best. Either the files did not load properly (reload them), or the files themselves are out of date (fix them first). Working on top of a wrong understanding produces confidently wrong output.

---

## 7. Plan before act

For any substantive task — drafting a document, restructuring a spec, anything beyond a one-line fix — do **not** ask for the finished work in one step. Ask for the plan first:

```markdown
I want to draft the specification section for guest checkout.

Do not write it yet. First give me a short plan:
- what sections you will produce
- what information from the loaded files you will use
- anything you are missing and would have to assume

Wait for my approval before writing anything.
```

Then read the plan. Approve it, or correct it ("skip section 3, and don't assume payment is in scope"). Only then let the assistant produce the work. Reviewing a five-line plan takes one minute; untangling a wrong 500-line document takes an afternoon. This plan-then-approve rhythm is a core AI-DLC habit — you will see it again in [Daily and Weekly Workflows](06-daily-workflows.md).

---

## 8. Rules files — standing instructions

Many AI tools automatically read a **rules file** when they start working in a folder — for example `AGENTS.md` (a widely supported convention), `.cursor/rules` (Cursor), or `CLAUDE.md` (Claude Code). Whatever is written there acts as standing instructions the assistant obeys in every session, without you repeating them.

This is why the AI-DLC template ships these files pre-written: [AGENTS.md in the template](https://github.com/MirRayan/AI-DLC-playbook/blob/main/AI-Driven-Project-Template/AGENTS.md) tells any tool how to keep documents in sync and to plan before acting, and the template's `.ai/AI-ASSISTANT-RULES.md` holds your project's own ALWAYS/NEVER rules. If your tool is a plain chat with no folder access, the rules files still work — you just load them by hand as part of the Tier-1 files above.

---

## 9. Practical hygiene

Habits that prevent most AI-assistant problems:

- **One task per chat.** Finish the task, then start a new chat for the next one.
- **When confused, start over.** If the assistant references the wrong feature or contradicts itself, do not argue with it — open a fresh chat and reload.
- **Never trust unverified claims about your project.** "Your spec already covers this" means nothing until you check the spec yourself.
- **Ask for citations.** A powerful habit: "Which loaded file supports that answer? Quote the relevant line." If it cannot, treat the answer as a guess.
- **Load before you ask.** A question asked before loading context gets a generic internet answer, not an answer about *your* project.
- **Keep hot files current.** The assistant is only as accurate as the files you feed it.

---

## Where to next

You now know how sessions, prompts, context windows, and file loading work. Next, learn the small amount of repository and terminal knowledge the playbook assumes, then do the hands-on walkthrough:

→ [Repos, Git, and Terminals — a Primer for Everyone](00-repo-basics.md)
→ [Hands-On Walkthrough: Your First AI-DLC Project](00-hands-on-walkthrough.md)
→ [11.03 — Run an AI session](guides/11.03-run-ai-session.md) — the full session checklist you will use daily

---

[← What is AI-DLC?](00-what-is-ai-dlc.md) | [Repos, Git, and Terminals →](00-repo-basics.md) | [Playbook home](README.md)
