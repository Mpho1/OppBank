import React from 'react'

import style from './BlogNews.module.scss'

const BlogNews = ({ image, text, date, name, information }) => (
  <div className={style.blog}>
    <img src={image} className={style.blogImage}/>
    <p className={style.blogText}>
      {text}
    </p>
    <p className={style.blogDate}>{date} &nbsp;
      <span className={style.blogName}>{name}</span>
    </p>
    <div className={style.blogSocial}>
      <img src={require('../img/facebook.svg')} className={style.blogSocialIcon}/>
      <img src={require('../img/twitter.svg')} className={style.blogSocialIcon}/>
      <img src={require('../img/whatsapp.svg')} className={style.blogSocialIcon}/>
    </div>
    <p className={style.blogInformation}>
      {information}
    </p>
  </div>
)

export default BlogNews
