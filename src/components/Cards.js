import React from 'react'
import styles from './card.module.scss'

const CardContent = ({image, title}) => (
  <div>
    <div className={styles.CardImage}>
      <img src={image} />
    </div>
    <h4>
      {title}
    </h4>
  </div>
)

const Cards = () => (
  <div className={styles.CardContainer}>
    <div className={styles.CardInfo}>
      <CardContent
        image={require('../img/contact_us.svg')}
        title='Contact us'
      />
    </div>
    <div className={styles.CardInfo}>
      <CardContent
        image={require('../img/find_us.svg')}
        title='Find us'
      />
    </div>
    {/* <div className={styles.CardInfo}>
      <CardContent
        image={require('../img/feedback.svg')}
        title='Feedback'
      />
    </div> */}
  </div>
)

export default Cards
