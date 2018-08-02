import React from 'react'
import style from '../pages/style.module.scss'
import DownloadLink from './DownloadLink'

const FinancialResultsBlock = ({data}) => (
  <div className={style.panel} style={{
    paddingBottom: '10px',
    paddingRight: '2px',
    paddingLeft: '24px'
  }}>
    <h3 style={{
      color: '#275482'
    }}>FINANCIAL RESULTS</h3>
    {Array.isArray(data) ? data.map(function (el, ind) {
      return (
        <div style={{
          borderBottom: '1px solid #F1F5F8',
          marginRight: '15px'
        }}
        key={ind}>
          <p style={{
            marginBottom: 0,
            fontWeight: 'bold',
            fontSize: '13px',
            marginTop: '15px',
            color: '#696969'
          }}>{el.title}</p>
          <a href={el.href} target="_blank">
            <DownloadLink/>
          </a>
        </div>
      )
    }) : 'Sorry, no financial results!'}
  </div>
)

export default FinancialResultsBlock
