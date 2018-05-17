import React from 'react'
import Swiper from 'react-id-swiper'

import styles from './ItemSwiper.module.scss'

class ItemSwiper extends React.Component {
  constructor (props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }

  goPrev () {
    if (this.swiper) this.swiper.slidePrev()
  }

  goNext () {
    if (this.swiper) this.swiper.slideNext()
  }

  render () {
    const params = {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      parallax: true,
      breakpoints: {
        1444: {
          slidesPerView: 'auto',
          spaceBetween: 1
        },
        1366: {
          slidesPerView: 5,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: -50
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: -79
        },
        414: {
          slidesPerView: 1,
          spaceBetween: -69
        },
        411: {
          slidesPerView: 1,
          spaceBetween: -67
        },
        400: {
          slidesPerView: 1,
          spaceBetween: -56
        },
        375: {
          slidesPerView: 1,
          spaceBetween: -31
        },
        360: {
          slidesPerView: 1,
          spaceBetween: -16
        },
        320: {
          slidesPerView: 1,
          spaceBetween: -60
        }
      }
    }

    return (
      <div className={styles.wrapper}>
        <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
          {this.props.children}
        </Swiper>
        <button className={styles.prevButton} onClick={this.goPrev}></button>
        <button className={styles.nextButton} onClick={this.goNext}></button>
      </div>
    )
  }
}

export default ItemSwiper
