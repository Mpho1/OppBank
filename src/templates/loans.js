import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import ContactMe from '../components/ContactMe'
import PageHeader from '../components/PageHeader'

import styles from './savings.module.scss'

class LoanProducts extends React.Component {
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
        <PageHeader title="Mobile Banking Products" subtitle="Read all about the latest Opportunity news"/>
        <div style={style}>
          <SavingsType
            image={this.props.data.contentfulLoanProducts.image.file.url}
            productType={this.props.data.contentfulLoanProducts.title}
            productTypeCategory={this.props.data.contentfulLoanProducts.type}
            description={this.props.data.contentfulLoanProducts.description.description}
            featuresItems={this.props.data.contentfulLoanProducts.features.features}
            requirementItems={this.props.data.contentfulLoanProducts.requirements.requirements}
            key={this.props.data.contentfulLoanProducts.slug}
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

export default LoanProducts

export const singleLoanProductsTypeQuery = graphql`
  query SingleLoanProductsQuery($slug: String!){
    contentfulLoanProducts(slug: {eq: $slug}) {
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
