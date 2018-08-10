module.exports = {
  siteMetadata: {
    title: 'Opportunity Bank',
    description: 'Opportunity Bank',
    keywords: 'banking, opportunity, uganda'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          ...require('bourbon').includePaths,
          ...require('bourbon-neat').includePaths
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }, {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v0nl6t6cllhq`,
        accessToken: `77618f26719ba1e26aa76460aace21e21eddfb3a7c8124f0a9598119f91de705`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-123734491-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    'gatsby-transformer-remark'
  ]
}
