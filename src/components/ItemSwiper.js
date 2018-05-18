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
      loop: true
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
