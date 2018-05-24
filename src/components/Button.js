import React from 'react'
import style from './Button.module.scss'

const Button = ({ text, customStyle }) => {
  return (
    <button className={ style.Button } style={customStyle}>{text}</button>
  )
}

export default Button
