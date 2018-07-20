import React from 'react'
import icon from '../img/blue_button.svg'

const DownloadLink = ({href}) => (
  <div style={{
    textAlign: 'right'
  }}>
    <a style={{
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: 'bold',
      color: '#2CABE2'
    }} href={href}>DOWNLOAD</a>&nbsp;
    <img style={{
      marginBottom: '0em',
      width: '25px',
      verticalAlign: 'middle',
      paddingRight: '10px'
    }} src={icon}/>
  </div>
)

export default DownloadLink
