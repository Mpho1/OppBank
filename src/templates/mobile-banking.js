import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import ContactMe from '../components/ContactMe'
import PageHeader from '../components/PageHeader'

import styles from './savings.module.scss'

class MobileBanking extends React.Component {
  componentWillMount () {
    this.setState(() => {
      return {
        hideApplyForm: true
      }
    })
  }

  hideUnhideApplyForm (hide) {
    this.setState(() => {
      return {
        hideApplyForm: hide
      }
    })
  }

  render () {
    return (
      <div>
        <PageHeader title="Mobile Banking Products" subtitle="Have the power to access your money when, and where you need it with our mobile banking services."/>
        <div style={style}>
          <SavingsType
            image={this.props.data.contentfulMobileBankingProducts.image.file.url}
            productType={this.props.data.contentfulMobileBankingProducts.title}
            productTypeCategory={this.props.data.contentfulMobileBankingProducts.type}
            description={this.props.data.contentfulMobileBankingProducts.description.description}
            featuresItems={this.props.data.contentfulMobileBankingProducts.features.features}
            requirementItems={this.props.data.contentfulMobileBankingProducts.requirements.requirements}
            key={this.props.data.contentfulMobileBankingProducts.slug}
            hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
            hide={this.state.hideApplyForm}/>

          <div className={styles.career}>
            <ContactMe
              name="name"
              surname="surname"
              contactNumber="Contact Number"
              email="Email"
              message="message"
              hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
              hide={this.state.hideApplyForm}/>
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  display: `flex`
}

export default MobileBanking

export const singleMobileBankingProductsTypeQuery = graphql`
  query SingleMobileBankingProductsQuery($slug: String!){
    contentfulMobileBankingProducts(slug: {eq: $slug}) {
      title
      type
      image {
        id
        file {
          url
          fileName
          contentType
        }
      }
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
