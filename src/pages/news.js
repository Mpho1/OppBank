import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import FinancialResultsBlock from '../components/FinancialResultsBlock'
import SideNews from '../components/SideNews'
import BlogMainContent from '../components/BlogMainContent'

import PageHeader from '../components/PageHeader'

const News = () => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <ThirdsColumns breakOrder="213">
      <CategoryBlock>
        <SideNews/>
      </CategoryBlock>

      <BlogMainContent
        header="I started working at a glue factory now I am speaking at conferences. glue factory now I am speaking at conferences"
        date="16 May 2018"
        name="Charles Malton"
        blockTextHeader="Taking on better things:"
        blockText="lorem ipsum dolor sit amet, te omittam instructir ius, Lorem ipsum dolor sit amet, te omittam instructir ius te omittam instructir ius, Lorem ipsum dolor sit amet, te omittam instructir ius"
        firstContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        secondContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        thirdContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
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

export default News
