import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import ContactMe from '../components/ContactMe'
import PageHeader from '../components/PageHeader'

import styles from './savings.module.scss'

class News extends React.Component {
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
        <PageHeader title="Savings Product" subtitle="Opportunity Bank holds the solution for you to empower your family, your community, your business and your future."/>
        <div style={style}>
          <SavingsType
            image={this.props.data.contentfulProduct.image.file.url}
            productType={this.props.data.contentfulProduct.title}
            productTypeCategory={this.props.data.contentfulProduct.type}
            description={this.props.data.contentfulProduct.description.description}
            featuresItems={this.props.data.contentfulProduct.features.features}
            requirementItems={this.props.data.contentfulProduct.requirements.requirements}
            key={this.props.data.contentfulProduct.slug}
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

export default News

export const singleProductTypeQuery = graphql`
  query SingleProductQuery($slug: String!){
    contentfulProduct(slug: {eq: $slug}) {
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
