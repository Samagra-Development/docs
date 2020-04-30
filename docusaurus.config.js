/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://Samagra-Development.github.io/docs',
  baseUrl: '/docs/',
  favicon: 'img/favicon.png',
  organizationName: 'Samagra-Development', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-129291740-2',
    },
    gtag: {
      trackingID: 'UA-129291740-2',
    },
    navbar: {
      links: [
        {
          href: 'https://tech.samagragovernance.in/',
          label: 'Tech@Samagra',
          target: '_self',
          position: 'left',
        },
        {
          to: 'docs/ComponentsOverview',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://Samagra-Development.github.io/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://Samagra-Development.github.io/docs',
            },
            {
              label: 'Twitter',
              href: 'https://Samagra-Development.github.io/docs',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Samagra-Development/docs/edit/master',
        },
        blogs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Samagra-Development/docs/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
