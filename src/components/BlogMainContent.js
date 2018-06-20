import React from 'react'

import style from './BlogMainContent.module.scss'

const BlogMainContent = ({ header, date, name, blockTextHeader, blockText, bodyContent }) => (
  <div className={style.blogContent}>
    <div className={style.blogHeader}>
      <h3 className={style.blogHeading}>{header}</h3>
      <p>
        <span className={style.blogContentDate}>{date}</span> &nbsp;
        <span className={style.blogContentName}>{name}</span>
      </p>
      <div className={style.blogContentSocial}>
        <img src={require('../img/facebook.svg')}/>
        <img src={require('../img/twitter.svg')}/>
        <img src={require('../img/whatsapp.svg')}/>
      </div>
      <img src={require('../img/news_card_lg.png')}/>
      <div className={style.blogBlockText}>
        <p>
          <span className={style.blogTextHeader}>
            {blockTextHeader} &nbsp;
          </span>{blockText}</p>
      </div>
      <div className={style.blogFullText}>
        <p>{bodyContent}</p>
      </div>
    </div>
  </div>
)

export default BlogMainContent