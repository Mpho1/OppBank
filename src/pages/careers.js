import React from 'react'

import PageHeader from '../components/PageHeader'
import DoubleSearchField from '../components/DoubleSearchField'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import FinancialResultsBlock from '../components/FinancialResultsBlock'
import CareerList from '../components/CareerList'
// import SideNews from './news'

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
        <FinancialResultsBlock
          data={[
            {title: 'Opportunity Bank summary of the financial statements - December 2017', href: 'http://first.link.com'},
            {title: 'Opportunity Bank summary of the financial statements - December 2017', href: 'http://second.link.com'},
            {title: 'Opportunity Bank summary of the financial statements - December 2017', href: 'http://third.link.com'},
            {title: 'Opportunity Bank summary of the financial statements - December 2017', href: 'http://forth.link.com'}
          ]}
        />
      </div>
    </ThirdsColumns>
  </div>
)

export default CareerPage
