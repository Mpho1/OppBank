import React from 'react'
import ThirdsColumns from '../components/ThirdsColumns'
import FinancialResultsBlock from '../components/FinancialResultsBlock'
import BlogMainContent from '../components/BlogMainContent'
import graphql from 'graphql'
import PageHeader from '../components/PageHeader'
import BackButton from '../components/BackButton'

import style from './news.module.scss'

// const newsList = ['General Management', 'Media, Advertising, Marketing', 'Admin, Office Support', 'Banking, Finance, Insurance', 'Textile/Clothing', 'Legal', 'Mining', 'Human Resources', 'Accounting']

// const newsCategoryItems = newsList.map((newsList) =>
//   <li key={newsList}>{newsList}</li>
// )

// const finacialList = ['General Management']

// const newsFinancialItems = finacialList.map((financialList) =>
//   <li key={financialList}>{financialList}</li>
// )

// const SideNews = () => (
//   <div className={style.newsSection}>
//     <div>
//       <h5 className={style.newsTitle}>News</h5>
//     </div>
//     <div>
//       <ul className={style.newsList}>
//         {newsCategoryItems}
//       </ul>
//     </div>
//     <div>
//       <h5 className={style.newsTitle}>Financial News</h5>
//     </div>
//     <div>
//       <ul className={style.newsList}>
//         {newsFinancialItems}
//       </ul>
//     </div>
//   </div>
// )

const News = ({data}) => (
  <div>
    <PageHeader title="Get The Latest News" subtitle="Read all about the latest Opportunity news"/>
    <ThirdsColumns breakOrder="213">
      {/* <CategoryBlock> */}
      {/* <SideNews/> */}
      {/* </CategoryBlock> */}
      <div className={style.backButton}>
        <BackButton/>
      </div>

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
          data={myData(data)}/>
      </div>
    </ThirdsColumns>
  </div>
)

const myData = (data) => {
  let items = []
  for (let i = 0; i < data.allContentfulFinancialResult.edges.length; i++) {
    items[i] = {title: data.allContentfulFinancialResult.edges[i].node.title, href: data.allContentfulFinancialResult.edges[i].node.file.file.url}
  }
  return items
}

export default News

export const pageQuery = graphql`
  query financialNewsAndSingleNewsQuery($slug: String!){
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
    },
    allContentfulFinancialResult {
      edges {
        node {
          title
          file {
            id
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
