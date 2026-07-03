---
id: repo-basics
title: Repos, Git, and Terminals — a Primer for Everyone
---

# Repos, Git, and Terminals — a Primer for Everyone

This page is for complete newcomers, including non-technical readers. If you have never used Git, never opened a terminal, or are not sure what a "repo" is, you are exactly who this page is for. If you already use Git daily, skim the [AI-DLC specifics](#context-repo-vs-code-repo-in-ai-dlc) and move on to the [Hands-On Walkthrough](00-hands-on-walkthrough.md).

One promise up front: **you do not need a terminal to work in AI-DLC.** There is a full point-and-click path, and it is covered below as a first-class option.

---

## What is a repository?

A **repository (repo)** is a folder whose full change history is tracked by a tool called **Git**. Every saved change records what changed, who changed it, and when. Nothing is ever silently lost — you can always look back at (or restore) any earlier version.

The repo is usually **hosted** on a service such as GitHub, GitLab, or Azure DevOps. The hosted copy is the one everyone shares: your team reads from it and writes to it, so there is exactly one source of truth instead of documents scattered across email attachments and chat threads.

Think of it as a shared folder with a perfect memory and a built-in review process.

### Context repo vs code repo in AI-DLC

The AI-Driven Development Lifecycle (AI-DLC) uses two kinds of repo, kept as **sibling folders** side by side:

| Repo | Contains | Who works here |
|------|----------|----------------|
| [Context repo](glossary.md) | Documents: specs, plans, decisions, AI rules | Everyone — PMs, architects, developers |
| [Code repo](glossary.md) | Application source code, tests | Developers (and their AI assistants) |

```
parent-folder/
├── my-project-architecture/   ← context repo (documents only)
├── my-project-api/            ← code repo
└── my-project-web/            ← code repo
```

If your role is documents — requirements, decisions, plans — you may only ever touch the context repo. That is normal and fully supported.

---

## The six Git words you need

You will hear these constantly. One plain sentence each:

| Word | What it means |
|------|---------------|
| **Clone** | Download your own working copy of a hosted repo onto your computer. |
| **Branch** | A parallel workspace inside the repo where you make changes without disturbing the main version. |
| **Commit** | Save a named snapshot of your changes into the repo's history, with a short message saying what you did. |
| **Push** | Upload your commits from your computer to the hosted repo so others can see them. |
| **Pull request (PR)** | A request that says "please review my branch and, if it looks good, accept it into the main version." |
| **Merge** | Accept a reviewed PR, folding its changes into the main version. |

The everyday rhythm is: **branch → change → commit → push → PR → merge.** Everything else is detail.

---

## The no-terminal path: do everything in the browser

You can do all of your AI-DLC document work through the website of GitHub, GitLab, or Azure DevOps — no installs, no commands. This is a fully legitimate way to work, not a workaround.

**Read files.** Open the repo's page in your browser and click through folders and files like any website. Markdown files (`.md`) render as formatted pages.

**Edit a file.** Open the file and click the **pencil (edit) icon**. The file opens in a browser text editor. Make your changes.

**Commit from the browser.** When you save, the site asks for a short description of your change (the commit message) and offers to put the change on a **new branch** — say yes. That one save is a branch plus a commit, done for you.

**Open a PR from the browser.** The site then offers to open a pull request in one or two clicks. Add a sentence about what you changed and why, pick a reviewer, and submit. Reviewers comment right on the page; once approved, one click merges it.

That is the entire Git workflow without ever leaving your browser. A non-technical PM or business architect can run their whole AI-DLC contribution — editing specs, updating indexes, recording decisions — this way.

**Friendlier middle grounds**, if you want more than the browser but less than a terminal:

- **GitHub Desktop** — a free point-and-click app for clone, branch, commit, and push.
- **VS Code** — a free editor with Git buttons built in (Source Control panel), so you commit and push with clicks, not commands.

---

## The terminal path in six commands

A **terminal** is a window where you type text commands instead of clicking buttons. On a Mac, open the **Terminal** app (press Cmd+Space, type "Terminal", press Enter). On Windows, open **PowerShell** or **Windows Terminal** from the Start menu.

If you choose this path, six commands cover the daily loop:

```bash
git clone URL                      # 1. Download the repo (URL from the repo's web page)
cd folder                          # 2. Move into the downloaded folder
git checkout -b my-change          # 3. Create and switch to a new branch
git add -A                         # 4. Stage all your edits for saving
git commit -m "message"            # 5. Save a snapshot with a short description
git push                           # 6. Upload your branch to the hosted repo
```

After the push, Git prints a link — open it to create the pull request in your browser. (The very first push of a new branch may ask you to rerun with an extra flag; Git prints the exact command to copy.)

You do not need to memorize these now. Come back when you need them, or let your AI assistant run them — see below.

---

## What is CI?

**Continuous integration (CI)** is the set of automated checks that run on your PR the moment you open it — things like "do the tests still pass?", "are there broken links in the docs?", or "does the code build?". You will see green check marks (all good) or red crosses (something failed) on the PR page. CI is a safety net, not a judgment: a red cross just means "fix this before merging", and the details link tells you what went wrong. You never run CI yourself — it runs automatically.

---

## Where AI fits

Your AI assistant (e.g. Claude, ChatGPT, Cursor, GitHub Copilot) takes most of the Git friction away:

- **Any AI tool — including plain chat** can write your commit messages and PR descriptions. Paste in a summary of what you changed (or the changed text itself) and ask for a commit message and a PR description. Copy the result into the browser or terminal.
- **[Agentic](00-ai-assistant-basics.md) tools** — the kind that can read files in a folder and run commands — can run the Git commands themselves: create the branch, commit with a sensible message, push, and even open the PR. You review what it did and approve.

**If you are a beginner using an agentic tool, letting the AI drive Git is the recommended path.** Ask it to "create a branch, commit my changes with a good message, and push" — then read what it proposes before you approve each step. You stay in control; the AI does the typing.

---

## Which path should I use?

| You are… | Use |
|----------|-----|
| Non-technical, making occasional document edits | The web UI (browser editing + PRs) |
| Anyone using an agentic AI tool | Let the AI drive Git — you review and approve |
| A developer, or comfortable with tools | Terminal, or Git built into your IDE / GitHub Desktop |

You can mix paths freely — many people edit in the browser one day and let their AI assistant handle Git the next.

---

## What's next

→ [Hands-On Walkthrough: Your First AI-DLC Project](00-hands-on-walkthrough.md) — put all of this into practice
→ [11.01 — Create a new context repo](guides/11.01-create-context-repo.md) — when you are ready to start a real project

---

[← AI Assistant Basics](00-ai-assistant-basics.md) | [Hands-On Walkthrough →](00-hands-on-walkthrough.md) | [Playbook home](README.md)
