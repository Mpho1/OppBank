import React from 'react'
import SavingsType from '../components/SavingsType'
import graphql from 'graphql'
import ContactMe from '../components/ContactMe'
import PageHeader from '../components/PageHeader'

import styles from './savings.module.scss'

class OtherServices extends React.Component {
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
            image={this.props.data.contentfulOtherServices.image.file.url}
            productType={this.props.data.contentfulOtherServices.title}
            productTypeCategory={this.props.data.contentfulOtherServices.type}
            description={this.props.data.contentfulOtherServices.description.description}
            featuresItems={this.props.data.contentfulOtherServices.features.features}
            requirementItems={this.props.data.contentfulOtherServices.requirements.requirements}
            key={this.props.data.contentfulOtherServices.slug}
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

export default OtherServices

export const singleOtherServicesTypeQuery = graphql`
  query SingleOtherServicesQuery($slug: String!){
    contentfulOtherServices(slug: {eq: $slug}) {
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
