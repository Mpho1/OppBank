import React from 'react'
import style from './SideNews.module.scss'

const newsList = ['General Management', 'Media, Advertising, Marketing', 'Admin, Office Support', 'Banking, Finance, Insurance', 'Textile/Clothing', 'Legal', 'Mining', 'Human Resources', 'Accounting']

const newsCategoryItems = newsList.map((newsList, index) =>
  <li key={index}>{newsList}</li>
)

const finacialList = ['General Management']

const newsFinancialItems = finacialList.map((finacialList, index) =>
  <li key={index}>{finacialList}</li>
)

const SideNews = () => (
  <div className={style.newsSection}>
    <div>
      <h5 className={style.newsTitle}>News</h5>
    </div>
    <div>
      <ul className={style.newsList}>
        {newsCategoryItems}
      </ul>
    </div>
    <div>
      <h5 className={style.newsTitle}>Financial News</h5>
    </div>
    <div>
      <ul className={style.newsList}>
        {newsFinancialItems}
      </ul>
    </div>
  </div>
)

export default SideNews
