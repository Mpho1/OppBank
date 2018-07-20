import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import PageHeader from '../components/PageHeader'

const News = ({data}) => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <SavingsType
      image={require('../img/savings.svg')}
      productType="Fixed Term"
      productTypeCategory="Deposit Account"
      description="Take a break now and let our tool, Take a break now and let our tool"
      featuresItems="Minimum amount is U.shs 100,000/=', 'Viable for 3, 6, 12 months, Marketing', 'Premature withdrawals will cause you to forfeit interest', 'Interest is paid at the end of each contract less withholding tax', 'Ability yo roll over savings after expiry pretiod', 'Interest 5% pa <10m; 9% pa 10m-50m UGX', 'Interest is negotiable for 100m and above for more than 12 (twelve) months"/>
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
