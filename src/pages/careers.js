import React from 'react'

import PageHeader from '../components/PageHeader'
import DoubleSearchField from '../components/DoubleSearchField'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import CareerApply from '../components/CareerApply'
import CareerList from '../components/CareerList'
import SideNews from '../components/SideNews'

class CareerPage extends React.Component {
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
        <PageHeader
          title="Providing Opportunity">
          <DoubleSearchField
            areaPlaceholder="Area"
            textPlaceholder="Clinic, Hospitals, Doctors"
            onCustomSubmit={function () {}}
          />
        </PageHeader>
        <ThirdsColumns>
          <CategoryBlock>
            <SideNews/>
          </CategoryBlock>
          <CareerList
            hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
            jobTitle="Doctors representative"
            date="3 days ago"
            city="Kampala, Hilly Capital"
            jobDescription="This position entails visiting Doctors in various urban areas in durban. This position entails visiting Doctors in various urban areas in durban.."
            workType="Full Time"
            salary="Negotiable"
          />
          <div>
            <CareerApply
              name="name"
              contactNumber="Contact Number"
              email="Email"
              attachment="No Attachment"
              hideUnhideApplyForm={this.hideUnhideApplyForm.bind(this)}
              hide={this.state.hideApplyForm}/>
          </div>
        </ThirdsColumns>
      </div>
    )
  }
}

export default CareerPage
