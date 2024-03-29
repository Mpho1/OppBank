import React from 'react'
import graphql from 'graphql'

import ProductLayout from '../components/ProductLayout'
import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const Loans = ({data}) => (
  <div>
    <PageHeader
      title="Loans"
      subtitle="Personal, business and home financing with flexible terms, and attractive rates.">
    </PageHeader>
    <ContentsSection>
      <ItemSwiper>
        {data.allContentfulLoanProducts.edges.map(({node}) => {
          return (
            <div style={style}
              key={node.title}>
              <ProductLayout
                image={node.image.file.url}
                header={node.title}
                type={node.type}
                text={node.description.description}
                link={`/loans/${node.slug}`}
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

export default Loans

export const loansQuery = graphql`
  query loansContentQuery {
    allContentfulLoanProducts {
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
