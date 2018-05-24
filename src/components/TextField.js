import React from 'react'

import style from './TextField.module.scss'

const TextField = ({ placeholder }) => (
  <div>
    <input type="text" placeholder={placeholder} className={style.inputField} />
  </div>
)

export default TextField
