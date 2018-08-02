import React from 'react'
import Link from 'gatsby-link'
import style from './Cards.module.scss'

const CardContent = ({ image, title, link }) => (
  <div>
    <Link to={link}>
      <div className={style.cardImage}>
        <img src={image}/>
      </div>
      <h1>
        {title}
      </h1>
    </Link>
  </div>
)

const Cards = () => (
  <div className={style.cardContainer}>
    <div className={style.cardInfo}>
      <CardContent
        image={require('../img/contact_us.svg')}
        title='Contact us'
        link={'/contact-us'}
      />
    </div>
    <div className={style.cardInfo}>
      <CardContent
        image={require('../img/find_us.svg')}
        title='Find us'
        link={'/find-us'}
      />
    </div>
  </div>
)

export default Cards
