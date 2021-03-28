module.exports = {
  siteMetadata: {
    title: `Jonge's`,
    description: `Jonge's ....`,
    author: `@奴止`,
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/4261e37eee66484cabb66cd55d874964?v=08ab08bcbfe145eb87ea348c7c621f37',
            cacheType: 'html'
          },
          {
            name: 'books',
            table: 'https://www.notion.so/a13c2864aa2c4431bca1ed37c21f1e35?v=9179cc81266242f8a2561439f45b8098',
            cacheType: 'static'
          }
        ]
      }
    },
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-notion`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
