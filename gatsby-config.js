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
    }
  ]
}
