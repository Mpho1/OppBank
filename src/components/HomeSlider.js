'use strict'

import React from 'react'
import Swiper from 'react-id-swiper'

import styles from './HomeSlider.module.scss'

const Slide = ({ heading, blurb, className }) => (
  <div className={`${styles.slide} ${className}`}>
    <div className={styles.text}>
      <h1>{heading}</h1>
      <p>{blurb}</p>
    </div>
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
          blurb={'Learn more about our savings products'}
        />
        <Slide
          className={styles.slide2}
          heading={'Empower your future'}
          blurb={'Learn more about our child education loans'}
        />
        <Slide
          className={styles.slide3}
          heading={'Empower your community'}
          blurb={'Learn more about group savings'}
        />
        <Slide
          className={styles.slide4}
          heading={'Empower your business'}
          blurb={'Learn about business loans expansion and growth'}
        />
      </Swiper>
    )
  }
}

export default HomeSlider
