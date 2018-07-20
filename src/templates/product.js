import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import PageHeader from '../components/PageHeader'

const News = ({data}) => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <div>
      <SavingsType/>
    </div>
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
