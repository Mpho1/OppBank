import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import FinancialResultsBlock from '../components/FinancialResultsBlock'

import PageHeader from '../components/PageHeader'

const News = () => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <ThirdsColumns>
      <CategoryBlock>
        Test 1
      </CategoryBlock>

      <div>
        Contents
      </div>

      <FinancialResultsBlock data={[
        {title: 'first title', href: 'http://first.link.com'},
        {title: 'second title', href: 'http://second.link.com'},
        {title: 'third title', href: 'http://third.link.com'},
        {title: 'forth title', href: 'http://forth.link.com'}
      ]}/>
    </ThirdsColumns>
  </div>
)

export default News
