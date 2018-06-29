import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'

import PageHeader from '../components/PageHeader'

const News = ({data}) => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <ThirdsColumns breakOrder="213">
      <CategoryBlock>
        <div>Side Block here</div>
      </CategoryBlock>

      <div>
        <h1>{data.contentfulProduct.title}</h1>
        <h1>{data.contentfulProduct.description.description}</h1>
        <h1>{data.contentfulProduct.features.features}</h1>
        Product Info Here!
      </div>

      <div>
        Other side block here!
      </div>
    </ThirdsColumns>
  </div>
)

export default News

export const pageQuery = graphql`
    query SingleProductQuery($slug: String!){
        contentfulProduct(slug: {eq: $slug}) {
            title
            description{
              description
            }
            features{
              features
            }
            requirements{
              requirements
            }
            slug
        }
    }
`
