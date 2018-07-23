import React from 'react'
import TextField from './TextField'

import style from './NoJob.module.scss'

const NoJob = ({title, message, text}) => (
  <div>
    <div className={style.careerListCard}>
      <div>
        <img src={require('../img/building.svg')} className={style.careerListImg}/>
      </div>
      <div className={style.careerListing}>
        <h4>{title}</h4>
        <p className={style.jobMessage}>{message}</p>
        <div className={style.search}>
          <TextField
            placeholder={text}
            customStyle={{
              border: `1px solid #2CABE2`,
              borderRadius: `4px`,
              width: `20em`,
              padding: `10px 0px 10px 15px`,
              fontSize: `11px`,
              marginTop: `2em`
            }}/>
          <button className={style.button}>SEND</button>
        </div>
        <hr/>
      </div>
    </div>
  </div>
)

export default NoJob
