import React from 'react'

import style from './TextField.module.scss'

const TextField = ({ searchPlaceholder, mapPlaceholder }) => (
  <div>
    <form>
      <input type="text" placeholder={mapPlaceholder} className={style.mapPlaceholder}/>
      <input type="text" placeholder={searchPlaceholder}/>
    </form>
  </div>
)

export default TextField
