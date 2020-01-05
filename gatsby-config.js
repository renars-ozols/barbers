module.exports = {
  siteMetadata: {
    title: `Barbers`,
    description: `Barbers website`,
    author: `Renars`,
    menuLinks: [
      {
        name: 'Link1',
        link: '/#test1',
      },
      {
        name: 'Link2',
        link: '/#test2',
      },
      {
        name: 'Link3',
        link: '/#test3',
      },
      {
        name: 'Link4',
        link: '/#test1',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/main`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `barbers-website`,
        short_name: `barbers`,
        start_url: `/`,
        background_color: `#c69963`,
        theme_color: `#c69963`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
