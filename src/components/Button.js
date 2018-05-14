import React from 'react'
import Link from 'gatsby-link'
import style from './Button.module.scss'


const Button = ({ text }) => {
  return (
    <button className={ style.button }>{text}</button>
  );
};

export default Button