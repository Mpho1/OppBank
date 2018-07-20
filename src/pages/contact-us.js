import React from 'react'
import ContactUsInfo from '../components/ContactUsInfo'
import style from './products.module.scss'
import ThirdsColumns from '../components/ThirdsColumns'
import Cards from '../components/Cards'

import PageHeader from '../components/PageHeader'

const Contact = () => (
  <div>
    <PageHeader
      title="Lets Communicate"
      subtitle="Got more questions or would you rather visit one of our branches? Our staff is always ready to assist our customers and their financial status"/>
    <div className={style.products}>
      <ContactUsInfo/>
      <ThirdsColumns breakOrder="213">
        <Cards/>
      </ThirdsColumns>
    </div>
  </div>
)

export default Contact
