import React from 'react'
import Link from 'gatsby-link'

import style from './BlogNews.module.scss'

const BlogNews = ({ image, text, date, name, information, link }) => (
  <div className={style.blog}>
    <Link to={link || '#'}>
      <img src={image} className={style.blogImage}/>
      <p className={style.blogText}>
        {text}
      </p>
      <p className={style.blogDate}>{date} &nbsp;
        <span className={style.blogName}>{name}</span>
      </p>
      <div className={style.blogSocial}>
        <img src={require('../img/facebook.svg')}/>
        <img src={require('../img/twitter.svg')}/>
        <img src={require('../img/LinkedIn.svg')}/>
      </div>
      <p className={style.blogInformation}>
        {information}
      </p>
    </Link>
  </div>
)

export default BlogNews
