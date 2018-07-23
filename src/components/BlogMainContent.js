import React from 'react'

import style from './BlogMainContent.module.scss'

const BlogMainContent = ({ header, date, name, blockTextHeader, blockText, bodyContent, img }) => (
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
      <img className={style.blogImg} src={img}/>
      <div className={style.blogBlockText}>
        <p>
          <span className={style.blogTextHeader}>
            {blockTextHeader}: &nbsp;
          </span>{blockText}</p>
      </div>
      <div className={style.blogFullText}>
        <p dangerouslySetInnerHTML = {{ __html: bodyContent.replace(/\n/g, '<br />') }}/>
      </div>
    </div>
  </div>
)

export default BlogMainContent
