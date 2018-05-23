import React from 'react'

import style from './TextField.module.scss'

const TextField = ({ placeholder }) => (
  <div>
    <form>
      <input type="text" placeholder={placeholder} className={style.inputField}/>
    </form>
  </div>
)

export default TextField
