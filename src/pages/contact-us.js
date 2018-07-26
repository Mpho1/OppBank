import React from 'react'
import ContactUsInfo from '../components/ContactUsInfo'
import Cards from '../components/Cards'
import style from './contact-us.module.scss'

import PageHeader from '../components/PageHeader'

const Contact = () => (
  <div>
    <PageHeader
      title="Lets Communicate"
      subtitle="Got more questions or would you rather visit one of our branches? Our staff is always ready to assist our customers and their financial status"/>
    <div className={style.contactUs}>
      <ContactUsInfo/>
      <Cards/>
    </div>
  </div>
)

export default Contact
