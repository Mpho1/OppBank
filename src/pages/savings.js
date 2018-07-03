import React from 'react'
import graphql from 'graphql'

import SavingsAccount from '../components/SavingsAccount'
import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const Savings = ({data}) => (
  <div>
    <PageHeader
      title="SAVINGS ACCOUNT"
      subtitle="Let that brush dance around there and play. God gave you this gift of imagination. Use it, Every single thing in the world has its own personality">
    </PageHeader>
    <ContentsSection>
      <ItemSwiper>
        {data.allContentfulProduct.edges.map(({node}) => {
          return (
            <div style={style}>
              <SavingsAccount
                image={node.image.file.url}
                header={node.title}
                type={node.type}
                text={node.description.description}
              />
            </div>
          )
        })}
      </ItemSwiper>
    </ContentsSection>
  </div>
)

const style = {
  width: '265px',
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
