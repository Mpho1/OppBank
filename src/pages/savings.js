import React from 'react'
import graphql from 'graphql'

import ProductLayout from '../components/ProductLayout'
import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const Savings = ({data}) => (
  <div>
    <PageHeader
      title="SAVINGS ACCOUNT"
      subtitle="Opportunity Bank holds the solution for you to empower your family, your community, your business and your future.">
    </PageHeader>
    <ContentsSection>
      <ItemSwiper>
        {data.allContentfulProduct.edges.map(({node}) => {
          return (
            <div style={style}
              key={node.title}>
              <ProductLayout
                image={node.image.file.url}
                header={node.title}
                type={node.type}
                text={node.description.description}
                link={`/savings/${node.slug}`}
              />
            </div>
          )
        })}
      </ItemSwiper>
    </ContentsSection>
  </div>
)

const style = {
  width: '256px',
  marginTop: '-3em'
}

export default Savings

export const savingsQuery = graphql`
  query savingsContentQuery {
    allContentfulProduct {
      edges {
        node {
          title
          type
          description {
            description
          }
          features {
            features
          }
          requirements {
            requirements
          }
          image {
            file {
              url
            }
          }
          slug
        }
      }
    }
  }
`
