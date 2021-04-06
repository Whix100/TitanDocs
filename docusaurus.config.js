/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'TitanBot',
    tagline: 'Multipurpose Discord Bot',
    url: 'https://whix100.github.io',
    baseUrl: '/TitanDocs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/ReleaseLogo.png',
    organizationName: 'whix100',
    projectName: 'TitanDocs',
    themeConfig: {
        navbar: {
            title: 'TitanDocs',
            logo: {
                alt: 'TitanBot Logo',
                src: 'img/ReleaseLogo.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://whix100.github.io',
                    label: 'Main Site',
                    position: 'left',
                },
                {
                    href: 'https://whix100.github.io/r/titanbug',
                    label: 'Report a Bug',
                    position: 'right',
                },
                {
                    href: 'https://whix100.github.io/r/titan',
                    label: 'Invite Titan',
                    position: 'right',
                }
            ],
        },
        footer: {
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/',
                        },
                        {
                            label: 'FAQ',
                            to: 'docs/faq',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://whix100.github.io/r/ipcd',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/whix100',
                        },
                        {
                            label: 'Main Site',
                            href: 'https://whix100.github.io',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Updates',
                            to: 'https://twitter.com/search?q=(%23TitanBotUpdate%20OR%20%23TitanBotUpdates)%20(from%3AWhix100)&src=typed_query',
                        },
                        {
                            label: 'Bug Report',
                            href: 'https://whix100.github.io/r/titanbug',
                        }
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} Whix100. Built with Docusaurus.`,
        },
    },  
    presets: [
        [
          '@docusaurus/preset-classic',
          {
            docs: {
                sidebarPath: require.resolve('./sidebars.js'),
                // Please change this to your repo.
                editUrl:
                    'https://github.com/Whix100/TitanDocs/',
            },
            theme: {
              customCss: require.resolve('./src/css/custom.css'),
            },
          },
        ],
    ],
};
