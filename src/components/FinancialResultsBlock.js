import React from 'react'
import style from '../pages/style.module.scss'
import DownloadLink from './DownloadLink'

const FinancialResultsBlock = ({data}) => (
  <div className={style.panel} style={{
    paddingBottom: '10px'
  }}>
    <h3 style={{
      color: 'darkBlue'
    }}>FINANCIAL RESULTS</h3>
    {Array.isArray(data) ? data.map(function (el, ind) {
      return (
        <div style={{
          borderBottom: '1px solid #ddd',
          marginRight: '15px'
        }}>
          <p style={{
            marginBottom: 0,
            fontWeight: 'bold',
            fontSize: '14px',
            marginTop: '15px'
          }}>{el.title}</p>
          <DownloadLink href={el.href}/>
        </div>
      )
    }) : 'Sorry, no financial results!'}
  </div>
)

export default FinancialResultsBlock
