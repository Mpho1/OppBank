import React from 'react'

import style from './TextField.module.scss'

const TextField = ({ placeholder, customStyle }) => (
  <div>
    <input type="text" placeholder={placeholder} className={style.inputField} style={customStyle} />
  </div>
)

export default TextField
