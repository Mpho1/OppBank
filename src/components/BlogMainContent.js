import React from 'react'

import style from './BlogMainContent.module.scss'

const BlogMainContent = () => (
  <div className={style.blogContent}>
    <div className={style.blogHeader}>
      <p>I started working at a glue factory now I am speaking at conferences. glue factory now I am speaking at conferences
        <br/>
        <span className={style.blogContentDate}>16 May 2018</span> &nbsp;
        <span className={style.blogContentName}>Charles Malton</span>
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
            Taking on better things: &nbsp;
          </span>lorem ipsum dolor sit amet, te omittam instructir ius, Lorem ipsum dolor sit amet, te omittam instructir ius te omittam instructir ius, Lorem ipsum dolor sit amet, te omittam instructir ius</p>
      </div>
      <div className={style.blogFullText}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </div>
    </div>

  </div>
)

export default BlogMainContent
