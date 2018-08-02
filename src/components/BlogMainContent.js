import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton
} from 'react-share'

import style from './BlogMainContent.module.scss'

const shareUrl = location.href

const BlogMainContent = ({ header, date, name, blockTextHeader, blockText, bodyContent, img }) => (
  <div className={style.blogContent}>
    <div className={style.blogHeader}>
      <h3 className={style.blogHeading}>{header}</h3>
      <p>
        <span className={style.blogContentDate}>{date}</span> &nbsp;
        <span className={style.blogContentName}>{name}</span>
      </p>
      <div className={style.blogContentSocial}>
        <FacebookShareButton
          url={shareUrl}
          quote={header}>
          <FacebookIcon
            size={32}
            round={true}/>
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={header}>
          <TwitterIcon
            size={32}
            round={true}/>
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={header}
          windowWidth={350}
          windowHeight={400}>
          <LinkedinIcon
            size={32}
            round={true} />
        </LinkedinShareButton>
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
