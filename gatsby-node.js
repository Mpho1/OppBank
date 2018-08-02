/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['transform-regenerator'])
})

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const newsTemplate = path.resolve('src/templates/news.js')
    resolve(
      graphql(`
                {
                    allContentfulNews(limit: 100) {
                        edges {
                          node {
                            id
                            blockHeader
                            blockParagraph {
                              blockParagraph
                            }
                            title
                            articleBody {
                              articleBody
                            }
                            category {
                              name
                            }
                            createdAt (formatString: "DD MMMM YYYY")
                            author {
                              name
                            }
                            slug
                          }
                        }
                    }
                }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        if (result.data) {
          result.data.allContentfulNews.edges.forEach(({node}) => {
            createPage({
              path: `/news/${node.slug}`,
              component: newsTemplate,
              context: {
                slug: node.slug
              }
            })
          })
        }
      })
    )

    const savingsTemplate = path.resolve('src/templates/savings.js')
    resolve(
      graphql(`
              {
                  allContentfulProduct(limit: 100) {
                      edges {
                        node {
                          slug
                        }
                      }
                  }
              }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        if (result.data) {
          result.data.allContentfulProduct.edges.forEach(({node}) => {
            createPage({
              path: `/savings/${node.slug}`,
              component: savingsTemplate,
              context: {
                slug: node.slug
              }
            })
          })
        }
      })
    )

    const loanTemplate = path.resolve('src/templates/loans.js')
    resolve(
      graphql(`
              {
                allContentfulLoanProducts(limit: 100) {
                  edges {
                    node {
                      slug
                    }
                  }
                }
              }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        if (result.data) {
          result.data.allContentfulLoanProducts.edges.forEach(({node}) => {
            createPage({
              path: `/loans/${node.slug}`,
              component: loanTemplate,
              context: {
                slug: node.slug
              }
            })
          })
        }
      })
    )

    const mobileBankingTemplate = path.resolve('src/templates/mobile-banking.js')
    resolve(
      graphql(`
              {
                allContentfulMobileBankingProducts(limit: 100) {
                  edges {
                    node {
                      slug
                    }
                  }
                }
              }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        if (result.data) {
          result.data.allContentfulMobileBankingProducts.edges.forEach(({node}) => {
            createPage({
              path: `/mobile-banking/${node.slug}`,
              component: mobileBankingTemplate,
              context: {
                slug: node.slug
              }
            })
          })
        }
      })
    )

    const valueAddedServicesTemplate = path.resolve('src/templates/value-added-services.js')
    resolve(
      graphql(`
              {
                allContentfulValueAddedServices(limit: 100) {
                  edges {
                    node {
                      slug
                    }
                  }
                }
              }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        if (result.data) {
          result.data.allContentfulValueAddedServices.edges.forEach(({node}) => {
            createPage({
              path: `/value-added-services/${node.slug}`,
              component: valueAddedServicesTemplate,
              context: {
                slug: node.slug
              }
            })
          })
        }
      })
    )

    const careerTemplate = path.resolve('src/templates/career.js')
    resolve(
      graphql(`
              {
                  allContentfulCareer(limit: 100) {
                      edges {
                        node {
                          slug
                        }
                      }
                  }
              }
        `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        if (result.data) {
          result.data.allContentfulCareer.edges.forEach(({node}) => {
            createPage({
              path: `/careers/${node.slug}`,
              component: careerTemplate,
              context: {
                slug: node.slug
              }
            })
          })
        }
      })
    )
  })
}
