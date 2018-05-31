import React from 'react'
import style from './Button.module.scss'

const Button = ({ text, customStyle, customClass, onClick }) => {
  return (
    <button onClick={onClick} className={ `${style.Button + ' ' + customClass}` } style={customStyle}>{text}</button>
  )
}

export default Button
