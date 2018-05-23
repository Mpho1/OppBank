import React from 'react'
import style from './Button.module.scss'

const Button = ({ text }) => {
  return (
    <button className={ style.Button }>{text}</button>
  )
}

export default Button
