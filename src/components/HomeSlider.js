'use strict'

import React from 'react'
import Swiper from 'react-id-swiper'
import Button from './Button'
import Link from 'gatsby-link'

import styles from './HomeSlider.module.scss'

const Slide = ({ heading, blurb, className, link }) => (
  <div className={`${styles.slide} ${className}`}>
    <div className={styles.text}>
      <h1>{heading}</h1>
      <p>{blurb}</p>
    </div>
    <Link to={link}>
      <Button
        customStyle={{
          width: `10em`,
          padding: `12px 7px 12px 7px`,
          fontSize: `11px`,
          color: `#ffffff`,
          fontWeight: `bold`,
          textTransform: `uppercase`,
          letterSpacing: `1px`
        }}
        text="Click Here"/>
    </Link>
  </div>
)

class HomeSlider extends React.Component {
  render () {
    const containerClass = `swiper-container ${styles.homeSlider}`

    const pagination = {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }

    return (
      <Swiper
        containerClass={containerClass}
        pagination={pagination}
      >
        <Slide
          className={styles.slide1}
          heading={'Empower yourself'}
          blurb={'Learn more about our personal and business savings accounts'}
          link={'/savings/business-savings'}
        />
        <Slide
          className={styles.slide2}
          heading={'Empower your future'}
          blurb={'Learn more about our school fee and education loans'}
          link={'/loans/education-financing'}
        />
        <Slide
          className={styles.slide3}
          heading={'Empower your community'}
          blurb={'Find out more about our group loans and group savings accounts'}
          link={'/savings/group-savings-account'}
        />
        <Slide
          className={styles.slide4}
          heading={'Empower your business'}
          blurb={'Find out more about our business savings accounts and loan facilities for expansion and growth'}
          link={'/loans/business-loans'}
        />
      </Swiper>
    )
  }
}

export default HomeSlider
