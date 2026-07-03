import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI-DLC Playbook',
  tagline: 'Onboarding and operating guide for AI-driven development projects',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mirrayan.github.io',
  baseUrl: '/AI-DLC-playbook/',
  organizationName: 'MirRayan',
  projectName: 'AI-DLC-playbook',

  onBrokenLinks: 'warn',
  markdown: {
    format: 'detect',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '..',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          include: [
            '*.md',
            'guides/*.md',
            'templates/*.md',
            'examples/**/*.md',
          ],
          exclude: [
            'site/**',
            'node_modules/**',
            'meta/**',
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI-DLC Playbook',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'playbook',
          position: 'left',
          label: 'Playbook',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `AI-DLC Playbook · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
