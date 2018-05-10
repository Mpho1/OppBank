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
          heading={"Let's help you grow"}
          blurb={'We strive to help our clients grow their business'}
        />
        <Slide
          className={styles.slide2}
          heading={"Let's help you grow"}
          blurb={'We strive to help our clients grow their business'}
        />
      </Swiper>
    )
  }
}

export default HomeSlider
