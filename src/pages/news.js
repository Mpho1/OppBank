import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import FinancialResultsBlock from '../components/FinancialResultsBlock'
import BlogMainContent from '../components/BlogMainContent'

import PageHeader from '../components/PageHeader'

import style from './news.module.scss'

const newsList = ['General Management', 'Media, Advertising, Marketing', 'Admin, Office Support', 'Banking, Finance, Insurance', 'Textile/Clothing', 'Legal', 'Mining', 'Human Resources', 'Accounting']

const newsCategoryItems = newsList.map((newsList) =>
  <li>{newsList}</li>
)

const finacialList = ['General Management']

const newsFinancialItems = finacialList.map((finacialList) =>
  <li>{finacialList}</li>
)

const SideNews = () => (
  <div className={style.newsSection}>
    <div>
      <h5 className={style.newsTitle}>News</h5>
    </div>
    <div>
      <ul className={style.newsList}>
        <li>{newsCategoryItems}</li>
      </ul>
    </div>
    <div>
      <h5 className={style.newsTitle}>Financial News</h5>
    </div>
    <div>
      <ul className={style.newsList}>
        <li>{newsFinancialItems}</li>
      </ul>
    </div>
  </div>
)

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
        bodyContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
