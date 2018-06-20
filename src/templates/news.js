import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import CategoryBlock from '../components/CategoryBlock'
import FinancialResultsBlock from '../components/FinancialResultsBlock'
import BlogMainContent from '../components/BlogMainContent'
// import QueryString from 'query-string'

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

const News = ({data}) => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <ThirdsColumns breakOrder="213">
      <CategoryBlock>
        <SideNews/>
      </CategoryBlock>

      <BlogMainContent
        header={data.contentfulNews.title}
        date={data.contentfulNews.createdAt}
        name={`${data.contentfulNews.author.name} ${data.contentfulNews.author.lastName}`}
        blockTextHeader={data.contentfulNews.blockHeader}
        blockText={data.contentfulNews.blockParagraph.blockParagraph}
        bodyContent={data.contentfulNews.articleBody.articleBody}
        img={data.contentfulNews.image.file.url}
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

export const pageQuery = graphql`
    query SingleNewsQuery($slug: String!){
      contentfulNews(slug: {eq: $slug}) {
        title
        articleBody {
          articleBody
        }
        blockHeader
        blockParagraph {
          blockParagraph
        }
        createdAt (formatString: "DD MMMM YYYY")
        blockHeader
        author {
          name
          lastName
        }
        image {
          file {
            url
          }
        }
      }
    }
`
