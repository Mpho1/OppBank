import React from 'react'

import PageHeader from '../components/PageHeader'
import DoubleSearchField from '../components/DoubleSearchField'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import CareerApply from '../components/CareerApply'
import CareerList from '../components/CareerList'
import { SideNews } from './news'

const CareerPage = () => (
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
          attachment="No Attachment"/>
      </div>
    </ThirdsColumns>
  </div>
)

export default CareerPage
