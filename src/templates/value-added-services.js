import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import ContactMe from '../components/ContactMe'
import PageHeader from '../components/PageHeader'

import styles from './savings.module.scss'

class ValueAddedServices extends React.Component {
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
        <PageHeader title="Value Added Services"/>
        <div style={style}>
          <SavingsType
            image={this.props.data.contentfulValueAddedServices.image.file.url}
            productType={this.props.data.contentfulValueAddedServices.title}
            productTypeCategory={this.props.data.contentfulValueAddedServices.type}
            description={this.props.data.contentfulValueAddedServices.description.description}
            featuresItems={this.props.data.contentfulValueAddedServices.features.features}
            requirementItems={this.props.data.contentfulValueAddedServices.requirements.requirements}
            key={this.props.data.contentfulValueAddedServices.slug}
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

export default ValueAddedServices

export const singleValueAddedServicesTypeQuery = graphql`
  query SingleValueAddedServicesQuery($slug: String!){
    contentfulValueAddedServices(slug: {eq: $slug}) {
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
