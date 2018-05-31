import React from 'react'
import style from '../pages/style.module.scss'

const CategoryBlock = ({children}) => (
  <div className={style.panel} style={{
    width: '70%',
    marginLeft: '30%'
  }}>
    {children}
  </div>
)

export default CategoryBlock
