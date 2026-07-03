import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  playbook: [
    {type: 'doc', id: 'README', label: 'Home'},
    {
      type: 'category',
      label: 'Learn the Basics (New Here?)',
      items: [
        {type: 'doc', id: 'what-is-ai-dlc', label: 'What is AI-DLC?'},
        {type: 'doc', id: 'ai-assistant-basics', label: 'AI Assistant Basics'},
        {type: 'doc', id: 'repo-basics', label: 'Repos & Git Basics'},
        {type: 'doc', id: 'hands-on-walkthrough', label: 'Hands-On Walkthrough'},
      ],
    },
    {type: 'doc', id: 'start-here', label: 'Start Here'},
    {type: 'doc', id: 'core-concepts', label: 'Core Concepts'},
    {type: 'doc', id: 'ai-dlc-spine', label: 'The AI-DLC Spine'},
    {type: 'doc', id: 'bootstrap-overview', label: 'Bootstrap Overview'},
    {
      type: 'category',
      label: 'Roles',
      items: [
        {type: 'doc', id: 'role-developer', label: 'Developer'},
        {type: 'doc', id: 'role-pm', label: 'Project Manager'},
        {type: 'doc', id: 'role-architect', label: 'Business Architect'},
      ],
    },
    {type: 'doc', id: 'six-phase-lifecycle', label: 'Six-Phase Lifecycle'},
    {type: 'doc', id: 'daily-workflows', label: 'Daily Workflows'},
    {type: 'doc', id: 'quality-and-maintenance', label: 'Quality & Maintenance'},
    {type: 'doc', id: 'artifact-catalog', label: 'Artifact Catalog'},
    {type: 'doc', id: 'faq', label: 'FAQ'},
    {type: 'doc', id: 'glossary', label: 'Glossary'},
    {
      type: 'category',
      label: 'Operating Practices',
      items: [
        {type: 'doc', id: 'prerequisites', label: 'Prerequisites'},
        {type: 'doc', id: 'best-practices', label: 'Best Practices'},
        {type: 'doc', id: 'dos-and-donts', label: "Dos and Don'ts"},
        {type: 'doc', id: 'review-process', label: 'Review Process'},
        {type: 'doc', id: 'impact-analysis-before-change', label: 'Impact Analysis'},
      ],
    },
    {
      type: 'category',
      label: 'Step-by-Step Guides',
      link: {type: 'doc', id: 'guides/README'},
      items: [
        {type: 'doc', id: 'guides/11.01-create-context-repo', label: '11.01 — Create Context Repo'},
        {type: 'doc', id: 'guides/11.02-join-existing-project', label: '11.02 — Join Existing Project'},
        {type: 'doc', id: 'guides/11.03-run-ai-session', label: '11.03 — Run AI Session'},
        {type: 'doc', id: 'guides/11.04-phase-0-project-context', label: '11.04 — Phase 0: Project Context'},
        {type: 'doc', id: 'guides/11.05-phase-1-concept-note', label: '11.05 — Phase 1: Concept Note'},
        {type: 'doc', id: 'guides/11.06-phase-2-specification', label: '11.06 — Phase 2: Specification'},
        {type: 'doc', id: 'guides/11.07-phase-3-business-tech-context', label: '11.07 — Phase 3: Business + Tech Context'},
        {type: 'doc', id: 'guides/11.08-phase-4-context-directories', label: '11.08 — Phase 4: Context Directories'},
        {type: 'doc', id: 'guides/11.09-phase-5-breakdown', label: '11.09 — Phase 5: Breakdown'},
        {type: 'doc', id: 'guides/11.10-phase-6-development', label: '11.10 — Phase 6: Development'},
        {type: 'doc', id: 'guides/11.11-add-feature-or-module', label: '11.11 — Add Feature or Module'},
        {type: 'doc', id: 'guides/11.12-document-api-endpoint', label: '11.12 — Document API Endpoint'},
        {type: 'doc', id: 'guides/11.13-pr-docs-and-apis', label: '11.13 — PR Docs and APIs'},
        {type: 'doc', id: 'guides/11.14-week-1-schedules', label: '11.14 — Week 1 Schedules'},
        {type: 'doc', id: 'guides/11.15-playwright-testing', label: '11.15 — Playwright Testing'},
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      link: {type: 'doc', id: 'templates/README'},
      items: [
        {type: 'doc', id: 'templates/PROJECT-INDEX-template', label: 'Project Index'},
        {type: 'doc', id: 'templates/project-overview-template', label: 'Project Overview'},
        {type: 'doc', id: 'templates/PROJECT-CONTEXT-template', label: 'Project Context'},
        {type: 'doc', id: 'templates/CONCEPT-NOTE-template', label: 'Concept Note'},
        {type: 'doc', id: 'templates/SPECIFICATION-template', label: 'Specification'},
        {type: 'doc', id: 'templates/BUSINESS-TECH-CONTEXT-template', label: 'Business + Tech Context'},
        {type: 'doc', id: 'templates/AI-RULES-impact-analysis-snippet', label: 'AI Rules: Impact Analysis'},
        {type: 'doc', id: 'templates/TEST-CONTEXT-template', label: 'Test Context'},
      ],
    },
  ],
};

export default sidebars;
