import React from 'react'

import Button from './Button'

import style from './SearchField.module.scss'

const SearchField = ({ areaPlaceholder, textPlaceholder, text }) => (
  <div className={style.searchField}>
    <input type="text" placeholder={areaPlaceholder} className={style.areaField} />
    <input type="text" placeholder={textPlaceholder} className={style.jobField} />
    <div>
      <Button type="submit" text="Search" customStyle={{
        'text-transform': 'uppercase',
        'line-height': '.4em',
        'font-size': '12px',
        'padding': '17px 30px',
        'font-weight': 'Bold',
        'letter-spacing': '1px'
      }} />
    </div>
  </div>
)

export default SearchField
