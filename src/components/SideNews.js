import React from 'react'

import style from './SideNews.module.scss'

const SideNews = () => (
  <div className={style.newsSection}>
    <div>
      <h5 className={style.newsTitle}>News</h5>
    </div>
    <div>
      <ul className={style.newsList}>
        <li>General Management</li>
        <li>Media, Advertising, Marketing</li>
        <li>Admin, Office Support</li>
        <li>Banking, Finance, Insurance</li>
        <li>Textile/Clothing</li>
        <li>Legal</li>
        <li>Mining</li>
        <li>Human Resources</li>
        <li>Accounting</li>
      </ul>
    </div>
    <div>
      <h5 className={style.newsTitle}>Financial News</h5>
    </div>
    <div>
      <ul className={style.newsList}>
        <li>General Management</li>
      </ul>
    </div>
  </div>
)

export default SideNews
