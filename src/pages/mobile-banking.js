import React from 'react'
import graphql from 'graphql'

import ProductLayout from '../components/ProductLayout'
import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const MobileBanking = ({data}) => (
  <div>
    <PageHeader
      title="Mobile Banking"
      subtitle="Let that brush dance around there and play. God gave you this gift of imagination. Use it, Every single thing in the world has its own personality">
    </PageHeader>
    <ContentsSection>
      <ItemSwiper>
        {data.allContentfulMobileBankingProducts.edges.map(({node}) => {
          return (
            <div style={style}>
              <ProductLayout
                key={node.title}
                image={node.image.file.url}
                header={node.title}
                type={node.type}
                text={node.description.description}
                link={`/mobile-banking/${node.slug}`}
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

export default MobileBanking

export const mobileBankingQuery = graphql`
  query mobileBankingContentQuery {
    allContentfulMobileBankingProducts {
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