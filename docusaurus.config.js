const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "AstraX Documentation",
  tagline: "Docs for the AstraX web extension",
  url: "https://astrax-api-docs.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "bajetech", // Usually your GitHub org/user name.
  projectName: "astrax-docs", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: "AstraX Documentation",
      logo: {
        alt: "AstraX Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/bajetech/astrax-docs",
          label: "GitHub",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Have a feature request or bug report?",
          items: [
            {
              label: "Let us know!",
              to: "https://zpezxd0mv2j.typeform.com/to/xxikD0hy",
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/bajetech/astrax-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
