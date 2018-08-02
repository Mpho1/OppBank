import React from 'react'
import PageHeader from '../components/PageHeader'
import NewsPage from '../components/NewsPage'
import NewsLayout from '../components/NewsLayout'
import DownloadLink from '../components/DownloadLink'
import graphql from 'graphql'
import style from './news.module.scss'

class News extends React.Component {
  render () {
    return (
      <div>
        <PageHeader
          title="GET THE LATEST NEWS"
          subtitle="Read all about the latest Opportunity news"/>
        <NewsPage>
          {this.props.data.allContentfulNews.edges.map(({node: news}) => {
            return (
              <div key={news.slug}>
                <NewsLayout
                  image={news.image.file.url}
                  content={news.title}
                  link={`/news/${news.slug}`}
                />
              </div>
            )
          })}
        </NewsPage>
        <div className={style.download}>
          <DownloadLink
            href= {this.props.data.allContentfulFinancialResult.edges[0].node.file.file.url}/>
        </div>
      </div>
    )
  }
}

export default News

export const newsPage = graphql`
  query newsPage {
    allContentfulNews {
     edges {
       node {
         title
         id
         blockHeader
         blockParagraph{
           blockParagraph
         }
         createdAt (formatString: "DD MMMM YYYY")
         author {
           name
           lastName
         }
         image {
           file {
             url
           }
         }
         slug
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
