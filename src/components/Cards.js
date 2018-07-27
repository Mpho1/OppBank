import React from 'react'
import style from './Cards.module.scss'

const CardContent = ({image, title}) => (
  <div>
    <div className={style.cardimage}>
      <img src={image} />
    </div>
    <h1>
      {title}
    </h1>
  </div>
)

const Cards = () => (
  <div className={style.cardcontainer}>
    <div className={style.cardInfo}>
      <CardContent
        image={require('../img/contact_us.svg')}
        title='Contact us'
      />
    </div>
    <div className={style.cardInfo}>
      <CardContent
        image={require('../img/find_us.svg')}
        title='Find us'
      />
    </div>
  </div>
)

export default Cards
