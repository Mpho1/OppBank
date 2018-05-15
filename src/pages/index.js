import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

import HomeSlider from '../components/HomeSlider'
import ItemSwiper from '../components/ItemSwiper'
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

const IndexPage = () => (
  <div>
    <HomeSlider />
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
    <ItemSwiper>
      <div>
        <BlogNews/>
      </div>
    </ItemSwiper>
  </div>
)

export default IndexPage
