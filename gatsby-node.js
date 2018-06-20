/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

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
  })
}
