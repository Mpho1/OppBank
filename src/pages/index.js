import React from 'react'
import styles from './index.module.scss'
import graphql from 'graphql'

import HomeSlider from '../components/HomeSlider'
import ItemSwiper from '../components/ItemSwiper'
import ContentsSection from '../components/ContentsSection'

import ProductsCard from '../components/ProductsCard'

import BlogNews from '../components/BlogNews'

const ClientItem = ({image, title, text}) => (
  <div>
    <div className={styles.imageContainer}>
      <img src={image} />
    </div>
    <h4>
      {title}
    </h4>
    <p>
      {text}
    </p>
  </div>
)

const IndexPage = ({data}) => (
  <div>
    <HomeSlider />

    <ContentsSection
      title="Why bank with opportunity"
      subtitle="We at Opportunity Bank strive to help improve the business and lives of our clients. Through continious growth will we be successful."
    >
      <ItemSwiper>
        <div className={styles.clientItem}>
          <ClientItem
            image={require('../img/education.svg')}
            title='Affordable education'
            text='Get school fee loans at competitive interest rates'
          />
        </div>
        <div className={styles.clientItem}>
          <ClientItem
            image={require('../img/business.svg')}
            title='Start up Business'
            text='Get a business loan at competitive interest rates'
          />
        </div>
        <div className={styles.clientItem}>
          <ClientItem
            image={require('../img/bank_accounts.svg')}
            title='Bank accounts'
            text='Choose from a selection of accounts and stay in control of your assets'
          />
        </div>
      </ItemSwiper>
    </ContentsSection>

    <ContentsSection
      bgImage={require('../img/city.png')}
      title="Our products"
      subtitle="We believe that there are many ways to assist our customers to allow financial ease.">
      <ProductsCard/>
    </ContentsSection>

    <ContentsSection
      title="Opportunity News"
      subtitle="Giving you access to all the latest news within our company.">
      <ItemSwiper>
        {data.allContentfulNews.edges.map(({node: news}) => {
          return (
            <div style={style}
              key={news.slug}>
              <BlogNews
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
    </ContentsSection>
  </div>
)

const style = {
  width: `340px`
}

export default IndexPage

export const query = graphql`
  query NewsQuery {
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
