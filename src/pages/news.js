import React from 'react'
import ItemSwiper from '../components/ItemSwiper'
import PageHeader from '../components/PageHeader'
import NewsPage from '../components/NewsPage'
import NewsLayout from '../components/NewsLayout'
import BlogNews from '../components/BlogNews'
import graphql from 'graphql'

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
              <div>
                <NewsLayout
                  key={news.slug}
                  image={news.image.file.url}
                  content={news.title}
                  link={`/news/${news.slug}`}
                />
              </div>
            )
          })}
        </NewsPage>
        <div style={swiper}>
          <ItemSwiper>
            {this.props.data.allContentfulNews.edges.map(({node: news}) => {
              return (
                <div style={style}>
                  <BlogNews
                    key={news.slug}
                    image={news.image.file.url}
                    text={news.title}
                    date={news.createdAt}
                    name={`${news.author.name} ${news.author.lastName}`}
                    information={news.blockParagraph.blockParagraph}
                    link={`/news/${news.slug}`}
                  />
                </div>
              )
            })}
          </ItemSwiper>
        </div>
      </div>
    )
  }
}

const style = {
  width: `340px`,
  marginTop: `4em`
}

const swiper = {
  backgroundColor: `#F1F5F8`,
  marginBottom: `3em`
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
   }
  }
`
