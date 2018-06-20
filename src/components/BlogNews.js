import React from 'react'

import style from './BlogNews.module.scss'
import Moment from 'react-moment'

const BlogNews = ({ image, text, date, name, information }) => (
  <div className={style.blog}>
    <img src={image} className={style.blogImage}/>
    <p className={style.blogText}>
      {text}
    </p>
    <p className={style.blogDate}><Moment format="DD MMMM YYYY">{date}</Moment> &nbsp;
      <span className={style.blogName}>{name}</span>
    </p>
    <div className={style.blogSocial}>
      <img src={require('../img/facebook.svg')}/>
      <img src={require('../img/twitter.svg')}/>
      <img src={require('../img/whatsapp.svg')}/>
    </div>
    <p className={style.blogInformation}>
      {information}
    </p>
  </div>
)

export default BlogNews
