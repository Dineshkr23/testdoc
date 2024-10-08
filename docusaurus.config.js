// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs", // Common docs folder (if needed)
          routeBasePath: "/", // Set the base path for the docs section.
        },

        blog: false,
        // blog: {
        // showReadingTime: true,
        // feedOptions: {
        //   type: ["rss", "atom"],
        //   xslt: true,
        // },
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // Useful options to enforce blogging best practices
        // // onInlineTags: "warn",
        // onInlineAuthors: "warn",
        // onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "crm",
        path: "crm/docs",
        routeBasePath: "crm/docs",
        sidebarPath: require.resolve("./sidebars/crmSidebar.js"),
        editUrl:
          "https://github.com/your-org/support-documentation/edit/main/crm/docs/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "whatsapp",
        path: "whatsapp-business-api/docs",
        routeBasePath: "whatsapp-business-api/docs",
        sidebarPath: require.resolve(
          "./sidebars/whatsapp-business-apiSidebar.js"
        ),
        editUrl:
          "https://github.com/your-org/support-documentation/edit/main/whatsapp-business-api/docs/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "chatbot",
        path: "chat/docs",
        routeBasePath: "chat/docs",
        sidebarPath: require.resolve("./sidebars/chatSidebar.js"),
        editUrl:
          "https://github.com/your-org/support-documentation/edit/main/chat/docs/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // { label: "CRM", to: "/crm" }, // CRM Help Center
          // { label: "Chat", to: "/chatbot" }, // Chat Help Center
          // { label: "Whatsapp", to: "/whatsapp" }, // HRMS Help Center

          // {
          //   // type: "docSidebar",
          //   // sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          //   to: "/SUMMARY",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
