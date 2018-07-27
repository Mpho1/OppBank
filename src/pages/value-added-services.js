import React from 'react'
import graphql from 'graphql'

import ProductLayout from '../components/ProductLayout'
import PageHeader from '../components/PageHeader'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

const ValueAddedServices = ({data}) => (
  <div>
    <PageHeader
      title="Value Added Service">
    </PageHeader>
    <ContentsSection>
      <ItemSwiper>
        {data.allContentfulValueAddedServices.edges.map(({node}) => {
          return (
            <div style={style}>
              <ProductLayout
                key={node.title}
                image={node.image.file.url}
                header={node.title}
                type={node.type}
                text={node.description.description}
                link={`/value-added-services/${node.slug}`}
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

export default ValueAddedServices

export const ValueAddedServicesQuery = graphql`
  query ValueAddedServicesContentQuery {
    allContentfulValueAddedServices {
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
