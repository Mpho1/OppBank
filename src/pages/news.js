import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import FinancialResultsBlock from '../components/FinancialResultsBlock'
import SideNews from '../components/SideNews'
import BlogMainContent from '../components/BlogMainContent'

const News = () => (
  <div>
    <br/><br/><br/><br/><br/><br/>
    <ThirdsColumns>
      <CategoryBlock>
        <SideNews/>
      </CategoryBlock>

      <BlogMainContent/>

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
    fjfjfjf
  </div>
)

export default News
