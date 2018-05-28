import React from 'react'
import icon from '../img/arrow_right.svg'

const DownloadLink = ({href}) => (
  <div style={{
    textAlign: 'right'
  }}>
    <a style={{
      textDecoration: 'none'
    }} href={href}>DOWNLOAD</a>
    <img style={{
      marginBottom: 0,
      width: '40px',
      verticalAlign: 'middle'
    }} src={icon}/>
  </div>
)

export default DownloadLink
